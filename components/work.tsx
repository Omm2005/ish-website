"use client"

import type { KeyboardEvent, MouseEvent } from "react"
import Image from "next/image"
import { triggerStickerPop } from "@/components/sparkle-controller"

const projects = [
  {
    image: "/images/work-game.png",
    callout: "FOUND IT FIRST ••",
    shelf: "bg-[#f8c8da]",
    tag: "Game Design",
    title: "A Little Floating World",
    body: "A cozy exploration game concept built around mood and gentle discovery — every screen designed to feel like a place you could rest.",
  },
  {
    image: "/images/work-uiux.png",
    callout: "HANDMADE. HEARTMADE",
    shelf: "bg-[#d8ead7]",
    tag: "UI / UX",
    title: "Soft Systems Kit",
    body: "A rounded, friendly mobile design system — components, flows, and prototypes that keep products warm and easy to use.",
  },
  {
    image: "/images/work-code.png",
    callout: "FOOD FOR THOUGHT???",
    shelf: "bg-[#cdddf2]",
    tag: "Creative Coding",
    title: "Lines That Wander",
    body: "Generative sketches in Python where simple rules grow into delicate, ever-shifting patterns of pink and gold.",
  },
]

export function Work() {
  const popProjectSticker = (event: MouseEvent<HTMLElement>, label: string) => {
    triggerStickerPop(event, label)
  }

  const popProjectStickerFromKeyboard = (event: KeyboardEvent<HTMLElement>, label: string) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    triggerStickerPop(
      {
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2,
      },
      label,
    )
  }

  return (
    <section id="work" className="px-4 py-16 sm:px-6 md:py-28">
      <div className="pink-stripes mx-auto max-w-6xl rounded-[2.4rem] px-4 py-6 sm:rounded-[3rem] sm:py-8 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose scrapbook-shadow">
              selected work
            </span>
            <h2 className="mt-4 text-balance font-serif text-[2.35rem] leading-[1.06] text-foreground sm:text-4xl sm:leading-tight lg:text-5xl">
              Things I&apos;ve made & explored.
            </h2>
          </div>
          <p className="max-w-sm rounded-[1.4rem] bg-card/90 px-4 py-4 text-pretty text-sm leading-relaxed text-muted-foreground scrapbook-shadow sm:px-5">
            A small selection of projects across the things I love: playful, visual, and always a
            little experimental.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-[#e8cbd5] bg-[#fffaf4] p-3 sm:mt-12 sm:rounded-[2.8rem] sm:p-5 md:p-7">
          <p className="pointer-events-none mb-5 max-w-full break-words px-2 text-script text-[2.15rem] leading-[1.05] text-rose/80 [overflow-wrap:anywhere] sm:px-3 sm:text-5xl md:px-5 md:text-6xl">
            What&apos;s in my tin case
          </p>

          <div className="space-y-5 pt-1">
            {projects.map((project, index) => (
              <article
                key={project.title}
                role="button"
                tabIndex={0}
                aria-label={`Pop a sticker for ${project.title}`}
                onClick={(event) => popProjectSticker(event, project.tag)}
                onKeyDown={(event) => popProjectStickerFromKeyboard(event, project.tag)}
                className={`paper-wobble group relative grid gap-4 rounded-[1.7rem] border border-white/70 p-4 shadow-[0_18px_35px_-28px_rgba(80,45,60,0.45)] sm:grid-cols-[220px_1fr] sm:items-center sm:rounded-[2rem] ${
                  project.shelf
                } ${index % 2 === 0 ? "[--tilt:-0.8deg]" : "[--tilt:0.8deg]"} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
              >
                <span className="sticker-peel absolute -top-3 left-5 right-5 z-10 mx-auto w-fit max-w-[calc(100%-2.5rem)] rounded-full bg-card px-3 py-2 text-center text-[0.62rem] font-bold uppercase leading-snug tracking-[0.12em] text-foreground scrapbook-shadow sm:left-5 sm:right-auto sm:mx-0 sm:px-4 sm:text-[0.66rem] sm:tracking-[0.16em]">
                  {project.callout}
                </span>
                <div className="relative overflow-hidden rounded-[1.4rem] border border-white/80 bg-card p-2.5 sm:rounded-[1.7rem] sm:p-3">
                  <div className="absolute left-1/2 top-0 z-10 h-7 w-20 -translate-x-1/2 rotate-[-3deg] bg-[#f4c244]/80" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={450}
                    className="aspect-[4/3] w-full rounded-[1rem] object-cover transition-transform duration-500 group-hover:scale-105 sm:rounded-[1.2rem]"
                  />
                </div>
                <div className="min-w-0 rounded-[1.3rem] bg-card/85 p-4 sm:p-5">
                  <span className="w-fit max-w-full break-words rounded-full bg-accent px-3 py-1 text-[0.68rem] font-semibold uppercase leading-snug tracking-[0.1em] text-accent-foreground sm:text-xs sm:tracking-[0.14em]">
                    {project.tag}
                  </span>
                  <h3 className="mt-3 break-words font-sans text-[1.45rem] leading-tight font-semibold text-foreground [overflow-wrap:anywhere] sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 break-words text-sm leading-relaxed text-muted-foreground [overflow-wrap:anywhere]">
                    {project.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
