import {Navbar1} from '@/app/ui/Navbar1'
export default function Page() {
  return (

    <section className="relative isolate min-h-screen">
      {/* Background image */}
        <Navbar1 />
      <div
        className="fixed inset-0 -z-10 bg-center bg-no-repeat bg-cover h-screen w-screen"
        style={{ backgroundImage: "url('/enhanced_to_krea2.png')" }}
      />

      {/* Soft beige gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f6ecd7]/90 via-[#f9f1e3]/85 to-[#f2e6cc]/90" />

      <div className="mx-auto max-w-2xl px-6 py-32 sm:py-40 lg:py-48 text-center">
        <h1 className="text-5xl md:text-6xl tracking-wide mb-2 !font-thin">CRYSTAL HARP</h1>
        <h2 className="text-4xl md:text-5xl tracking-wide !font-thin">HEALING</h2> <br></br>
          <p className="  text-m md:text-3xl tracking-wide !font-thin" >Heading Vibrational therapy for emotional balance, deep rest, and inner alignment.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
              Experience the Sound
          </a>

        </div>
          <br></br>
          <a href="#" className="text-sm font-semibold text-foreground">
              In-person in Los Angeles & Online Worldwide

          </a>
      </div>
    </section>
  )
}