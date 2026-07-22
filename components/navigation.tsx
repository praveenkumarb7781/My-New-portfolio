"use client"

import { useState } from "react"
import { contact } from "@/lib/portfolio-data"
import { withBasePath } from "@/lib/utils"

const navItems = [
  { href: "#pipeline", label: "pipeline" },
  { href: "#products", label: "products" },
  { href: "#ask", label: "ask me" },
  { href: "#contact", label: "contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const resumeHref = withBasePath(contact.resume)

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-[rgba(244,241,234,0.72)] px-5 py-3.5 backdrop-blur-[12px] sm:px-7">
      <a href="#top" className="flex items-center gap-2.5 text-ink hover:text-ink">
        <span className="flex h-[26px] w-[26px] items-center justify-center rounded-md border-[1.5px] border-accent font-mono text-[11px] font-bold text-accent">
          PK
        </span>
        <span className="font-sans text-sm font-semibold">Praveen Kumar</span>
        <span className="hidden h-1.5 w-1.5 animate-ring rounded-full bg-accent sm:block" />
        <span className="hidden font-mono text-[10px] font-normal text-ink-faint sm:inline">available</span>
      </a>

      <div className="hidden items-center gap-[22px] md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-sans text-[12.5px] font-normal text-ink-muted hover:text-accent"
          >
            {item.label}
          </a>
        ))}
        <a
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[7px] bg-accent px-3.5 py-[7px] font-mono text-xs font-semibold text-cream hover:text-cream hover:opacity-90"
        >
          resume →
        </a>
      </div>

      <button
        type="button"
        className="font-mono text-xs text-ink-muted md:hidden"
        onClick={() => setMobileOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? "close" : "menu"}
      </button>

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full flex flex-col gap-3 border-b border-border bg-cream-card px-5 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-sm text-ink-muted hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-[7px] bg-accent px-3.5 py-[7px] font-mono text-xs font-semibold text-cream"
            onClick={() => setMobileOpen(false)}
          >
            resume →
          </a>
        </div>
      )}
    </nav>
  )
}
