import { contact } from "@/lib/portfolio-data"

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-[1180px] px-5 pb-20 pt-[60px] sm:px-7">
      <div className="rounded-[18px] border border-border bg-gradient-to-b from-cream-card to-cream-muted px-6 py-11 text-center sm:px-9">
        <div className="mb-3.5 font-mono text-xs tracking-[0.08em] text-accent">
          ● OPEN TO APPLIED AI ROLES
        </div>
        <h2 className="mb-3 font-sans text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Let&apos;s ship something.
        </h2>
        <p className="mx-auto mb-7 max-w-[460px] font-sans text-[15px] leading-relaxed text-ink-muted">
          Building at the intersection of RAG, LLM orchestration and real-time ML. Reach out —
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-[9px] bg-accent px-[18px] py-[11px] font-mono text-[13px] font-semibold text-cream hover:text-cream hover:opacity-90"
          >
            {contact.email}
          </a>
          <a
            href={contact.phoneHref}
            className="rounded-[9px] border border-border-strong px-[18px] py-[11px] font-mono text-[13px] font-semibold text-ink hover:text-accent"
          >
            {contact.phone}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[9px] border border-border-strong px-[18px] py-[11px] font-mono text-[13px] font-semibold text-ink hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[9px] border border-border-strong px-[18px] py-[11px] font-mono text-[13px] font-semibold text-ink hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="mt-[26px] text-center font-mono text-[10px] text-ink-ghost">
        Praveen Kumar B · Applied AI Engineer · Chennai, IN
      </div>
    </section>
  )
}
