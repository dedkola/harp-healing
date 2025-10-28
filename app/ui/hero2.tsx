'use client'

export default function Hero2() {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-[#e8d3a8] via-[#e3c193] to-[#d6b67a]">
            {/* Glow & reflection effect */}
            <div className="absolute bottom-0 w-[300px] h-[300px] bg-[#f5e2b8] rounded-full blur-[120px] opacity-50" />

            {/* Lotus-like shape using layered circles */}
            <div className="relative w-[200px] h-[200px] flex items-center justify-center mb-6">
                {/* Main bloom shape */}
                <div className="absolute inset-0 bg-[#f7f1dc] rounded-full blur-[20px] shadow-[0_0_50px_rgba(255,255,255,0.5)]" />
                <div className="absolute w-[160px] h-[160px] bg-[#f9f4e3] rounded-full blur-[10px]" />
                <div className="absolute w-[120px] h-[120px] bg-[#fffaf0] rounded-full" />
            </div>

            {/* Text */}
            <div className="text-center text-[#3e2e1f]">
                <h1 className="text-5xl md:text-6xl font-serif tracking-wide mb-2">
                    CRYSTAL HARP
                </h1>
                <h2 className="text-4xl md:text-5xl font-serif tracking-wide">
                    HEALING
                </h2>
            </div>

            {/* Water reflection effect */}
            <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-[#d9bc8f]/40 to-transparent blur-[60px] opacity-50" />
        </section>
    )
}
