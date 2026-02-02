'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

const projectsData = [
  {
    title: 'Airuter – AI Recruitment Platform',
    description: 'AI-powered recruitment platform connecting candidates to employers with intelligent matching and automated interview modules.',
    longDescription: 'Full-stack recruitment platform featuring AI-powered candidate matching, video interview capabilities, and integrated communication tools. Deployed for 100+ candidates with 80% reduction in manual coordination.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'TensorFlow', 'AWS'],
    impact: '100+ Candidates | 80% automation',
    github: null,
    live: 'http://airuter.com/',
    image: 'bg-gradient-to-br from-primary/20 to-secondary/20',
  },
  {
    title: 'Automated Mock Interview Platform',
    description: 'Mentor-student matching platform with integrated payment processing and automated scheduling algorithms.',
    longDescription: 'Complete platform for mock interviews with real-time mentoring, payment integration, and scheduling. Features intelligent mentor-student matching using ML algorithms.',
    technologies: ['MERN', 'Stripe', 'Socket.io', 'PostgreSQL', 'AWS'],
    impact: '50+ Users | 65% match success',
    github: 'https://github.com/chinnasivakrishna/mockInterview',
    live: 'https://mock-interview-frontend.vercel.app/',
    image: 'bg-gradient-to-br from-secondary/20 to-accent/20',
  },
  {
    title: 'AI Sketch Generator',
    description: 'Deep learning application converting images to sketches with model optimization achieving 85% accuracy.',
    longDescription: 'Deep learning model using TensorFlow for artistic image transformation. Optimized for production with reduced latency from 5 minutes to 30 seconds per image.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'OpenCV', 'AWS Lambda'],
    impact: '85% Accuracy | 30s processing',
    github: 'https://github.com/chinnasivakrishna/sketch0',
    live: null,
    image: 'bg-gradient-to-br from-accent/20 to-primary/20',
  },
  {
    title: 'Student Attendance System',
    description: 'Spring Boot backend with face recognition for automated attendance tracking and reporting.',
    longDescription: 'Enterprise attendance system with ML-based face recognition, biometric integration, and detailed analytics dashboard. Tracks attendance for 500+ students across 20 departments.',
    technologies: ['Spring Boot', 'Java', 'OpenCV', 'MySQL', 'Angular'],
    impact: '500+ Students | 99% accuracy',
    github: 'https://github.com/chinnasivakrishna/Student-Attendance-System',
    live: null,
    image: 'bg-gradient-to-br from-accent/20 to-secondary/20',
  },
  {
    title: 'Ailisher – AI-Powered Book Interaction Platform',
    description: 'Full-stack AI platform enabling clients to register, upload books, and users to interact with them through conversational AI guidance.',
    longDescription: 'Production-grade platform featuring client registration and book management, user authentication with role-based access control (User/Admin/Super Admin), AI-powered conversational guidance using OpenAI APIs, and advanced voice capabilities including Text-to-Speech and Speech-to-Text for seamless book interaction.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI APIs', 'JWT'],
    impact: 'Confidential Client Project',
    github: null,
    live: 'https://ailisher.com',
    image: 'bg-gradient-to-br from-primary/30 to-secondary/30',
  },
  {
    title: 'Aitota – AI Telephony & Conversational Guidance Platform',
    description: 'Enterprise AI telephony platform where clients register, configure AI instructions, and the system initiates automated voice calls for guided user conversations.',
    longDescription: 'Production-ready platform with client onboarding, AI instruction configuration, contact management, and automated outbound voice call initiation. Features real-time speech processing with STT/TTS, intelligent conversation routing, and comprehensive admin dashboards for call monitoring and client management with role-based access (Client/Admin/Super Admin).',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI APIs', 'Voice Processing'],
    impact: 'Confidential Client Project',
    github: null,
    live: 'https://aitota.com',
    image: 'bg-gradient-to-br from-secondary/30 to-accent/30',
  },
]

export default function Projects() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins gradient-text">Featured Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl font-inter">
              Showcasing my expertise in full-stack development, AI/ML, and scalable architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                className={`glass rounded-xl border border-primary/20 overflow-hidden group hover:bg-primary/10 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Image */}
                <div className={`w-full h-48 ${project.image} flex items-center justify-center overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300" />
                  <div className="relative text-center">
                    <div className="text-5xl font-bold gradient-text opacity-20 group-hover:opacity-40 transition-opacity">
                      {idx + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all font-poppins">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-inter">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-inter">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full font-inter">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Impact */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <p className="text-sm font-semibold text-accent font-inter">{project.impact}</p>

                  {/* Links */}
                  <div className="flex gap-2 pt-2">
                    {project.live && (
                      <Button
                        size="sm"
                        className="gap-2 flex-1 bg-gradient-to-r from-primary to-secondary hover:shadow-lg"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className={`gap-2 glass bg-transparent ${!project.live ? 'flex-1' : ''}`}
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text font-poppins">Want to see more?</h2>
          <p className="text-lg text-muted-foreground mb-8 font-inter">
            Check out my GitHub profile for additional projects, contributions, and open-source work.
          </p>
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-primary to-secondary hover:shadow-lg"
            asChild
          >
            <a href="https://github.com/chinnasivakrishna" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              View on GitHub
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
