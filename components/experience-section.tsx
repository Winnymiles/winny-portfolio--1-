"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

const experiences: Experience[] = [
  {
    title: "Optical Test Technician",
    company: "Credo Semiconductor",
    location: "Ottawa, ON",
    period: "April 2026 – Present",
    description: [
      "Perform characterization, validation, and performance testing of optical devices supporting next-generation high-speed optical communication technologies.",
      "Develop and maintain Python-based automated test scripts using instrument APIs to improve test efficiency, repeatability, and data collection.",
      "Execute automated and manual laboratory measurements using Optical Spectrum Analyzers (OSA), Optical Power Meters, Source Measurement Units (SMUs), and oscilloscopes.",
      "Validate manufacturer test data against internal engineering specifications to verify product performance and measurement accuracy.",
      "Troubleshoot automated test procedures, laboratory instrumentation, and measurement setups to ensure reliable, repeatable results.",
      "Document test procedures, experimental results, and engineering observations within an R&D environment.",
    ],
  },
  {
    title: "Student Researcher",
    company: "National Research Council Canada",
    location: "Ottawa, ON",
    period: "Sept 2025 – June 2026",
    description: [
      "Develop and evaluate a MEMS-based laser beam stabilization system for free-space optical communication.",
      "Design and execute experiments involving fiber optics, lasers, optical alignment, photodiodes, and optical communication systems.",
      "Develop analysis tools using MATLAB and Python to process experimental data and evaluate system performance.",
      "Support optical system integration, laboratory testing, and experimental validation.",
      "Prepare technical documentation and present research findings to project collaborators.",
    ],
  },
  {
    title: "Research Assistant",
    company: "Carleton Optical Innovation Laboratory",
    location: "Ottawa, ON",
    period: "Oct 2024 – June 2025",
    description: [
      "Performed optical characterization experiments using Optical Spectrum Analyzers, Optical Power Meters, Variable Optical Attenuators, oscilloscopes, optical fibers, and fiber splicing equipment.",
      "Assisted with optical system integration, alignment, and laboratory testing.",
      "Conducted experimental measurements, analyzed optical performance, and documented research results.",
      "Collaborated with graduate researchers on photonics and optical engineering projects.",
    ],
  },
  {
    title: "Research Assistant",
    company: "Carleton University — Systems & Computer Engineering",
    location: "Ottawa, ON",
    period: "Sept 2024 – Jan 2026",
    description: [
      "Developed signal processing algorithms for biomedical ECG denoising using MATLAB.",
      "Designed digital filtering techniques to improve signal quality.",
      "Analyzed experimental datasets and validated algorithm performance.",
      "Collaborated with multidisciplinary research teams.",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Carleton University",
    location: "Ottawa, ON",
    period: "2024 – 2025 (4 semesters)",
    description: [
      "Assisted undergraduate laboratories in C, C++ programming, and MATLAB for the digital signal processing course.",
      "Supported debugging, algorithm development, and software engineering fundamentals.",
    ],
  },
  {
    title: "Technical Support Specialist",
    company: "Xplore",
    location: "Ottawa, ON",
    period: "July 2023 – April 2024",
    description: [
      "Diagnosed fiber-optic and satellite communication issues.",
      "Resolved technical faults through systematic troubleshooting.",
      "Supported customers using telecommunications and networking technologies.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 relative scroll-mt-24">
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary mb-3">Experience</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Career Timeline</h2>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 md:-translate-x-1/2" />

                  <div
                    className={`pl-12 md:pl-0 ${
                      isLeft ? "md:pr-10 md:col-start-1" : "md:pl-10 md:col-start-2"
                    }`}
                  >
                    <div className="card-elevated rounded-2xl p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-display text-lg font-semibold">{exp.title}</h3>
                          <p className="text-sm text-primary">{exp.company}</p>
                          <p className="text-xs text-muted-foreground">{exp.location}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-primary/5 text-primary border-primary/30"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary mt-1.5">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
