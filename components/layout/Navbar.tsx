'use client'
import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

interface MenuItem {
  title: string
  url: string
  description?: string
  icon?: React.ReactNode
  items?: MenuItem[]
}

interface NavbarProps {
  menu?: MenuItem[]
}

const Navbar = ({
  menu = [
    { title: 'Home', url: '/' },
    { title: 'About me', url: '/about' },
    { title: 'Offerings', url: '/offerings' },
    { title: 'Why Sound Heals', url: '/why_sound_heals' },
    { title: 'Reflections', url: '/reflections' },
    { title: 'Contact me', url: '/contact' },
    { title: 'Sign up', url: '/signup' },
  ],
}: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <section className="py-4">
      {/*<div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>*/}

      <div className="container">
        {/* Desktop Menu */}
        <nav className="relative hidden lg:flex justify-between items-center">
          <ul className="flex items-center gap-2">
            {menu.map((item) => (
              <li key={item.title} className="relative group">
                <a
                  href={item.url}
                  className="text-xl hover:bg-muted hover:text-accent-foreground inline-flex h-10 items-center rounded-md px-4  transition-colors !font-thin"
                  style={{ color: '#92400E' }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://www.instagram.com/crystalharphealing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted transition-colors"
            aria-label="Follow us on Instagram"
          >
            <InstagramIcon />
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex-1" /> {/* Spacer to balance layout */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-4 " />
            </Button>
          </div>

          {/* Slide-over panel */}
          {mobileOpen && (
            <>
              <div
                className="fixed inset-0 z-40 bg-black/40"
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
              />
              <div className="fixed bg-white inset-y-0 right-0 z-50 w-80 max-w-[85vw] shadow-xl outline-none transition-transform">
                <div className="flex items-center justify-between border-b p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg  !font-thin " style={{ color: '#92400E' }}>
                      Menu
                    </span>
                    <a
                      href="https://www.instagram.com/crystalharphealing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted transition-colors"
                      aria-label="Follow us on Instagram"
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    ✕
                  </Button>
                </div>

                <div className="flex flex-col gap-6 p-4 overflow-y-auto">
                  <div className="flex w-full flex-col gap-4">
                    {menu.map((item) => (
                      <a
                        key={item.title}
                        href={item.url}
                        className="text-md hover:text-accent-foreground !font-thin text-amber-800"
                        style={{ color: '#92400E' }}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export { Navbar }
