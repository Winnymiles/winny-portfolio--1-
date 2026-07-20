"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, FlaskConical, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const ROLES = [
  "Optical Test Engineer",
  "Photonics",
  "Semiconductor Test",
  "Free-Space Optical Communications",
]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      <div className="hero-aurora" />
      <div className="wafer-grid" />
      <div className="light-beam" style={{ top: "22%", transform: "rotate(2deg)" }} />
      <div className="light-beam" style={{ top: "48%", transform: "rotate(-1deg)" }} />
      <div className="light-beam" style={{ top: "76%", transform: "rotate(1.5deg)" }} />

      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm tracking-[0.25em] uppercase text-muted-foreground"
          >
            Ottawa, ON &middot; Canada
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl md:text-7xl font-semibold tracking-tight"
          >
            Winny Kameni
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-2xl font-medium text-muted-foreground min-h-[2.5rem]"
          >
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-primary"
            >
              {ROLES[roleIndex]}
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Developing automated optical test solutions and advancing next-generation photonic
            technologies through semiconductor validation, free-space optical communications,
            and experimental research.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/winny-kameni-cv.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
            <Button variant="outline" asChild className="border-primary/40 hover:bg-primary/10">
              <Link href="#research">
                <FlaskConical className="mr-2 h-4 w-4" /> View Research
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-2 justify-center md:justify-start pt-2"
          >
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Winnymiles" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/winny-kameni-194349185/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:kameniwinny@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-[22rem] md:h-[22rem]">
            <div className="portrait-glow" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-primary/30">
              <img
                src="/image.png"
                alt="Winny Kameni"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
