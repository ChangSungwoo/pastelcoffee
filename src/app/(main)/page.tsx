import { BrewDrip } from "@/components/sections/brew-drip"
import { Champion } from "@/components/sections/champion"
import { Footer } from "@/components/sections/footer"
import { Hands } from "@/components/sections/hands"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { HouseBlend } from "@/components/sections/house-blend"
import { Journal } from "@/components/sections/journal"
import { Newsletter } from "@/components/sections/newsletter"
import { Philosophy } from "@/components/sections/philosophy"
import { Roastery } from "@/components/sections/roastery"
import { SingleOrigin } from "@/components/sections/single-origin"
import { Visit } from "@/components/sections/visit"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Champion />
        <HouseBlend />
        <SingleOrigin />
        <BrewDrip />
        <Roastery />
        <Hands />
        <Visit />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
