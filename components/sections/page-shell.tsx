import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ClassNameProps = {
  className?: string
}

type PageContainerProps = ClassNameProps & {
  children: ReactNode
}

type PageHeaderProps = {
  title: ReactNode
  containerClassName?: string
  titleClassName?: string
  topDividerClassName?: string
  bottomDividerClassName?: string
  showBottomDivider?: boolean
}

const dividerClassName = 'h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent'
const pageTitleClassName =
  'my-8 mb-10 text-center text-[2.2rem] text-amber-800 drop-shadow-sm !font-light sm:text-5xl md:text-7xl md:!font-thin lg:text-8xl'

export function PageDivider({ className }: ClassNameProps) {
  return <div aria-hidden="true" className={cn(dividerClassName, className)} />
}

export function PageContainer({ children, className }: PageContainerProps) {
  return <div className={cn('mx-auto max-w-5xl', className)}>{children}</div>
}

export function PageSplit({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn('mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row', className)}
    >
      {children}
    </div>
  )
}

export function PageHeader({
  title,
  containerClassName,
  titleClassName,
  topDividerClassName,
  bottomDividerClassName,
  showBottomDivider = true,
}: PageHeaderProps) {
  return (
    <PageContainer className={containerClassName}>
      <PageDivider className={cn('mt-10', topDividerClassName)} />
      <h1 className={cn(pageTitleClassName, titleClassName)}>{title}</h1>
      {showBottomDivider ? <PageDivider className={cn('mb-10', bottomDividerClassName)} /> : null}
    </PageContainer>
  )
}
