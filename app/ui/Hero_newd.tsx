'use client'



export default function Hero_newd() {
    return (
        <section className=" flex justify-center items-center  ">
            <div className="max-w-6xl w-full bg-[#FCEFD7] rounded-2xl shadow-md overflow-hidden">
            {/* Image Background Section */}
                <div
                    className="relative h-[400px] md:h-[700px] lg:h-[900px] flex flex-col justify-start bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/bg.png')", // replace with your own image path
                    }}
                >
                    <h1 className="relative text-[clamp(1.8rem,4vw,3.5rem)] text-center mt-8 md:mt-16 drop-shadow-sm !font-light "
                    >
                        CRYSTAL HARP<br />HEALING
                    </h1>
                    <p className=" mt-[2px] md:mt-1 text-m md:text-2xl tracking-wide text-center !font-normal" >Heading Vibrational therapy for emotional balance, deep rest, and inner alignment.</p>

                </div>

                {/* Lower Section */}
                <div className="bg-[#FCEFD7] text-center px-6 py-10">

                    <button className="bg-[#FCEFD7] text-[#211101] px-6 py-3 rounded-md shadow hover:bg-[#e9d8ca] transition">
                        Experience the Sound
                    </button>
<br></br>
                    <br></br>
                    <p className="text-[#211101] text-lg md:text-xl mb-6">
                        In-person in Los Angeles & Online Worldwide
                    </p>
                </div>
            </div>
        </section>
    )
}
