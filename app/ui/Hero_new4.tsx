'use client'



export default function Hero_new4() {
    return (
        <section className="bg-[#E1D4C7] flex justify-center items-center  p-6">
            <div className="max-w-8xl w-full bg-[#E1D4C7] rounded-2xl shadow-md overflow-hidden  ">
            {/* Image Background Section */}
                <div
                    className="relative w-full aspect-[3/2] flex flex-col items-center justify-center bg-center bg-contain bg-no-repeat"
                    style={{
                        backgroundImage: "url('/hires/005.png')",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <h1 className="relative text-8xl text-amber-800 text-center mt-10 md:mt-16 drop-shadow-sm !font-thin">
                        PSYCHO-SOUND HEALING
                    </h1>

                    <div className=" text-center px-6 py-10">
                        <p className="text-[#211101] text-lg md:text-xl mb-6">
                            Healing through Sound, Psychology, and Presence
                        </p>
                        <button className="bg-[#E1D4C7] text-[#211101] px-6 py-3 rounded-md shadow hover:bg-[#e9d8ca] transition">
                            Book a Session
                        </button>
                    </div>
                </div>


            </div>
        </section>
    )
}
