"use client"

import { useState } from "react"
import { personalBuilds, products } from "@/lib/portfolio-data"

export function ProjectsSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="products" className="mx-auto max-w-[1180px] px-5 py-[34px] pb-[60px] sm:px-7">
      <div className="mb-2 flex items-baseline gap-3.5">
        <h2 className="m-0 font-sans text-[30px] font-semibold tracking-[-0.01em]">Shipped products</h2>
        <span className="font-mono text-[11px] font-bold text-accent">● all operational</span>
      </div>
      <p className="mb-[26px] font-sans text-sm text-ink-muted">
        Each row is a real service. Open one to see the case study and its request trace.
      </p>

      <div className="flex flex-col gap-3">
        {products.map((p, idx) => {
          const open = expanded === idx
          return (
            <div key={p.name} className="overflow-hidden rounded-[13px] border border-border bg-cream-card">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center gap-4 px-5 py-[18px] text-left"
                onClick={() => setExpanded(open ? null : idx)}
                aria-expanded={open}
              >
                <span className="h-[9px] w-[9px] shrink-0 animate-ring rounded-full bg-accent" />
                <div className="min-w-0 flex-1">
                  <div className="font-sans text-[17px] font-semibold text-ink">{p.name}</div>
                  <div className="mt-0.5 font-sans text-[12.5px] text-ink-muted">{p.tagline}</div>
                </div>
                <span className="shrink-0 rounded-[7px] border border-[rgba(224,83,47,0.25)] bg-[rgba(224,83,47,0.09)] px-2.5 py-1.5 font-mono text-[11px] font-bold text-accent">
                  {p.metric}
                </span>
                <span className="w-4 shrink-0 text-center font-mono text-xs text-ink-faint">
                  {open ? "−" : "+"}
                </span>
              </button>

              {open && (
                <div className="border-t border-border px-5 pb-[22px] pl-11 pt-1">
                  <p className="mb-[18px] mt-4 max-w-[760px] font-sans text-sm leading-[1.65] text-ink-body">
                    {p.desc}
                  </p>

                  <div className="mb-3 font-mono text-[9px] font-bold tracking-[0.08em] text-ink-faint">
                    ARCHITECTURE
                  </div>
                  <div className="mb-[22px] flex flex-wrap items-stretch gap-1.5">
                    {p.flow.map((n, i) => (
                      <div key={n.title} className="contents">
                        <div className="relative min-w-[92px] flex-[1_1_100px] rounded-[9px] border border-border-strong bg-cream px-2 py-[9px] text-center">
                          <div className="mb-0.5 font-mono text-[8px] font-bold tracking-[0.04em] text-accent">
                            {n.kicker}
                          </div>
                          <div className="font-sans text-[11.5px] font-semibold leading-tight text-ink">
                            {n.title}
                          </div>
                        </div>
                        {i < p.flow.length - 1 && (
                          <div className="relative h-0.5 w-[22px] shrink-0 self-center border-t-2 border-dashed border-border-strong">
                            <span className="absolute top-[-3px] h-[5px] w-[5px] animate-packet rounded-full bg-accent shadow-[0_0_6px_1px_rgba(224,83,47,0.7)]" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mb-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="mb-1.5 mr-1.5 inline-block rounded-full border border-border-strong px-[11px] py-1 font-mono text-[11px] text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mb-3.5 font-mono text-[9px] font-bold tracking-[0.08em] text-ink-faint">
                    SKILLS DEMONSTRATED
                  </div>
                  <div className="grid grid-cols-1 gap-x-[26px] gap-y-[11px] sm:grid-cols-2">
                    {p.skills.map((sk) => (
                      <div key={sk} className="flex items-start gap-2.5">
                        <span className="mt-0.5 shrink-0 font-mono text-[13px] font-bold text-accent">→</span>
                        <span className="font-sans text-[13.5px] leading-normal text-ink-body">{sk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-9">
        <div className="mb-3.5 font-mono text-[10px] font-bold tracking-[0.08em] text-ink-faint">
          PERSONAL BUILDS
        </div>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {personalBuilds.map((b) => (
            <div key={b.name} className="rounded-xl border border-border bg-cream-card p-[18px]">
              <div className="mb-1.5 font-sans text-[15px] font-semibold text-ink">{b.name}</div>
              <p className="mb-3 font-sans text-[12.5px] leading-[1.55] text-ink-muted">{b.desc}</p>
              <div className="font-mono text-[10.5px] text-ink-faint">{b.stack}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
