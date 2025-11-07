import React from 'react'
import { Footer } from '@/components/sections/Footer'
import Image from 'next/image'

export default function DashboardPage() {
  return (
    <main className="px-6">
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10" />

        <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-amber-800 mb-10 drop-shadow-sm !font-light md:!font-thin text-center my-8">
          Dashboard of registered users
        </h1>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10" />
      </div>

      <Footer />
    </main>
  )
}
