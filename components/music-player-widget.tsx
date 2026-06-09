"use client"

import { Music, Music2, Volume2, VolumeX } from "lucide-react"
import { useRef, useState } from "react"
import { StickerSvg } from "@/components/sticker-svg"

const AUDIO_SRC = "/audio/cherie.mp3"
const COVER_SRC = "/audio/cherie-cover.jpg"

const notes = [
  { icon: Music, left: "-1.3rem", top: "-1.4rem", delay: "0s", size: "1.05rem" },
  { icon: Music2, left: "3.5rem", top: "-2.35rem", delay: "0.42s", size: "0.95rem" },
  { icon: Music, left: "6.4rem", top: "0.2rem", delay: "0.8s", size: "1rem" },
  { icon: Music2, left: "1rem", top: "-3rem", delay: "1.1s", size: "0.85rem" },
]

export function MusicWidget() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" onEnded={() => setIsPlaying(false)} />

      <div
        className={`mr-2 flex items-center gap-2 rounded-full border border-border/70 bg-card/95 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] scrapbook-shadow transition-all duration-300 ${
          isPlaying ? "translate-y-0 text-rose opacity-100" : "translate-y-2 text-muted-foreground opacity-0"
        }`}
        aria-hidden={!isPlaying}
      >
        <Volume2 className="size-3.5" />
        music is on!
      </div>

      <button
        type="button"
        onClick={toggleMusic}
        className="group relative flex size-20 items-center justify-center rounded-full border border-white/80 bg-card/95 p-2 scrapbook-shadow transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-24"
        aria-label={isPlaying ? "Stop music" : "Play Chérie"}
        aria-pressed={isPlaying}
      >
        {isPlaying &&
          notes.map(({ icon: Icon, left, top, delay, size }) => (
            <span
              key={`${left}-${top}`}
              className="music-note pointer-events-none absolute text-rose"
              style={{ left, top, animationDelay: delay, fontSize: size }}
            >
              <Icon className="size-full" />
            </span>
          ))}

        <span className="absolute inset-2 opacity-35">
          <StickerSvg variant="flower-girl" />
        </span>
        <span
          className={`relative grid size-[4.1rem] place-items-center overflow-hidden rounded-full border-[3px] border-white bg-card shadow-[0_12px_24px_-18px_rgba(0,0,0,0.5)] sm:size-[5rem] ${
            isPlaying ? "record-spin" : ""
          }`}
        >
          <img src={COVER_SRC} alt="" className="h-full w-full object-cover" draggable={false} />
          <span className="absolute size-3 rounded-full border border-white/80 bg-card/90 sm:size-3.5" />
        </span>
        <span className="absolute -left-1 bottom-1 grid size-7 place-items-center rounded-full border border-white/80 bg-butter text-foreground shadow-sm">
          {isPlaying ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
        </span>
      </button>

      <style jsx>{`
        .record-spin {
          animation: record-spin 3.6s linear infinite;
        }

        .music-note {
          width: 1em;
          height: 1em;
          opacity: 0;
          animation: float-note 2s ease-in-out infinite;
          filter: drop-shadow(0 4px 8px rgba(198, 96, 144, 0.24));
        }

        @keyframes record-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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
          .record-spin,
          .music-note {
            animation: none;
          }

          .music-note {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
