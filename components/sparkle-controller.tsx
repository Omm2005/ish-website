"use client"

import type { CSSProperties } from "react"
import { useEffect, useState } from "react"
import { SparkleBurst } from "@/components/sparkle-burst"

const SPARKLE_EVENT = "ishita:sparkle"
const CLICK_STAR_LIFETIME = 1200
const CLICK_STAR_COUNT = 12
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

export function SparkleController() {
  const [active, setActive] = useState(false)
  const [clickStars, setClickStars] = useState<ClickStar[]>([])

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
          x: event.clientX,
          y: event.clientY,
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

  return (
    <>
      <SparkleBurst active={active} />
      <ClickStarFall stars={clickStars} />
    </>
  )
}

export function triggerSparkles() {
  window.dispatchEvent(new Event(SPARKLE_EVENT))
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
