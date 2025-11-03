import Image from 'next/image'
import { Footer } from '@/components/sections/Footer'
export default function AboutMePage() {
  return (
    <main className="px-6">
      {/* Constrain header to the same centered, padded container as the hero */}
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

        <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-amber-800 mb-10 drop-shadow-sm !font-light md:!font-thin text-center my-8">
          Meet the Frequency Behind the Harp
        </h1>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-2/3 text-left text-amber-800 !font-thin space-y-4">
          <h2 className="text-4xl text-amber-800 !font-thin text-center md:text-left pb-2 pt-2">Welcome, I’m Zhenya.</h2>
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent w-20 md:w-36 lg:w-72 md:max-w-[720px] mx-auto md:mx-0" />
          <p className="pb-4 pt-4">
            I’m a sound healer with a background in psychotherapy. Crystal Harp Healing was born
            from the meeting point between psychology, resonance, and the human heart.
          </p>

          <p className="pb-2">
            My sessions weave together the vibrational frequencies of the crystal harp with
            mindfulness, somatic awareness, and heart-centered presence to help you release tension,
            ground your body, and reconnect with your natural rhythm of peace.
          </p>

          <p  className="pb-2">
            This practice is an invitation to tune inward — to experience sound not just as something
            you hear, but as something you feel, guiding you gently back to balance and wholeness.
          </p>
        </div>

        <div className="md:w-1/3 flex-shrink-0">
          <Image
            src="/about_me.jpg"
            alt="Zhenya portrait"
            width={4367}
            height={5287}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
<Footer />
    </main>



  )
}




