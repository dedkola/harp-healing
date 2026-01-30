import Image from 'next/image'
import { Footer } from '@/components/sections/Footer'
import TestimonialCard from '@/app/reflections/TestimonialCard'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Testimonials | Crystal Harp Healing Reviews & Success Stories',
  description:
    'Read real testimonials from crystal harp healing clients. Discover how sound therapy helped with stress relief, emotional balance, trauma healing, and nervous system regulation. Verified reviews from real people.',
  keywords: [
    'sound healing testimonials',
    'crystal harp reviews',
    'sound therapy success stories',
    'healing testimonials',
    'client reviews sound healing',
    'vibrational therapy results',
    'psycho-sound healing feedback',
  ],
  openGraph: {
    title: 'Client Testimonials - Crystal Harp Healing',
    description:
      'Real stories from clients who experienced transformation through crystal harp healing. Read how sound therapy helped with stress, anxiety, and emotional balance.',
    url: 'https://www.crystalharphealing.com/reflections',
    siteName: 'Crystal Harp Healing',
    images: [
      {
        url: 'https://www.crystalharphealing.com/testimonials.jpg',
        width: 1200,
        height: 630,
        alt: 'Crystal Harp Healing Client Testimonials',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials - Crystal Harp Healing',
    description:
      'Real transformation stories from crystal harp healing clients. Discover the power of sound therapy.',
    images: ['https://www.crystalharphealing.com/testimonials.jpg'],
  },
}

export default function Testimonials() {
  return (
    <main className="px-6">
      {/* Constrain header to the same centered, padded container as the hero */}
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

        <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-amber-800 mb-10 drop-shadow-sm !font-light md:!font-thin text-center my-8">
          What People Feel
        </h1>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3 text-left text-amber-800 !font-thin space-y-4">
          <h2 className="text-4xl text-amber-800 !font-thin text-center md:text-left pb-2 pt-2">
            Echoes from the Heart
          </h2>
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent w-20 md:w-36 lg:w-72 md:max-w-[720px] mx-auto md:mx-0" />

          <blockquote className="!font-normal  ![font-family:var(--font-open-sans)] mt-4 pl-6 md:pl-8 border-l-4 border-amber-300  text-lg md:text-xl text-amber-800 max-w-2xl">
            <p>
              Each client’s experience is unique, but the essence is the same — deeper presence,
              release, and renewal.
            </p>
          </blockquote>
        </div>

        <div className="md:w-1/3 flex-shrink-0">
          <Image
            src="/testimonials.jpg"
            alt="Crystal harp sound healing session testimonials and client experiences"
            width={3857}
            height={3944}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
      <br></br>
      <div className=" px-6h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Maria F"
        role="Singer"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            My name is Maria and I want to share the uplifting and healing experience I had working
            with Zhenya. I have felt blocked for a while now and have been questioning why I
            couldn’t move forward with my gifts and my inner desires for my Life. With Zhenya’s
            work, I was able to
            <b> recognize certain revelations </b> about my behavior and from where my choices
            stemmed from. How we process trauma was a big discovery for me. I look forward to more
            sessions with Zhenya. She helped me to uncover some of the many mysteries of who I am
            and what I am truly meant to be. I highly recommend her work. She will gently help you
            remove the masks and reach behind the ego. This will help uncover your
            <b>GOD given gifts </b> and your GOD given rights, so you turn your{' '}
            <b>pain into your power</b>.
          </>
        }
      />
      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Esteban"
        role="Soccer coach"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            I had the opportunity to work with Zhenya, and it was a really amazing experience. I
            really didn’t know what to expect, but my partner booked a session with her and invited
            me to join. Zhenya had a really great energy as soon as I met her. She was kind,
            compassionate, and as we talked a bit more and she learned a little more about my life
            and current situation, she went with the flow and decided to adjust to that and we ended
            up having an incredible, <b>cathartic session </b>that brought up a lot of things I had
            bottled up inside, and it allowed me and my partner to
            <b> connect in a really powerful way</b> on the spot as the session continued. It was a
            truly awesome experience that I didn’t realize I needed at the time, and I would
            recommend it to anyone!
          </>
        }
      />
      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Chel-model"
        role="Influencer"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            Zhenya came and did glass harp therapy for me in my apartment. It was moving. Between
            the comfort of being in my own home, where I feel safe, and her gentle soothing voice, I
            was able to dig deep and tackle some hard topics, in just one session. Since my session
            with her, I have been doing more <b>deep reflection</b> than I have in a long time. I
            have been facing choices I am making head on. If you’re ready to make{' '}
            <b>positive changes</b> in your life, and you’re having trouble knowing where to start,
            this is your answer. I got more from this one session than I have with any other therapy
            session. I couldn’t recommend her more! Zhenya’s work is <b>truly powerful</b>.
          </>
        }
      />

      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Keion"
        role="Owner of Pilates studio"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            My session with Zhenya was both <b>calming</b> and <b> invigorating</b>. I am so
            impressed by how she’s carving out her own niche! With her background in psychotherapy,
            she brings a strong foundation but infuses it with the healing properties of sound,
            using the crystal harp to create a truly unique sensory experience. The session was over
            an hour, and what stood out most was the way she combines modalities to offer something
            beyond traditional therapy. The sound and tonal work in particular gave me a{' '}
            <b>powerful way to connect with mindfulness</b>. It helped me take a step back and
            examine my own professional challenges with clarity. I left feeling{' '}
            <b> grounded, focused, and confident </b>in my next steps. I’d recommend Zhenya’s work
            to anyone who feels that the status quo in therapeutic or mindfulness practices hasn’t
            been quite enough. If you’re open to something innovative, and want a customized
            approach that meets you where you are, her work is well worth experiencing.
          </>
        }
      />

      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Yani"
        role="Combat veteran and father of 5
"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            From skepticism to trust. As a high up-tempo workload with an immediate demand of
            resolutions, I have always find myself physically and mentally drained throughout the
            day while my body is running on fumes from lack of sleep. The body is in bed but the
            mind is at the rallycross, constantly navigating through a web of obstacles. Zhenya
            introduced me to the crystal harp therapy. The frequencies from the crystal harp
            embedded with her soothing voice transcends to a culmination of{' '}
            <b>calm and powerful tranquility wavelength</b> that put my mind at ease and my body
            magnetized to the surface. A symbiotic experience that
            <b> recalibrated my mind, body, and spirit</b> in a synergistic outcome. I am a very
            well satisfied grateful person again.
          </>
        }
      />

      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Dina"
        role="Occupational Therapist
"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            My crystal harp session with Zhenya took me on such an
            <b> insightful and moving journey</b>. I could truly feel the shift from tension to deep
            relaxation. My visualizations were very powerful throughout, with so many layers being
            unraveled. Her beautiful, calming energy and the healing sounds of the harp created such
            <b>peace and transformation</b>. This is something I would love to experience again!
          </>
        }
      />

      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Jaelyn"
        role="Vet student
"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            I can honestly say that my session with Zhenya was exactly what my mind needed. It
            helped me release tension, gain clarity, and feel genuinely at peace. Zhenya created
            such a safe and peaceful space where I felt comfortable opening and letting go. Not at
            first, since I never had this session before, but she walked me through it and explain
            how it works. After the session,{' '}
            <b>I felt lighter, clearer, and more in tune with myself</b>. It was like my mind had
            the chance to relax and not think about my personal conflicts. I’m truly grateful I was
            able to experience this session with Zhenya. I would highly recommend this to anyone who
            wants to reconnect with their inner self. Furthermore, experience this session with
            Zhenya.
          </>
        }
      />

      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Yev"
        role="Psychotherapist in training
"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            Zhenya’s session was <b> transformative</b>. Right after I noticed I started to have
            this inner desire to do things I wanted before, but felt unmotivated to do. I started
            working out again and I feel like this journey I started is directly related to our
            session. Her session really gave me the <b>clarity</b> I’ve been yearning for.
          </>
        }
      />

      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Emily"
        role="Psych student"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            Overall, super lovely experience! My crystal harp healing session was absolutely
            amazing. The tones were <b>mesmerizing</b> and seemed to flow through my entire body,
            helping <b>release tension</b> I didn’t even realize I honestly had. The energy in the
            space felt so gentle and grounding, I walked out feeling completely{' '}
            <b>renewed, self-aware, and clear-minded</b>. It’s a one-of-a-kind experience. Couldn’t
            recommend enough, truly!
          </>
        }
      />

      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Maria "
        role="Property Manager
"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            I’ve completed a course of four sessions with Yevgeniya and I was very impressed by the
            insights I gained. The most vivid memory: during one session I realized that my neck had
            been hurting for several days because I was stressed from all the responsibilities I
            carry — and as soon as I became aware of this, I woke up the next morning completely
            pain-free. In the next two sessions I <b>experienced something powerful</b>: I
            visualized strong, wide wooden roots spreading from me down into the earth. It was an
            <b>amazing experience</b> — especially if you’re responsive to music like I am. I
            enjoyed the sound of the crystal harp and my insight at the same time. Thank you,
            Zhenya! P.S. your voice is something else! Love it!!!
          </>
        }
      />

      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Nancy "
        role="Math Tutor
"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            Listening to the crystal harp for the first time was unlike anything I had ever
            experienced. The sound resonated deeply through my entire body, bringing an{' '}
            <b>overwhelming sense of peace and joy</b>. During the session, I could feel energy
            moving within me—an unusual and <b>fascinating sensation</b>, as I don’t recall ever
            feeling something quite like it before. I've had Reiki sessions in the past, where you
            can sense the practitioner’s energy even without physical touch. This was similar, yet
            no one’s hands hovered over me. The best way I can describe the feeling is like being
            suspended between two magnets—subtle, yet powerful. What truly surprised me was seeing
            colors during the experience. I found myself questioning it afterward—did my brain
            create those visuals in response to the sound? I'm not sure, but it was a completely new
            and beautiful experience for me.
          </>
        }
      />

      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Karol "
        role="Mother of newborn
"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            The room held a warm and inviting ambiance with a soft glow of purple in the background
            and incense curling gently through the air, setting the tone for a serene session. The
            touch of goat lotion that Zhenya offered added an earthy, grounding scent, wrapping the
            moment in quiet comfort. At first, the noise from outside kept pulling my attention
            away, but Zhenya's steady voice brought me back to my breath and the soft sound of the
            harp over and over again. Her gentle presence became an anchor, allowing space for
            something <b>deeper to unfold</b>. As a new mother, still carrying the weight of grief
            for a family member I hadn’t had the chance to mourn during pregnancy, this session
            brought a<b>tender kind of clarity</b>. It felt like a small reset, a reminder to be
            softer with myself, to release judgment, and to make room for both mourning and
            presence, for both loss and love, as I walk this path of motherhood. In embracing this
            duality, I discovered a newfound strength, one that allows me to honor my feelings while
            nurturing my child. Each day becomes an opportunity to weave those threads of sorrow and
            joy together, creating a tapestry of experiences that enrich both my journey and my
            baby's life.
          </>
        }
      />

      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

      <TestimonialCard
        author="Kseniya  "
        role=" Registered Associate
"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            It was my first time experiencing sound healing, and I wasn’t sure what to expect. I’ve
            tried other types of therapy before, but this was something entirely new — and Zhenya
            was the perfect person to guide me through it. I had heard that sound healing can feel
            very different for everyone — and it certainly opened me up in ways I didn’t anticipate.
            The experience helped me reflect on aspects of my life I hadn’t even realized needed
            attention. Zhenya’s kindness, patience, and intuition made all the difference — she
            asked the right questions when I needed direction and gave me space when I needed to
            reflect. I left feeling <b> lighter and more grounded</b>. Highly recommend, especially
            if you are doing it with Zhenya.
          </>
        }
      />
      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>
      <TestimonialCard
        author="Ivonne"
        role=" Massage Therapist"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            I had an amazing healing session with Zhenya. It took me a few days to process what
            transpired during the session. I went into it thinking I had to work on my throat
            Chakra, but it was my sacrum Chakra that spoke and{' '}
            <b>released some blockage from childhood trauma</b>. It was my first time experiencing a
            Crystal Harp healing session and will definitely not be the last. Thank you Zhenya for
            holding space during this process. You are so kind and have a beautiful gift.
          </>
        }
      />
      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>
      <TestimonialCard
        author="Yana"
        role=" Fashion Buyer "
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            I recently had a crystal harp healing session with Zhenya at my home, and it was
            absolutely incredible. She created the most calming, spa-like atmosphere right in my own
            space, soothing, grounding, and beautifully relaxing. The sound of the crystal harp was
            mesmerizing and immediately <b>helped me unwind</b>. What made this experience so
            special was that it not only helped me relax but also gave me{' '}
            <b>insight into what was actually causing my stress and how to better manage it</b>.
            I’ve never felt completely comfortable in traditional therapy settings, sitting in an
            office and talking has always felt awkward, but this was such a natural, comfortable,
            and healing experience. Zhenya has such a warm and peaceful presence that made it easy
            to fully let go and be present. I finished the session feeling lighter, more centered,
            and deeply restored. I can’t recommend Zhenya and her crystal harp therapy enough, it’s
            a truly unique and transformative experience.
          </>
        }
      />
      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>
      <TestimonialCard
        author="Thiri"
        role=" Project Manager"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            Recently, I had the opportunity to participate in a crystal harp healing session that
            was thoughtfully combined with inner child work with Zhenya. This blend of sound therapy
            and emotional healing offered a deeply transformative experience, which I am excited to
            share in this review. The session began with gentle, <b>ethereal sounds</b> produced by
            the crystal harp. I have never had a sound therapy session like this before. The
            vibrations from the instrument created an atmosphere of tranquility, helping me relax
            immediately. Each note seemed to resonate within my body, offering a vibration sensation
            that traveled down my entire body. The session also transitioned into inner child work.
            Zhenya gently prompted reflection on any <b>blockage around my chakars</b>, as well
            inviting me to connect with my younger self, Little Thiri. I was guided to identify
            moments that required healing and compassion on the recent changes in my life. After
            connecting with Little Thiri and her needs to be heard, I was guided by Zhenya to
            visualize affirmations to help address the feelings that were buried and how to work
            towards <b>self-acceptance</b>. I finished the session feeling uplifted and ready to
            focus on Little Thiri’s needs as well as my own. Overall, this was an amazing session
            and highly recommend Zhenya as the perfect guide to help with any relaxation, meditation
            and inner child work journey.
          </>
        }
      />
      <br></br>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>
      <TestimonialCard
        author="Tali"
        role=" Salsa Dancer"
        // imageSrc="/hires/maria.jpg"
        content={
          <>
            I had an amazing experience. The session was deeply relaxing and helped me{' '}
            <b> release tension I didn’t even realize I was holding</b>. Highly recommend! I can't
            wait for my next session. Gabi- Reiki Practitioner Level 2 I had such a wonderful
            experience with Zhenya. It was different from other sound baths that I’ve had in that
            she combines something similar to talk therapy with the crystal harp, exploring any
            feelings/thoughts/images that come up during the session. I loved that aspect of it and
            received so much healing during our session. I entered a meditative state where{' '}
            <b>I was able to explore things that I wasn’t able to access before</b>. 10/10,
            absolutely recommend.
          </>
        }
      />

      {/* <br className="pt-2"></br> */}
      {/* <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10 "></div> */}

      <Footer />
    </main>
  )
}
