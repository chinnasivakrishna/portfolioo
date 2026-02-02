'use client'

import { Badge } from '@/components/ui/badge'
import { ExternalLink, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  impact?: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Projects & Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="h-full group cursor-pointer"
              onMouseEnter={() => setExpandedIdx(idx)}
              onMouseLeave={() => setExpandedIdx(null)}
            >
              <div className="h-full p-6 bg-background border border-border rounded-lg transition-all duration-300 overflow-hidden relative"
                style={{
                  borderColor: expandedIdx === idx ? 'var(--color-primary)' : undefined,
                  boxShadow: expandedIdx === idx ? '0 20px 25px -5px rgba(53, 114, 165, 0.1)' : 'none',
                  transform: expandedIdx === idx ? 'translateY(-4px)' : 'translateY(0)',
                }}
              >
                {/* Background accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 transition-opacity duration-300 ${expandedIdx === idx ? 'opacity-100' : 'opacity-0'}`} />
                
                <div className="relative space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-xl font-bold transition-all duration-300 ${expandedIdx === idx ? 'text-primary' : 'group-hover:text-primary'}`}>
                      {project.title}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                      {project.link && (
                        <ExternalLink className={`w-5 h-5 transition-all duration-300 ${expandedIdx === idx ? 'text-primary transform translate-x-1' : 'text-muted-foreground'}`} />
                      )}
                      <ChevronRight className={`w-5 h-5 transition-all duration-300 ${expandedIdx === idx ? 'text-primary translate-x-1' : 'text-muted-foreground'}`} />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.impact && (
                    <div className={`overflow-hidden transition-all duration-300 ${expandedIdx === idx ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm font-semibold text-primary bg-primary/10 px-3 py-2 rounded-md">
                        ✨ {project.impact}
                      </p>
                    </div>
                  )}
                  
                  <div className={`flex flex-wrap gap-2 pt-2 transition-all duration-300 ${expandedIdx === idx ? 'opacity-100' : 'opacity-75'}`}>
                    {project.technologies.map((tech, tIdx) => (
                      <Badge 
                        key={tIdx} 
                        variant="secondary" 
                        className={`text-xs transition-all duration-300 ${expandedIdx === idx ? 'bg-primary/20 text-primary' : ''}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
