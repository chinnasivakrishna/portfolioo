'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Profile Image */}
          <button onClick={() => handleNavClick('/')} className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src="/profile.jpg"
                alt="Chinna Siva Krishna Thota"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="font-bold text-lg gradient-text hidden sm:inline">SK</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : ''
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-t">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    handleNavClick(link.href)
                    setIsOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    pathname === link.href
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
