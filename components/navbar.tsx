"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-primary">
            WK
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/winny-kameni-cv.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Resume
            </Link>
          </Button>
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/60">
          <nav className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/winny-kameni-cv.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Resume
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
