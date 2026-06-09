export type StickerVariant = "sun" | "bow" | "star" | "cat" | "flower-girl" | "strawberry"

export function StickerSvg({ variant }: { variant: StickerVariant }) {
  switch (variant) {
    case "sun":
      return (
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
          <path
            d="M60 8 L66 23 L80 14 L80 31 L97 28 L89 43 L106 51 L90 59 L101 74 L83 73 L84 91 L69 82 L60 108 L51 82 L36 91 L37 73 L19 74 L30 59 L14 51 L31 43 L23 28 L40 31 L40 14 L54 23 Z"
            fill="#ffe486"
            stroke="#9a6874"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <circle cx="60" cy="60" r="34" fill="#ffd96d" stroke="#9a6874" strokeWidth="4" />
          <circle cx="48" cy="55" r="4" fill="#4a3a3f" />
          <circle cx="72" cy="55" r="4" fill="#4a3a3f" />
          <circle cx="43" cy="66" r="4" fill="#ffb6c8" opacity="0.75" />
          <circle cx="77" cy="66" r="4" fill="#ffb6c8" opacity="0.75" />
          <path d="M49 75 Q60 84 71 75" fill="none" stroke="#9a6874" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    case "bow":
      return (
        <svg viewBox="0 0 140 110" className="h-full w-full" aria-hidden="true">
          <path
            d="M68 54 C42 22 12 24 9 54 C6 84 40 92 61 68 Z"
            fill="#ffb6cf"
            stroke="#9a6874"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M72 54 C98 22 128 24 131 54 C134 84 100 92 79 68 Z"
            fill="#ffb6cf"
            stroke="#9a6874"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M58 50 Q70 40 82 50 L80 70 Q70 78 60 70 Z"
            fill="#f58eb8"
            stroke="#9a6874"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path d="M50 42 Q36 54 24 66 M92 42 Q106 54 118 66" fill="none" stroke="#d66f98" strokeWidth="3" strokeLinecap="round" />
          <path d="M63 72 L58 96 M77 72 L84 96" fill="none" stroke="#9a6874" strokeWidth="3" strokeLinecap="round" />
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
            d="M32 52 Q52 24 92 26 Q126 28 142 54 Q153 74 135 88 Q119 101 95 93 Q84 107 64 100 Q50 95 45 82 Q27 82 20 70 Q19 58 32 52 Z"
            fill="#f4df63"
            stroke="#9a6874"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path d="M54 43 L65 24 L75 45 M101 45 L116 28 L121 52" fill="#eec84f" stroke="#9a6874" strokeWidth="3.5" strokeLinejoin="round" />
          <circle cx="71" cy="61" r="4" fill="#4a3a3f" />
          <circle cx="96" cy="62" r="4" fill="#4a3a3f" />
          <path d="M80 72 Q84 76 89 72" fill="none" stroke="#9a6874" strokeWidth="3" strokeLinecap="round" />
          <path d="M55 66 H40 M56 73 H39 M111 66 H128 M110 74 H129" fill="none" stroke="#9a6874" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
          <path d="M139 58 Q156 60 156 77 Q156 92 139 92" fill="none" stroke="#9a6874" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    case "flower-girl":
      return (
        <svg viewBox="0 0 120 150" className="h-full w-full" aria-hidden="true">
          <path
            d="M24 60 C24 28 41 12 60 12 C79 12 96 28 96 60 C96 95 83 128 60 128 C37 128 24 95 24 60 Z"
            fill="#21171b"
            stroke="#9a6874"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path d="M35 54 C36 34 46 24 60 24 C74 24 84 34 85 54 Q74 44 60 44 Q46 44 35 54 Z" fill="#2f2025" />
          <rect x="37" y="45" width="46" height="72" rx="23" fill="#fff6f5" stroke="#9a6874" strokeWidth="4" />
          <path d="M37 59 Q47 45 60 45 Q73 45 83 59" fill="#21171b" stroke="#9a6874" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="50" cy="66" r="12" fill="#fff" stroke="#9a6874" strokeWidth="3" />
          <circle cx="70" cy="66" r="12" fill="#fff" stroke="#9a6874" strokeWidth="3" />
          <circle cx="50" cy="66" r="5" fill="#2f2025" />
          <circle cx="70" cy="66" r="5" fill="#2f2025" />
          <circle cx="44" cy="82" r="4" fill="#ffb6c8" />
          <circle cx="76" cy="82" r="4" fill="#ffb6c8" />
          <path d="M54 81 Q60 86 66 81" fill="none" stroke="#9a6874" strokeWidth="3" strokeLinecap="round" />
          <path d="M48 110 Q60 122 72 110" fill="none" stroke="#9a6874" strokeWidth="3" strokeLinecap="round" />
          <circle cx="42" cy="25" r="7" fill="#fffdf6" stroke="#9a6874" strokeWidth="3" />
          <circle cx="55" cy="22" r="6" fill="#ffd96d" stroke="#9a6874" strokeWidth="3" />
          <circle cx="68" cy="24" r="7" fill="#ffb6cf" stroke="#9a6874" strokeWidth="3" />
        </svg>
      )
    case "strawberry":
      return (
        <svg viewBox="0 0 110 150" className="h-full w-full" aria-hidden="true">
          <rect x="14" y="16" width="82" height="116" rx="14" fill="#f5a0bc" stroke="#9a6874" strokeWidth="4" />
          <rect x="24" y="26" width="62" height="24" rx="8" fill="#fff7c8" stroke="#9a6874" strokeWidth="2.5" opacity="0.9" />
          <text x="55" y="43" textAnchor="middle" fontSize="13" fontWeight="700" fill="#7e4556">
            berry
          </text>
          <path d="M31 84 C34 65 47 55 61 56 C76 56 88 68 91 84 C95 105 80 121 61 122 C42 122 27 105 31 84 Z" fill="#f24a68" stroke="#9a6874" strokeWidth="3.5" />
          <path d="M61 58 C65 47 78 45 84 53 C75 58 69 64 61 72 C54 64 47 58 38 53 C44 45 57 47 61 58 Z" fill="#80c86d" stroke="#9a6874" strokeWidth="3" strokeLinejoin="round" />
          <path d="M61 57 C61 48 65 42 71 38" fill="none" stroke="#6ca95f" strokeWidth="3" strokeLinecap="round" />
          <circle cx="48" cy="84" r="2.6" fill="#ffe9a8" />
          <circle cx="70" cy="90" r="2.6" fill="#ffe9a8" />
          <circle cx="57" cy="105" r="2.6" fill="#ffe9a8" />
          <circle cx="77" cy="106" r="2.2" fill="#ffe9a8" />
        </svg>
      )
  }
}
