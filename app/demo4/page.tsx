import Navbar3 from '@/app/ui/navbar3'
import Testimonial from '@/app/ui/Testimonial'
export default function Page() {
    return (
        <>
            {/* Full-page amber gradient background with subtle grid lines */}
            <div className="relative min-h-screen bg-gradient-to-b from-[#e1bc8f] via-[#ecd8ae] to-[#f7e9d2] overflow-hidden">
                {/* Thin lines overlay (non-interactive) */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 opacity-25"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, rgba(255,255,255,0.18) 0, rgba(255,255,255,0.18) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 22px), repeating-linear-gradient(90deg, rgba(255,255,255,0.10) 0, rgba(255,255,255,0.10) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 22px)"
                    }}
                />

                <div className="mx-auto w-full max-w-[1300px]">
                    <Navbar3 />

                    <section className="relative isolate">
                        <div className="px-6 py-32 sm:py-40 lg:py-32 text-center">
                            <h1 className="text-5xl md:text-6xl tracking-wide mb-2">CRYSTAL HARP</h1>
                            <h2 className="text-4xl md:text-5xl tracking-wide">HEALING</h2>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-gradient-to-b from-[#e1bc8f] via-[#ecd8ae] to-[#f7e9d2] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold text-gray-900 hover:text-gray-700">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

                <Testimonial />
            </div>
        </>
    )
}