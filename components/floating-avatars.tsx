"use client"

import { useEffect, useState } from "react"

type StickerVariant = "sun" | "bow" | "star" | "cat" | "flower-girl" | "strawberry"

type FloatingSticker = {
  id: string
  variant: StickerVariant
  top: number
  left: number
  size: number
  rotate: number
  duration: number
  delay: number
}

const variants: StickerVariant[] = ["sun", "bow", "star", "cat", "flower-girl", "strawberry"]

function makeStickers(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    id: `sticker-${index}`,
    variant: variants[index % variants.length],
    top: 8 + Math.random() * 84,
    left: 6 + Math.random() * 88,
    size: 72 + Math.round(Math.random() * 58),
    rotate: -16 + Math.random() * 32,
    duration: 4.8 + Math.random() * 3.4,
    delay: Math.random() * 2.4,
  }))
}

function StickerSvg({ variant }: { variant: StickerVariant }) {
  switch (variant) {
    case "sun":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
          <circle cx="60" cy="60" r="42" fill="#ffd96d" stroke="#9a6874" strokeWidth="4" />
          <circle cx="48" cy="54" r="4" fill="#4a3a3f" />
          <circle cx="72" cy="54" r="4" fill="#4a3a3f" />
          <path d="M48 74 Q60 84 72 74" fill="none" stroke="#9a6874" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    case "bow":
      return (
        <svg viewBox="0 0 140 110" className="h-full w-full" aria-hidden="true">
          <path
            d="M68 50 C34 18 6 28 10 56 C13 77 35 83 54 68 C48 92 58 104 70 84 C82 104 92 92 86 68 C105 83 127 77 130 56 C134 28 106 18 72 50 Z"
            fill="#ffb6cf"
            stroke="#9a6874"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path d="M68 48 L62 84 M72 48 L80 84" stroke="#d66f98" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case "star":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
          <path
            d="M60 14 L73 43 L105 47 L81 68 L88 101 L60 84 L32 101 L39 68 L15 47 L47 43 Z"
            fill="#f0c44b"
            stroke="#9a6874"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "cat":
      return (
        <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
          <path
            d="M34 46 Q56 22 98 24 Q132 25 144 52 Q141 77 112 80 Q107 99 91 100 Q68 102 60 84 Q36 84 22 72 Q21 54 34 46 Z"
            fill="#f4df63"
            stroke="#9a6874"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path d="M56 41 L66 26 L73 43 M104 41 L116 28 L120 46" fill="#eec84f" stroke="#9a6874" strokeWidth="3" />
          <circle cx="72" cy="58" r="4" fill="#4a3a3f" />
          <circle cx="95" cy="58" r="4" fill="#4a3a3f" />
          <path d="M79 67 Q84 71 89 67" fill="none" stroke="#9a6874" strokeWidth="3" strokeLinecap="round" />
          <path d="M144 58 Q158 58 158 75 Q158 91 144 91" fill="none" stroke="#9a6874" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    case "flower-girl":
      return (
        <svg viewBox="0 0 120 150" className="h-full w-full" aria-hidden="true">
          <ellipse cx="60" cy="62" rx="38" ry="48" fill="#111" stroke="#9a6874" strokeWidth="4" />
          <rect x="38" y="44" width="44" height="72" rx="22" fill="#fff6f5" stroke="#9a6874" strokeWidth="4" />
          <circle cx="50" cy="66" r="12" fill="#fff" stroke="#9a6874" strokeWidth="3" />
          <circle cx="70" cy="66" r="12" fill="#fff" stroke="#9a6874" strokeWidth="3" />
          <circle cx="50" cy="66" r="5" fill="#2f2025" />
          <circle cx="70" cy="66" r="5" fill="#2f2025" />
          <circle cx="44" cy="82" r="4" fill="#ffb6c8" />
          <circle cx="76" cy="82" r="4" fill="#ffb6c8" />
          <path d="M54 81 Q60 86 66 81" fill="none" stroke="#9a6874" strokeWidth="3" strokeLinecap="round" />
          <path d="M48 110 Q60 122 72 110" fill="none" stroke="#9a6874" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case "strawberry":
      return (
        <svg viewBox="0 0 110 150" className="h-full w-full" aria-hidden="true">
          <rect x="14" y="18" width="82" height="114" rx="12" fill="#f5a0bc" stroke="#9a6874" strokeWidth="4" />
          <text x="55" y="44" textAnchor="middle" fontSize="14" fontWeight="700" fill="#7e4556">
            berry
          </text>
          <path d="M33 82 C38 62 52 52 64 52 C79 52 90 65 92 81 C96 101 81 118 62 118 C43 118 28 102 33 82 Z" fill="#f24a68" stroke="#9a6874" strokeWidth="3" />
          <path d="M62 57 C67 47 78 46 83 53 C74 59 68 63 62 69 C56 63 49 59 40 53 C45 46 57 47 62 57 Z" fill="#80c86d" stroke="#9a6874" strokeWidth="3" />
          <circle cx="50" cy="84" r="2.5" fill="#ffe9a8" />
          <circle cx="69" cy="90" r="2.5" fill="#ffe9a8" />
          <circle cx="58" cy="103" r="2.5" fill="#ffe9a8" />
        </svg>
      )
  }
}

export function FloatingAvatars() {
  const [stickers, setStickers] = useState<FloatingSticker[]>([])

  useEffect(() => {
    const count = window.innerWidth < 768 ? 8 : 14
    setStickers(makeStickers(count))
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {stickers.map((sticker, index) => (
        <div
          key={sticker.id}
          className={`floating-sticker ${index % 3 === 0 ? "drift-a" : index % 3 === 1 ? "drift-b" : "drift-c"}`}
          style={{
            top: `${sticker.top}%`,
            left: `${sticker.left}%`,
            width: `${sticker.size}px`,
            height: `${sticker.size}px`,
            ["--base-rotate" as string]: `${sticker.rotate}deg`,
            animationDuration: `${sticker.duration}s`,
            animationDelay: `${sticker.delay}s`,
          }}
        >
          <StickerSvg variant={sticker.variant} />
        </div>
      ))}

      <style jsx>{`
        .floating-sticker {
          position: absolute;
          opacity: 0.92;
          filter: drop-shadow(0 12px 22px rgba(201, 120, 139, 0.24));
          will-change: transform;
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
