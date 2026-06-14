import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Currently } from "@/components/currently"
import { DeskWidget } from "@/components/desk-widget"
import { Craft } from "@/components/craft"
import { Journey } from "@/components/journey"
import { Work } from "@/components/work"
import { Contact } from "@/components/contact"
import { BeadDivider } from "@/components/coquette-graphics"
import { FloatingAvatars } from "@/components/floating-avatars"
import { FloatingPixelAvatar } from "@/components/floating-pixel-avatar"
import { SparkleController } from "@/components/sparkle-controller"
import { MusicWidget } from "@/components/music-player-widget"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <FloatingAvatars />
      <FloatingPixelAvatar />
      <SparkleController />
      <MusicWidget />
      <SiteNav />
      <Hero />
      <BeadDivider />
      <About />
      <BeadDivider />
      <Currently />
      <BeadDivider />
      <DeskWidget />
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
