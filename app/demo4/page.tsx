import Navbar3 from '@/app/ui/navbar3'
import Testimonial from '@/app/ui/Testimonial'
export default function Page() {
    return (
        <>
            {/* Page wrapper to limit the page/body width to max 1300px only for this page */}

                <div className=" bg-gradient-to-b from-[#e1bc8f] via-[#ecd8ae] to-[#f7e9d2]">
                    <Navbar3 />
                </div>
            <div className="mx-auto w-full max-w-[1300px]">
                <section className="relative isolate">
                    {/* Background image (scoped to this section, within the 1000px wrapper) */}
                    <div
                        className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: "url('/enhanced_to_krea2.png')" }}
                    />

                    <div className="px-6 py-32 sm:py-40 lg:py-32 text-center">
                        <h1 className="text-5xl md:text-6xl tracking-wide mb-2">CRYSTAL HARP</h1>
                        <h2 className="text-4xl md:text-5xl tracking-wide">HEALING</h2>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
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
        </>
    )
}