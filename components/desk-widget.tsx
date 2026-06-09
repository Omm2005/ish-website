"use client"

import type { MouseEvent } from "react"
import { Coffee, Laptop, StickyNote, Ticket, WandSparkles } from "lucide-react"
import { StickerSvg, type StickerVariant } from "@/components/sticker-svg"
import { triggerStickerPop } from "@/components/sparkle-controller"

const charms: { variant: StickerVariant; label: string; className: string }[] = [
  { variant: "bow", label: "bow", className: "left-[7%] top-[11%] size-12 rotate-[-12deg] sm:size-16" },
  { variant: "star", label: "star", className: "right-[8%] top-[10%] size-11 rotate-[10deg] sm:size-14" },
  { variant: "strawberry", label: "berry", className: "bottom-[8%] left-[9%] size-12 rotate-[8deg] sm:size-16" },
  { variant: "cat", label: "guard", className: "bottom-[7%] right-[9%] size-14 rotate-[-5deg] sm:size-18" },
]

export function DeskWidget() {
  const pop = (event: MouseEvent<HTMLElement>, label: string) => {
    triggerStickerPop(event, label)
  }

  return (
    <section id="desk-corner" className="px-4 py-14 sm:px-6 md:py-22">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-border/60 bg-[#fff7ef] p-3 scrapbook-shadow sm:rounded-[3rem] sm:p-5 md:p-7">
          <div className="absolute inset-0 opacity-70 soft-gingham" aria-hidden="true" />

          <div className="relative rounded-[1.8rem] border border-white/75 bg-[#fffdf8]/88 px-4 py-5 sm:rounded-[2.4rem] sm:px-6 sm:py-7 md:px-8">
            <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="inline-flex rounded-full bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-rose scrapbook-shadow">
                  desk corner
                </span>
                <p className="mt-3 max-w-xl text-pretty font-serif text-[1.85rem] leading-[1.12] text-foreground sm:text-3xl md:text-4xl">
                  Tiny tools for soft little builds.
                </p>
              </div>
              <p className="max-w-sm text-pretty text-sm leading-6 text-foreground/70 sm:text-base sm:leading-7">
                Tap the pieces for a little desk magic.
              </p>
            </div>

            <div className="desk-mat relative min-h-[35rem] overflow-hidden rounded-[1.55rem] border border-[#ead3c2] bg-[#ffe8f0] p-4 sm:min-h-[31rem] sm:rounded-[2rem] sm:p-5 md:min-h-[26rem] md:p-6">
              <div className="absolute inset-x-5 bottom-4 h-16 rounded-[50%] bg-[#c98ca5]/14 blur-xl" aria-hidden="true" />

              {charms.map((charm) => (
                <button
                  key={charm.label}
                  type="button"
                  onClick={(event) => pop(event, charm.label)}
                  className={`sticker-peel absolute z-20 bg-transparent p-0 ${charm.className}`}
                  aria-label={`Pop ${charm.label} charm`}
                >
                  <StickerSvg variant={charm.variant} />
                </button>
              ))}

              <button
                type="button"
                onClick={(event) => pop(event, "Ishita OS")}
                className="absolute left-1/2 top-[5.5rem] z-10 w-[min(88%,19rem)] -translate-x-1/2 rotate-[-1.4deg] rounded-[1.2rem] border border-[#bdaeb5] bg-[#51434a] p-2 text-left shadow-[0_18px_36px_-24px_rgba(57,36,46,0.5)] transition-transform hover:-translate-y-1 hover:rotate-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:left-[31%] sm:top-[7.5rem] sm:w-[18rem] md:left-[29%] md:top-[6.5rem]"
              >
                <span className="block rounded-[0.85rem] border border-white/20 bg-[#fff8e9] p-3">
                  <span className="mb-2 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-rose">
                    <Laptop className="size-3.5" />
                    Ishita OS
                  </span>
                  <span className="block rounded-[0.65rem] bg-[#fde5ef] px-3 py-2 font-mono text-[0.68rem] leading-5 text-[#6f4a58]">
                    open: ideas.txt
                    <br />
                    mood: soft focus
                  </span>
                </span>
                <span className="mx-auto mt-2 block h-2 w-28 rounded-b-xl bg-[#73636a]" />
              </button>

              <button
                type="button"
                onClick={(event) => pop(event, "notebook")}
                className="absolute left-1/2 top-[18rem] z-10 w-[min(88%,18rem)] -translate-x-1/2 rotate-[1.8deg] rounded-[1.25rem] border border-[#e3c6a7] bg-[#fffaf0] p-4 text-left shadow-[0_16px_30px_-22px_rgba(78,48,31,0.42)] transition-transform hover:-translate-y-1 hover:rotate-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:left-[68%] sm:top-[6.4rem] sm:w-[17rem] md:left-[66%] md:top-[5.8rem]"
              >
                <span className="mb-3 block text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  notebook
                </span>
                <span className="block border-y border-[#e7d7bd] py-3 text-script text-[1.55rem] leading-[1.08] text-rose">
                  make it feel
                  <br />
                  warm first
                </span>
                <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.12em] text-[#917275]">
                  sketches + tiny plans
                </span>
              </button>

              <button
                type="button"
                onClick={(event) => pop(event, "idea")}
                className="absolute left-[8%] top-[28.5rem] z-20 w-[8.8rem] rotate-[-5deg] rounded-[0.9rem] border border-[#e7c070] bg-butter px-3 py-3 text-left shadow-[0_12px_22px_-18px_rgba(90,55,22,0.45)] transition-transform hover:-translate-y-1 hover:rotate-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:left-[9%] sm:top-[20rem] md:left-[15%] md:top-[18rem]"
              >
                <StickyNote className="mb-2 size-4 text-foreground/70" />
                <span className="block break-words text-sm font-semibold leading-5 text-foreground">tiny idea before lunch</span>
              </button>

              <button
                type="button"
                onClick={(event) => pop(event, "Chérie")}
                className="absolute right-[8%] top-[28.7rem] z-20 w-[9rem] rotate-[4deg] rounded-[1rem] border border-[#e9b9cc] bg-card px-3 py-3 text-left shadow-[0_12px_24px_-18px_rgba(127,68,92,0.45)] transition-transform hover:-translate-y-1 hover:rotate-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-[11%] sm:top-[20.2rem] md:right-[16%] md:top-[18rem]"
              >
                <span className="mb-2 flex items-center gap-1.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-rose">
                  <Ticket className="size-3.5" />
                  playlist
                </span>
                <span className="block truncate font-serif text-base text-foreground">Chérie</span>
                <span className="mt-1 block text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  desk loop
                </span>
              </button>

              <button
                type="button"
                onClick={(event) => pop(event, "tea break")}
                className="absolute left-1/2 top-[25.2rem] z-20 flex size-24 -translate-x-1/2 items-center justify-center rounded-full border border-[#e7c6b8] bg-[#fff4c5] shadow-[0_18px_26px_-22px_rgba(94,62,36,0.45)] transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:left-1/2 sm:top-[18.8rem] md:left-[49%] md:top-[17.4rem]"
                aria-label="Pop tea break sticker"
              >
                <span className="steam steam-a" />
                <span className="steam steam-b" />
                <span className="relative grid size-16 place-items-center rounded-full border-4 border-[#f6b9cc] bg-[#fffdf8] text-rose">
                  <Coffee className="size-7" />
                </span>
              </button>

              <div className="absolute left-1/2 top-[14.2rem] z-0 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-card/82 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-rose scrapbook-shadow sm:flex md:top-[14.8rem]">
                <WandSparkles className="size-3.5" />
                today&apos;s mood: building
              </div>
            </div>
          </div>

          <style jsx>{`
            .desk-mat {
              background-image:
                linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(255, 245, 229, 0.5)),
                radial-gradient(circle at center, rgba(154, 104, 116, 0.13) 0 1.2px, transparent 1.4px);
              background-size: auto, 22px 22px;
            }

            .steam {
              position: absolute;
              top: 0.2rem;
              width: 0.42rem;
              height: 1.8rem;
              border-radius: 999px;
              border-left: 2px solid rgba(198, 96, 144, 0.5);
              opacity: 0;
              animation: desk-steam 2.4s ease-in-out infinite;
            }

            .steam-a {
              left: 2.4rem;
              animation-delay: 0s;
            }

            .steam-b {
              right: 2.6rem;
              animation-delay: 0.55s;
            }

            @keyframes desk-steam {
              0% {
                opacity: 0;
                transform: translateY(8px) rotate(-8deg);
              }
              35% {
                opacity: 0.8;
              }
              100% {
                opacity: 0;
                transform: translateY(-14px) rotate(10deg);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .steam {
                animation: none;
                opacity: 0;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}
