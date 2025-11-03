'use client'
import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
    { title: 'Services', url: '#' },
    { title: 'How it works', url: '/how_it_works' },
    { title: 'Testimonials', url: '#' },
    { title: 'Contact me', url: '/contact' },
    { title: 'About me', url: '/about' },
  ],
}: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <section className="py-4">
      {/*<div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>*/}

      <div className="container">
        {/* Desktop Menu */}
        <nav className="relative hidden lg:flex justify-center items-center">
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
                  <span className="text-lg  !font-thin " style={{ color: '#92400E' }}>
                    Menu
                  </span>
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
