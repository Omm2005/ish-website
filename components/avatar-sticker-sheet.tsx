export function AvatarStickerSheet() {
  return (
    <div className="paper-card rounded-[2.4rem] p-4 md:p-6">
      <div className="flex items-center justify-between gap-4 px-2 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            sticker avatars
          </p>
          <h3 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
            Tiny characters for the website
          </h3>
        </div>
        <span className="rounded-full bg-primary/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-rose">
          animated svg
        </span>
      </div>

      <svg
        viewBox="0 0 920 720"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Animated sticker sheet of cute avatar illustrations including a smiling sun, bow, flower girl, yellow cat, tea cups, heart teeth and strawberry label"
        className="h-auto w-full"
      >
        <defs>
          <filter id="sheetShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#c9788b" floodOpacity="0.16" />
          </filter>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <radialGradient id="paperGlow" cx="50%" cy="40%" r="80%">
            <stop offset="0%" stopColor="#fffdf8" />
            <stop offset="100%" stopColor="#fff5f0" />
          </radialGradient>
          <radialGradient id="sunFill" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#ffe89a" />
            <stop offset="100%" stopColor="#f7c95f" />
          </radialGradient>
          <linearGradient id="bowFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffbfd2" />
            <stop offset="100%" stopColor="#f48db4" />
          </linearGradient>
          <linearGradient id="starFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd96d" />
            <stop offset="100%" stopColor="#d79b24" />
          </linearGradient>
          <linearGradient id="catFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7e667" />
            <stop offset="100%" stopColor="#edc24f" />
          </linearGradient>
          <linearGradient id="heartHair" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6f768c" />
            <stop offset="100%" stopColor="#545b72" />
          </linearGradient>
          <linearGradient id="cupFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd4db" />
            <stop offset="100%" stopColor="#ff9ca7" />
          </linearGradient>
          <linearGradient id="toothFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff0f6" />
            <stop offset="100%" stopColor="#ffd3e4" />
          </linearGradient>
          <linearGradient id="strawberryFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffbfd0" />
            <stop offset="100%" stopColor="#f38fb0" />
          </linearGradient>
          <style>
            {`
              .sheet-bg {
                fill: url(#paperGlow);
                stroke: #f2d7dd;
                stroke-width: 3;
              }
              .outline {
                stroke: #9a6874;
                stroke-width: 4;
                stroke-linecap: round;
                stroke-linejoin: round;
              }
              .thin {
                stroke-width: 2.5;
              }
              .sticker {
                transform-box: fill-box;
                transform-origin: center;
                filter: url(#sheetShadow);
              }
              .float-a { animation: floatA 6s ease-in-out infinite; }
              .float-b { animation: floatB 7.5s ease-in-out infinite; }
              .float-c { animation: floatC 5.5s ease-in-out infinite; }
              .spin-slow { animation: spinSlow 14s linear infinite; transform-origin: center; }
              .blink-eye { animation: blinkEye 5s ease-in-out infinite; transform-origin: center; }
              .sparkle { animation: sparkle 2.6s ease-in-out infinite; transform-origin: center; }
              .bob-small { animation: bobSmall 3.2s ease-in-out infinite; }
              .wiggle { animation: wiggle 4.4s ease-in-out infinite; }
              .steam { animation: steam 2.8s ease-in-out infinite; }
              .pulse-soft { animation: pulseSoft 3s ease-in-out infinite; transform-origin: center; }
              .starburst { animation: burst 8s linear infinite; transform-origin: center; }

              @keyframes floatA {
                0%, 100% { transform: translateY(0px) rotate(-2deg); }
                50% { transform: translateY(-10px) rotate(2deg); }
              }
              @keyframes floatB {
                0%, 100% { transform: translateY(0px) rotate(2deg); }
                50% { transform: translateY(-14px) rotate(-2deg); }
              }
              @keyframes floatC {
                0%, 100% { transform: translateY(0px) scale(1); }
                50% { transform: translateY(-8px) scale(1.02); }
              }
              @keyframes blinkEye {
                0%, 44%, 48%, 100% { transform: scaleY(1); }
                46% { transform: scaleY(0.12); }
              }
              @keyframes sparkle {
                0%, 100% { opacity: 0.45; transform: scale(0.8); }
                50% { opacity: 1; transform: scale(1.15); }
              }
              @keyframes bobSmall {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-6px); }
              }
              @keyframes wiggle {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(2deg); }
                75% { transform: rotate(-2deg); }
              }
              @keyframes steam {
                0% { opacity: 0; transform: translateY(6px) scale(0.8); }
                40% { opacity: 0.65; }
                100% { opacity: 0; transform: translateY(-14px) scale(1.1); }
              }
              @keyframes pulseSoft {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.06); }
              }
              @keyframes spinSlow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes burst {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(8deg); }
              }
              @media (prefers-reduced-motion: reduce) {
                .float-a, .float-b, .float-c, .spin-slow, .blink-eye, .sparkle, .bob-small, .wiggle, .steam, .pulse-soft, .starburst {
                  animation: none !important;
                }
              }
            `}
          </style>
        </defs>

        <rect x="10" y="10" width="900" height="700" rx="38" className="sheet-bg" />

        <g className="sparkle">
          <path d="M140 82 L150 104 L174 108 L156 124 L160 148 L140 136 L120 148 L124 124 L106 108 L130 104 Z" fill="#ffe478" opacity="0.8" />
        </g>
        <g className="sparkle" style={{ animationDelay: "0.8s" }}>
          <path d="M770 112 L778 128 L796 130 L782 142 L786 160 L770 150 L754 160 L758 142 L744 130 L762 128 Z" fill="#ffd7f0" opacity="0.9" />
        </g>
        <g className="sparkle" style={{ animationDelay: "1.4s" }}>
          <circle cx="638" cy="522" r="10" fill="#fff2a8" />
          <path d="M638 504 V540 M620 522 H656" stroke="#f1cc58" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g className="sticker float-a">
          <circle cx="120" cy="110" r="58" fill="url(#sunFill)" className="outline" />
          <circle cx="102" cy="104" r="4.5" fill="#4d4246" className="blink-eye" />
          <circle cx="138" cy="104" r="4.5" fill="#4d4246" className="blink-eye" />
          <path d="M106 128 Q120 138 136 128" className="outline thin" fill="none" />
        </g>

        <g className="sticker float-b" style={{ animationDelay: "0.4s" }}>
          <path
            d="M265 72 C220 60 188 85 184 116 C180 144 210 154 232 138 C224 176 238 191 270 160 C299 192 320 178 310 138 C336 153 364 145 358 114 C352 84 322 62 278 74 L270 101 Z"
            fill="url(#bowFill)"
            className="outline"
          />
          <path d="M230 90 L308 144 M244 82 L324 134 M212 104 L294 157" stroke="#d56a96" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        </g>

        <g className="sticker pulse-soft" style={{ animationDelay: "0.6s" }}>
          <path d="M493 58 L512 98 L556 104 L524 133 L533 176 L493 155 L453 176 L462 133 L430 104 L474 98 Z" fill="url(#starFill)" className="outline" />
        </g>

        <g className="sticker float-c" style={{ animationDelay: "1s" }}>
          <path d="M654 72 C690 42 744 46 770 78 C800 116 781 162 742 174 C714 182 686 174 668 154 C638 151 612 128 614 102 C616 82 629 72 654 72 Z" fill="#ffe8a3" className="outline" />
          <path d="M704 82 C724 64 752 66 768 88 C783 110 775 136 754 144 C738 150 722 144 714 130 C696 130 680 116 682 102 C683 92 690 84 704 82 Z" fill="#ffcadf" className="outline thin" />
          <circle cx="732" cy="108" r="17" fill="#fff4af" className="outline thin" />
        </g>

        <g className="sticker float-b" style={{ animationDelay: "0.9s" }}>
          <ellipse cx="122" cy="274" rx="62" ry="83" fill="#101010" className="outline" />
          <rect x="87" y="214" width="70" height="128" rx="34" fill="#fff7f6" className="outline" />
          <path d="M66 220 Q84 178 120 174 Q163 175 180 214" fill="#101010" className="outline" />
          <circle cx="100" cy="246" r="16" fill="#fff" className="outline thin" />
          <circle cx="142" cy="246" r="16" fill="#fff" className="outline thin" />
          <circle cx="100" cy="246" r="7" fill="#2f2025" className="blink-eye" />
          <circle cx="142" cy="246" r="7" fill="#2f2025" className="blink-eye" />
          <circle cx="92" cy="266" r="4" fill="#ffb6c8" />
          <circle cx="150" cy="266" r="4" fill="#ffb6c8" />
          <path d="M116 262 Q122 268 128 262" className="outline thin" fill="none" />
          <path d="M106 306 Q122 320 138 306" className="outline thin" fill="none" />
          <circle cx="78" cy="207" r="12" fill="#fff" className="outline thin" />
          <path d="M70 199 L78 188 L86 199" fill="#fff" className="outline thin" />
          <g className="bob-small">
            <circle cx="134" cy="211" r="8" fill="#ffd35c" />
            <circle cx="150" cy="213" r="6" fill="#ff8ec0" />
            <circle cx="160" cy="228" r="6" fill="#96d4ff" />
            <circle cx="142" cy="228" r="6" fill="#b4f0a9" />
          </g>
        </g>

        <g className="sticker float-a" style={{ animationDelay: "0.6s" }}>
          <rect x="282" y="190" width="180" height="140" rx="34" fill="#f48eb4" className="outline" />
          <rect x="302" y="210" width="140" height="100" rx="18" fill="#ffd6e4" className="outline thin" />
          <text x="372" y="245" textAnchor="middle" fontSize="28" fontWeight="700" fill="#52343b" fontFamily="var(--font-quicksand), sans-serif">
            i haven&apos;t
          </text>
          <text x="372" y="276" textAnchor="middle" fontSize="28" fontWeight="700" fill="#52343b" fontFamily="var(--font-quicksand), sans-serif">
            even met
          </text>
          <text x="372" y="307" textAnchor="middle" fontSize="28" fontWeight="700" fill="#52343b" fontFamily="var(--font-quicksand), sans-serif">
            all of me yet
          </text>
          <path d="M316 180 L322 168 L328 180 M412 182 L420 170 L426 182 M454 226 L462 214 L468 226" stroke="#ffd96f" strokeWidth="5" strokeLinecap="round" />
        </g>

        <g className="sticker float-c" style={{ animationDelay: "0.2s" }}>
          <path d="M580 208 Q624 186 694 200 Q754 212 784 250 Q755 270 706 269 Q690 303 662 307 Q621 311 611 279 Q561 279 542 257 Q544 222 580 208 Z" fill="url(#catFill)" className="outline" />
          <path d="M617 208 L637 188 L646 212 M714 212 L736 193 L741 217" fill="#f0d64d" className="outline thin" />
          <circle cx="653" cy="245" r="5" fill="#43363a" className="blink-eye" />
          <circle cx="698" cy="245" r="5" fill="#43363a" className="blink-eye" />
          <path d="M671 259 Q676 265 681 259" className="outline thin" fill="none" />
          <path d="M782 252 Q820 250 822 279 Q823 305 790 307" fill="none" className="outline" />
        </g>

        <g className="sticker float-b" style={{ animationDelay: "1.2s" }}>
          <path d="M52 422 C72 372 118 348 174 356 C212 362 248 395 252 432 C214 486 142 534 78 510 C48 500 29 466 52 422 Z" fill="url(#heartHair)" className="outline" />
          <circle cx="152" cy="448" r="58" fill="#fff4f2" className="outline" />
          <circle cx="130" cy="438" r="7" fill="#393036" className="blink-eye" />
          <circle cx="172" cy="438" r="7" fill="#393036" className="blink-eye" />
          <circle cx="120" cy="458" r="5" fill="#ffb4c7" />
          <circle cx="182" cy="458" r="5" fill="#ffb4c7" />
          <path d="M145 457 Q151 462 157 457" className="outline thin" fill="none" />
        </g>

        <g className="sticker float-a" style={{ animationDelay: "0.4s" }}>
          <rect x="300" y="400" width="92" height="74" rx="14" fill="#d43f52" className="outline" />
          <rect x="328" y="444" width="98" height="88" rx="14" fill="url(#cupFill)" className="outline" />
          <rect x="360" y="360" width="88" height="72" rx="14" fill="#fff1f0" className="outline" />
          <path d="M442 385 Q462 384 464 404 Q466 423 444 424" fill="none" className="outline thin" />
          <path d="M428 470 Q449 468 451 490 Q452 512 430 512" fill="none" className="outline thin" />
          <path d="M359 404 H390 M343 470 H399" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.75" />
          <g className="steam" style={{ animationDelay: "0.1s" }}>
            <path d="M366 344 Q354 328 366 314" fill="none" className="outline thin" />
          </g>
          <g className="steam" style={{ animationDelay: "0.8s" }}>
            <path d="M392 344 Q384 324 396 306" fill="none" className="outline thin" />
          </g>
        </g>

        <g className="sticker pulse-soft" style={{ animationDelay: "0.8s" }}>
          <path d="M566 454 C566 422 593 398 624 398 C645 398 664 410 676 430 C688 410 708 398 728 398 C759 398 786 422 786 454 C786 499 733 536 676 566 C620 537 566 500 566 454 Z" fill="#ffddf0" className="outline" />
          <path d="M608 456 Q624 474 638 456 Q650 472 664 456" className="outline thin" fill="none" />
          <path d="M690 456 Q706 474 720 456 Q732 472 746 456" className="outline thin" fill="none" />
          <circle cx="630" cy="442" r="5" fill="#4a3a3f" className="blink-eye" />
          <circle cx="712" cy="442" r="5" fill="#4a3a3f" className="blink-eye" />
        </g>

        <g className="sticker wiggle" style={{ animationDelay: "1s" }}>
          <g className="starburst">
            <path d="M116 580 L138 532 L160 580 L210 558 L184 604 L236 620 L184 636 L208 684 L160 660 L138 708 L116 660 L62 684 L86 636 L34 620 L86 604 L62 558 Z" fill="#ffd84e" opacity="0.9" />
          </g>
          <circle cx="136" cy="620" r="43" fill="#fff3f1" className="outline" />
          <circle cx="121" cy="615" r="5" fill="#43393e" className="blink-eye" />
          <circle cx="151" cy="615" r="5" fill="#43393e" className="blink-eye" />
          <path d="M129 634 Q136 640 143 634" className="outline thin" fill="none" />
        </g>

        <g className="sticker float-b" style={{ animationDelay: "0.2s" }}>
          <path d="M292 608 C308 568 362 566 380 604 C398 642 366 684 334 686 C298 688 276 648 292 608 Z" fill="#f39abc" className="outline" />
          <path d="M313 600 C319 582 347 582 355 600 C364 618 346 637 334 645 C322 637 304 618 313 600 Z" fill="#f7bdd2" opacity="0.9" />
        </g>

        <g className="sticker float-c" style={{ animationDelay: "0.9s" }}>
          <path d="M448 590 C473 562 517 562 542 590 C551 600 558 616 558 632 C558 666 529 692 495 692 C461 692 432 666 432 632 C432 616 439 600 448 590 Z" fill="#7ab7c6" className="outline" />
          <path d="M448 630 Q496 598 542 630" fill="#5fa0b0" className="outline thin" />
          <circle cx="476" cy="632" r="6" fill="#fff0f3" className="blink-eye" />
          <circle cx="514" cy="632" r="6" fill="#fff0f3" className="blink-eye" />
          <path d="M485 648 Q495 657 505 648" stroke="#fff0f3" strokeWidth="4" fill="none" strokeLinecap="round" />
          <g className="bob-small">
            <path d="M460 594 L447 579 M480 584 L470 569 M528 590 L540 578" stroke="#ff9bc4" strokeWidth="4" strokeLinecap="round" />
            <circle cx="446" cy="576" r="7" fill="#ff9bc4" />
            <circle cx="468" cy="566" r="6" fill="#ff9bc4" />
            <circle cx="543" cy="575" r="7" fill="#ff9bc4" />
          </g>
        </g>

        <g className="sticker float-a" style={{ animationDelay: "1.3s" }}>
          <rect x="630" y="566" width="132" height="124" rx="16" fill="url(#strawberryFill)" className="outline" />
          <text x="696" y="605" textAnchor="middle" fontSize="24" fontWeight="700" fill="#7e4556" fontFamily="var(--font-cormorant), serif">
            STRAWBERRY
          </text>
          <path d="M662 640 C670 620 688 608 704 608 C724 608 740 622 744 640 C750 666 730 690 704 690 C678 690 654 668 662 640 Z" fill="#f24a68" className="outline thin" />
          <path d="M704 614 C711 602 726 600 734 610 C722 618 712 624 704 632 C696 624 686 618 674 610 C682 600 697 602 704 614 Z" fill="#7ac66d" className="outline thin" />
          <circle cx="690" cy="646" r="3" fill="#ffe7a2" />
          <circle cx="717" cy="652" r="3" fill="#ffe7a2" />
          <circle cx="700" cy="668" r="3" fill="#ffe7a2" />
        </g>
      </svg>
    </div>
  )
}
