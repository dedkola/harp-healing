import Image from 'next/image'

type TestimonialCardProps = {
  author: string
  role?: string
  content: string
  imageSrc?: string
}

/*
  Centered responsive testimonial card:
  - centers itself with mx-auto
  - stacks avatar above text on small screens (flex-col) and side-by-side on md+
  - text is centered on small screens and left-aligned on md+
*/
export default function TestimonialCard({
  author,
  role,
  content,
  imageSrc,
}: TestimonialCardProps) {
  return (
    <article className="max-w-2xl w-full mx-auto bg-white/80 dark:bg-gray-900/60 border border-amber-100 rounded-lg shadow-sm p-6 flex flex-col md:flex-row items-center gap-6">
      {imageSrc && (
        <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 mb-4 md:mb-0">
          <Image
            src={imageSrc}
            alt={author}
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <div className="flex-1 text-center md:text-left">
        <blockquote className="relative pl-6 md:pl-8 border-l-4 border-amber-300 italic text-amber-800 text-base md:text-lg">


          <p className="relative z-10">{content}</p>
        </blockquote>

        <figcaption className="mt-4 text-sm text-amber-800 text-center md:text-left">
          <span className="font-semibold">{author}</span>
          {role && <span className="text-gray-600 font-normal"> — {role}</span>}
        </figcaption>
      </div>
    </article>
  )
}