import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface HeaderProps {
  name: string
  title: string
}

export function Header({ name, title }: HeaderProps) {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h1 className="font-bold text-foreground">{name}</h1>
            <p className="text-xs text-muted-foreground">{title}</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Work
          </Link>
          <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
