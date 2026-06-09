import { PinkaholicMoodboard } from "@/components/pinkaholic-graphics"

export function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 md:py-28">
      <div className="soft-gingham mx-auto max-w-6xl rounded-[2.4rem] px-4 py-6 sm:rounded-[3rem] sm:px-6 sm:py-8 md:px-10 md:py-10">
        <span className="mb-7 inline-flex rounded-full bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose scrapbook-shadow">
          about me
        </span>

        <div className="flex flex-col gap-10">
          <div className="relative">
            <div className="absolute left-2 top-0 h-24 w-24 rounded-full bg-primary/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
              <PinkaholicMoodboard />
            </div>
          </div>

          <div className="relative flex h-full flex-col">
            <h2 className="mt-2 max-w-[14ch] text-balance font-serif text-[1.85rem] leading-[1.12] text-foreground min-[390px]:text-[2rem] sm:max-w-none sm:text-4xl sm:leading-tight lg:text-5xl">
              Exploring software, creative technology & digital experiences.
            </h2>
            <p className="pointer-events-none absolute right-2 top-8 hidden rotate-6 text-script text-4xl leading-[1.15] text-rose/60 lg:top-12 lg:block xl:text-5xl">
              favorite artist
            </p>

            <div className="mt-6 flex-1 space-y-4 rounded-[1.6rem] border border-border/60 bg-card/90 p-4 text-pretty text-[0.9rem] leading-6 text-foreground/75 scrapbook-shadow sm:rounded-[2rem] sm:p-6 sm:text-base sm:leading-relaxed sm:text-muted-foreground">
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
                    className={`max-w-full rounded-full border border-border bg-card px-4 py-2 text-[0.95rem] font-semibold leading-snug text-foreground scrapbook-shadow sm:text-sm ${
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
