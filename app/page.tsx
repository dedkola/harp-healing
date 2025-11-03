import Hero from '@/components/sections/Hero'
import { Footer } from '@/components/sections/Footer'
export default function Home() {
  return (
    <main>
      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>
      <Hero />
      <Footer />
    </main>
  )
}
