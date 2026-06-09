"use client"

import { Music, Music2, Volume2, VolumeX } from "lucide-react"
import { useState } from "react"
import { StickerSvg } from "@/components/sticker-svg"

const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/track/5DgQDZJS1CCM78FzC3Res0?utm_source=generator"

const notes = [
  { icon: Music, left: "-1.2rem", top: "-1.5rem", delay: "0s", size: "1.05rem" },
  { icon: Music2, left: "3.6rem", top: "-2.4rem", delay: "0.45s", size: "0.95rem" },
  { icon: Music, left: "6.5rem", top: "0.6rem", delay: "0.85s", size: "1rem" },
]

export function MusicWidget() {
  const [isOn, setIsOn] = useState(true)

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <div
        className={`relative transition-all duration-300 ${
          isOn ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
        aria-hidden={!isOn}
      >
        <div className="mb-2 mr-2 inline-flex rotate-2 items-center gap-1.5 rounded-full border border-border/70 bg-card/95 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-rose scrapbook-shadow">
          <Volume2 className="size-3.5" />
          music is on!
        </div>
        <div className="w-[18rem] max-w-[calc(100vw-2rem)] overflow-hidden rounded-[1.1rem] border border-white/75 bg-card/95 p-1.5 scrapbook-shadow">
          <iframe
            title="Spotify music player"
            src={SPOTIFY_EMBED_URL}
            width="100%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block rounded-[0.85rem]"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOn((current) => !current)}
        className="group relative flex size-20 items-center justify-center rounded-full border border-white/80 bg-card/95 p-2 scrapbook-shadow transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-24"
        aria-label={isOn ? "Stop music" : "Turn music on"}
        aria-pressed={isOn}
      >
        {isOn &&
          notes.map(({ icon: Icon, left, top, delay, size }) => (
            <span
              key={`${left}-${top}`}
              className="music-note pointer-events-none absolute text-rose"
              style={{ left, top, animationDelay: delay, fontSize: size }}
            >
              <Icon className="size-full" />
            </span>
          ))}

        <span className="block h-full w-full transition-transform group-hover:scale-105">
          <StickerSvg variant="flower-girl" />
        </span>
        <span className="absolute -left-1 bottom-1 grid size-7 place-items-center rounded-full border border-white/80 bg-butter text-foreground shadow-sm">
          {isOn ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
        </span>
      </button>

      <style jsx>{`
        .music-note {
          width: 1em;
          height: 1em;
          opacity: 0;
          animation: float-note 2s ease-in-out infinite;
          filter: drop-shadow(0 4px 8px rgba(198, 96, 144, 0.24));
        }

        @keyframes float-note {
          0% {
            opacity: 0;
            transform: translateY(10px) rotate(-8deg) scale(0.8);
          }
          25%,
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-18px) rotate(12deg) scale(1.12);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .music-note {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
