'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-6xl w-full mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <p className="text-primary font-semibold text-lg">Welcome to my portfolio</p>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-poppins">
                  <span className="gradient-text">Designing Scalable,</span>
                  <br />
                  <span className="gradient-text">Secure & Real-Time</span>
                  <br />
                  <span className="text-foreground">Applications</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-inter">
                  Full Stack Developer | Backend Specialist | MERN | Spring Boot | AWS
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/projects">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300">
                    View Projects
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 glass hover:bg-primary/10 transition-all duration-300 bg-transparent"
                  asChild
                >
                  <a href="/api/resume" download="Chinna-Siva-Krishna-Thota-Resume.txt">
                    <Download size={18} />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-8">
                <a
                  href="https://github.com/chinnasivakrishna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chinna-siva-krishna-thota/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:chinnasivakrishna2003@gmail.com"
                  className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right: Profile Card */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative w-full max-w-md mx-auto">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-40 animate-pulse" />
                
                {/* Card */}
                <div className="relative glass backdrop-blur-xl p-8 rounded-2xl border-2 border-transparent bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold gradient-text mb-2 font-poppins">Chinna Siva Krishna Thota</h2>
                      <p className="text-muted-foreground font-inter">Full Stack & Backend Developer</p>
                      <p className="text-sm text-accent font-semibold mt-2">Based in India</p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground font-inter">Experience</span>
                        <span className="font-bold gradient-text">1+ Years</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground font-inter">Projects</span>
                        <span className="font-bold gradient-text">7+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground font-inter">Skills</span>
                        <span className="font-bold gradient-text">20+</span>
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

                    <div className="text-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/50">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm font-semibold text-accent">Open to Work</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2 font-inter">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '1+' },
              { label: 'Projects Completed', value: '7+' },
              { label: 'Skills Mastered', value: '20+' },
              { label: 'Code Commits', value: '1k+' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass rounded-lg p-6 text-center hover:bg-primary/10 transition-all duration-300"
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-poppins">{stat.value}</p>
                <p className="text-muted-foreground text-sm font-inter">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
