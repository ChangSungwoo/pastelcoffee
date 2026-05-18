import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Champion } from "@/components/sections/champion"
import { HouseBlend } from "@/components/sections/house-blend"
import { Philosophy } from "@/components/sections/philosophy"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Champion />
        <HouseBlend />
      </main>
    </>
  )
}
