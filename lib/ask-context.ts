import { contact, personalBuilds, products, stackList } from "@/lib/portfolio-data"
import { RESUME_DOCUMENT } from "@/lib/resume-document"

/** Grounding document for the Ask-me agent (server-side only). */
export function buildPortfolioContext(): string {
  const productBlocks = products
    .map(
      (p) =>
        `### ${p.name}\nTagline: ${p.tagline}\nMetric: ${p.metric}\n${p.desc}\nTags: ${p.tags.join(", ")}\nSkills: ${p.skills.join("; ")}\nArchitecture: ${p.flow.map((n) => `${n.kicker}:${n.title}`).join(" → ")}`,
    )
    .join("\n\n")

  const personal = personalBuilds
    .map((b) => `### ${b.name}\n${b.desc}\nStack: ${b.stack}`)
    .join("\n\n")

  return `
Answer ONLY using the résumé and portfolio context below.
Speak in first person as Praveen when describing his work. Be concise (2–5 sentences unless asked for detail).
If the question is unrelated to his work, skills, or background, say you can only discuss his applied AI experience.
Never invent employers, products, or metrics that are not in the context.

## Full résumé (source of truth)
${RESUME_DOCUMENT}

## Profile (site)
- Role: Associate AI Software Engineer @ ${contact.company}, ${contact.location}
- Contact: ${contact.email} | ${contact.phone}
- Stack: ${stackList.join(", ")}

## Shipped products (site detail)
${productBlocks}

## Personal builds (site detail)
${personal}
`.trim()
}

export const ASK_SYSTEM_INSTRUCTION = `You answer questions about Praveen Kumar's portfolio.
Respond with valid JSON only, no markdown fences:
{"answer":"string","sources":["string","string"]}
"sources" must be short labels from the context (product names, Experience, Education, Technical Skills) that support the answer. Use 1–3 sources.`
