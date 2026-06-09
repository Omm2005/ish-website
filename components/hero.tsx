"use client"

import type { MouseEvent } from "react"
import { Sparkles } from "lucide-react"
import { MobilePegboard } from "@/components/mobile-pegboard"
import { triggerSparkles, triggerStickerPop } from "@/components/sparkle-controller"

const stats = [
  { value: "2.9", label: "years exploring" },
  { value: "3", label: "internships" },
  { value: "∞", label: "ideas in the margins" },
]

export function Hero() {
  const popSticker = (event: MouseEvent<HTMLElement>, label: string) => {
    triggerStickerPop(event, label)
  }

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 md:pt-20">
      <div className="pink-stripes absolute inset-x-3 top-16 h-[28rem] rounded-[2rem] opacity-[0.65] blur-[1px] sm:inset-x-0 sm:rounded-[3rem]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose/50 bg-card/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground scrapbook-shadow">
            <Sparkles className="size-3.5 text-rose" />
            welcome, friend
          </span>

          <h1 className="mx-auto mt-6 max-w-[11ch] text-balance font-serif text-[2.85rem] leading-[1.03] text-foreground min-[390px]:text-[3.15rem] sm:max-w-none sm:text-5xl sm:leading-[1.03] md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <button
              type="button"
              onClick={(event) => {
                triggerSparkles()
                popSticker(event, "Ishita")
              }}
              className="inline-block text-script font-normal leading-[1.12] text-rose transition-transform hover:scale-105"
            >
              Ishita
            </button>{" "}
            and I build soft, story-driven digital things.
          </h1>

          <MobilePegboard />

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:max-w-2xl sm:text-lg sm:leading-relaxed">
            A creative technologist and design student weaving together game development, UI/UX,
            and creative coding. I like interfaces that feel gentle, products that tell a story,
            and ideas that began as a note in the margin of a book.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#work"
              onClick={(event) => popSticker(event, "work")}
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
            >
              See my work
            </a>
            <a
              href="#about"
              onClick={(event) => popSticker(event, "about")}
              className="rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              More about me
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-14 hidden max-w-6xl xl:block">
          <span className="absolute left-3 top-6 z-10 rotate-[-8deg] rounded-full bg-butter px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-foreground scrapbook-shadow md:left-5">
            scrapbook mode
          </span>
          <span className="absolute bottom-8 right-3 z-10 rotate-[7deg] rounded-full bg-card px-5 py-2 text-sm font-semibold text-rose scrapbook-shadow md:right-5">
            soft systems
          </span>

          <div className="metal-tray rounded-[2.7rem] p-4 md:p-5">
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-card">
              <img
                src="/images/ishita-collage.png"
                alt="A pastel scrapbook collage with Ishita Gautam written in script"
                className="aspect-[4/1] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`paper-card rounded-[1.5rem] px-4 py-4 text-center sm:rounded-[2rem] sm:px-5 sm:py-5 ${
                index === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              <div className="font-sans text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[0.68rem] font-medium uppercase leading-snug tracking-[0.14em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
