import { MapPin, GraduationCap, Heart } from "lucide-react"

const facts = [
  {
    icon: MapPin,
    title: "Based in",
    detail: "Greater Bengaluru Area, India",
  },
  {
    icon: GraduationCap,
    title: "Studying",
    detail: "B.E. Computer Software Engineering, CMR Institute of Technology",
  },
  {
    icon: Heart,
    title: "Soft spot for",
    detail: "Storytelling, design thinking & quiet observation",
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="soft-gingham mx-auto max-w-6xl rounded-[3rem] px-6 py-8 md:px-10 md:py-10">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.15fr] md:items-center">
          <div className="relative">
            <div className="absolute left-2 top-0 h-24 w-24 rounded-full bg-primary/25 blur-2xl" />
            <div className="relative rounded-[2.5rem] border border-border/60 bg-[linear-gradient(180deg,oklch(0.92_0.06_345),oklch(0.87_0.07_70))] p-5 scrapbook-shadow">
              <div className="rounded-[2rem] bg-[#a9bfd9] p-6">
                <div className="rounded-[1.6rem] border border-white/70 bg-card px-5 py-6">
                  <p className="text-sparkle text-5xl leading-none text-rose md:text-6xl">Pinkaholic</p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    creative technologist
                  </p>
                  <div className="mt-6 space-y-4">
                    {facts.map((fact) => (
                      <div key={fact.title} className="flex items-start gap-3">
                        <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-rose">
                          <fact.icon className="size-4" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            {fact.title}
                          </p>
                          <p className="text-sm leading-relaxed text-foreground">{fact.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <span className="inline-flex rounded-full bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose scrapbook-shadow">
              about me
            </span>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Exploring software, creative technology & digital experiences.
            </h2>
            <p className="pointer-events-none absolute right-0 top-16 hidden rotate-6 text-script text-5xl text-rose/70 md:block">
              favorite artist
            </p>

            <div className="mt-6 space-y-4 rounded-[2rem] border border-border/60 bg-card/90 p-6 text-pretty leading-relaxed text-muted-foreground scrapbook-shadow">
              <p>
                I&apos;m Ishita, a computer engineering student who fell for the place where code
                meets craft. Most of what I make starts as curiosity: how an interface could feel
                kinder, how a game could hold a feeling, how a small interaction could tell a
                story.
              </p>
              <p>
                I move comfortably between wireframes and Python, between marketing decks and game
                prototypes. I care about design thinking, problem solving, and making technology
                that feels warm rather than cold. When I&apos;m not building, I&apos;m usually
                sketching ideas, reading, or collecting little visual references.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Design Thinking", "Storytelling", "Wireframing", "Problem Solving", "Marketing"].map(
                (tag, index) => (
                  <span
                    key={tag}
                    className={`rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground scrapbook-shadow ${
                      index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
                    }`}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
