"use client"

import { useState } from "react"

export function PinkaholicMoodboard() {
  const [isFaceAnimating, setIsFaceAnimating] = useState(false)

  const animateFace = () => {
    setIsFaceAnimating(false)
    window.requestAnimationFrame(() => {
      setIsFaceAnimating(true)
    })
  }

  return (
    <svg
      viewBox="0 0 920 640"
      role="img"
      aria-label="Pinkaholic about scrapbook folder with portrait stamp, boxed profile notes, and kawaii charms"
      className="h-auto w-full"
    >
      <defs>
        <filter id="pinkaholicShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="15" floodColor="#b77789" floodOpacity="0.18" />
        </filter>
        <linearGradient id="pinkFolder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5b5cf" />
          <stop offset="100%" stopColor="#ee8fbb" />
        </linearGradient>
        <linearGradient id="blueFolder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bfd8ef" />
          <stop offset="100%" stopColor="#a8c6e3" />
        </linearGradient>
        <linearGradient id="butterFolder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8bd" />
          <stop offset="100%" stopColor="#f2dfa0" />
        </linearGradient>
        <radialGradient id="appleFill" cx="40%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#ffb6c2" />
          <stop offset="70%" stopColor="#ee536e" />
          <stop offset="100%" stopColor="#c33b58" />
        </radialGradient>
        <style>
          {`
            .pinkaholic-line {
              stroke: #9a6874;
              stroke-width: 4;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            .pinkaholic-thin {
              stroke: #9a6874;
              stroke-width: 2.4;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            .pinkaholic-float {
              animation: pinkaholicFloat 6s ease-in-out infinite;
              transform-origin: center;
              transform-box: fill-box;
            }
            .portrait-button {
              cursor: pointer;
              outline: none;
            }
            .portrait-face,
            .portrait-glasses,
            .portrait-cheeks,
            .portrait-smile {
              transform-origin: center;
              transform-box: fill-box;
            }
            .portrait-sparkles {
              pointer-events: none;
              opacity: 0;
              transform-origin: center;
              transform-box: fill-box;
            }
            .portrait-button.is-cute .portrait-face {
              animation: portraitBounce 760ms cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            .portrait-button.is-cute .portrait-glasses {
              animation: portraitGlasses 760ms ease-in-out;
            }
            .portrait-button.is-cute .portrait-smile {
              animation: portraitSmile 760ms ease-in-out;
            }
            .portrait-button.is-cute .portrait-cheeks {
              animation: portraitBlush 760ms ease-in-out;
            }
            .portrait-button.is-cute .portrait-sparkles {
              animation: portraitSparklePop 760ms ease-out;
            }
            .portrait-button.is-cute .portrait-sparkles:nth-of-type(2) {
              animation-delay: 90ms;
            }
            .portrait-button.is-cute .portrait-sparkles:nth-of-type(3) {
              animation-delay: 150ms;
            }
            @keyframes pinkaholicFloat {
              0%, 100% { transform: translateY(0) rotate(-1deg); }
              50% { transform: translateY(-7px) rotate(1deg); }
            }
            @keyframes portraitBounce {
              0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
              25% { transform: translateY(-8px) rotate(-4deg) scale(1.05); }
              50% { transform: translateY(2px) rotate(3deg) scale(1.02); }
              75% { transform: translateY(-4px) rotate(-2deg) scale(1.04); }
            }
            @keyframes portraitGlasses {
              0%, 100% { transform: translateY(0) scale(1); }
              35% { transform: translateY(-3px) scale(1.08); }
              55% { transform: translateY(2px) scale(0.96); }
            }
            @keyframes portraitSmile {
              0%, 100% { transform: scaleX(1); }
              45% { transform: scaleX(1.2); }
            }
            @keyframes portraitBlush {
              0%, 100% { opacity: 1; transform: scale(1); }
              45% { opacity: 1; transform: scale(1.45); }
            }
            @keyframes portraitSparklePop {
              0% { opacity: 0; transform: translateY(10px) rotate(-12deg) scale(0.45); }
              35%, 70% { opacity: 1; }
              100% { opacity: 0; transform: translateY(-16px) rotate(14deg) scale(1.18); }
            }
            @media (prefers-reduced-motion: reduce) {
              .pinkaholic-float,
              .portrait-button.is-cute .portrait-face,
              .portrait-button.is-cute .portrait-glasses,
              .portrait-button.is-cute .portrait-smile,
              .portrait-button.is-cute .portrait-cheeks,
              .portrait-button.is-cute .portrait-sparkles {
                animation: none;
              }
            }
          `}
        </style>
      </defs>

      <g opacity="0.34">
        {Array.from({ length: 24 }).map((_, index) => (
          <rect key={`stripe-${index}`} x={index * 40} y="0" width="18" height="640" fill="#ffd8e7" />
        ))}
      </g>
      <circle cx="94" cy="92" r="70" fill="#fff2a8" opacity="0.4" />
      <circle cx="816" cy="548" r="92" fill="#d7eff0" opacity="0.45" />

      <g filter="url(#pinkaholicShadow)">
        <path
          d="M92 108 H342 Q370 108 386 132 L404 160 H794 Q824 160 824 190 V526 Q824 562 788 562 H92 Q56 562 56 526 V144 Q56 108 92 108 Z"
          fill="url(#pinkFolder)"
        />
        <path
          d="M118 164 H370 Q396 164 412 188 L426 210 H772 Q802 210 802 240 V548 Q802 580 770 580 H118 Q86 580 86 548 V196 Q86 164 118 164 Z"
          fill="url(#butterFolder)"
        />
        <path
          d="M74 228 H802 Q836 228 836 262 V562 Q836 598 800 598 H74 Q38 598 38 562 V264 Q38 228 74 228 Z"
          fill="url(#blueFolder)"
        />
      </g>

      <text x="504" y="92" textAnchor="middle" fill="#432d35" fontSize="72" fontFamily="var(--font-script), cursive">
        Pinkaholic
      </text>
      <g transform="translate(126 142) rotate(-3)" filter="url(#pinkaholicShadow)">
        <rect width="284" height="54" rx="18" fill="#fff7b5" />
        <text x="142" y="35" textAnchor="middle" fill="#7d6870" fontSize="17" fontWeight="700" letterSpacing="3" fontFamily="var(--font-josefin), sans-serif">
          ABOUT ISHITA
        </text>
      </g>

      <g transform="translate(92 278)" filter="url(#pinkaholicShadow)">
        <rect x="0" y="0" width="286" height="214" rx="8" fill="#f7a7c8" className="pinkaholic-line" />
        {Array.from({ length: 8 }).map((_, index) => (
          <circle key={`stamp-top-${index}`} cx={20 + index * 35} cy="0" r="9" fill="#b7d4ee" />
        ))}
        {Array.from({ length: 8 }).map((_, index) => (
          <circle key={`stamp-bottom-${index}`} cx={20 + index * 35} cy="214" r="9" fill="#b7d4ee" />
        ))}
        {Array.from({ length: 5 }).map((_, index) => (
          <circle key={`stamp-left-${index}`} cx="0" cy={22 + index * 42} r="9" fill="#b7d4ee" />
        ))}
        {Array.from({ length: 5 }).map((_, index) => (
          <circle key={`stamp-right-${index}`} cx="286" cy={22 + index * 42} r="9" fill="#b7d4ee" />
        ))}
        <g
          role="button"
          tabIndex={0}
          className={`portrait-button ${isFaceAnimating ? "is-cute" : ""}`}
          onClick={animateFace}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault()
              animateFace()
            }
          }}
          onAnimationEnd={() => setIsFaceAnimating(false)}
          aria-label="Animate Ishita portrait"
        >
          <rect x="35" y="32" width="216" height="146" rx="4" fill="#fff7c8" />
          <rect x="50" y="46" width="186" height="118" rx="4" fill="#fbede7" />
          <text className="portrait-sparkles" x="75" y="68" fill="#c86090" fontSize="24" fontFamily="var(--font-sparkle), cursive">
            ✦
          </text>
          <text className="portrait-sparkles" x="203" y="82" fill="#e39ab9" fontSize="22" fontFamily="var(--font-sparkle), cursive">
            ♡
          </text>
          <text className="portrait-sparkles" x="188" y="152" fill="#f0c44b" fontSize="22" fontFamily="var(--font-sparkle), cursive">
            ✧
          </text>
          <g className="portrait-face">
            <path d="M132 58 C98 62 80 90 80 126 V152 H205 V126 C205 86 180 54 132 58 Z" fill="#171113" />
            <rect x="102" y="92" width="80" height="70" rx="34" fill="#fff6f3" className="pinkaholic-thin" />
            <g className="portrait-glasses">
              <circle cx="126" cy="123" r="14" fill="#fff" className="pinkaholic-thin" />
              <circle cx="158" cy="123" r="14" fill="#fff" className="pinkaholic-thin" />
              <circle cx="126" cy="123" r="5" fill="#433037" />
              <circle cx="158" cy="123" r="5" fill="#433037" />
            </g>
            <path className="portrait-smile pinkaholic-thin" d="M135 143 Q143 150 151 143" fill="none" />
            <g className="portrait-cheeks">
              <circle cx="113" cy="141" r="5" fill="#f4a9bd" />
              <circle cx="174" cy="141" r="5" fill="#f4a9bd" />
            </g>
          </g>
        </g>
        <path d="M220 40 L228 57 L246 60 L233 73 L237 92 L220 82 L203 92 L207 73 L194 60 L212 57 Z" fill="#c84265" />
      </g>

      <g transform="translate(404 198)" filter="url(#pinkaholicShadow)">
        <rect width="426" height="356" rx="28" fill="#fffdf6" />
        <rect x="30" y="28" width="366" height="66" rx="20" fill="#fff2a8" opacity="0.86" />
        <text x="64" y="58" fill="#e98bb3" fontSize="15" fontWeight="700" letterSpacing="3.4" fontFamily="var(--font-josefin), sans-serif">
          CREATIVE TECHNOLOGIST
        </text>
        <text x="64" y="81" fill="#756069" fontSize="17" fontFamily="var(--font-josefin), sans-serif">
          code, design, storytelling
        </text>

        <g transform="translate(34 116)">
          <circle cx="28" cy="28" r="28" fill="#fff4c5" />
          <path d="M28 15 C39 15 48 23 48 33 C48 48 28 58 28 58 C28 58 8 48 8 33 C8 23 17 15 28 15 Z" fill="#f5a4c7" />
          <text x="78" y="17" fill="#8c747c" fontSize="13" fontWeight="700" letterSpacing="3.4" fontFamily="var(--font-josefin), sans-serif">
            BASED IN
          </text>
          <text x="78" y="47" fill="#49353d" fontSize="17" fontFamily="var(--font-josefin), sans-serif">
            Greater Bengaluru Area
          </text>
        </g>

        <g transform="translate(34 186)">
          <circle cx="28" cy="28" r="28" fill="#fff4c5" />
          <path d="M13 24 L28 15 L45 24 L28 33 Z" fill="#f5a4c7" className="pinkaholic-thin" />
          <path d="M20 30 V39 Q28 46 38 39 V30" fill="none" className="pinkaholic-thin" />
          <text x="78" y="17" fill="#8c747c" fontSize="13" fontWeight="700" letterSpacing="3.4" fontFamily="var(--font-josefin), sans-serif">
            STUDYING
          </text>
          <text x="78" y="44" fill="#49353d" fontSize="16" fontFamily="var(--font-josefin), sans-serif">
            <tspan x="78" dy="0">B.E. Computer Software</tspan>
            <tspan x="78" dy="20">Engineering</tspan>
          </text>
        </g>

        <g transform="translate(34 270)">
          <circle cx="28" cy="28" r="28" fill="#fff4c5" />
          <path d="M28 14 C37 1 57 10 53 28 C50 43 28 53 28 53 C28 53 6 43 3 28 C-1 10 19 1 28 14 Z" fill="#f5a4c7" />
          <text x="78" y="17" fill="#8c747c" fontSize="13" fontWeight="700" letterSpacing="3.4" fontFamily="var(--font-josefin), sans-serif">
            SOFT SPOT FOR
          </text>
          <text x="78" y="44" fill="#49353d" fontSize="15" fontFamily="var(--font-josefin), sans-serif">
            <tspan x="78" dy="0">Storytelling + design</tspan>
            <tspan x="78" dy="18">thinking, quietly observed</tspan>
          </text>
        </g>
      </g>

      <g transform="translate(766 500)" filter="url(#pinkaholicShadow)">
        <rect width="104" height="70" rx="8" fill="#f3bed6" className="pinkaholic-line" />
        <text x="16" y="21" fill="#865568" fontSize="12" fontWeight="700" fontFamily="var(--font-josefin), sans-serif">
          berry
        </text>
        <path d="M34 42 C36 26 48 20 58 30 C70 21 80 32 76 49 C73 63 58 69 58 69 C58 69 33 59 34 42 Z" fill="url(#appleFill)" className="pinkaholic-thin" />
        <path d="M58 30 C57 21 62 15 68 12" fill="none" className="pinkaholic-thin" />
        <circle cx="50" cy="48" r="2.6" fill="#ffeaa1" />
        <circle cx="64" cy="53" r="2.6" fill="#ffeaa1" />
      </g>

      <g transform="translate(46 196)">
        <path d="M56 18 L67 42 L93 46 L74 64 L79 91 L56 77 L32 91 L37 64 L18 46 L44 42 Z" fill="#f1cf55" className="pinkaholic-line" />
      </g>
      <g transform="translate(804 92)">
        <path d="M46 14 C56 -4 84 4 83 28 C82 52 46 67 46 67 C46 67 10 52 9 28 C8 4 36 -4 46 14 Z" fill="#f6b7cf" className="pinkaholic-line" />
        <path d="M46 67 L44 96 M46 67 C34 82 24 88 12 89 M46 67 C59 82 70 88 84 89" fill="none" className="pinkaholic-thin" />
      </g>
    </svg>
  )
}
