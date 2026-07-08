import Hero from '@/components/sections/Hero'
import { Footer } from '@/components/sections/Footer'
import { PageDivider } from '@/components/sections/page-shell'

export default function Home() {
  return (
    <main>
      <PageDivider className="mt-10" />
      <Hero />
      <Footer />
    </main>
  )
}
