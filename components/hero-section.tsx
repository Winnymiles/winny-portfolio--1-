"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Medical Device R&D Assistant | (Jr)Biomedical Signal Processing Engineer"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Fiber optic background effects */}
      <div className="fiber-background"></div>
      <div className="fiber-glow"></div>
      <div className="light-refraction"></div>
      <div className="optical-wave"></div>

      {/* Light beams */}
      <div className="light-beam" style={{ top: "20%", transform: "rotate(5deg)" }}></div>
      <div className="light-beam" style={{ top: "40%", transform: "rotate(-2deg)" }}></div>
      <div className="light-beam" style={{ top: "60%", transform: "rotate(3deg)" }}></div>
      <div className="light-beam" style={{ top: "80%", transform: "rotate(-4deg)" }}></div>

      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center relative z-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold">
              Hello! I Am{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                Winny Kameni
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
              <span className="text-primary">{typedText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground max-w-xl mx-auto md:mx-0"
          >
       I design and optimize <strong>optical, sensing, and biomedical signal-processing systems</strong>
            that solve real engineering problems. My work bridges <strong>digital signal processing</strong>,
            <strong> free-space optical communication</strong>, and <strong>AI-enabled health technologies</strong>,
            focusing on reliability, interpretability, and real-time performance.
            <br /><br />
            I believe engineers shouldn’t just answer questions — they should ask the ones that move
            innovation forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/Winny's Resume.pdf" download>
                Resume <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 justify-center md:justify-start"
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
              <Link href="mailto:kameniwinny@ieee.org">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-1 animate-gradient">
            <div className="absolute inset-1 rounded-full overflow-hidden bg-background flex items-center justify-center">
              <img
                src="/image.png?height=300&width=300"
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
