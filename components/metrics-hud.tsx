"use client"

import { useEffect, useRef, useState } from "react"

const SPARK_PATH = "M0,14 L12,9 L24,16 L36,6 L48,12 L60,4 L72,14 L84,7 L96,11"

export function MetricsHud() {
  const ref = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        const duration = 1100
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setProgress(eased)
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  const metrics = [
    { value: String(Math.round(6 * progress)), label: "products shipped" },
    { value: `<${Math.round(200 * progress)}ms`, label: "query latency" },
    { value: String(Math.round(4 * progress)), label: "LLMs in production" },
    { value: (8.54 * progress).toFixed(2), label: "CGPA" },
  ]

  return (
    <section ref={ref} className="mx-auto max-w-[1180px] px-5 pb-11 pt-[18px] sm:px-7">
      <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="relative overflow-hidden rounded-xl border border-border bg-cream-card px-4 py-[18px]"
          >
            <div className="font-sans text-[clamp(26px,3vw,38px)] font-bold tracking-[-0.02em] text-ink">
              {m.value}
            </div>
            <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.07em] text-ink-muted">
              {m.label}
            </div>
            <svg
              viewBox="0 0 96 22"
              width="72"
              height="18"
              className="absolute bottom-3 right-3 opacity-50"
              aria-hidden
            >
              <polyline
                points="0,14 12,9 24,16 36,6 48,12 60,4 72,14 84,7 96,11"
                fill="none"
                stroke="#E0532F"
                strokeWidth="1.5"
              />
              <circle
                r="2.4"
                fill="#E0532F"
                style={{
                  offsetPath: `path('${SPARK_PATH}')`,
                  animation: "sparkrun 2.6s linear infinite",
                }}
              />
            </svg>
          </div>
        ))}
      </div>
    </section>
  )
}
