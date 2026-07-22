"use client"

import { useEffect, useRef, useState } from "react"
import { chatChips, chatQA, matchChatKey } from "@/lib/portfolio-data"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

type Msg = {
  role: "user" | "bot"
  text: string
  sources?: string[]
  phase?: "retrieving" | "typing" | "done"
}

export function AskMeAgent() {
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [streaming, setStreaming] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timers = useRef<{ iv?: ReturnType<typeof setInterval> }>({})
  const msgsRef = useRef(msgs)
  msgsRef.current = msgs

  useEffect(() => {
    return () => clearInterval(timers.current.iv)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [msgs])

  const resetChat = () => {
    clearInterval(timers.current.iv)
    setMsgs([])
    setStreaming(false)
    setInput("")
  }

  const typeOut = (full: string, sources: string[]) => {
    setMsgs((s) => {
      const m = s.slice()
      m[m.length - 1] = { ...m[m.length - 1], phase: "typing", sources, text: "" }
      return m
    })
    let i = 0
    clearInterval(timers.current.iv)
    timers.current.iv = setInterval(() => {
      i = Math.min(full.length, i + 3)
      setMsgs((s) => {
        const m = s.slice()
        m[m.length - 1] = { ...m[m.length - 1], text: full.slice(0, i) }
        return m
      })
      if (i >= full.length) {
        clearInterval(timers.current.iv)
        setMsgs((s) => {
          const m = s.slice()
          m[m.length - 1] = { ...m[m.length - 1], phase: "done", text: full }
          return m
        })
        setStreaming(false)
      }
    }, 16)
  }

  const ask = async (question: string) => {
    const q = question.trim()
    if (!q || streaming) return

    clearInterval(timers.current.iv)
    setStreaming(true)
    setInput("")

    const history = msgsRef.current
      .filter((m) => m.phase === "done" || m.role === "user")
      .map((m) => ({ role: m.role, text: m.text }))

    setMsgs((s) => [
      ...s,
      { role: "user", text: q },
      { role: "bot", text: "", sources: [], phase: "retrieving" },
    ])

    try {
      const res = await fetch(`${basePath}/api/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, history }),
      })
      const data = (await res.json()) as { answer?: string; sources?: string[]; error?: string }
      if (!res.ok || !data.answer) {
        throw new Error(data.error || "Request failed")
      }
      typeOut(data.answer, data.sources?.length ? data.sources : ["résumé"])
    } catch {
      // GitHub Pages has no API routes — use grounded local résumé answers
      const qa = chatQA[matchChatKey(q)]
      typeOut(qa.a, qa.sources)
    }
  }

  const sendFree = () => {
    const text = input.trim()
    if (!text || streaming) return
    void ask(text)
  }

  return (
    <section id="ask" className="mx-auto max-w-[900px] px-5 py-[34px] pb-[60px] sm:px-7">
      <div className="mb-2 flex flex-wrap items-baseline gap-3.5">
        <h2 className="m-0 font-sans text-[30px] font-semibold tracking-[-0.01em]">Ask me anything</h2>
        <span className="font-mono text-[11px] font-bold text-accent">● RAG · grounded in my résumé</span>
      </div>
      <p className="mb-[22px] font-sans text-sm text-ink-muted">
        This is the output node of the pipeline above — a retrieval-grounded agent. Ask it about my work.
      </p>

      <div className="overflow-hidden rounded-2xl border border-border bg-cream-card">
        <div className="flex items-center gap-2 border-b border-border bg-cream-muted px-[18px] py-3">
          <span className="h-[9px] w-[9px] rounded-full bg-accent" />
          <span className="font-mono text-[10px] font-bold tracking-[0.06em] text-ink-muted">
            ask.praveenkumar.ai
          </span>
          <button
            type="button"
            onClick={resetChat}
            className="ml-auto cursor-pointer font-mono text-[10px] text-ink-faint hover:text-accent"
          >
            ↺ reset
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex max-h-[440px] min-h-[280px] flex-col gap-3.5 overflow-y-auto px-[18px] py-5"
        >
          {msgs.length === 0 && (
            <div className="m-auto px-0 py-6 text-center">
              <div className="font-mono text-[13px] text-ink-faint">
                {"// pick a question or type your own"}
              </div>
            </div>
          )}

          {msgs.map((m, i) =>
            m.role === "user" ? (
              <div key={i} className="flex justify-end">
                <div className="max-w-[78%] rounded-[13px_13px_3px_13px] bg-accent px-3.5 py-2.5 font-sans text-sm leading-normal text-white">
                  {m.text}
                </div>
              </div>
            ) : (
              <div key={i} className="max-w-[88%]">
                {(m.sources?.length ?? 0) > 0 && m.phase !== "retrieving" && (
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    <span className="self-center font-mono text-[9px] font-bold tracking-[0.05em] text-ink-faint">
                      RETRIEVED →
                    </span>
                    {(m.sources || []).map((src) => (
                      <span
                        key={src}
                        className="rounded-[5px] border border-[rgba(224,83,47,0.3)] bg-[rgba(224,83,47,0.07)] px-[7px] py-0.5 font-mono text-[10px] text-accent"
                      >
                        {src}
                      </span>
                    ))}
                  </div>
                )}
                {m.phase === "retrieving" && (
                  <div className="font-mono text-[13px] text-ink-muted">
                    searching résumé
                    <span className="animate-dots">…</span>
                  </div>
                )}
                {(m.phase === "typing" || m.phase === "done") && (
                  <div className="font-sans text-sm leading-[1.65] text-ink whitespace-pre-wrap">
                    {m.text}
                    {m.phase === "typing" && (
                      <span className="ml-0.5 inline-block h-[15px] w-2 animate-blink bg-accent align-[-2px]" />
                    )}
                  </div>
                )}
              </div>
            ),
          )}
        </div>

        <div className="border-t border-border bg-cream-muted px-[18px] py-3.5">
          <div className="mb-3 flex flex-wrap gap-2">
            {chatChips.map((c, i) => (
              <button
                key={c.key}
                type="button"
                onClick={() => void ask(c.label)}
                disabled={streaming}
                className="animate-drift cursor-pointer rounded-full border border-border-strong px-[13px] py-1.5 font-sans text-xs text-ink-body hover:border-accent hover:text-accent disabled:opacity-50"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  sendFree()
                }
              }}
              placeholder="Ask about a project, a metric, my stack…"
              className="flex-1 rounded-[10px] border border-border-strong bg-cream px-3.5 py-[11px] font-sans text-sm text-ink outline-none focus:border-accent"
            />
            <button
              type="button"
              onClick={sendFree}
              disabled={streaming || !input.trim()}
              className="shrink-0 cursor-pointer rounded-[10px] border-none bg-accent px-[15px] py-[11px] font-mono text-sm font-bold text-cream disabled:opacity-50"
            >
              ↵
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
