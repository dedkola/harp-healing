import Link from 'next/link'
import { Logo, LogoText } from '@/components/shadcnblocks/logo'
import { PageContainer, PageDivider } from '@/components/sections/page-shell'

export function Footer() {
  return (
    <footer className="w-full pb-6 text-sm text-amber-800 !font-thin">
      <PageDivider className="mt-10" />

      <PageContainer className="flex flex-col items-center justify-between gap-4 px-6 pt-2 md:flex-row">
        <Logo url="/">
          <LogoText className="ml-2 !font-thin">Crystal Harp Healing</LogoText>
        </Logo>

        <div className="text-center md:text-right">
          <p>© {new Date().getFullYear()}. All rights reserved.</p>
          <Link href="/signup">Sign Up</Link>
        </div>
      </PageContainer>
    </footer>
  )
}
