'use client'

import { useEffect, useRef, useState } from 'react'

interface Experience {
  role: string
  company: string
  duration: string
  description: string
  highlights: string[]
}

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = refs.current.map((ref, idx) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, idx]))
            observer.unobserve(ref)
          }
        },
        { threshold: 0.3 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(obs => obs?.disconnect())
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <style>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(53, 114, 165, 0.7);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 0 6px rgba(53, 114, 165, 0);
          }
        }

        .timeline-item {
          animation: slideInFromLeft 0.6s ease-out forwards;
        }

        .timeline-dot {
          animation: dotPulse 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              ref={el => {
                refs.current[idx] = el
              }}
              className="timeline-item border-l-2 border-primary pl-8 relative"
              style={{
                animation: visibleItems.has(idx) ? 'slideInFromLeft 0.6s ease-out forwards' : 'slideInFromLeft 0.6s ease-out',
                animationDelay: `${idx * 0.15}s`,
                opacity: visibleItems.has(idx) ? 1 : 0,
              }}
            >
              <div className="timeline-dot absolute -left-3 top-2 w-4 h-4 rounded-full bg-primary" style={{
                animation: visibleItems.has(idx) ? 'dotPulse 2s ease-in-out infinite' : 'none',
                animationDelay: `${idx * 0.15}s`,
              }} />
              
              <div className="space-y-3 group hover:bg-muted/40 p-4 rounded-lg transition-all duration-300 -m-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-primary font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {exp.duration}
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-sm text-muted-foreground flex gap-2 group/item">
                      <span className="text-primary font-bold group-hover/item:scale-125 transition-transform duration-300">•</span>
                      <span className="group-hover/item:text-foreground transition-colors duration-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
