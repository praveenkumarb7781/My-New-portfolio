import { contact } from "@/lib/portfolio-data"

export function HeroSection() {
  return (
    <section id="pipeline" className="mx-auto max-w-[1180px] px-5 pb-10 pt-[74px] sm:px-7">
      <div className="mb-5 flex animate-rise items-center gap-2.5" style={{ animationDelay: "0.05s" }}>
        <span className="h-[7px] w-[7px] animate-ring rounded-full bg-accent" />
        <span className="font-mono text-xs tracking-[0.06em] text-ink-muted">
          SYSTEM ONLINE · APPLIED AI ENGINEER
        </span>
      </div>

      <h1
        className="mb-3.5 max-w-[900px] animate-rise font-sans text-[clamp(38px,6.2vw,74px)] font-semibold leading-[1.02] tracking-[-0.02em]"
        style={{ animationDelay: "0.12s" }}
      >
        I build <span className="text-accent">production AI systems</span> — RAG, agents &amp; real-time ML.
      </h1>

      <p
        className="mb-2 max-w-[660px] animate-rise font-sans text-[17px] font-normal leading-relaxed text-ink-body"
        style={{ animationDelay: "0.2s" }}
      >
        6 shipped products across BFSI, recruitment &amp; enterprise analytics — spanning RAG, LLM
        orchestration, multi-agent systems and real-time ML.
      </p>

      <p
        className="mb-2 animate-rise font-mono text-[13px] font-normal text-ink-faint"
        style={{ animationDelay: "0.26s" }}
      >
        <span className="text-ink-muted">{contact.location}</span>
        {" · "}
        <span className="text-ink-muted">@ {contact.company}</span>
        {" · "}
        <a href="#products" className="text-accent hover:text-ink">
          see the work →
        </a>
      </p>
    </section>
  )
}
