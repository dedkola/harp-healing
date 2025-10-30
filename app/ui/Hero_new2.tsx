'use client'



export default function Hero_new2() {
    return (
        <section className="bg-gradient-to-b from-[#e1bc8f] via-[#ecd8ae] to-[#f1e6dc] flex justify-center items-center min-h-screen p-6">
            <div className="max-w-6xl w-full bg-[#E1D4C7] rounded-2xl shadow-md overflow-hidden">
            {/* Image Background Section */}
                <div
                    className="relative h-[900px] flex flex-col justify-start bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/hero_desktop_19202.jpg')", // replace with your own image path
                    }}
                >
                    <h1 className="relative text-5xl text-amber-800 text-center mt-10 md:mt-16 drop-shadow-sm !font-thin">
                        PSYCHO-SOUND<br />HEALING
                    </h1>
                </div>

                {/* Lower Section */}
                <div className="bg-[#F1E6DC] text-center px-6 py-10">
                    <p className="text-[#211101] text-lg md:text-xl mb-6">
                        Healing through Sound, Psychology, and Presence
                    </p>
                    <button className="bg-[#E1D4C7] text-[#211101] px-6 py-3 rounded-md shadow hover:bg-[#e9d8ca] transition">
                        Book a Session
                    </button>
                </div>
            </div>
        </section>
    )
}
