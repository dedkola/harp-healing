import {Navbar1} from '@/app/ui/Navbar1'
export default function About2() {
  return (

    <section className="relative isolate bg-[#F2EAE0]">
      {/* Background image */}
        <Navbar1 />
      <div
        className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/hires/005.png')" }}
      />

      {/* Soft beige gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b " />

      <div className="mx-auto max-w-2xl px-6 py-32 sm:py-40 lg:py-48 text-center">
        <h1 className="text-5xl md:text-6xl tracking-wide mb-2">CRYSTAL HARP</h1>
        <h2 className="text-4xl md:text-5xl tracking-wide">HEALING</h2>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold text-foreground">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}