import { ASK_SYSTEM_INSTRUCTION, buildPortfolioContext } from "@/lib/ask-context"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

type AskBody = {
  question?: string
  history?: { role: "user" | "bot"; text: string }[]
}

type ChatCompletionResponse = {
  choices?: { message?: { content?: string } }[]
  error?: { message?: string }
}

const GROQ_MODELS = [
  process.env.GROQ_MODEL,
  "llama-3.3-70b-versatile",
  "llama-3.1-8b-instant",
  "gemma2-9b-it",
].filter((m, i, arr): m is string => Boolean(m) && arr.indexOf(m) === i)

const OPENROUTER_MODELS = [
  process.env.OPENROUTER_MODEL,
  "google/gemini-2.0-flash-exp:free",
  "meta-llama/llama-3.3-70b-instruct:free",
  "qwen/qwen-2.5-7b-instruct:free",
].filter((m, i, arr): m is string => Boolean(m) && arr.indexOf(m) === i)

function parseModelJson(raw: string): { answer: string; sources: string[] } {
  const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim()
  try {
    const parsed = JSON.parse(cleaned) as { answer?: string; sources?: unknown }
    const answer = typeof parsed.answer === "string" ? parsed.answer.trim() : ""
    const sources = Array.isArray(parsed.sources)
      ? parsed.sources.filter((s): s is string => typeof s === "string").slice(0, 4)
      : []
    if (answer) return { answer, sources: sources.length ? sources : ["résumé"] }
  } catch {
    /* fall through — model returned plain text */
  }
  return { answer: cleaned || "I couldn't form an answer from the résumé right now.", sources: ["résumé"] }
}

function isRetryable(message: string, status: number) {
  return (
    status === 429 ||
    status === 503 ||
    /quota|rate.?limit|resource.?exhausted|billing|capacity|overloaded|no endpoints/i.test(
      message,
    )
  )
}

async function callChatCompletions(
  url: string,
  apiKey: string,
  model: string,
  system: string,
  user: string,
  extraHeaders: Record<string, string> = {},
): Promise<{ ok: true; raw: string } | { ok: false; status: number; message: string }> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey.trim()}`,
        "Content-Type": "application/json",
        ...extraHeaders,
      },
      body: JSON.stringify({
        model,
        temperature: 0.5,
        max_tokens: 700,
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
      }),
    })
    const data = (await res.json()) as ChatCompletionResponse
    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        message: data.error?.message || `Request failed (${res.status})`,
      }
    }
    const raw = data.choices?.[0]?.message?.content?.trim() || ""
    if (!raw) return { ok: false, status: 502, message: "Empty model response." }
    return { ok: true, raw }
  } catch {
    return { ok: false, status: 502, message: "Failed to reach the model provider." }
  }
}

export async function POST(req: Request) {
  let body: AskBody
  try {
    body = (await req.json()) as AskBody
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
  }

  const question = (body.question || "").trim()
  if (!question || question.length > 800) {
    return NextResponse.json({ error: "Question must be 1–800 characters." }, { status: 400 })
  }

  const groqKey = process.env.GROQ_API_KEY?.trim()
  const openRouterKey = process.env.OPENROUTER_API_KEY?.trim()

  if (!groqKey && !openRouterKey) {
    return NextResponse.json(
      {
        error:
          "No LLM API key on this deployment. Set GROQ_API_KEY (or OPENROUTER_API_KEY) in Vercel → Settings → Environment Variables, then Redeploy.",
      },
      { status: 503 },
    )
  }

  const history = (body.history || [])
    .slice(-6)
    .filter((m) => m.text?.trim())
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.text.trim()}`)
    .join("\n")

  const system = `${ASK_SYSTEM_INSTRUCTION}

For greetings or small talk, reply briefly in first person, then invite a question about my work.
Always return the JSON shape requested above.

## Résumé context
${buildPortfolioContext()}`

  const user = `${history ? `## Recent chat\n${history}\n\n` : ""}## Question\n${question}`

  let lastMessage = "Model request failed."
  const attempts: string[] = []

  if (groqKey) {
    for (const model of GROQ_MODELS) {
      const result = await callChatCompletions(
        "https://api.groq.com/openai/v1/chat/completions",
        groqKey,
        model,
        system,
        user,
      )
      if (result.ok) {
        const { answer, sources } = parseModelJson(result.raw)
        return NextResponse.json({
          answer,
          sources,
          model,
          provider: "groq",
          mode: "llm",
        })
      }
      lastMessage = result.message
      attempts.push(`groq/${model}: ${result.message}`)
      if (!isRetryable(result.message, result.status)) break
    }
  }

  if (openRouterKey) {
    for (const model of OPENROUTER_MODELS) {
      const result = await callChatCompletions(
        "https://openrouter.ai/api/v1/chat/completions",
        openRouterKey,
        model,
        system,
        user,
        {
          "HTTP-Referer": process.env.OPENROUTER_SITE_URL || "https://vercel.app",
          "X-Title": process.env.OPENROUTER_APP_NAME || "Praveen Kumar Portfolio",
        },
      )
      if (result.ok) {
        const { answer, sources } = parseModelJson(result.raw)
        return NextResponse.json({
          answer,
          sources,
          model,
          provider: "openrouter",
          mode: "llm",
        })
      }
      lastMessage = result.message
      attempts.push(`openrouter/${model}: ${result.message}`)
      if (!isRetryable(result.message, result.status)) break
    }
  }

  return NextResponse.json(
    {
      error: lastMessage,
      attempts,
    },
    { status: 502 },
  )
}
