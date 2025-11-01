'use client'

import { useState } from 'react';

export default function Herohg2() {
    const [isPressed, setIsPressed] = useState(false);

    const handleTouch = () => {
        setIsPressed(true);

        // Reset button effect after 300ms
        setTimeout(() => setIsPressed(false), 300);
    };

    return (
        <section className="w-full text-center py-10">
            <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl mb-10 drop-shadow-sm text-amber-800 !font-light md:!font-thin">
                Crystal Harp Healing
            </h1>

            <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent"></div>

            <div className="w-full flex justify-center">
                <img
                    src="/flower-8400789.png"
                    alt="Psycho-sound healing"
                    className="w-full max-w-2xl h-auto object-contain"
                />
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent"></div>

            <div>
                <p className="text-4xl text-amber-800 font-thin mt-10">
                    Vibrational therapy for emotional balance, deep rest, and inner alignment.
                </p>
                <button
                    className={`bg-[#E1D4C7] text-[#211101] px-6 py-3 text-amber-800 font-thin rounded-md border border-[#c19a6b] transition-all duration-300 hover:shadow-[0_0_20px_rgba(193,154,107,0.5)] hover:scale-105 mt-10 ${
                        isPressed ? 'shadow-[0_0_20px_rgba(193,154,107,0.5)] scale-105' : ''
                    }`}
                    onTouchStart={handleTouch}
                    onClick={handleTouch}
                >
                    Experience the Sound
                </button>

                <p className="text-lg md:text-xl mb-6 text-amber-800 font-thin mt-10">
                    In-person in Los Angeles & Online Worldwide
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>
            </div>
        </section>
    );
}
