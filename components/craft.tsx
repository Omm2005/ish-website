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
    <section id="craft" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-border/60 bg-card scrapbook-shadow">
        <div className="bg-[linear-gradient(180deg,oklch(0.97_0.025_345),oklch(0.95_0.03_345))] px-6 py-10 md:px-10">
          <div className="max-w-2xl">
            <span className="rounded-full bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose">
              what i do
            </span>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
              A little bit of everything, tied together by curiosity.
            </h2>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              I like living at the intersection of design and technology, picking up whichever tool
              a project needs and learning out loud along the way.
            </p>
          </div>
        </div>

        <div className="space-y-5 bg-[linear-gradient(180deg,oklch(0.91_0.05_90),oklch(0.92_0.03_180),oklch(0.9_0.04_355),oklch(0.9_0.03_240))] px-4 py-6 md:px-6">
          {crafts.map((craft, index) => (
            <div
              key={craft.title}
              className={`grid items-center gap-5 rounded-[2rem] border border-border/50 bg-card/90 p-5 md:grid-cols-[auto_1fr_auto] md:p-6 ${
                index % 2 === 0 ? "md:translate-x-6" : "md:-translate-x-6"
              }`}
            >
              <span className="flex size-14 items-center justify-center rounded-[1.25rem] bg-primary/70 text-foreground shadow-sm">
                <craft.icon className="size-7" />
              </span>
              <div>
                <h3 className="font-sans text-2xl font-semibold text-foreground md:text-3xl">
                  {craft.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {craft.body}
                </p>
              </div>
              <span className="w-fit rounded-full bg-butter px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-foreground">
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
