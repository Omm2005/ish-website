export function BeadDivider() {
  return (
    <div className="mx-auto my-12 flex max-w-4xl items-center justify-center gap-2 px-6" aria-hidden="true">
      {Array.from({ length: 26 }).map((_, index) => (
        <span
          key={index}
          className={`size-3 rounded-full border border-white/80 shadow-[0_4px_10px_-6px_rgba(80,45,60,0.45)] ${
            index % 3 === 0 ? "bg-[#a9d4ee]" : index % 3 === 1 ? "bg-[#f5b4cf]" : "bg-[#fff0a6]"
          }`}
        />
      ))}
    </div>
  )
}

export function HeroTinCase() {
  return (
    <svg
      viewBox="0 0 1080 620"
      role="img"
      aria-label="A pastel tin case with labeled identity objects for Ishita"
      className="h-auto w-full"
    >
      <defs>
        <filter id="tinShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#69545e" floodOpacity="0.2" />
        </filter>
        <linearGradient id="trayMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faf9f6" />
          <stop offset="42%" stopColor="#d7d6d0" />
          <stop offset="100%" stopColor="#a8aaa9" />
        </linearGradient>
        <linearGradient id="matcha" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c6df8f" />
          <stop offset="100%" stopColor="#7ab26c" />
        </linearGradient>
        <style>
          {`
            .tin-line {
              stroke: #8e6c77;
              stroke-width: 4;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            .tin-thin {
              stroke: #8e6c77;
              stroke-width: 2.5;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            .tin-peel {
              transition: opacity 180ms ease;
            }
            .tin-peel:hover {
              opacity: 0.96;
            }
          `}
        </style>
      </defs>

      <rect x="24" y="28" width="1032" height="564" rx="56" fill="#ffeaf3" />
      <g opacity="0.58">
        {Array.from({ length: 30 }).map((_, index) => (
          <rect key={index} x={index * 38} y="28" width="17" height="564" fill="#fff7f8" />
        ))}
      </g>

      <g filter="url(#tinShadow)">
        <rect x="108" y="104" width="864" height="410" rx="48" fill="url(#trayMetal)" className="tin-line" />
        <rect x="138" y="136" width="804" height="350" rx="38" fill="#e5e5df" opacity="0.48" />
        <path d="M392 132 V488" className="tin-thin" opacity="0.32" />
        <path d="M656 132 V488" className="tin-thin" opacity="0.32" />
        <path d="M132 310 H948" className="tin-thin" opacity="0.32" />
      </g>

      <text x="540" y="76" textAnchor="middle" fill="#473139" fontSize="78" fontFamily="var(--font-script), cursive">
        Typical Combo
      </text>

      <g className="tin-peel" transform="translate(166 168)">
        <rect x="0" y="0" width="168" height="56" rx="18" fill="#fffdf5" filter="url(#tinShadow)" />
        <path d="M86 22 C108 -12 152 1 148 42 C144 86 92 98 66 62 C47 94 0 82 8 40 C16 0 60 -4 86 22 Z" fill="#d74879" className="tin-line" />
        <path d="M82 32 C70 52 55 68 30 78 M92 34 C111 50 126 65 150 74 M88 32 C92 61 91 77 88 102" fill="none" className="tin-thin" />
        <text x="84" y="128" textAnchor="middle" fill="#7a626c" fontSize="13" fontWeight="700" letterSpacing="1.2" fontFamily="var(--font-josefin), sans-serif">
          LILY
        </text>
      </g>

      <g className="tin-peel" transform="translate(454 132)">
        <rect x="-26" y="16" width="220" height="132" rx="30" fill="#fffdf5" filter="url(#tinShadow)" />
        <circle cx="84" cy="82" r="62" fill="url(#matcha)" className="tin-line" />
        <circle cx="55" cy="64" r="16" fill="#eef8d1" opacity="0.68" />
        <circle cx="105" cy="102" r="18" fill="#eef8d1" opacity="0.58" />
        <path d="M30 80 C58 96 104 96 138 68" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
        <text x="84" y="166" textAnchor="middle" fill="#e279a3" fontSize="11" fontWeight="700" letterSpacing="0.45" fontFamily="var(--font-josefin), sans-serif">
          MATCHA MADE IN HEAVEN
        </text>
      </g>

      <g className="tin-peel" transform="translate(742 136)">
        <rect x="0" y="0" width="138" height="150" rx="12" fill="#fffdf5" filter="url(#tinShadow)" />
        <rect x="16" y="16" width="106" height="90" rx="8" fill="#f4c0d7" className="tin-line" />
        <path d="M44 68 C46 44 61 35 76 48 C92 35 105 50 99 76 C94 98 76 109 76 109 C76 109 43 95 44 68 Z" fill="#ee526f" className="tin-thin" />
        <path d="M75 48 C74 35 80 28 88 23" fill="none" className="tin-thin" />
        <text x="28" y="34" fill="#865568" fontSize="13" fontWeight="700" fontFamily="var(--font-josefin), sans-serif">
          berry
        </text>
        <text x="69" y="168" textAnchor="middle" fill="#7a626c" fontSize="13" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-josefin), sans-serif">
          CUTE IDEAS
        </text>
      </g>

      <g className="tin-peel" transform="translate(174 354)">
        <rect x="0" y="0" width="186" height="98" rx="14" fill="#ffc7db" className="tin-line" filter="url(#tinShadow)" />
        <rect x="22" y="24" width="50" height="34" rx="5" fill="#3e3138" />
        <circle cx="102" cy="50" r="24" fill="#fff4c5" className="tin-thin" />
        <circle cx="148" cy="50" r="24" fill="#fff4c5" className="tin-thin" />
        <text x="93" y="112" textAnchor="middle" fill="#7a626c" fontSize="13" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-josefin), sans-serif">
          DESIGN NOTES
        </text>
      </g>

      <g className="tin-peel" transform="translate(448 360)">
        <rect x="0" y="0" width="176" height="96" rx="18" fill="#fffdf5" filter="url(#tinShadow)" />
        <path d="M40 55 L56 22 L74 54 Q90 42 116 44 Q150 48 154 74 Q132 90 98 88 Q82 108 62 94 Q34 94 20 78 Q20 63 40 55 Z" fill="#f6df61" className="tin-line" />
        <circle cx="72" cy="68" r="4" fill="#473139" />
        <circle cx="104" cy="68" r="4" fill="#473139" />
        <path d="M81 79 Q91 88 102 79" fill="none" className="tin-thin" />
        <text x="88" y="116" textAnchor="middle" fill="#e279a3" fontSize="13" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-josefin), sans-serif">
          SOFT SYSTEMS
        </text>
      </g>

      <g className="tin-peel" transform="translate(710 344)">
        <rect x="0" y="0" width="192" height="110" rx="22" fill="#fffdf5" filter="url(#tinShadow)" />
        <text x="80" y="40" textAnchor="middle" fill="#7a626c" fontSize="12" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-josefin), sans-serif">
          FOUND IT FIRST
        </text>
        <text x="79" y="76" textAnchor="middle" fill="#7a626c" fontSize="16" fontFamily="var(--font-script), cursive">
          story-driven code
        </text>
        <path d="M154 48 L161 63 L178 66 L166 77 L169 94 L154 85 L139 94 L142 77 L130 66 L147 63 Z" fill="#f1cf55" className="tin-thin" />
      </g>

      <path d="M64 92 L76 116 L103 120 L84 138 L88 165 L64 152 L40 165 L44 138 L25 120 L52 116 Z" fill="#f1cf55" className="tin-line" />
      <path d="M1000 72 L1013 99 L1042 103 L1021 123 L1026 152 L1000 138 L974 152 L979 123 L958 103 L987 99 Z" fill="#7eb8c8" />
    </svg>
  )
}
