'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-32 pb-20">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-5xl w-full mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins gradient-text">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl font-inter">Crafting scalable, secure, and real-time applications that solve complex problems and deliver measurable impact.</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-30" />
              <div className="relative glass rounded-2xl overflow-hidden border border-primary/30 p-4">
                <Image
                  src="/profile.jpg"
                  alt="Chinna Siva Krishna Thota"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold gradient-text font-poppins">Full Stack & Backend Developer</h2>
                <p className="text-muted-foreground leading-relaxed font-inter">
                  I'm passionate about building scalable, secure, and real-time applications that solve complex problems. With a strong foundation in computer science and artificial intelligence, I combine technical expertise with creative problem-solving.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-poppins">My Journey</h3>
                <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
                  <p>
                    As a MERN Stack Developer at Diin Tech, I architected scalable educational platforms achieving 35% performance improvements and 25% engagement increases. I optimized MongoDB queries for 40% faster response times and implemented automated testing with 95% coverage.
                  </p>
                  <p>
                    At VTS Enterprises (The Hive), I developed 3 production-grade web applications handling 10k+ daily requests with 99.5% uptime. I reduced post-deployment bugs by 60% through CI/CD automation and consistently delivered projects 15% ahead of schedule.
                  </p>
                  <p>
                    I specialize in MERN stack, Spring Boot, AWS, and AI/ML integration. My focus is on clean code, performance optimization, and building products that scale.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Experience', value: '1+ Years' },
                  { label: 'Projects', value: '7+' },
                  { label: 'Technologies', value: '20+' },
                  { label: 'Team Size Led', value: '5+' },
                ].map((item, idx) => (
                  <div key={idx} className="glass rounded-lg p-4">
                    <p className="text-muted-foreground text-sm font-inter">{item.label}</p>
                    <p className="text-2xl font-bold gradient-text font-poppins">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center font-poppins">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'I prioritize clean, maintainable code and rigorous testing to ensure reliability and performance.',
              },
              {
                title: 'Innovation',
                description: 'Constantly exploring new technologies and methodologies to build cutting-edge solutions.',
              },
              {
                title: 'Collaboration',
                description: 'Strong believer in teamwork, communication, and knowledge sharing for collective growth.',
              },
            ].map((value, idx) => (
              <div key={idx} className="glass rounded-lg p-8 hover:bg-primary/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-primary mb-4 font-poppins">{value.title}</h3>
                <p className="text-muted-foreground font-inter">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
