// file: `components/shadcnblocks/logo.tsx`
import Link from 'next/link'
import React from 'react'

type LogoProps = {
  url?: string
  children?: React.ReactNode
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ url = '/', children, className = '' }) => {
  return (
    <Link href={url} className={`flex items-center gap-2 ${className}`}>
      {children}
    </Link>
  )
}


// type LogoImageProps = {
//   src: string
//   alt?: string
//   title?: string
//   className?: string
// }

// export const LogoImage: React.FC<LogoImageProps> = ({ src, alt = '', title, className = '' }) => {
//   return <img src={src} alt={alt} title={title} className={className} />
// }

type LogoTextProps = {
  children: React.ReactNode
  className?: string
}

export const LogoText: React.FC<LogoTextProps> = ({ children, className = '' }) => {
  return <span className={className}>{children}</span>
}
