import { Gamepad2, Palette, Code2, Lightbulb } from "lucide-react"

const crafts = [
  {
    icon: Gamepad2,
    title: "Game Development",
    body: "Prototyping playful, feeling-first experiences — from mechanics to mood. Interactive worlds that hold a little emotion.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    body: "Designing soft, intuitive interfaces. Wireframes, flows, and tidy components that make products feel effortless and kind.",
  },
  {
    icon: Code2,
    title: "Creative Coding",
    body: "Writing Python and code that draws, animates, and surprises — where logic becomes something visual and a little poetic.",
  },
  {
    icon: Lightbulb,
    title: "Design Thinking",
    body: "Framing problems before solving them. Research, storytelling, and a bit of marketing intuition to ground every idea.",
  },
]

export function Craft() {
  return (
    <section id="craft" className="px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.4rem] border border-border/60 bg-card scrapbook-shadow sm:rounded-[3rem]">
        <div className="bg-[linear-gradient(180deg,oklch(0.97_0.025_345),oklch(0.95_0.03_345))] px-5 py-8 sm:px-6 sm:py-10 md:px-10">
          <div className="max-w-2xl">
            <span className="rounded-full bg-background px-4 py-2 text-xs font-semibold uppercase leading-none tracking-[0.2em] text-rose">
              what i do
            </span>
            <h2 className="mt-4 max-w-[13ch] text-balance font-serif text-[2.35rem] leading-[1.06] text-foreground min-[390px]:text-[2.6rem] sm:max-w-none sm:text-4xl sm:leading-tight lg:text-5xl">
              A little bit of everything, tied together by curiosity.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-[0.98rem] leading-8 text-muted-foreground sm:text-base sm:leading-relaxed">
              I like living at the intersection of design and technology, picking up whichever tool
              a project needs and learning out loud along the way.
            </p>
          </div>
        </div>

        <div className="space-y-4 bg-[linear-gradient(180deg,oklch(0.91_0.05_90),oklch(0.92_0.03_180),oklch(0.9_0.04_355),oklch(0.9_0.03_240))] px-3 py-4 sm:space-y-5 sm:px-4 sm:py-6 md:px-6">
          {crafts.map((craft, index) => (
            <div
              key={craft.title}
              className={`grid min-w-0 items-center gap-4 rounded-[1.7rem] border border-border/50 bg-card/90 p-4 sm:gap-5 sm:rounded-[2rem] sm:p-5 md:p-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] ${
                index % 2 === 0 ? "lg:translate-x-6" : "lg:-translate-x-6"
              }`}
            >
              <span className="flex size-12 items-center justify-center rounded-[1rem] bg-primary/70 text-foreground shadow-sm sm:size-14 sm:rounded-[1.25rem]">
                <craft.icon className="size-6 sm:size-7" />
              </span>
              <div>
                <h3 className="break-words font-sans text-[1.55rem] leading-[1.08] font-semibold text-foreground [overflow-wrap:anywhere] sm:text-2xl lg:text-3xl">
                  {craft.title}
                </h3>
                <p className="mt-2 max-w-2xl text-[0.95rem] leading-7 text-muted-foreground sm:text-sm sm:leading-relaxed">
                  {craft.body}
                </p>
              </div>
              <span className="w-fit max-w-full rounded-full bg-butter px-4 py-2 text-[0.68rem] font-bold uppercase leading-none tracking-[0.14em] text-foreground sm:text-xs sm:tracking-[0.16em]">
                {index === 0 && "playful"}
                {index === 1 && "intuitive"}
                {index === 2 && "poetic"}
                {index === 3 && "grounded"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
