"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface ResearchItem {
  title: string
  organization: string
  period: string
  image: string
  description: string
  technologies: string[]
  demoLink?: string
}

const items: ResearchItem[] = [
  {
    title: "MEMS-Based Beam Stabilization for FSO Communication",
    organization: "National Research Council Canada",
    period: "Sept 2025 – June 2026",
    image: "/fso-research.jpg",
    description:
      "Development and evaluation of a MEMS-based laser beam stabilization system for free-space optical communication. System-level analyses of atmospheric turbulence, transceiver alignment, and rural connectivity hardware validation.",
    technologies: ["Free-Space Optics", "MEMS", "MATLAB", "Python", "Photodiodes", "Optical Alignment"],
    demoLink: "https://fso-system-free-space-optical-commu.vercel.app/",
  },
  {
    title: "ECG-Based Cardiovascular Detection",
    organization: "Carleton University — Systems & Computer Engineering",
    period: "Sept 2024 – Jan 2026",
    image: "/project1.jpg",
    description:
      "Biomedical DSP pipelines for ECG denoising using Wiener and wavelet filtering, integrated with AI-based cardiovascular classifiers on wearable ECG sensors and microcontrollers.",
    technologies: ["MATLAB", "DSP", "Wavelet Filtering", "Wiener Filtering", "Python", "Wearable Sensors"],
  },
  {
    title: "Optical Characterization & FBG Systems",
    organization: "Carleton Optical Innovation Laboratory",
    period: "Oct 2024 – June 2025",
    image: "/project2.jpg",
    description:
      "Optical characterization of fiber Bragg gratings and 3D-printed aspheric lenses using OSA, power meters, VOAs, and oscilloscopes. Multi-lens Zemax optimization and coupling-efficiency measurement.",
    technologies: ["OSA", "Power Meter", "VOA", "Zemax OpticStudio", "Fiber Splicing", "FBGs"],
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-20 md:py-28 relative scroll-mt-24">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary mb-3">Research</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">
            Research Highlights
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="card-elevated rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="h-44 overflow-hidden bg-secondary">
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs tracking-[0.15em] uppercase text-primary mb-2">
                  {r.organization}
                </p>
                <h3 className="font-display text-lg font-semibold mb-3 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{r.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {r.technologies.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="bg-primary/5 text-foreground/85 border-primary/25 text-[11px]"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-muted-foreground">{r.period}</p>
                  {r.demoLink && (
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="text-primary h-8 px-2"
                    >
                      <Link
                        href={r.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Research interests strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 card-elevated rounded-2xl p-6 md:p-8"
        >
          <h3 className="font-display text-xl font-semibold mb-4 text-center">
            Research Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Silicon Photonics",
              "Optical Communications",
              "Semiconductor Test Engineering",
              "MEMS",
              "Fiber Optics",
              "Free-Space Optics",
              "Machine Learning for Optics",
              "High-Speed Systems",
            ].map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-1.5 rounded-full bg-primary/10 text-foreground/90 border border-primary/30"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
