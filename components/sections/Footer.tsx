import React from 'react'
import { Logo,  LogoText } from '@/components/shadcnblocks/logo'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full   pb-6 text-sm text-amber-800 !font-thin">
      <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

      <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
        <Logo url="/">
          {/*<LogoImage src="/logo.png" alt="Harp Healing" className="h-8 w-8 rounded" />*/}
          <LogoText className="ml-2 !font-thin">Crystal Harp Healing
          </LogoText>
        </Logo>

        <div className="text-center md:text-right">
          <p>© {new Date().getFullYear()} Crystal Harp Healing
            . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}