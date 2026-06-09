"use client"

import type { CSSProperties } from "react"
import { useEffect, useState } from "react"
import { SparkleBurst } from "@/components/sparkle-burst"

const SPARKLE_EVENT = "ishita:sparkle"
const STICKER_POP_EVENT = "ishita:sticker-pop"
const CLICK_STAR_LIFETIME = 1200
const CLICK_STAR_COUNT = 12
const STICKER_POP_LIFETIME = 1350
const SCREEN_CONFETTI_COUNT = 90
const SPAM_CLICK_COUNT = 6
const SPAM_CLICK_WINDOW = 900
const SCREEN_CONFETTI_COOLDOWN = 1600

type ClickStar = {
  id: number
  x: number
  y: number
  drift: number
  lift: number
  size: number
  delay: number
  rotate: number
}

type StickerPop = {
  id: number
  x: number
  y: number
  label: string
  drift: number
  lift: number
  rotate: number
  delay: number
}

export function SparkleController() {
  const [active, setActive] = useState(false)
  const [clickStars, setClickStars] = useState<ClickStar[]>([])
  const [stickerPops, setStickerPops] = useState<StickerPop[]>([])

  useEffect(() => {
    const trigger = () => {
      setActive(true)
    }

    window.addEventListener(SPARKLE_EVENT, trigger)
    return () => window.removeEventListener(SPARKLE_EVENT, trigger)
  }, [])

  useEffect(() => {
    if (!active) {
      return
    }

    const timer = setTimeout(() => setActive(false), 2400)
    return () => clearTimeout(timer)
  }, [active])

  useEffect(() => {
    let nextId = 0
    let clickTimes: number[] = []
    let lastScreenConfettiAt = 0

    const createStars = (x: number, y: number, count: number, delayStep = 12) => {
      return Array.from({ length: count }, (_, index) => {
        const angle = -155 + (310 / CLICK_STAR_COUNT) * index + (Math.random() * 16 - 8)
        const distance = 42 + Math.random() * 58
        const radians = (angle * Math.PI) / 180

        return {
          id: nextId++,
          x,
          y,
          drift: Math.cos(radians) * distance,
          lift: Math.sin(radians) * distance,
          size: 9 + Math.random() * 12,
          delay: index * delayStep,
          rotate: (Math.random() > 0.5 ? 1 : -1) * (140 + Math.random() * 160),
        }
      })
    }

    const createScreenConfetti = () => {
      return Array.from({ length: SCREEN_CONFETTI_COUNT }, () => {
        const angle = Math.random() * 360
        const distance = 24 + Math.random() * 74
        const radians = (angle * Math.PI) / 180

        return {
          id: nextId++,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          drift: Math.cos(radians) * distance,
          lift: Math.sin(radians) * distance,
          size: 8 + Math.random() * 15,
          delay: Math.random() * 420,
          rotate: (Math.random() > 0.5 ? 1 : -1) * (160 + Math.random() * 220),
        }
      })
    }

    const dropStars = (event: PointerEvent) => {
      const now = window.performance.now()
      clickTimes = [...clickTimes.filter((time) => now - time < SPAM_CLICK_WINDOW), now]

      const localStars = createStars(event.clientX, event.clientY, CLICK_STAR_COUNT)
      const screenStars =
        clickTimes.length >= SPAM_CLICK_COUNT && now - lastScreenConfettiAt > SCREEN_CONFETTI_COOLDOWN
          ? createScreenConfetti()
          : []
      const stars = [...localStars, ...screenStars]

      if (screenStars.length > 0) {
        lastScreenConfettiAt = now
        clickTimes = []
      }

      setClickStars((current) => [...current.slice(-120), ...stars])

      window.setTimeout(() => {
        setClickStars((current) => current.filter((star) => !stars.some((newStar) => newStar.id === star.id)))
      }, CLICK_STAR_LIFETIME + 500)
    }

    window.addEventListener("pointerdown", dropStars, { passive: true })
    return () => window.removeEventListener("pointerdown", dropStars)
  }, [])

  useEffect(() => {
    let nextPopId = 0

    const showStickerPop = (event: Event) => {
      const { x, y, label } = (event as CustomEvent<{ x: number; y: number; label: string }>).detail
      const pops = Array.from({ length: 5 }, (_, index) => {
        const angle = -145 + index * 72
        const distance = 34 + index * 7
        const radians = (angle * Math.PI) / 180

        return {
          id: nextPopId++,
          x,
          y,
          label,
          drift: Math.cos(radians) * distance,
          lift: Math.sin(radians) * distance,
          rotate: (index % 2 === 0 ? 1 : -1) * (16 + index * 8),
          delay: index * 24,
        }
      })

      setStickerPops((current) => [...current.slice(-40), ...pops])

      window.setTimeout(() => {
        setStickerPops((current) => current.filter((pop) => !pops.some((newPop) => newPop.id === pop.id)))
      }, STICKER_POP_LIFETIME + 300)
    }

    window.addEventListener(STICKER_POP_EVENT, showStickerPop)
    return () => window.removeEventListener(STICKER_POP_EVENT, showStickerPop)
  }, [])

  return (
    <>
      <SparkleBurst active={active} />
      <ClickStarFall stars={clickStars} />
      <StickerPopFall pops={stickerPops} />
    </>
  )
}

export function triggerSparkles() {
  window.dispatchEvent(new Event(SPARKLE_EVENT))
}

export function triggerStickerPop(event: { clientX: number; clientY: number }, label = "so cute") {
  window.dispatchEvent(
    new CustomEvent(STICKER_POP_EVENT, {
      detail: {
        x: event.clientX,
        y: event.clientY,
        label,
      },
    }),
  )
}

function ClickStarFall({ stars }: { stars: ClickStar[] }) {
  if (stars.length === 0) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="click-star absolute block"
          style={
            {
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              "--star-drift": `${star.drift}px`,
              "--star-lift": `${star.lift}px`,
              "--star-delay": `${star.delay}ms`,
              "--star-rotate": `${star.rotate}deg`,
            } as CSSProperties
          }
        >
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <path
              d="M50 7 L61 36 L92 40 L69 60 L76 91 L50 74 L24 91 L31 60 L8 40 L39 36 Z"
              fill="#f4a8c8"
              stroke="#ffe2ef"
              strokeWidth="7"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ))}

      <style jsx>{`
        .click-star {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.4);
          animation: click-star-fall ${CLICK_STAR_LIFETIME}ms cubic-bezier(0.16, 0.84, 0.3, 1) var(--star-delay) forwards;
          filter:
            drop-shadow(0 0 7px rgba(255, 196, 222, 0.95))
            drop-shadow(0 5px 9px rgba(150, 72, 112, 0.22));
        }

        @keyframes click-star-fall {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.25) rotate(0deg);
          }
          12% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05) rotate(calc(var(--star-rotate) * 0.12));
          }
          62% {
            opacity: 0.9;
          }
          100% {
            opacity: 0;
            transform: translate(calc(-50% + var(--star-drift)), calc(-50% + var(--star-lift))) scale(0.65)
              rotate(var(--star-rotate));
          }
        }
      `}</style>
    </div>
  )
}

function StickerPopFall({ pops }: { pops: StickerPop[] }) {
  if (pops.length === 0) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[75] overflow-hidden" aria-hidden="true">
      {pops.map((pop, index) => (
        <span
          key={pop.id}
          className={`sticker-pop absolute ${index % 2 === 0 ? "sticker-label" : "sticker-heart"}`}
          style={
            {
              left: pop.x,
              top: pop.y,
              "--pop-drift": `${pop.drift}px`,
              "--pop-lift": `${pop.lift}px`,
              "--pop-rotate": `${pop.rotate}deg`,
              "--pop-delay": `${pop.delay}ms`,
            } as CSSProperties
          }
        >
          {index % 2 === 0 ? (
            pop.label
          ) : (
            <svg viewBox="0 0 80 72" className="h-full w-full" aria-hidden="true">
              <path
                d="M40 64 C22 49 9 38 9 24 C9 13 17 7 27 7 C33 7 37 10 40 15 C43 10 48 7 54 7 C64 7 71 13 71 24 C71 38 58 49 40 64 Z"
                fill="#f7a6c4"
                stroke="#fff0f6"
                strokeWidth="5"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      ))}

      <style jsx>{`
        .sticker-pop {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.7) rotate(0deg);
          animation: sticker-pop ${STICKER_POP_LIFETIME}ms cubic-bezier(0.16, 0.84, 0.3, 1) var(--pop-delay) forwards;
          filter: drop-shadow(0 8px 13px rgba(150, 72, 112, 0.2));
        }

        .sticker-label {
          min-width: max-content;
          border: 1px solid rgba(154, 104, 116, 0.22);
          border-radius: 999px;
          background: rgba(255, 250, 238, 0.96);
          color: #c86090;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          padding: 0.34rem 0.58rem;
          text-transform: uppercase;
        }

        .sticker-heart {
          width: 1.25rem;
          height: 1.15rem;
        }

        @keyframes sticker-pop {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5) rotate(0deg);
          }
          16% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05) rotate(calc(var(--pop-rotate) * 0.25));
          }
          72% {
            opacity: 0.95;
          }
          100% {
            opacity: 0;
            transform: translate(calc(-50% + var(--pop-drift)), calc(-50% + var(--pop-lift))) scale(0.88)
              rotate(var(--pop-rotate));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sticker-pop {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
