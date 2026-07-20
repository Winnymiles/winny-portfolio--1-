import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 py-10 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="font-display text-2xl font-bold tracking-tight text-primary"
            >
              WK
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              Designing reliable optical systems through research, automation, and engineering.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-3">
              &copy; {currentYear} Winny Kameni. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Winnymiles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/winny-kameni-194349185/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:kameniwinny@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
