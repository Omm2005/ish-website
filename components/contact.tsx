import { Linkedin, Mail, ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="soft-gingham rounded-[2.4rem] p-4 sm:rounded-[3rem] sm:p-5 md:p-8">
          <div className="paper-card relative rounded-[2rem] px-5 py-8 sm:rounded-[2.4rem] sm:px-8 sm:py-12 md:px-12 md:py-14">
            <div className="mx-auto max-w-3xl text-center">
              <div>
                <span className="rounded-full bg-primary/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose">
                  say hello
                </span>
                <h2 className="mt-4 text-balance font-serif text-[2.35rem] leading-[1.06] text-foreground sm:text-4xl sm:leading-tight lg:text-5xl">
                  Let&apos;s make something gentle together.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-pretty text-[0.98rem] leading-8 text-foreground/80 sm:text-base sm:leading-relaxed">
                  Whether it&apos;s a collaboration, a project, or just a kind hello, my inbox is
                  always open. I&apos;d love to hear what you&apos;re dreaming up.
                </p>

                <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center">
                  <a
                    href="mailto:hello@ishitagautam.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold leading-none text-background transition-transform hover:-translate-y-0.5"
                  >
                    <Mail className="size-4" />
                    Send a note
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ishita-gautam-8aab2b335/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold leading-none text-foreground transition-colors hover:bg-secondary"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <div className="w-full max-w-[300px] rounded-[14px] bg-[#f7c8d8] p-[10px] shadow-[0_8px_32px_rgba(200,96,144,0.18)] sm:rotate-[-2deg] transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]">
                <div className="postcard-lace flex min-h-[180px] items-center justify-center rounded-[10px] border-white/65">
                  <p className="text-center text-script text-[3rem] leading-[1.16] text-white drop-shadow-[0_2px_8px_rgba(168,72,120,0.25)]">
                    Tourist
                    <br />
                    Trap
                  </p>
                </div>
              </div>

              <div className="w-full max-w-[220px] text-center">
                <div className="mb-3 flex items-center justify-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#b08898]">
                  <span className="h-px w-[18px] bg-[#e8a0bb]" />
                  a little note
                  <span className="h-px w-[18px] bg-[#e8a0bb]" />
                </div>
                <p className="font-serif text-base leading-7 italic text-[#7a5a68]">
                  &quot;You lure in curious collaborators and make them want to stay forever.&quot;
                </p>
                <p className="mt-2 text-script text-2xl leading-[1.2] text-[#c86090]">love, Ishita</p>
              </div>

              <div className="relative w-full max-w-[300px] rounded-[14px] border-2 border-[#f7c8d8] bg-white p-[18px] pb-8 shadow-[0_8px_32px_rgba(200,96,144,0.14)] sm:rotate-[1.5deg] transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]">
                <div className="grid gap-[14px] sm:grid-cols-[1.2fr_1fr]">
                  <div className="flex items-center text-[0.88rem] leading-[1.8] text-[#c86090]">
                    <p className="break-words text-script text-[1.2rem] leading-[1.65] [overflow-wrap:anywhere]">
                      You lure in
                      <br />
                      curious collaborators
                      <br />
                      and make them
                      <br />
                      want to stay forever.
                    </p>
                  </div>

                  <div className="border-t border-[#f7c8d8]/50 pt-3 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
                    <div className="flex flex-col gap-3">
                      <div className="flex h-[52px] w-[42px] items-center justify-center rounded-[4px] border-[1.5px] border-[#f7c8d8] bg-[#fce8f0] px-1 text-center text-[0.52rem] uppercase tracking-[0.06em] text-[#c86090]">
                        Ishita
                        <br />
                        Gautam
                        <br />✦
                      </div>
                      <div>
                        <div className="break-words text-[0.68rem] leading-[1.7] text-[#7a5a68] [overflow-wrap:anywhere]">Claire &amp; Mies energy</div>
                        <div className="my-[2px] h-px bg-[#c860902e]" />
                        <div className="break-words text-[0.68rem] leading-[1.7] text-[#7a5a68] [overflow-wrap:anywhere]">Bengaluru, India</div>
                        <div className="my-[2px] h-px bg-[#c860902e]" />
                      </div>
                    </div>
                  </div>
                </div>

                <p className="absolute inset-x-[18px] bottom-[10px] text-right text-[0.54rem] leading-snug tracking-[0.04em] text-[#b08898]">
                  @ishitagautam · tourist trap by morgan elizabeth
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p className="text-script text-2xl leading-[1.2] text-foreground">Ishita Gautam</p>
          <p>© {new Date().getFullYear()} · Made with care &amp; a little pink.</p>
        </footer>
      </div>
    </section>
  )
}
