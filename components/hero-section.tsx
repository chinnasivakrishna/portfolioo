'use client'

import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface HeroSectionProps {
  name: string
  tagline: string
  subtitle: string
  cta?: {
    text: string
    href: string
  }
}

export function HeroSection({ name, tagline, subtitle, cta }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-background/95 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
                {name}
              </h1>
              <p className="text-2xl sm:text-3xl text-primary font-semibold">
                {tagline}
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground text-balance leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {cta && (
                <Button size="lg" className="gap-2">
                  {cta.text}
                </Button>
              )}
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <ArrowDown className="w-4 h-4" />
                Explore
              </Button>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />
              </div>

              {/* Floating accent cards */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg animate-bounce">
                <p className="font-semibold text-sm">1+ Years Experience</p>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg animate-bounce" style={{ animationDelay: '0.2s' }}>
                <p className="font-semibold text-sm">Full-Stack Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  )
}
