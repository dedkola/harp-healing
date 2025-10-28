'use client'
import React, { useState } from "react";
import { Book, Menu, Sunset, Trees, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/logo_beige.png",
    alt: "logo",
    title: "Crystal Harp Healing",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],

}: Navbar1Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="py-4">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="relative hidden lg:grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <a href={logo.url} className="flex items-center gap-2">
              <Image src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
          </div>

          {/* Center: Desktop links with simple hover dropdowns */}
          <ul className="flex items-center gap-2 justify-self-center ">
            {menu.map((item) => (
              <li key={item.title} className=" relative group">
                {item.items ? (
                  <>
                    <button className="bg-[#e3c193] hover:bg-muted hover:text-accent-foreground inline-flex h-10 items-center gap-1 rounded-md px-4 text-sm font-medium transition-colors ">
                      {item.title}
                      <ChevronDown className="size-4" />
                    </button>
                    <div className="invisible absolute left-0 top-full z-50 mt-2 w-80 translate-y-2 rounded-md border bg-popover p-1 text-popover-foreground opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex flex-col">
                        {item.items.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.url}
                            className="hover:bg-muted hover:text-accent-foreground flex select-none gap-3 rounded-md p-3 text-left no-underline outline-none transition-colors"
                          >
                            <div className="text-foreground ">{sub.icon}</div>
                            <div>
                              <div className="text-sm font-semibold">{sub.title}</div>
                              {sub.description && (
                                <p className="text-muted-foreground text-sm leading-snug">
                                  {sub.description}
                                </p>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.url}
                    className="bg-[#e3c193] hover:bg-muted hover:text-accent-foreground inline-flex h-10 items-center rounded-md px-4 text-sm font-medium transition-colors"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Right: spacer (reserved for future actions) */}
          <div />
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <Image src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
            </a>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-4" />
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
              <div className="fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] translate-x-0 bg-background shadow-xl outline-none transition-transform">
                <div className="flex items-center justify-between border-b p-4">
                  <a href={logo.url} className="flex items-center gap-2">
                    <Image src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
                  </a>
                  <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                    ✕
                  </Button>
                </div>

                <div className="flex flex-col gap-6 p-4 overflow-y-auto">
                  {/* Mobile nav list (expand groups) */}
                  <div className="flex w-full flex-col gap-4">
                    {menu.map((item) => (
                      <div key={item.title} className="flex flex-col gap-2">
                        {item.items ? (
                          <>
                            <div className="text-md font-semibold">{item.title}</div>
                            <div className="flex flex-col gap-1">
                              {item.items.map((sub) => (
                                <a
                                  key={sub.title}
                                  href={sub.url}
                                  className="hover:bg-muted hover:text-accent-foreground flex select-none gap-3 rounded-md p-3 no-underline outline-none transition-colors"
                                >
                                  <div className="text-foreground">{sub.icon}</div>
                                  <div>
                                    <div className="text-sm font-semibold">{sub.title}</div>
                                    {sub.description && (
                                      <p className="text-muted-foreground text-sm leading-snug">
                                        {sub.description}
                                      </p>
                                    )}
                                  </div>
                                </a>
                              ))}
                            </div>
                          </>
                        ) : (
                          <a href={item.url} className="text-md font-semibold">
                            {item.title}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">

                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export { Navbar1 };
