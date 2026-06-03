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
    <section id="journey" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose scrapbook-shadow">
            the journey
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
            A few stops along the way.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Arranged like postcards from different seasons of school, work, and creative practice.
          </p>
        </div>

        <ol className="mt-12 space-y-10">
          {timeline.map((item, i) => (
            <li
              key={i}
              className={`relative overflow-hidden rounded-[3rem] border border-border/50 p-4 md:p-6 ${item.accent} scrapbook-shadow`}
            >
              <div className="absolute left-8 top-6 h-24 w-24 rounded-full bg-white/30 blur-2xl" />
              <div className="absolute right-8 top-10 hidden h-20 w-20 rounded-full border border-white/50 bg-card/30 md:block" />

              <div className="relative grid min-h-[70vh] gap-6 rounded-[2.4rem] bg-background/55 p-5 md:grid-cols-[0.95fr_1.05fr] md:p-8">
                <div className="flex flex-col justify-between rounded-[2rem] border border-white/60 bg-card/85 p-6">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        {item.period}
                      </p>
                      <span className="rounded-full border border-rose/40 bg-primary/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-rose">
                        page {i + 1}
                      </span>
                    </div>

                    <p className="mt-6 text-script text-4xl text-rose md:text-5xl">Scrapbook Notes</p>
                    <h3 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">
                      {item.role}
                    </h3>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-rose">
                      {item.org}
                    </p>
                  </div>

                  <div className="mt-8 rounded-[1.6rem] border border-border/40 bg-secondary/35 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      tiny caption
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{item.note}</p>
                  </div>
                </div>

                <div className="relative flex flex-col justify-between rounded-[2.2rem] border border-border/50 bg-card/90 p-6">
                  <span
                    className={`mb-4 w-fit rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground ${
                      i % 2 === 0 ? "bg-butter" : "bg-primary/35"
                    }`}
                  >
                    {item.sticker}
                  </span>

                  <div className={`rounded-[2rem] border border-border/40 p-5 ${i % 2 === 0 ? "soft-gingham" : "pink-stripes"}`}>
                    <div className="paper-card rounded-[1.5rem] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        memory taped into place
                      </p>
                      <p className="mt-4 text-pretty text-base leading-relaxed text-foreground md:text-lg">
                        {item.body}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rotate-[-3deg] rounded-full bg-card px-4 py-2 text-sm font-medium text-muted-foreground scrapbook-shadow">
                      internship
                    </span>
                    <span className="rotate-[2deg] rounded-full bg-card px-4 py-2 text-sm font-medium text-muted-foreground scrapbook-shadow">
                      growth era
                    </span>
                    <span className="rotate-[-2deg] rounded-full bg-card px-4 py-2 text-sm font-medium text-muted-foreground scrapbook-shadow">
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
