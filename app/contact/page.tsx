'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-32 pb-20">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-5xl w-full mx-auto relative z-10">
          <div className={`transition-all duration-1000 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins gradient-text">Let's Connect</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
              Have a project in mind? Let's discuss how we can work together to build something amazing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-bold mb-8 gradient-text font-poppins">Contact Info</h2>

                {/* Email */}
                <div className="glass rounded-lg p-6 mb-6 hover:bg-primary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-inter">Email</p>
                      <a href="mailto:chinnasivakrishna2003@gmail.com" className="font-semibold text-foreground hover:text-primary transition-colors font-inter">
                        chinnasivakrishna2003@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="glass rounded-lg p-6 mb-6 hover:bg-primary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-inter">Phone</p>
                      <a href="tel:+917702366289" className="font-semibold text-foreground hover:text-secondary transition-colors font-inter">
                        +91 7702366289
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="glass rounded-lg p-6 hover:bg-primary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-inter">Location</p>
                      <p className="font-semibold text-foreground font-inter">India</p>
                    </div>
                  </div>
                </div>

                {/* Open to Work Badge */}
                <div className="mt-8">
                  <div className="glass rounded-lg p-6 text-center border-2 border-accent/50">
                    <span className="inline-flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                      <span className="text-sm font-semibold text-accent">Open to Work</span>
                    </span>
                    <p className="text-sm text-muted-foreground font-inter">Available for full-time, contract, and consultation opportunities.</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-primary/20">
                  <h3 className="text-lg font-bold mb-4 text-foreground font-poppins">Follow Me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/chinnasivakrishna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/chinna-siva-krishna-thota/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="mailto:chinnasivakrishna2003@gmail.com"
                      className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`glass rounded-xl p-8 border border-primary/20 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <h2 className="text-3xl font-bold mb-8 gradient-text font-poppins">Send Me a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2 font-inter">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="glass border-primary/30 focus:border-primary bg-transparent text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2 font-inter">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="glass border-primary/30 focus:border-primary bg-transparent text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2 font-inter">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="glass border-primary/30 focus:border-primary bg-transparent text-foreground placeholder:text-muted-foreground resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="bg-accent/20 border border-accent text-accent rounded-lg p-4 text-center font-inter">
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm">I'll get back to you within 24 hours.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-destructive/20 border border-destructive text-destructive rounded-lg p-4 text-center font-inter">
                      <p className="font-semibold">Failed to send message</p>
                      <p className="text-sm">Please try again or contact me directly.</p>
                    </div>
                  )}

                  {submitStatus === 'idle' && (
                    <p className="text-xs text-muted-foreground text-center font-inter">
                      I'll get back to you within 24 hours.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text font-poppins">Looking for something specific?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-secondary"
              asChild
            >
              <a href="/api/resume" download="Chinna-Siva-Krishna-Thota-Resume.txt">
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 glass bg-transparent"
              asChild
            >
              <a href="/projects">View Projects</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
