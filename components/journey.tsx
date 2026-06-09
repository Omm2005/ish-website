const timeline = [
  {
    period: "2025 — Present",
    role: "Junior Coordinator, Innovation & Entrepreneurship",
    org: "CSE Student Senate · CMR Institute of Technology",
    body: "Helping shape student-led innovation initiatives — organising, coordinating, and championing ideas across the department.",
    note: "currently collecting ideas, events, and people",
    accent: "bg-[linear-gradient(180deg,oklch(0.96_0.03_350),oklch(0.93_0.05_80))]",
    sticker: "dreaming up better systems",
  },
  {
    period: "2024 — Present",
    role: "Intern",
    org: "Touchspire VFX",
    body: "Working with an animation and post-production team, contributing across creative and digital production.",
    note: "learning motion, polish, and production rhythm",
    accent: "bg-[linear-gradient(180deg,oklch(0.95_0.03_25),oklch(0.9_0.03_240))]",
    sticker: "behind the scenes energy",
  },
  {
    period: "2024 — 2028",
    role: "B.E. Computer Software Engineering",
    org: "CMR Institute of Technology, Bengaluru",
    body: "Building strong fundamentals in software while leaning into design, creative coding, and human-centred technology.",
    note: "where engineering meets visual curiosity",
    accent: "bg-[linear-gradient(180deg,oklch(0.97_0.02_70),oklch(0.92_0.04_160))]",
    sticker: "class notes + side quests",
  },
  {
    period: "2023 — 2024",
    role: "Intern",
    org: "The Design Startup",
    body: "An early dive into the design world — learning craft, collaboration, and how good ideas come to life.",
    note: "first scrapbook page in the story",
    accent: "bg-[linear-gradient(180deg,oklch(0.96_0.03_340),oklch(0.93_0.03_30))]",
    sticker: "where it all started",
  },
]

export function Journey() {
  return (
    <section id="journey" className="px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose scrapbook-shadow">
            the journey
          </span>
          <h2 className="mt-4 text-balance font-serif text-[2.4rem] leading-[1.06] text-foreground sm:text-4xl sm:leading-tight lg:text-5xl">
            A few stops along the way.
          </h2>
          <p className="mt-3 text-[0.98rem] leading-8 text-muted-foreground sm:text-sm sm:leading-relaxed">
            Arranged like postcards from different seasons of school, work, and creative practice.
          </p>
        </div>

        <ol className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
          {timeline.map((item, i) => (
            <li
              key={i}
              className={`paper-wobble relative max-w-full overflow-hidden rounded-[2rem] border border-[#efcad8] bg-[#fffaf2] p-3 sm:rounded-[2.4rem] sm:p-4 md:p-6 ${
                i % 2 === 0 ? "[--tilt:-1.5deg]" : "[--tilt:1.4deg]"
              } scrapbook-shadow`}
            >
              <div className="absolute right-5 top-5 z-10 flex h-20 w-16 items-center justify-center rounded-[0.5rem] border border-[#eeb7cb] bg-[#fde4ef] text-center text-[0.56rem] font-bold uppercase tracking-[0.08em] text-rose">
                Ishita
                <br />
                {i + 1}
                <br />✦
              </div>
              <div className="absolute left-5 top-5 z-10 h-8 w-24 rotate-[-8deg] bg-[#f4c244]/80" />
              <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-white/30 blur-2xl sm:left-8 sm:h-24 sm:w-24" />
              <div className="absolute right-8 top-10 hidden h-20 w-20 rounded-full border border-white/50 bg-card/30 lg:block" />

              <div className="relative grid gap-4 rounded-[1.7rem] border border-[#f2d3df] bg-[#fffdf8]/80 p-2.5 sm:gap-6 sm:rounded-[2rem] sm:p-5 md:p-6 lg:min-h-[620px] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
                <div className="flex flex-col justify-between rounded-[1.45rem] border border-[#f3d6df] bg-card/85 p-4 sm:rounded-[1.8rem] sm:p-6">
                  <div>
                    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                      <p className="max-w-[14ch] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:max-w-none sm:text-xs sm:tracking-[0.22em]">
                        {item.period}
                      </p>
                      <span className="shrink-0 rounded-full border border-rose/40 bg-primary/25 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-rose sm:text-xs sm:tracking-[0.18em]">
                        page {i + 1}
                      </span>
                    </div>

                    <p className="mt-4 text-script text-[2.35rem] leading-[1.15] text-rose sm:mt-5 sm:text-4xl lg:text-5xl">
                      Scrapbook Notes
                    </p>
                    <h3 className="mt-3 max-w-full break-words font-sans text-[1.18rem] leading-[1.18] font-semibold text-foreground [overflow-wrap:anywhere] sm:font-serif sm:text-3xl sm:leading-tight sm:font-normal lg:text-4xl">
                      {item.role}
                    </h3>
                    <p className="mt-3 max-w-full break-words pr-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-rose [overflow-wrap:anywhere] sm:pr-0 sm:text-sm sm:tracking-[0.18em]">
                      {item.org}
                    </p>
                  </div>

                  <div className="mt-6 rounded-[1.2rem] border border-[#ead8c3] bg-[#fff8dd] p-4 sm:mt-8 sm:rounded-[1.4rem]">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]">
                      tiny caption
                    </p>
                    <p className="mt-2 text-[0.98rem] leading-7 text-foreground sm:text-sm sm:leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col justify-between rounded-[1.5rem] border border-[#f2d3df] bg-card/90 p-3.5 sm:rounded-[1.8rem] sm:p-6">
                  <span
                    className={`mb-4 w-fit max-w-full break-words rounded-full px-4 py-2 text-[0.63rem] font-semibold uppercase leading-snug tracking-[0.1em] text-foreground [overflow-wrap:anywhere] sm:text-xs sm:tracking-[0.14em] ${
                      i % 2 === 0 ? "bg-butter" : "bg-primary/35"
                    }`}
                  >
                    {item.sticker}
                  </span>

                  <div className={`rounded-[1.4rem] border border-[#f0d4df] p-3 sm:rounded-[1.7rem] sm:p-5 ${i % 2 === 0 ? "soft-gingham" : "pink-stripes"}`}>
                    <div className="postcard-lace bg-[#fffdf8] rounded-[1.2rem] p-4 sm:rounded-[1.5rem] sm:p-5">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
                        memory taped into place
                      </p>
                      <p className="mt-4 break-words text-pretty text-[0.95rem] leading-7 text-foreground [overflow-wrap:anywhere] sm:text-base sm:leading-relaxed lg:text-lg">
                        {item.body}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                    <span className="rotate-[-3deg] rounded-full bg-card px-4 py-2 text-[0.95rem] font-medium leading-snug text-muted-foreground scrapbook-shadow sm:text-sm">
                      internship
                    </span>
                    <span className="rotate-[2deg] rounded-full bg-card px-4 py-2 text-[0.95rem] font-medium leading-snug text-muted-foreground scrapbook-shadow sm:text-sm">
                      growth era
                    </span>
                    <span className="rotate-[-2deg] rounded-full bg-card px-4 py-2 text-[0.95rem] font-medium leading-snug text-muted-foreground scrapbook-shadow sm:text-sm">
                      story point
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
