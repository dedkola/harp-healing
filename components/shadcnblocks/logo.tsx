import Link from 'next/link'
import type { ReactNode } from 'react'

type LogoProps = {
  url?: string
  children?: ReactNode
  className?: string
}

export function Logo({ url = '/', children, className = '' }: LogoProps) {
  return (
    <Link href={url} className={`flex items-center gap-2 ${className}`}>
      {children}
    </Link>
  )
}

type LogoTextProps = {
  children: ReactNode
  className?: string
}

export function LogoText({ children, className = '' }: LogoTextProps) {
  return <span className={className}>{children}</span>
}
