import Image from 'next/image'
import type { ReactNode } from 'react'

type TestimonialCardProps = {
  author: string
  role?: string
  content: ReactNode
  imageSrc?: string
}

export default function TestimonialCard({ author, role, content, imageSrc }: TestimonialCardProps) {
  return (
    <article className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 rounded-lg border border-amber-100 bg-white/80 p-6 shadow-sm dark:bg-gray-900/60 md:flex-row">
      {imageSrc && (
        <div className="mb-4 h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg md:mb-0">
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
        <blockquote className="relative border-l-4 border-amber-300 pl-6 text-base italic text-amber-800 md:pl-8 md:text-lg">
          <p className="relative z-10">{content}</p>
        </blockquote>

        <figcaption className="mt-4 text-center text-sm text-amber-800 md:text-left">
          <span className="font-semibold">{author}</span>
          {role && <span className="text-gray-600 font-normal"> — {role}</span>}
        </figcaption>
      </div>
    </article>
  )
}
