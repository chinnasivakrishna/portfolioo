import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

interface SocialLink {
  name: string
  url: string
  icon: 'github' | 'linkedin' | 'mail'
}

interface FooterProps {
  email: string
  phone: string
  socials: SocialLink[]
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export function Footer({ email, phone, socials }: FooterProps) {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <p className="text-muted-foreground">
              I'm always interested in new opportunities and interesting projects.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                {email}
              </a>
              <span className="hidden sm:inline text-border">•</span>
              <span className="text-muted-foreground">
                {phone}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            {socials.map((social) => {
              const Icon = iconMap[social.icon]
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Chinna Siva Krishna Thota. Built with Next.js & React.</p>
        </div>
      </div>
    </footer>
  )
}
