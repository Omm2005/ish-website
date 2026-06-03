import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Craft } from "@/components/craft"
import { Journey } from "@/components/journey"
import { Work } from "@/components/work"
import { Contact } from "@/components/contact"
import { FloatingAvatars } from "@/components/floating-avatars"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <FloatingAvatars />
      <SiteNav />
      <Hero />
      <About />
      <Craft />
      <Journey />
      <Work />
      <Contact />
    </main>
  )
}
