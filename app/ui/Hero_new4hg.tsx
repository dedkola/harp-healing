'use client'

export default function HeroSimple() {
  return (
    <section className="w-full text-center  py-10">
      {/* Title */}
      <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-amber-800  mb-10 drop-shadow-sm !font-light md:!font-thin">
          Crystal Harp Healing
      </h1>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-20 "></div>


        {/* Image */}
      <div className="w-full flex justify-center">
        <img
          src="/hires/005.png"
          alt="Psycho-sound healing"
          className="w-full max-w-6xl h-auto object-contain"
        />
      </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent pp-2"></div>

      {/* Text + Button */}
      <div className="">
        <p className=" text-4xl  text-amber-800 font-thin mt-10">
         Vibrational therapy for emotional balance, deep rest, and inner alignment.
        </p>
        <button className="bg-[#E1D4C7] text-[#211101] px-6 py-3 text-amber-800 font-thin rounded-md border border-[#c19a6b] hover:bg-[#e9d8ca] transition  mt-10">
          Experience the Sound
        </button>

         <p className=" text-lg md:text-xl mb-6 text-amber-800 font-thin mt-10">
        In-person in Los Angeles & Online Worldwide
        </p>
          <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

      </div>
    </section>
  )
}




// 'use client'

// export default function Heronew4hg() {
//   return (

// <>
     
//     <section className="flex justify-center items-center p-6">
//       <div className="max-w-8xl w-full rounded-2xl shadow-md overflow-hidden">
//         {/* Image Background Section */}
//         <div
//           className="relative w-full flex flex-col items-center justify-center bg-center bg-contain bg-no-repeat min-h-[600px]"
//           style={{
//             backgroundImage: "url('/hires/005c.png')",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
          
//         </div>
//       </div>
//     </section>

//     <div className="space-y-8">
        //  <h1 className="relative text-8xl text-amber-800 text-center mt-10 md:mt-16 drop-shadow-sm !font-thin"> PSYCHO-SOUND HEALING </h1>

//             <div className="text-center">
//               <p className="text-[#211101] text-lg md:text-xl mb-6">
//                 Healing through Sound, Psychology, and Presence
//               </p>
//               <button className="bg-[#E1D4C7] text-[#211101] px-6 py-3 rounded-md shadow hover:bg-[#e9d8ca] transition">
//                 Book a Session
//               </button>
//             </div>
//           </div>
//   </>
//   )
// }
