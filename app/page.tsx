import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Craft } from "@/components/craft"
import { Journey } from "@/components/journey"
import { Work } from "@/components/work"
import { Contact } from "@/components/contact"
import { BeadDivider } from "@/components/coquette-graphics"
import { FloatingAvatars } from "@/components/floating-avatars"
import { SparkleController } from "@/components/sparkle-controller"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <FloatingAvatars />
      <SparkleController />
      <SiteNav />
      <Hero />
      <BeadDivider />
      <About />
      <BeadDivider />
      <Craft />
      <BeadDivider />
      <Journey />
      <BeadDivider />
      <Work />
      <BeadDivider />
      <Contact />
    </main>
  )
}
