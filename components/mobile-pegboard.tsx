"use client"

import { useMemo, useRef, useState } from "react"
import { StickerSvg, type StickerVariant } from "@/components/sticker-svg"

type PegboardSticker = {
  id: string
  variant: StickerVariant
  label: string
  size: number
  left: number
  top: number
  rotate: number
}

const initialStickers: PegboardSticker[] = [
  { id: "avatar", variant: "flower-girl", label: "Ishita", size: 108, left: 104, top: 104, rotate: -4 },
  { id: "sun", variant: "sun", label: "sun", size: 68, left: 18, top: 30, rotate: -8 },
  { id: "cat", variant: "cat", label: "cat", size: 78, left: 198, top: 38, rotate: 5 },
  { id: "bow", variant: "bow", label: "bow", size: 70, left: 42, top: 218, rotate: 7 },
  { id: "star", variant: "star", label: "star", size: 66, left: 196, top: 208, rotate: -10 },
  { id: "strawberry", variant: "strawberry", label: "berry", size: 68, left: 142, top: 250, rotate: 3 },
]

export function MobilePegboard() {
  const boardRef = useRef<HTMLDivElement | null>(null)
  const dragRef = useRef<{
    id: string
    pointerId: number
    offsetX: number
    offsetY: number
  } | null>(null)
  const [stickers, setStickers] = useState(initialStickers)
  const [activeId, setActiveId] = useState<string | null>(null)

  const activeLabel = useMemo(
    () => stickers.find((sticker) => sticker.id === activeId)?.label ?? null,
    [activeId, stickers],
  )

  const clampPosition = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

  return (
    <div className="mx-auto mt-8 w-full max-w-sm xl:hidden">
      <div className="pegboard relative overflow-hidden rounded-[2.1rem] border border-border/70 px-3 pb-4 pt-5 sm:rounded-[2.4rem] sm:px-4 sm:pb-5 sm:pt-6">
        <span className="absolute left-4 top-4 max-w-[8rem] rotate-[-8deg] rounded-full bg-butter px-3 py-1.5 text-[0.62rem] font-bold uppercase leading-snug tracking-[0.14em] text-foreground scrapbook-shadow">
          pegboard mode
        </span>
        <span className="absolute right-4 top-4 max-w-[8rem] rotate-[6deg] rounded-full bg-card px-3 py-1.5 text-center text-[0.62rem] font-semibold uppercase leading-snug tracking-[0.12em] text-rose scrapbook-shadow">
          drag the charms
        </span>

        <div
          ref={boardRef}
          className="relative mx-auto mt-12 h-[320px] w-full max-w-[292px] rounded-[1.8rem] border border-white/70 bg-[linear-gradient(180deg,#fff8f3,#fff1ea)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_20px_40px_-28px_rgba(0,0,0,0.3)] sm:h-[360px] sm:max-w-[320px] sm:rounded-[2rem]"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(202,166,142,0.18)_0_1.4px,transparent_1.6px)] bg-[length:20px_20px] bg-[position:10px_10px]" />

          {stickers.map((sticker) => (
            <button
              key={sticker.id}
              type="button"
              className={`absolute touch-none bg-transparent p-0 transition-transform ${
                activeId === sticker.id ? "z-20 scale-105" : "z-10"
              }`}
              style={{
                left: sticker.left,
                top: sticker.top,
                width: sticker.size,
                height: sticker.size,
                transform: `rotate(${sticker.rotate}deg)`,
              }}
              onPointerDown={(event) => {
                const board = boardRef.current
                if (!board) return

                const boardRect = board.getBoundingClientRect()
                dragRef.current = {
                  id: sticker.id,
                  pointerId: event.pointerId,
                  offsetX: event.clientX - boardRect.left - sticker.left,
                  offsetY: event.clientY - boardRect.top - sticker.top,
                }

                setActiveId(sticker.id)
                event.currentTarget.setPointerCapture(event.pointerId)
              }}
              onPointerMove={(event) => {
                const board = boardRef.current
                const drag = dragRef.current
                if (!board || !drag || drag.id !== sticker.id || drag.pointerId !== event.pointerId) {
                  return
                }

                const boardRect = board.getBoundingClientRect()
                const nextLeft = clampPosition(event.clientX - boardRect.left - drag.offsetX, 0, boardRect.width - sticker.size)
                const nextTop = clampPosition(event.clientY - boardRect.top - drag.offsetY, 0, boardRect.height - sticker.size)

                setStickers((current) =>
                  current.map((item) =>
                    item.id === sticker.id ? { ...item, left: nextLeft, top: nextTop } : item,
                  ),
                )
              }}
              onPointerUp={(event) => {
                if (dragRef.current?.id === sticker.id && dragRef.current.pointerId === event.pointerId) {
                  dragRef.current = null
                }
                event.currentTarget.releasePointerCapture(event.pointerId)
              }}
              onPointerCancel={(event) => {
                if (dragRef.current?.id === sticker.id && dragRef.current.pointerId === event.pointerId) {
                  dragRef.current = null
                }
              }}
              aria-label={`Move ${sticker.label}`}
            >
              <StickerSvg variant={sticker.variant} />
            </button>
          ))}

          <div className="pointer-events-none absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full bg-card/92 px-3 py-1.5 text-[0.68rem] font-semibold uppercase leading-snug tracking-[0.12em] text-muted-foreground shadow-[0_14px_24px_-20px_rgba(0,0,0,0.4)]">
            {activeLabel ? `moving ${activeLabel}` : "tap + drag"}
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-[16rem] text-center text-[0.9rem] leading-6 text-muted-foreground sm:max-w-[17rem] sm:text-sm">
          A little pegboard corner for the avatar and charms. Rearrange them however you want.
        </p>
      </div>
    </div>
  )
}
