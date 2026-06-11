"use client"

import { Disc3, Music, Music2, Volume2, VolumeX } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type Track = {
  title: string
  src: string
  coverSrc: string
  top: number
  side: "left" | "right"
  offset: number
  size: number
  rotate: number
}

const tracks: Track[] = [
  { title: "Chérie", src: "/audio/cherie.mp3", coverSrc: "/audio/cherie-cover.jpg", side: "left", top: 16, offset: 0, size: 72, rotate: -8 },
  { title: "Jello", src: "/audio/Jello.mp3", coverSrc: "/audio/Jello-cover.jpg", side: "right", top: 17, offset: 0, size: 68, rotate: 7 },
  { title: "La Madrague", src: "/audio/La Madrague.mp3", coverSrc: "/audio/La-Madrague-cover.jpg", side: "left", top: 30, offset: 20, size: 76, rotate: -5 },
  { title: "Tabun", src: "/audio/たぶん.mp3", coverSrc: "/audio/たぶん-cover.jpg", side: "right", top: 32, offset: -18, size: 64, rotate: 8 },
  { title: "Caramellow", src: "/audio/Caramellow.mp3", coverSrc: "/audio/Caramellow-cover.jpg", side: "left", top: 48, offset: 4, size: 74, rotate: -7 },
  { title: "Movin..", src: "/audio/Movin..mp3", coverSrc: "/audio/Movin.-cover.jpg", side: "right", top: 50, offset: -8, size: 62, rotate: 5 },
  { title: "Wind", src: "/audio/Wind.mp3", coverSrc: "/audio/Wind-cover.jpg", side: "left", top: 67, offset: 22, size: 68, rotate: -4 },
  { title: "Summer", src: "/audio/summer.mp3", coverSrc: "/audio/summer-cover.jpg", side: "right", top: 70, offset: -16, size: 76, rotate: 6 },
  { title: "Daydream", src: "/audio/Daydream.mp3", coverSrc: "/audio/Daydream-cover.jpg", side: "left", top: 84, offset: 6, size: 70, rotate: -6 },
]

export function MusicWidget() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isOn, setIsOn] = useState(false)
  const [isMobilePickerOpen, setIsMobilePickerOpen] = useState(false)
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0)
  const selectedTrack = tracks[selectedTrackIndex]

  useEffect(() => {
    const savedTrack = window.localStorage.getItem("ish-music-track")
    const savedIsOn = window.localStorage.getItem("ish-music-on")
    const parsedTrack = savedTrack ? Number(savedTrack) : 0

    if (Number.isInteger(parsedTrack) && parsedTrack >= 0 && parsedTrack < tracks.length) {
      setSelectedTrackIndex(parsedTrack)
    }

    setIsOn(savedIsOn === "true")
  }, [])

  useEffect(() => {
    window.localStorage.setItem("ish-music-track", String(selectedTrackIndex))
  }, [selectedTrackIndex])

  useEffect(() => {
    window.localStorage.setItem("ish-music-on", String(isOn))
  }, [isOn])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (!isOn) {
      audio.pause()
      return
    }

    void audio.play().catch(() => {
      audio.pause()
    })
  }, [isOn, selectedTrackIndex])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable

      if (isTyping || event.metaKey || event.ctrlKey || event.altKey || event.key.toLowerCase() !== "m") {
        return
      }

      event.preventDefault()
      setIsOn((current) => !current)
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const toggleMusic = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (isOn) {
      audio.pause()
      setIsOn(false)
      return
    }

    try {
      await audio.play()
      setIsOn(true)
    } catch {
      setIsOn(false)
    }
  }

  const selectTrack = (trackIndex: number) => {
    if (trackIndex === selectedTrackIndex) {
      return
    }

    setSelectedTrackIndex(trackIndex)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={selectedTrack.src}
        loop
        preload="metadata"
        onEnded={() => setIsOn(false)}
      />

      <div className="pointer-events-none absolute inset-0 z-40 hidden sm:block" aria-label="Music vinyl selectors">
        {tracks.map((track, index) => (
          <TrackButton
            key={track.src}
            index={index}
            isPlaying={isOn}
            isSelected={index === selectedTrackIndex}
            onSelect={selectTrack}
            track={track}
            variant="side"
          />
        ))}
      </div>

      {isMobilePickerOpen && (
        <div className="fixed bottom-[6.3rem] right-3 z-50 grid w-[min(calc(100vw-1.5rem),18.5rem)] grid-cols-5 gap-2 rounded-[1.35rem] border border-white/80 bg-card/95 p-3 scrapbook-shadow sm:hidden" aria-label="Mobile music vinyl selectors">
          {tracks.map((track, index) => (
            <TrackButton
              key={track.src}
              index={index}
              isPlaying={isOn}
              isSelected={index === selectedTrackIndex}
              onSelect={(trackIndex) => {
                selectTrack(trackIndex)
                setIsMobilePickerOpen(false)
              }}
              track={track}
              variant="mobile"
            />
          ))}
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <div
        className={`mr-2 flex items-center gap-2 rounded-full border border-border/70 bg-card/95 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] scrapbook-shadow transition-all duration-300 ${
          isOn ? "translate-y-0 text-rose opacity-100" : "translate-y-2 text-muted-foreground opacity-0"
        }`}
        aria-hidden={!isOn}
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

      <div className="relative">
        <button
          type="button"
          onClick={toggleMusic}
          className="group relative flex size-20 items-center justify-center rounded-full border border-white/80 bg-card/95 p-2 scrapbook-shadow transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-24"
          aria-label={isOn ? "Stop music" : `Play ${selectedTrack.title}`}
          aria-pressed={isOn}
        >
          {isOn && <FloatingNotes className="music-note" />}
          {isOn && (
            <span className="play-phrases mobile-player-phrases sm:hidden" aria-hidden="true">
              <span>playing</span>
              <span>Omm is a fun guy</span>
              <span>heaven is here</span>
            </span>
          )}

          <span
            className={`pointer-events-none absolute right-[4.4rem] top-1/2 hidden w-[8.9rem] -translate-y-1/2 rotate-[-3deg] rounded-[1rem] border border-white/80 bg-[#fffaf4] px-3 py-2 text-left scrapbook-shadow transition-all duration-300 sm:block ${
              isOn ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
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

          <span className="record-face record-spin relative grid size-[4.1rem] place-items-center sm:size-[5rem]" style={{ animationPlayState: isOn ? "running" : "paused" }}>
            <VinylFace track={selectedTrack} />
          </span>
        </button>
        <button
          type="button"
          onClick={() => setIsMobilePickerOpen((current) => !current)}
          className="absolute -right-1 bottom-1 grid size-7 place-items-center rounded-full border border-white/80 bg-card text-foreground shadow-sm transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:hidden"
          aria-label="Choose music"
          aria-expanded={isMobilePickerOpen}
        >
          <Disc3 className="size-4" />
        </button>
        <span className="absolute -left-1 bottom-1 grid size-7 place-items-center rounded-full border border-white/80 bg-butter text-foreground shadow-sm">
          {isOn ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
        </span>
      </div>

      <style jsx global>{`
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
          pointer-events: none;
          position: absolute;
          width: 1em;
          height: 1em;
          color: oklch(0.82 0.085 355);
          opacity: 0;
          animation: float-note 2s ease-in-out infinite;
          filter: drop-shadow(0 4px 8px rgba(198, 96, 144, 0.24));
        }

        .music-note-a {
          left: -1.3rem;
          top: -1.4rem;
          font-size: 1.05rem;
          animation-delay: 0s;
        }

        .music-note-b {
          left: 3.5rem;
          top: -2.35rem;
          font-size: 0.95rem;
          animation-delay: 0.42s;
        }

        .music-note-c {
          left: 6.4rem;
          top: 0.2rem;
          font-size: 1rem;
          animation-delay: 0.8s;
        }

        .track-disc {
          opacity: 0.88;
          transform: translate(-50%, -50%) rotate(var(--track-rotate));
          filter: drop-shadow(0 14px 18px rgba(58, 43, 50, 0.2));
          animation: track-disc-drift 4.8s ease-in-out infinite;
          animation-delay: var(--track-delay);
          touch-action: manipulation;
        }

        .track-disc-mobile {
          position: relative;
          flex: 0 0 auto;
          width: 3rem;
          height: 3rem;
          transform: rotate(var(--track-rotate));
        }

        .track-disc-mobile:hover,
        .track-disc-mobile:focus-visible {
          transform: translateY(-3px) rotate(calc(var(--track-rotate) * -0.45)) scale(1.08);
        }

        .track-disc:hover,
        .track-disc:focus-visible {
          opacity: 1;
          transform: translate(-50%, -58%) rotate(calc(var(--track-rotate) * -0.45)) scale(1.12);
          filter: drop-shadow(0 20px 26px rgba(58, 43, 50, 0.28));
        }

        .track-disc.selected {
          opacity: 1;
          transform: translate(-50%, -58%) rotate(calc(var(--track-rotate) * -0.35)) scale(1.12);
          filter: drop-shadow(0 20px 26px rgba(58, 43, 50, 0.28));
        }

        .track-disc-mobile.selected {
          transform: translateY(-3px) rotate(calc(var(--track-rotate) * -0.35)) scale(1.08);
        }

        .track-disc.selected::before {
          position: absolute;
          inset: -0.35rem;
          border: 2px solid rgba(236, 173, 202, 0.85);
          border-radius: 999px;
          background: rgba(255, 250, 244, 0.58);
          content: "";
        }

        .disc-note {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          width: 0.95rem;
          height: 0.95rem;
          color: oklch(0.82 0.085 355);
          opacity: 0;
          filter: drop-shadow(0 4px 8px rgba(198, 96, 144, 0.24));
        }

        .disc-note-a {
          left: -0.65rem;
          top: -0.55rem;
          animation-delay: 0s;
        }

        .disc-note-b {
          right: -0.7rem;
          top: 0.05rem;
          animation-delay: 0.55s;
        }

        .disc-note-c {
          left: 48%;
          bottom: -0.35rem;
          width: 0.78rem;
          height: 0.78rem;
          animation-delay: 1.1s;
        }

        .track-disc.is-emitting .disc-note {
          animation: disc-note-float 2.2s ease-in-out infinite;
        }

        .play-phrases {
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 5;
        }

        .play-phrases span {
          position: absolute;
          display: block;
          width: max-content;
          max-width: 9.5rem;
          color: oklch(0.82 0.085 355);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          line-height: 1;
          opacity: 0;
          text-transform: uppercase;
          animation: play-phrase-float 4.8s ease-in-out infinite;
          filter: drop-shadow(0 4px 8px rgba(198, 96, 144, 0.24));
          text-shadow:
            0 1px 0 rgba(255, 255, 255, 0.82),
            0 8px 18px rgba(198, 96, 144, 0.18);
        }

        .play-phrases span:nth-child(1) {
          left: -1.6rem;
          top: -0.7rem;
        }

        .play-phrases span:nth-child(2) {
          right: -2.2rem;
          top: 0.15rem;
          animation-delay: 1.6s;
        }

        .play-phrases span:nth-child(3) {
          left: 42%;
          bottom: -0.35rem;
          animation-delay: 3.2s;
        }

        .mobile-player-phrases span:nth-child(1) {
          left: -1rem;
          top: -1rem;
        }

        .mobile-player-phrases span:nth-child(2) {
          right: -1.2rem;
          top: 0.2rem;
        }

        .mobile-player-phrases span:nth-child(3) {
          left: 32%;
          bottom: -0.8rem;
        }

        @keyframes play-phrase-float {
          0% {
            opacity: 0;
            transform: translateY(8px) rotate(-8deg) scale(0.78);
          }
          18%,
          64% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-28px) rotate(10deg) scale(1.04);
          }
        }

        @keyframes track-disc-drift {
          0%,
          100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -5px;
          }
        }

        @keyframes disc-note-float {
          0% {
            opacity: 0;
            transform: translateY(8px) rotate(-8deg) scale(0.75);
          }
          25%,
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-18px) rotate(12deg) scale(1.08);
          }
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
          .track-disc,
          .disc-note,
          .equalizer span {
            animation: none;
          }

          .music-note,
          .track-disc.is-emitting .disc-note {
            opacity: 1;
          }
        }

        @media (min-width: 1280px) {
          .track-disc {
            margin-inline: 1.4rem;
          }
        }

        @media (min-width: 1536px) {
          .track-disc {
            margin-inline: 2.2rem;
          }
        }
      `}</style>
      </div>
    </>
  )
}

function FloatingNotes({ className }: { className: string }) {
  return (
    <>
      <span className={`${className} ${className}-a`} aria-hidden="true">
        <Music className="h-full w-full" />
      </span>
      <span className={`${className} ${className}-b`} aria-hidden="true">
        <Music2 className="h-full w-full" />
      </span>
      <span className={`${className} ${className}-c`} aria-hidden="true">
        <Music className="h-full w-full" />
      </span>
    </>
  )
}

function TrackButton({
  index,
  isPlaying,
  isSelected,
  onSelect,
  track,
  variant,
}: {
  index: number
  isPlaying: boolean
  isSelected: boolean
  onSelect: (trackIndex: number) => void
  track: Track
  variant: "side" | "mobile"
}) {
  const isSide = variant === "side"
  const style = isSide
    ? {
        top: `${track.top}%`,
        [track.side]: "clamp(1.4rem, 4vw, 4.25rem)",
        width: `${track.size}px`,
        height: `${track.size}px`,
        marginInline: `${Math.abs(track.offset)}px`,
        ["--track-rotate" as string]: `${track.rotate}deg`,
        ["--track-delay" as string]: `${index * -0.18}s`,
      }
    : {
        ["--track-rotate" as string]: `${track.rotate}deg`,
        ["--track-delay" as string]: `${index * -0.18}s`,
      }

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      className={`track-disc group/track pointer-events-auto grid aspect-square place-items-center border-0 bg-transparent p-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        isSide ? "absolute" : "track-disc-mobile"
      } ${isSelected ? "selected" : ""} ${isPlaying || isSelected ? "is-emitting" : ""}`}
      data-in-view="true"
      data-playing={isPlaying}
      data-track-index={index}
      style={style}
      aria-label={`Select ${track.title}`}
      aria-pressed={isSelected}
    >
      <TrackDisc track={track} />
      <FloatingNotes className="disc-note" />
      {isPlaying && isSelected && (
        <span className="play-phrases" aria-hidden="true">
          <span>playing</span>
          <span>Omm is a fun guy</span>
          <span>heaven is here</span>
        </span>
      )}
      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-border/60 bg-card/95 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-foreground shadow-sm group-hover/track:block group-focus-visible/track:block">
        {track.title}
      </span>
    </button>
  )
}

function VinylFace({ track }: { track: Track }) {
  return <TrackDisc track={track} />
}

function TrackDisc({ track }: { track: Track }) {
  return (
    <span className="relative grid aspect-square h-full w-full place-items-center rounded-full border-2 border-white bg-[#2b2229] shadow-[inset_0_0_0_5px_rgba(255,255,255,0.08)]">
      <span className="absolute inset-1 rounded-full bg-[repeating-radial-gradient(circle_at_center,#1f171d_0_4px,#3b3038_4px_6px,#1f171d_6px_10px)]" />
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_0_27%,rgba(255,255,255,0.2)_28%,transparent_31%,transparent_43%,rgba(255,255,255,0.12)_44%,transparent_47%)]" />
      <span className="relative aspect-square w-[58%] overflow-hidden rounded-full border border-white/85 bg-card shadow-[0_8px_14px_-12px_rgba(0,0,0,0.7)]">
        <img src={track.coverSrc} alt="" className="h-full w-full object-cover" draggable={false} />
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.36),transparent_42%,rgba(0,0,0,0.18))]" />
      </span>
    </span>
  )
}
