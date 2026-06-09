"use client"

import { Disc3, Music, Music2, Volume2, VolumeX } from "lucide-react"
import { useRef, useState } from "react"
import { StickerSvg, type StickerVariant } from "@/components/sticker-svg"

type Track = {
  title: string
  src: string
  avatar: StickerVariant
}

const tracks: Track[] = [
  { title: "Chérie", src: "/audio/cherie.mp3", avatar: "flower-girl" },
  { title: "Jello", src: "/audio/Jello.mp3", avatar: "sun" },
  { title: "La Madrague", src: "/audio/La Madrague.mp3", avatar: "bow" },
  { title: "Tabun", src: "/audio/たぶん.mp3", avatar: "star" },
  { title: "Caramellow", src: "/audio/Caramellow.mp3", avatar: "strawberry" },
  { title: "Movin..", src: "/audio/Movin..mp3", avatar: "cat" },
  { title: "Wind", src: "/audio/Wind.mp3", avatar: "sun" },
  { title: "Summer", src: "/audio/summer.mp3", avatar: "bow" },
  { title: "Daydream", src: "/audio/Daydream.mp3", avatar: "flower-girl" },
]

const notes = [
  { icon: Music, left: "-1.3rem", top: "-1.4rem", delay: "0s", size: "1.05rem" },
  { icon: Music2, left: "3.5rem", top: "-2.35rem", delay: "0.42s", size: "0.95rem" },
  { icon: Music, left: "6.4rem", top: "0.2rem", delay: "0.8s", size: "1rem" },
  { icon: Music2, left: "1rem", top: "-3rem", delay: "1.1s", size: "0.85rem" },
]

export function MusicWidget() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const selectedTrack = tracks[0]

  const playAudio = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

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

    await playAudio()
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <audio
        ref={audioRef}
        src={selectedTrack.src}
        loop
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <div
        className={`mr-2 flex items-center gap-2 rounded-full border border-border/70 bg-card/95 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] scrapbook-shadow transition-all duration-300 ${
          isPlaying ? "translate-y-0 text-rose opacity-100" : "translate-y-2 text-muted-foreground opacity-0"
        }`}
        aria-hidden={!isPlaying}
      >
        <Volume2 className="size-3.5" />
        music is on!
        <span className="equalizer ml-1 flex h-4 items-end gap-0.5" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </span>
      </div>

      <button
        type="button"
        onClick={toggleMusic}
        className="group relative flex size-20 items-center justify-center rounded-full border border-white/80 bg-card/95 p-2 scrapbook-shadow transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-24"
        aria-label={isPlaying ? "Stop music" : `Play ${selectedTrack.title}`}
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

        <span
          className={`pointer-events-none absolute right-[4.4rem] top-1/2 hidden w-[8.9rem] -translate-y-1/2 rotate-[-3deg] rounded-[1rem] border border-white/80 bg-[#fffaf4] px-3 py-2 text-left scrapbook-shadow transition-all duration-300 sm:block ${
            isPlaying ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
          }`}
          aria-hidden="true"
        >
          <span className="mb-1 flex items-center gap-1.5 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-rose">
            <Disc3 className="size-3" />
            tiny vinyl
          </span>
          <span className="block truncate font-serif text-sm leading-tight text-foreground">{selectedTrack.title}</span>
          <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            now spinning
          </span>
        </span>

        <span
          className="record-face record-spin relative grid size-[4.1rem] place-items-center overflow-hidden rounded-full border-[3px] border-white bg-card shadow-[0_12px_24px_-18px_rgba(0,0,0,0.5)] sm:size-[5rem]"
          style={{ animationPlayState: isPlaying ? "running" : "paused" }}
        >
          <VinylFace avatar={selectedTrack.avatar} />
        </span>
        <span className="absolute -left-1 bottom-1 grid size-7 place-items-center rounded-full border border-white/80 bg-butter text-foreground shadow-sm">
          {isPlaying ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
        </span>
      </button>

      <style jsx>{`
        .record-spin {
          animation: record-spin 3.6s linear infinite;
        }

        .record-face {
          transform-origin: center;
        }

        .equalizer span {
          display: block;
          width: 3px;
          border-radius: 999px;
          background: currentColor;
          animation: equalizer-bounce 0.7s ease-in-out infinite;
        }

        .equalizer span:nth-child(1) {
          height: 8px;
          animation-delay: 0s;
        }

        .equalizer span:nth-child(2) {
          height: 13px;
          animation-delay: 0.12s;
        }

        .equalizer span:nth-child(3) {
          height: 10px;
          animation-delay: 0.24s;
        }

        .equalizer span:nth-child(4) {
          height: 15px;
          animation-delay: 0.36s;
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

        @keyframes equalizer-bounce {
          0%,
          100% {
            transform: scaleY(0.45);
            opacity: 0.55;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .record-spin,
          .music-note,
          .equalizer span {
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

function VinylFace({ avatar }: { avatar: StickerVariant }) {
  return (
    <>
      <span className="absolute inset-0 rounded-full bg-[repeating-radial-gradient(circle_at_center,#2c2228_0_4px,#3f3038_4px_6px)]" />
      <span className="absolute inset-[17%] overflow-hidden rounded-full border-2 border-white/80 bg-[#fff8ee]">
        <span className="absolute inset-1.5">
          <StickerSvg variant={avatar} />
        </span>
      </span>
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_0_27%,rgba(255,255,255,0.24)_28%,transparent_30%,transparent_42%,rgba(255,255,255,0.16)_43%,transparent_45%)]" />
      <span className="absolute size-4 rounded-full border border-white/90 bg-card/95 shadow-sm sm:size-5" />
      <span className="absolute size-1.5 rounded-full bg-rose/75 sm:size-2" />
    </>
  )
}
