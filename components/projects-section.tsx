"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  CircuitBoard,
  Aperture,
  HomeIcon,
  HeartPulse,
  Activity,
  Hand,
} from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface Project {
  title: string
  summary: string
  icon: LucideIcon
  tags: string[]
  demoLink?: string
  githubLink?: string
}

const projects: Project[] = [
  {
    title: "Fiber Bragg Grating Sensor System",
    summary:
      "High-precision FBG sensor with spectral interrogation, optical filtering, and real-time acquisition. Validated strain and temperature response against calibrated references.",
    icon: CircuitBoard,
    tags: ["Fiber Optics", "Sensors", "Photonics"],
  },
  {
    title: "3D-Printed Aspheric Lens Prototypes",
    summary:
      "Custom aspheric geometries designed in Zemax OpticStudio, fabricated via high-resolution 3D printing. Characterized efficiency, aberrations, and coupling sensitivity vs. simulation.",
    icon: Aperture,
    tags: ["Zemax", "Optical Design", "3D Printing"],
  },
  {
    title: "Smart House + Digital Twin",
    summary:
      "Bi-directional cyber-physical smart-home model. ESP32 firmware synchronizes a 3D-printed multi-room prototype with an interactive digital-twin dashboard in real time.",
    icon: HomeIcon,
    tags: ["IoT", "ESP32", "Embedded", "Digital Twin"],
  },
  {
    title: "ECG-Based Cardiovascular Detection",
    summary:
      "Full risk-detection pipeline combining ECG signal processing with CNN/LSTM classifiers. Optimized for low-latency inference on wearable microcontrollers.",
    icon: HeartPulse,
    tags: ["Biomedical AI", "ECG", "ML"],
  },
  {
    title: "ECG Denoising & Biomedical DSP",
    summary:
      "Wiener + wavelet filtering pipelines that clean raw ECG signals, producing measurable SNR gains and reliable arrhythmia detection under motion artifacts.",
    icon: Activity,
    tags: ["DSP", "MATLAB", "Signal Processing"],
  },
  {
    title: "Real-Time Gesture Tracking",
    summary:
      "Lightweight OpenCV-based hand-pose classifier optimized for low-latency edge inference — a prototype for embedded human-machine interaction.",
    icon: Hand,
    tags: ["Computer Vision", "Edge AI", "OpenCV"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-24">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary mb-3">Projects</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">
            Engineering &amp; Build Work
          </h2>
          <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
            Applied builds outside the research lab — hardware, embedded systems, and software
            tools.
          </p>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="card-elevated rounded-2xl p-6 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  {(project.demoLink || project.githubLink) && (
                    <div className="flex gap-1">
                      {project.githubLink && (
                        <Button asChild size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-primary">
                          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">Source</span>
                          </Link>
                        </Button>
                      )}
                      {project.demoLink && (
                        <Button asChild size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-primary">
                          <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">Demo</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  )}
                </div>

                <h3 className="font-display text-lg font-semibold mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 flex-1">{project.summary}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="bg-primary/5 text-foreground/85 border-primary/25 text-[11px]"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Looking for research work? See{" "}
          <Link href="#research" className="text-primary hover:underline">
            Research Highlights
          </Link>{" "}
          above.
        </motion.p>
      </div>
    </section>
  )
}
