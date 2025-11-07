'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isPressed, setIsPressed] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Initialize audio element for cross-platform compatibility
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/sound_healing.mp3')
      audioRef.current.preload = 'metadata' // Changed from 'auto' for better compatibility

      // Add event listeners
      const handleEnded = () => {
        setIsPlaying(false)
      }

      const handleError = () => {
        console.error('Audio failed to load')
        setAudioError(true)
        setIsPlaying(false)
      }

      const handleCanPlay = () => {
        setAudioError(false)
      }

      if (audioRef.current) {
        audioRef.current.addEventListener('ended', handleEnded)
        audioRef.current.addEventListener('error', handleError)
        audioRef.current.addEventListener('canplay', handleCanPlay)
      }

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleEnded)
          audioRef.current.removeEventListener('error', handleError)
          audioRef.current.removeEventListener('canplay', handleCanPlay)
        }
      }
    }
  }, [])

  const handleTouch = async (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault() // Prevent any default behavior
    setIsPressed(true)

    // Play sound with cross-platform compatibility
    if (audioRef.current && !audioError) {
      try {
        // Stop current playback if playing
        if (!audioRef.current.paused) {
          audioRef.current.pause()
        }

        // Reset audio to beginning
        audioRef.current.currentTime = 0
        setIsPlaying(true)

        // Play audio - works for both desktop and mobile
        const playPromise = audioRef.current.play()

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Audio started successfully
              console.log('Audio playback started')
            })
            .catch((error) => {
              console.warn('Audio playback failed:', error)
              setIsPlaying(false)
              setAudioError(true)
            })
        }
      } catch (error) {
        console.warn('Audio playback error:', error)
        setIsPlaying(false)
        setAudioError(true)
      }
    }

    // Reset button effect after 300ms
    setTimeout(() => setIsPressed(false), 300)
  }

  const stopAudio = () => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  return (
    <section className="w-full text-center py-10">
      {/* Title */}
      <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-amber-800 mb-10 drop-shadow-sm !font-light md:!font-thin">
        Crystal Harp Healing
      </h1>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-20"></div>

      {/* Image */}
      <div className="w-full flex justify-center">
        <Image
          src="/hero.png"
          alt="Psycho-sound healing"
          className="w-full max-w-6xl h-auto object-contain"
          width="2500"
          height="1042"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
          quality="[75,90]"
          priority
        />
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent pp-2"></div>

      {/* Text + Button */}
      <div className="">
        <p className="text-4xl text-amber-800 font-thin mt-10">
          Vibrational healing for emotional balance, nervous system regulation, and inner alignment
        </p>

        <div className="flex flex-col items-center gap-4 mt-10">
          <button
            className={`bg-[#E1D4C7] px-6 py-3 text-amber-800 font-thin rounded-md border border-[#c19a6b] transition-all duration-300 hover:shadow-[0_0_20px_rgba(193,154,107,0.5)] hover:scale-105 ${
              isPressed ? 'shadow-[0_0_20px_rgba(193,154,107,0.5)] scale-105' : ''
            } ${isPlaying ? 'bg-[#c19a6b] text-white' : ''} ${
              audioError ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            onMouseDown={handleTouch}
            onTouchStart={handleTouch}
            disabled={audioError}
            aria-label="Play healing sound experience"
          >
            {audioError ? 'Audio Unavailable' : isPlaying ? 'Playing...' : 'Experience the Sound'}
          </button>

          {isPlaying && (
            <button
              className="text-amber-800 underline text-sm hover:text-amber-600 transition-colors"
              onClick={stopAudio}
            >
              Stop Audio
            </button>
          )}
        </div>

        <p className="text-lg md:text-xl mb-6 text-amber-800 font-thin mt-10">
          In-person in Los Angeles & Online Worldwide
        </p>
      </div>
    </section>
  )
}
