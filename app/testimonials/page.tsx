import Image from 'next/image'
import { Footer } from '@/components/sections/Footer'
import TestimonialCard from '@/app/testimonials/TestimonialCard'
import React from 'react'
export default function Testimonials() {
  return (
    <main className="px-6">
      {/* Constrain header to the same centered, padded container as the hero */}
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

        <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-amber-800 mb-10 drop-shadow-sm !font-light md:!font-thin text-center my-8">
          Reflections- What People Feel
        </h1>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3 text-left text-amber-800 !font-thin space-y-4">
          <h2 className="text-4xl text-amber-800 !font-thin text-center md:text-left pb-2 pt-2">
            Echoes from the Heart
          </h2>
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent w-20 md:w-36 lg:w-72 md:max-w-[720px] mx-auto md:mx-0" />

          <blockquote className="mt-4 pl-6 md:pl-8 border-l-4 border-amber-300 italic text-lg md:text-xl text-amber-800 !font-thin max-w-2xl">
            <p>
              Each client’s experience is unique, but the essence is the same — deeper presence,
              release, and renewal.
            </p>
          </blockquote>
        </div>

        <div className="md:w-1/3 flex-shrink-0">
          <Image
            src="/testimonials.jpg"
            alt="Zhenya portrait"
            width={3857}
            height={3944}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
      <br></br>
      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Maria F"
        role="Singer"
        // imageSrc="/hires/maria.jpg"
        content="My name is Maria and I want to share the uplifting and healing experience I had working with Zhenya. I have felt blocked for a while now and have been questioning why I couldn’t move forward with my gifts and my inner desires for my Life. With Zhenya’s work, I was able to recognize certain revelations about my behavior and from where my choices stemmed from. How we process trauma was a big discovery for me. I look forward to more sessions with Zhenya. She helped me to uncover some of the many mysteries of who I am and what I am truly meant to be. I highly recommend her work. She will gently help you remove the masks and reach behind the ego. This will help uncover your GOD given gifts and your GOD given rights, so you turn your pain into your power."
      />
      <br></br>
      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Esteban"
        role="Soccer coach"
        // imageSrc="/hires/maria.jpg"
        content="I had the opportunity to work with Zhenya, and it was a really amazing experience. I really didn’t know what to expect, but my partner booked a session with her and invited me to join. Zhenya had a really great energy as soon as I met her. She was kind, compassionate, and as we talked a bit more and she learned a little more about my life and current situation, she went with the flow and decided to adjust to that and we ended up having an incredible, cathartic session that brought up a lot of things I had bottled up inside, and it allowed me and my partner to connect in a really powerful way on the spot as the session continued. It was a truly awesome experience that I didn’t realize I needed at the time, and I would recommend it to anyone!
"
      />

      <br></br>
      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-2/3 text-center text-amber-800 !font-thin space-y-4">
          <h3 className="text-4xl text-amber-800 !font-thin ">Chel-model, influencer</h3>
          <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>
          <p className="pb-4 pt-4">
            Zhenya came and did glass harp therapy for me in my apartment. It was moving. Between
            the comfort of being in my own home, where I feel safe, and her gentle soothing voice, I
            was able to dig deep and tackle some hard topics, in just one session. Since my session
            with her, I have been doing more <b>deep reflection</b> than I have in a long time. I
            have been facing choices I am making head on. If you’re ready to make{' '}
            <b>positive changes</b> in your life, and you’re having trouble knowing where to start,
            this is your answer. I got more from this one session than I have with any other therapy
            session. I couldn’t recommend her more! Zhenya’s work is <b> truly powerful</b>.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
