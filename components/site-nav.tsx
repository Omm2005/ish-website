"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { handleHashScroll } from "@/lib/smooth-scroll"

const links = [
  { label: "About", href: "#about" },
  { label: "Diary", href: "#currently" },
  { label: "What I Do", href: "#craft" },
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#work" },
  { label: "Hello", href: "#contact" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-card/80 px-5 py-4 shadow-[0_18px_35px_-28px_oklch(0.35_0.03_20_/_0.5)] backdrop-blur-md sm:px-6">
        <Link href="/" className="text-script text-[2.35rem] leading-[1.15] text-foreground sm:text-3xl">
          Ishita
        </Link>

        <ul className="hidden items-center gap-2 md:flex lg:gap-3">
          {links.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleHashScroll(event, link.href)}
                className={`paper-wobble sticker-peel inline-flex rounded-full border border-border/60 bg-[#fffaf4] px-3 py-2 text-[0.68rem] font-semibold uppercase leading-none tracking-[0.12em] text-muted-foreground shadow-[6px_7px_0_oklch(0.88_0.03_30_/_0.72)] transition-colors hover:text-foreground lg:px-4 lg:text-xs lg:tracking-[0.14em] ${
                  index % 2 === 0 ? "[--tilt:-2deg]" : "[--tilt:2deg]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          onClick={(event) => handleHashScroll(event, "/#contact")}
          className="hidden rounded-full border border-rose/60 bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Get in touch
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border bg-card p-2.5 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-[2rem] border border-border/60 bg-background/95 shadow-lg md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => handleHashScroll(event, link.href, () => setOpen(false))}
                  className="block py-2.5 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
