import { Footer } from '@/components/sections/Footer'
import React from 'react'

export default function Services() {
  return (
    <main className="px-6">
      {/* Constrain header to the same centered, padded container as the hero */}
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

        <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-amber-800 mb-10 drop-shadow-sm !font-light md:!font-thin text-center my-8">
          Ways to Experience Healing
        </h1>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-2/3 text-center text-amber-800 !font-thin space-y-4">
          <h2 className="text-4xl text-amber-800 !font-thin pb-2 pt-2">
            Every session is a sacred space for rest and renewal.
          </h2>

          <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <article className="flex flex-col items-start gap-3 bg-gradient-to-br from-white/70 to-amber-50/60 backdrop-blur-sm border border-amber-200/30 rounded-2xl p-6 shadow-2xl ring-1 ring-amber-100 transition-shadow hover:shadow-[0_20px_40px_rgba(193,154,107,0.18)]">
              <h4 className="text-xl md:text-2xl text-amber-800 font-semibold">
                Individual Sessions
              </h4>
              <p className="text-sm text-gray-800/90">
                60–75 minute personalized sound healing with emotional regulation and gentle somatic
                attunement. Ideal for stress, anxiety, trauma recovery, or emotional imbalance.
              </p>
            </article>

            <article className="flex flex-col items-start gap-3 bg-gradient-to-br from-white/70 to-amber-50/60 backdrop-blur-sm border border-amber-200/30 rounded-2xl p-6 shadow-2xl ring-1 ring-amber-100 transition-shadow hover:shadow-[0_20px_40px_rgba(193,154,107,0.18)]">
              <h4 className="text-xl md:text-2xl text-amber-800 font-semibold">Group Sessions</h4>
              <p className="text-sm text-gray-800/90">
                Shared vibrational experience for families, friends, or circles. Supports
                connection, co-regulation, and shared peace.
              </p>
            </article>

            <article className="flex flex-col items-start gap-3 bg-gradient-to-br from-white/70 to-amber-50/60 backdrop-blur-sm border border-amber-200/30 rounded-2xl p-6 shadow-2xl ring-1 ring-amber-100 transition-shadow hover:shadow-[0_20px_40px_rgba(193,154,107,0.18)]">
              <h4 className="text-xl md:text-2xl text-amber-800 font-semibold">
                Workshops and Corporate Events
              </h4>
              <p className="text-sm text-gray-800/90">
                Public or private gatherings where crystal harp frequencies create deep meditative
                states and energetic clearing.
              </p>
            </article>
          </div>

          <p>Complimentary introductory consultation available.</p>

          <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

          <h2 className="text-4xl text-amber-800 !font-thin pb-2 pt-2">
            Offerings — Ways to Experience Healing
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>

          <h3 className="text-2xl text-amber-800 !font-thin pb-2 pt-2">
            Every session is a sacred space for rest and renewal.
          </h3>

          <div className="mt-6 space-y-6">
            <section className="bg-gradient-to-br from-white/70 to-amber-50/60 backdrop-blur-sm border border-amber-200/30 rounded-2xl p-6 shadow-2xl ring-1 ring-amber-100">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr>
                      <th className="pb-3 text-sm text-amber-900/90 text-center pr-4 border-r border-amber-100/30">
                        Offering
                      </th>
                      <th className="pb-3 text-sm text-amber-900/90  pl-4 text-center">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100">
                    <tr>
                      <td className="py-4 align-top font-semibold text-amber-800 pr-4 border-r border-amber-100/30">
                        Individual Sessions
                      </td>
                      <td className="py-4 text-sm text-gray-800 pl-4">
                        90 minute personalized sound healing with emotional regulation and gentle
                        somatic attunement. Ideal for stress, anxiety, energetic realignment, or
                        emotional imbalance.
                      </td>
                    </tr>

                    <tr>
                      <td className="py-4 align-top font-semibold text-amber-800 pr-4 border-r border-amber-100/30">
                        Group Sessions
                      </td>
                      <td className="py-4 text-sm text-gray-800 pl-4">
                        Shared vibrational experience for families, friends, or circles. Supports
                        connection, co-regulation, and shared peace.
                      </td>
                    </tr>

                    <tr>
                      <td className="py-4 align-top font-semibold text-amber-800 pr-4 border-r border-amber-100/30">
                        Sound Baths &amp; Events
                      </td>
                      <td className="py-4 text-sm text-gray-800 pl-4">
                        Public or private gatherings where crystal harp frequencies create deep
                        meditative states and energetic clearing.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <p>Complimentary introductory consultation available.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
