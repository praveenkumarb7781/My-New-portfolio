import { stackList } from "@/lib/portfolio-data"

export function ExperienceSection() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-[34px] pb-10 sm:px-7">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="mb-[22px] font-sans text-[26px] font-semibold">Experience</h2>
          <div className="relative border-l-2 border-border-strong pl-[22px]">
            <span className="absolute left-[-7px] top-1 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_#F4F1EA]" />
            <div className="flex flex-wrap justify-between gap-2">
              <div className="font-sans text-[17px] font-semibold">Associate AI Software Engineer</div>
              <div className="font-mono text-xs text-accent">Jan 2025 — Present</div>
            </div>
            <div className="mb-3 mt-1 font-mono text-[13px] text-ink-muted">Xerago · Chennai, TN</div>
            <ul className="m-0 list-disc space-y-1 pl-[18px] font-sans text-[13.5px] leading-[1.7] text-ink-body">
              <li>
                Designed &amp; shipped 6 enterprise AI products — RAG pipelines, multi-agent systems,
                real-time ML inference and conversational BI across BFSI, recruitment and SaaS.
              </li>
              <li>
                Led internal LLM benchmarking (GPT-4, Claude 3, Mistral, Gemini) to tune
                cost/performance; mentored juniors on pipeline architecture &amp; LangChain best
                practices.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="mb-[22px] font-sans text-[26px] font-semibold">Education</h2>
          <div className="rounded-xl border border-border bg-cream-card p-[18px]">
            <div className="font-sans text-base font-semibold">B.Tech, Artificial Intelligence</div>
            <div className="my-[5px] font-mono text-[12.5px] text-ink-muted">
              Mahendra Institutions · 2020 — 2024
            </div>
            <div className="mt-1.5 inline-block rounded-md border border-[rgba(224,83,47,0.3)] px-2.5 py-1 font-mono text-[11px] font-bold text-accent">
              CGPA 8.54
            </div>
          </div>

          <h3 className="mb-3 mt-[26px] font-sans text-[15px] font-semibold text-ink-muted">Stack</h3>
          <div>
            {stackList.map((s) => (
              <span
                key={s}
                className="mb-1.5 mr-1.5 inline-block rounded-md border border-border-strong px-[9px] py-1 font-mono text-[11px] text-ink-body"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
