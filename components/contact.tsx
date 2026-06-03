import { Linkedin, Mail, ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="soft-gingham rounded-[3rem] p-5 md:p-8">
          <div className="paper-card relative rounded-[2.4rem] px-8 py-12 md:px-12 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <span className="rounded-full bg-primary/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose">
                  say hello
                </span>
                <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
                  Let&apos;s make something gentle together.
                </h2>
                <p className="mt-4 max-w-xl text-pretty leading-relaxed text-foreground/80">
                  Whether it&apos;s a collaboration, a project, or just a kind hello, my inbox is
                  always open. I&apos;d love to hear what you&apos;re dreaming up.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:hello@ishitagautam.com"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                  >
                    <Mail className="size-4" />
                    Send a note
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ishita-gautam-8aab2b335/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border/50 bg-background/75 p-5">
                <p className="text-center text-script text-4xl text-rose md:text-5xl">Tourist Trap</p>
                <div className="postcard-lines mt-4 rounded-[1.5rem] border border-border/40 bg-card px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Claire &amp; Mies energy
                  </p>
                  <p className="mt-6 max-w-xs text-sm leading-relaxed text-foreground">
                    You lure in curious collaborators and make them want to stay forever.
                  </p>
                  <p className="mt-12 text-right text-script text-3xl text-foreground">
                    love, Ishita
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p className="text-script text-2xl text-foreground">Ishita Gautam</p>
          <p>© {new Date().getFullYear()} · Made with care &amp; a little pink.</p>
        </footer>
      </div>
    </section>
  )
}
