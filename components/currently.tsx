"use client"

import type { CSSProperties, MouseEvent } from "react"
import { BookOpen, Coffee, Headphones, Lightbulb, WandSparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { StickerSvg, type StickerVariant } from "@/components/sticker-svg"
import { triggerStickerPop } from "@/components/sparkle-controller"

const notes: {
  title: string
  value: string
  detail: string
  icon: LucideIcon
  sticker: StickerVariant
  label: string
  tilt: string
}[] = [
  {
    title: "listening",
    value: "Chérie on repeat",
    detail: "tiny soundtrack for soft systems",
    icon: Headphones,
    sticker: "bow",
    label: "playlist",
    tilt: "-2deg",
  },
  {
    title: "reading",
    value: "visual references",
    detail: "scrapbook pages, game worlds, little margins",
    icon: BookOpen,
    sticker: "strawberry",
    label: "library",
    tilt: "1.5deg",
  },
  {
    title: "learning",
    value: "warmer interfaces",
    detail: "how small interactions can make tech feel kinder",
    icon: Lightbulb,
    sticker: "sun",
    label: "idea",
    tilt: "-1deg",
  },
  {
    title: "craving",
    value: "tea and pink stationery",
    detail: "a desk full of tabs, ribbons, and plans",
    icon: Coffee,
    sticker: "cat",
    label: "desk",
    tilt: "2deg",
  },
  {
    title: "dreaming",
    value: "a cozy digital world",
    detail: "somewhere soft enough to explore slowly",
    icon: WandSparkles,
    sticker: "flower-girl",
    label: "dreamy",
    tilt: "-1.5deg",
  },
]

export function Currently() {
  const popSticker = (event: MouseEvent<HTMLElement>, label: string) => {
    triggerStickerPop(event, label)
  }

  return (
    <section id="currently" className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="soft-gingham relative overflow-hidden rounded-[2.4rem] px-4 py-7 sm:rounded-[3rem] sm:px-6 sm:py-9 md:px-10">
          <div className="absolute -right-8 top-8 hidden size-32 rotate-12 opacity-25 sm:block">
            <StickerSvg variant="bow" />
          </div>
          <div className="absolute -bottom-10 left-8 hidden size-28 -rotate-12 opacity-25 sm:block">
            <StickerSvg variant="strawberry" />
          </div>

          <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose scrapbook-shadow">
                tiny diary
              </span>
              <h2 className="mt-4 max-w-xl text-balance font-serif text-[2.15rem] leading-[1.08] text-foreground sm:text-4xl lg:text-5xl">
                Currently collecting little lovely things.
              </h2>
            </div>
            <p className="max-w-md text-pretty text-[0.95rem] leading-7 text-foreground/75 sm:text-base">
              A soft snapshot of what is sitting on my desk, in my tabs, and in the corner of my brain.
            </p>
          </div>

          <div className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {notes.map(({ title, value, detail, icon: Icon, sticker, label, tilt }) => (
              <button
                key={title}
                type="button"
                onClick={(event) => popSticker(event, label)}
                className="paper-card paper-wobble group relative min-h-[13rem] overflow-hidden rounded-[1.45rem] p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:rounded-[1.65rem]"
                style={{ "--tilt": tilt } as CSSProperties}
              >
                <span className="absolute -right-4 -top-3 size-16 rotate-12 opacity-80 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                  <StickerSvg variant={sticker} />
                </span>
                <span className="relative z-10 inline-flex size-9 items-center justify-center rounded-full border border-border/70 bg-card/90 text-rose shadow-sm">
                  <Icon className="size-4" />
                </span>
                <span className="relative z-10 mt-5 block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  currently {title}
                </span>
                <span className="relative z-10 mt-2 block font-serif text-xl leading-snug text-foreground">
                  {value}
                </span>
                <span className="relative z-10 mt-3 block text-sm leading-6 text-foreground/70">{detail}</span>
                <span className="absolute bottom-3 right-4 rotate-[-5deg] text-script text-2xl leading-none text-rose/70">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
