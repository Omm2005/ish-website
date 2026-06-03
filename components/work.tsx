import Image from "next/image"

const projects = [
  {
    image: "/images/work-game.png",
    tag: "Game Design",
    title: "A Little Floating World",
    body: "A cozy exploration game concept built around mood and gentle discovery — every screen designed to feel like a place you could rest.",
  },
  {
    image: "/images/work-uiux.png",
    tag: "UI / UX",
    title: "Soft Systems Kit",
    body: "A rounded, friendly mobile design system — components, flows, and prototypes that keep products warm and easy to use.",
  },
  {
    image: "/images/work-code.png",
    tag: "Creative Coding",
    title: "Lines That Wander",
    body: "Generative sketches in Python where simple rules grow into delicate, ever-shifting patterns of pink and gold.",
  },
]

export function Work() {
  return (
    <section id="work" className="px-6 py-20 md:py-28">
      <div className="pink-stripes mx-auto max-w-6xl rounded-[3rem] px-4 py-8 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose scrapbook-shadow">
              selected work
            </span>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Things I&apos;ve made & explored.
            </h2>
          </div>
          <p className="max-w-sm rounded-[1.5rem] bg-card/90 px-5 py-4 text-pretty text-sm leading-relaxed text-muted-foreground scrapbook-shadow">
            A small selection of projects across the things I love: playful, visual, and always a
            little experimental.
          </p>
        </div>

        <div className="metal-tray relative mt-12 rounded-[2.8rem] p-5 md:p-7">
          <p className="pointer-events-none absolute left-6 top-[-2.5rem] text-script text-5xl text-rose/80 md:left-12 md:text-7xl">
            What&apos;s In my Tincase
          </p>

          <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr_0.95fr]">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group paper-card flex flex-col overflow-hidden rounded-[2.1rem] transition-transform hover:-translate-y-1 ${
                  index === 1 ? "md:translate-y-8" : ""
                }`}
              >
                <div className="overflow-hidden rounded-[1.7rem] border-b border-border/50 bg-card p-3">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={450}
                    className="aspect-[4/3] w-full rounded-[1.2rem] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                    {project.tag}
                  </span>
                  <h3 className="mt-3 font-sans text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
