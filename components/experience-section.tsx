import { experienceRoles, stackList } from "@/lib/portfolio-data"

export function ExperienceSection() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-[34px] pb-10 sm:px-7">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="mb-[22px] flex flex-wrap items-baseline gap-3">
            <h2 className="m-0 font-sans text-[26px] font-semibold">Experience</h2>
          </div>

          <div className="relative border-l-2 border-border-strong pl-[22px]">
            {experienceRoles.map((role, idx) => (
              <div
                key={`${role.title}-${role.period}`}
                className={`relative ${idx === experienceRoles.length - 1 ? "" : "mb-8"}`}
              >
                <span
                  className={`absolute left-[-29px] top-1 h-3 w-3 rounded-full shadow-[0_0_0_4px_#F4F1EA] ${
                    role.current ? "animate-ring bg-accent" : "bg-border-strong"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-sans text-[17px] font-semibold">{role.title}</div>
                  <div className="font-mono text-xs text-accent">{role.period}</div>
                </div>
                <div className="mb-3 mt-1 font-mono text-[13px] text-ink-muted">
                  {role.company} · {role.location}
                </div>
                <ul className="m-0 list-disc space-y-1 pl-[18px] font-sans text-[13.5px] leading-[1.7] text-ink-body">
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
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

          <h3 className="mb-3 mt-[26px] font-sans text-[15px] font-semibold text-ink-muted">
            Growth path
          </h3>
          <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-[11px]">
            {["Intern", "Trainee AI Engineer", "Associate AI Software Engineer"].map((step, i, arr) => (
              <span key={step} className="contents">
                <span
                  className={`rounded-md border px-2.5 py-1 ${
                    i === arr.length - 1
                      ? "border-accent bg-[rgba(224,83,47,0.09)] font-bold text-accent"
                      : "border-border-strong text-ink-body"
                  }`}
                >
                  {step}
                </span>
                {i < arr.length - 1 && <span className="text-ink-faint">→</span>}
              </span>
            ))}
          </div>

          <h3 className="mb-3 font-sans text-[15px] font-semibold text-ink-muted">Stack</h3>
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
