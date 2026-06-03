"use client"

import Image from "next/image"
import { Sparkles } from "lucide-react"
import { triggerSparkles } from "@/components/sparkle-controller"

const stats = [
  { value: "2.9", label: "years exploring" },
  { value: "3", label: "internships" },
  { value: "∞", label: "ideas in the margins" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-12 md:pt-20">
      <div className="pink-stripes absolute inset-x-0 top-16 h-[28rem] rounded-[3rem] opacity-[0.65] blur-[1px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose/50 bg-card/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground scrapbook-shadow">
            <Sparkles className="size-3.5 text-rose" />
            welcome, friend
          </span>

          <h1 className="mt-6 text-balance font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
            Hi, I&apos;m{" "}
            <button
              type="button"
              onClick={triggerSparkles}
              className="text-script font-normal text-rose transition-transform hover:scale-105"
            >
              Ishita
            </button>{" "}
            and I build soft, story-driven digital things.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A creative technologist and design student weaving together game development, UI/UX,
            and creative coding. I like interfaces that feel gentle, products that tell a story,
            and ideas that began as a note in the margin of a book.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
            >
              See my work
            </a>
            <a
              href="#about"
              className="rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              More about me
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <span className="absolute -left-2 top-6 z-10 rotate-[-8deg] rounded-full bg-butter px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-foreground scrapbook-shadow md:-left-10">
            scrapbook mode
          </span>
          <span className="absolute -right-1 bottom-8 z-10 rotate-[7deg] rounded-full bg-card px-5 py-2 text-sm font-semibold text-rose scrapbook-shadow md:-right-8">
            soft systems
          </span>
          <p className="pointer-events-none absolute left-8 top-[-2.8rem] z-10 text-script text-5xl text-rose/80 md:left-16 md:text-7xl">
            Typical Combo
          </p>

          <div className="metal-tray rounded-[2.7rem] p-4 md:p-5">
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-card">
              <Image
                src="/images/ishita-collage.png"
                alt="A scrapbook collage with bows, lilies, lemons, a vintage camera and the name Ishita Gautam in flowing script"
                width={1400}
                height={360}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`paper-card rounded-[2rem] px-5 py-5 text-center ${
                index === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              <div className="font-sans text-4xl font-semibold text-foreground md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
