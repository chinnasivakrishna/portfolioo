'use client'

import { useEffect, useState } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

const experienceData = [
  {
    role: 'MERN Stack Developer',
    company: 'Diin Tech',
    duration: 'Jan 2025 - Present',
    type: 'work',
    description: 'Building scalable educational platforms with focus on performance optimization and user engagement.',
    highlights: [
      'Architected scalable systems achieving 35% performance improvement',
      'Designed responsive components increasing engagement by 25%',
      'Optimized database queries reducing response times by 40%',
      'Implemented automated testing achieving 95% coverage',
      'Supported 1000+ active users with zero critical outages',
    ],
  },
  {
    role: 'Junior Software Engineer',
    company: 'VTS Enterprises (The Hive)',
    duration: 'Jun 2024 - Dec 2024',
    type: 'work',
    description: 'Developed production-grade web applications, REST APIs, and implemented CI/CD automation pipelines.',
    highlights: [
      'Built 3 production-grade web applications onboarding 200+ users',
      'Developed REST APIs handling 10,000+ daily requests with 99.5% uptime',
      'Optimized database queries reducing load times by 40%',
      'Reduced post-deployment bugs by 60% via CI/CD and test automation',
      'Delivered projects 15% ahead of schedule through scoped sprints',
    ],
  },
]

const educationData = [
  {
    school: 'Swarnandhra College of Engineering and Technology',
    degree: 'B.Tech in Artificial Intelligence & Machine Learning',
    year: '2020 - 2024',
    gpa: '7.75/10',
    highlights: ['Specialized in ML & Deep Learning', 'Core Projects in Computer Vision & NLP'],
  },
]

const certificationsData = [
  { title: 'AWS Academy Graduate – Cloud Foundations', issuer: 'AWS Academy', year: '2023' },
  { title: 'AWS Academy – Machine Learning Foundations', issuer: 'AWS Academy', year: '2023' },
  { title: 'Python Programming Foundations', issuer: 'NXT Wave', year: '2024' },
  { title: 'Node.js Development Mastery', issuer: 'NXT Wave', year: '2024' },
  { title: 'Database Design & Management', issuer: 'NXT Wave', year: '2024' },
  { title: 'Cybersecurity Virtual Internship', issuer: 'AICTE', year: '2023' },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-32 pb-20">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-5xl w-full mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins gradient-text">Experience & Education</h1>
            <p className="text-xl text-muted-foreground max-w-2xl font-inter">
              Professional journey highlighting my growth, achievements, and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 gradient-text font-poppins">Work Experience</h2>

          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className={`glass rounded-xl p-8 border border-primary/20 hover:bg-primary/10 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Briefcase size={24} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground font-poppins">{exp.role}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground font-inter">{exp.duration}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed font-inter">{exp.description}</p>

                <div className="space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex gap-3">
                      <span className="text-accent font-bold flex-shrink-0">▸</span>
                      <span className="text-muted-foreground font-inter">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 gradient-text font-poppins">Education</h2>

          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className={`glass rounded-xl p-8 border border-primary/20 hover:bg-primary/10 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${(experienceData.length + idx) * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground font-poppins">{edu.degree}</h3>
                    <p className="text-lg text-secondary font-semibold">{edu.school}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <p className="text-sm text-muted-foreground font-inter">{edu.year}</p>
                      <span className="text-sm bg-secondary/20 text-secondary px-3 py-1 rounded-full font-semibold font-inter">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex gap-3">
                      <span className="text-secondary font-bold flex-shrink-0">✓</span>
                      <span className="text-muted-foreground font-inter">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 gradient-text font-poppins">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className={`glass rounded-lg p-6 border border-primary/20 hover:bg-primary/10 transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${(experienceData.length + educationData.length + idx) * 50}ms` }}
              >
                <h4 className="font-semibold text-foreground mb-2 font-poppins">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mb-3 font-inter">{cert.issuer}</p>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-semibold font-inter">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
