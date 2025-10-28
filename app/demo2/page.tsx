import {Navbar2} from '@/app/ui/Navbar2'
export default function Page() {
    return (


        <>
        <div className=" bg-gradient-to-b from-[#e1bc8f] via-[#ecd8ae] to-[#f7e9d2]">

    <Navbar2 /> </div>
        <section className="relative isolate">
            {/* Background image */}

            <div
                className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/enhanced_to_krea2.png')" }}
            />


            <div className="mx-auto max-w-2xl px-6 py-32 sm:py-40 lg:py-70 text-center">
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
        </>
            )
}