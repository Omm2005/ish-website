"use client"

type SparkleBurstProps = {
  active: boolean
}

const stars = [
  { top: "12%", left: "18%", size: 22, delay: "0s" },
  { top: "18%", left: "52%", size: 34, delay: "0.08s" },
  { top: "26%", left: "76%", size: 18, delay: "0.16s" },
  { top: "38%", left: "28%", size: 28, delay: "0.22s" },
  { top: "42%", left: "64%", size: 40, delay: "0.3s" },
  { top: "56%", left: "14%", size: 20, delay: "0.18s" },
  { top: "60%", left: "46%", size: 30, delay: "0.12s" },
  { top: "68%", left: "80%", size: 24, delay: "0.26s" },
  { top: "78%", left: "34%", size: 18, delay: "0.06s" },
  { top: "84%", left: "60%", size: 26, delay: "0.2s" },
]

function Star({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
      <circle cx="60" cy="60" r="22" fill="#ffd84a" opacity="0.95" className="sparkle-core" />
      <path
        d="M60 8 L74 42 L110 48 L84 71 L92 108 L60 88 L28 108 L36 71 L10 48 L46 42 Z"
        fill="#ffd54f"
        stroke="#fff4ad"
        strokeWidth="5"
        strokeLinejoin="round"
        className="sparkle-star-shape"
      />
    </svg>
  )
}

export function SparkleBurst({ active }: SparkleBurstProps) {
  if (!active) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden="true">
      {stars.map((star, index) => (
        <div
          key={`${star.top}-${star.left}-${index}`}
          className="sparkle-star absolute"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
        >
          <Star size={star.size} />
        </div>
      ))}

      <style jsx>{`
        .sparkle-star {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.4);
          animation: pop 2.2s ease-out forwards;
          filter:
            drop-shadow(0 0 10px rgba(255, 240, 160, 1))
            drop-shadow(0 0 18px rgba(255, 198, 64, 0.95))
            drop-shadow(0 0 34px rgba(255, 170, 32, 0.45));
        }

        :global(.sparkle-star-shape) {
          animation: twinkle 0.9s ease-in-out infinite;
          transform-origin: center;
        }

        :global(.sparkle-core) {
          animation: glow 1.2s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes pop {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.35) rotate(0deg);
          }
          15% {
            opacity: 1;
          }
          55% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.15) rotate(12deg);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.55) rotate(28deg);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.92;
          }
          50% {
            transform: scale(1.16);
            opacity: 1;
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.75;
            transform: scale(0.92);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  )
}
