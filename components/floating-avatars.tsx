"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { StickerSvg, type StickerVariant } from "@/components/sticker-svg"

type FloatingSticker = {
  id: string
  variant: StickerVariant
  side: "left" | "right"
  topPercent: number
  leftPercent: number
  size: number
  rotate: number
  duration: number
  delay: number
}

type StickerLine = {
  label: string
  bubble: string
}

type StickerAnchor = {
  variant: StickerVariant
  side: "left" | "right"
  leftPercent: number
  topPercent: number
  size: number
  rotate: number
  duration: number
  delay: number
}

const stickerLines: Record<StickerVariant, StickerLine> = {
  sun: { label: "sun", bubble: "hi hi, i am here." },
  bow: { label: "bow", bubble: "a tiny knot, a tiny sparkle." },
  star: { label: "star", bubble: "make a wish, then keep going." },
  cat: { label: "cat", bubble: "i am guarding the side margins." },
  "flower-girl": { label: "flower girl", bubble: "pretty things belong everywhere." },
  strawberry: { label: "strawberry", bubble: "sweet little thoughts only." },
}

const stickerAnchors: StickerAnchor[] = [
  { variant: "sun", side: "left", leftPercent: 4.8, topPercent: 8, size: 100, rotate: -10, duration: 6.2, delay: 0.1 },
  { variant: "flower-girl", side: "left", leftPercent: 5.2, topPercent: 19, size: 86, rotate: -6, duration: 6.8, delay: 0.8 },
  { variant: "star", side: "left", leftPercent: 7.4, topPercent: 31, size: 118, rotate: 7, duration: 5.6, delay: 0.2 },
  { variant: "bow", side: "left", leftPercent: 4.8, topPercent: 45, size: 92, rotate: -8, duration: 6.7, delay: 1.1 },
  { variant: "cat", side: "left", leftPercent: 7.3, topPercent: 59, size: 108, rotate: 5, duration: 5.9, delay: 0.4 },
  { variant: "sun", side: "left", leftPercent: 4.8, topPercent: 74, size: 86, rotate: -3, duration: 6.5, delay: 1.2 },
  { variant: "flower-girl", side: "left", leftPercent: 7.2, topPercent: 90, size: 100, rotate: 5, duration: 5.9, delay: 0.4 },
  { variant: "bow", side: "right", leftPercent: 90.8, topPercent: 9, size: 92, rotate: 4, duration: 5.8, delay: 0.5 },
  { variant: "cat", side: "right", leftPercent: 90.2, topPercent: 24, size: 110, rotate: -2, duration: 6.4, delay: 0.7 },
  { variant: "strawberry", side: "right", leftPercent: 90.4, topPercent: 39, size: 110, rotate: 10, duration: 6.9, delay: 0.3 },
  { variant: "star", side: "right", leftPercent: 90.1, topPercent: 55, size: 104, rotate: -5, duration: 5.5, delay: 0.2 },
  { variant: "bow", side: "right", leftPercent: 90.5, topPercent: 71, size: 106, rotate: -7, duration: 6.3, delay: 0.6 },
  { variant: "strawberry", side: "right", leftPercent: 90, topPercent: 88, size: 98, rotate: 4, duration: 5.7, delay: 1.4 },
]

export function FloatingAvatars() {
  const stickers = useMemo<FloatingSticker[]>(
    () =>
      stickerAnchors.map((anchor, index) => ({
        id: `sticker-${index}`,
        ...anchor,
      })),
    [],
  )
  const [activeId, setActiveId] = useState<string | null>(null)
  const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const activeSticker = useMemo(
    () => stickers.find((sticker) => sticker.id === activeId) ?? null,
    [activeId, stickers],
  )

  useEffect(() => {
    if (!activeId) {
      return
    }

    if (clearTimer.current) {
      clearTimeout(clearTimer.current)
    }

    clearTimer.current = setTimeout(() => {
      setActiveId(null)
    }, 3500)

    return () => {
      if (clearTimer.current) {
        clearTimeout(clearTimer.current)
      }
    }
  }, [activeId])

  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 hidden h-full overflow-hidden select-none 2xl:block"
      aria-hidden="true"
    >
      {stickers.map((sticker, index) => (
        <button
          key={sticker.id}
          type="button"
          aria-label={`Open dialog from ${sticker.variant}`}
          className={`floating-sticker pointer-events-auto ${index % 3 === 0 ? "drift-a" : index % 3 === 1 ? "drift-b" : "drift-c"}`}
          onClick={() => setActiveId(sticker.id)}
          style={{
            top: `${sticker.topPercent}%`,
            left: `${sticker.leftPercent}%`,
            width: `${sticker.size}px`,
            height: `${sticker.size}px`,
            ["--base-rotate" as string]: `${sticker.rotate}deg`,
            animationDuration: `${sticker.duration}s`,
            animationDelay: `${sticker.delay}s`,
          }}
        >
          <StickerSvg variant={sticker.variant} />
          {activeSticker?.id === sticker.id && (
            <span
              className={`absolute ${
                sticker.side === "right" ? "right-full mr-3" : "left-full ml-3"
              } top-1/2 max-w-[11rem] -translate-y-1/2 rounded-[1.5rem] border border-border/50 bg-card px-3.5 py-2.5 text-left text-sm font-medium text-foreground shadow-[0_14px_30px_-18px_rgba(0,0,0,0.35)]`}
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-rose">
                {stickerLines[sticker.variant].label}
              </span>
              <span className="mt-1 block leading-snug">{stickerLines[sticker.variant].bubble}</span>
            </span>
          )}
        </button>
      ))}

      <style jsx>{`
        .floating-sticker {
          position: absolute;
          opacity: 0.92;
          filter: drop-shadow(0 12px 22px rgba(201, 120, 139, 0.24));
          will-change: transform;
          border: 0;
          background: transparent;
          padding: 0;
          cursor: pointer;
          touch-action: manipulation;
        }

        .drift-a {
          animation: driftA ease-in-out infinite;
        }

        .drift-b {
          animation: driftB ease-in-out infinite;
        }

        .drift-c {
          animation: driftC ease-in-out infinite;
        }

        @keyframes driftA {
          0%, 100% { transform: translate(-50%, -50%) rotate(calc(var(--base-rotate) - 4deg)) translateY(0px); }
          50% { transform: translate(-50%, -50%) rotate(calc(var(--base-rotate) + 4deg)) translateY(-16px); }
        }

        @keyframes driftB {
          0%, 100% { transform: translate(-50%, -50%) rotate(calc(var(--base-rotate) + 3deg)) translateY(0px) scale(1); }
          50% { transform: translate(-50%, -50%) rotate(calc(var(--base-rotate) - 4deg)) translateY(-12px) scale(1.05); }
        }

        @keyframes driftC {
          0%, 100% { transform: translate(-50%, -50%) rotate(calc(var(--base-rotate) - 2deg)) translateY(0px); }
          50% { transform: translate(-50%, -50%) rotate(calc(var(--base-rotate) + 5deg)) translateY(-10px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .drift-a,
          .drift-b,
          .drift-c {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
