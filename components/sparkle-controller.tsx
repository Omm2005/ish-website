"use client"

import { useEffect, useState } from "react"
import { SparkleBurst } from "@/components/sparkle-burst"

const SPARKLE_EVENT = "ishita:sparkle"

export function SparkleController() {
  const [active, setActive] = useState(false)

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

  return <SparkleBurst active={active} />
}

export function triggerSparkles() {
  window.dispatchEvent(new Event(SPARKLE_EVENT))
}
