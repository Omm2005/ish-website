"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const dialogLines = ["Hi there, how are you?", "I am Om...", "I hang here because it's fun"]

export function FloatingPixelAvatar() {
  const [isOpen, setIsOpen] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)
  const activeLine = dialogLines[lineIndex]
  const activeLineWidth = `${activeLine.length + 1}ch`

  const handleClick = () => {
    setIsOpen((current) => {
      if (!current) {
        setLineIndex(0)
      }

      return !current
    })
  }

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const interval = window.setInterval(() => {
      setLineIndex((current) => (current + 1) % dialogLines.length)
    }, 1800)

    return () => window.clearInterval(interval)
  }, [isOpen])

  return (
    <div className="pointer-events-none fixed bottom-3 left-3 z-50 w-[50px] select-none sm:bottom-5 sm:left-5 sm:w-[62px] md:w-[72px] lg:w-[78px]">
      {isOpen && (
        <div className="absolute bottom-[76%] left-[74%] w-fit max-w-[calc(100vw-6.5rem)] border-2 border-[#241818] bg-[#fff7ef] px-2.5 py-2 font-mono text-[11px] font-bold leading-snug text-[#241818] shadow-[4px_4px_0_rgba(36,24,24,0.22)] sm:text-xs">
          <span
            key={lineIndex}
            className="dialog-text"
            style={
              {
                "--line-width": activeLineWidth,
                "--line-steps": activeLine.length,
              } as React.CSSProperties
            }
          >
            {activeLine}
          </span>
          <span className="absolute -bottom-2 left-4 h-3 w-3 border-b-2 border-r-2 border-[#241818] bg-[#fff7ef] shadow-[3px_3px_0_rgba(36,24,24,0.18)]" />
        </div>
      )}
      <button
        type="button"
        className="pixel-avatar-button pointer-events-auto relative block w-full border-0 bg-transparent p-0"
        aria-label={isOpen ? "Hide Om's pixel character chat" : "Start Om's pixel character chat"}
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        {!isOpen && (
          <span className="click-cue absolute bottom-[96%] left-16 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#6f5a5a]/55 sm:bottom-[100%] sm:text-[11px]">
            <span>click Om</span>
          </span>
        )}
        <Image
          src="/images/floating-pixel-avatar.webp"
          alt=""
          width={1024}
          height={1536}
          sizes="(min-width: 1024px) 78px, (min-width: 768px) 72px, (min-width: 640px) 62px, 50px"
          className="h-auto w-full drop-shadow-[0_12px_20px_rgba(72,45,48,0.28)] [image-rendering:pixelated]"
          draggable={false}
        />
      </button>
      <style jsx>{`
        .click-cue {
          animation: click-cue-pulse 1.45s ease-in-out infinite;
        }

        .dialog-text {
          display: inline-block;
          max-width: 0;
          overflow: hidden;
          vertical-align: bottom;
          white-space: nowrap;
          animation: dialog-type 0.8s steps(var(--line-steps), end) forwards;
        }

        .dialog-text::after {
          content: "";
          display: inline-block;
          height: 1em;
          margin-left: 2px;
          vertical-align: -0.1em;
          width: 2px;
          background: #241818;
          animation: text-caret 0.7s steps(1, end) infinite;
        }

        @keyframes click-cue-pulse {
          0%,
          100% {
            opacity: 0.42;
            transform: translateX(-50%) translateY(0);
          }
          50% {
            opacity: 0.68;
            transform: translateX(-50%) translateY(-2px);
          }
        }

        @keyframes dialog-type {
          from {
            max-width: 0;
          }
          to {
            max-width: var(--line-width);
          }
        }

        @keyframes text-caret {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .click-cue,
          .dialog-text,
          .dialog-text::after {
            animation: none;
          }

          .dialog-text {
            max-width: none;
          }
        }
      `}</style>
    </div>
  )
}
