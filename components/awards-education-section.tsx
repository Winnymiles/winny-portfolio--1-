"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap, Medal, Trophy, Star, BookOpenCheck } from "lucide-react"

const awards = [
  {
    icon: Medal,
    title: "Carleton University Senate Medal",
    detail: "Awarded for outstanding academic achievement",
  },
  {
    icon: GraduationCap,
    title: "Dean's Honour List",
    detail: "2023 · 2024 · 2025 — Graduated with High Distinction",
  },
  {
    icon: Trophy,
    title: "IEEE Canadian Foundation Scholarship",
    detail: "Awarded for academic excellence in electrical & computer engineering",
  },
  {
    icon: Award,
    title: "Optica Amplify Immersion Scholarship",
    detail: "Optica Foundation — leadership & research in optics/photonics",
  },
  {
    icon: Award,
    title: "Claude Bissell Scholarship",
    detail: "Merit-based academic scholarship",
  },
  {
    icon: Star,
    title: "Golden Key International Honour Society",
    detail: "Invitation-only academic honour society",
  },
  {
    icon: BookOpenCheck,
    title: "Optica Amplify Leadership Program",
    detail: "Selective leadership program for emerging optics professionals",
  },
  {
    icon: Trophy,
    title: "IEEE Canada Student Congress",
    detail: "Delegate — 2023 & 2024",
  },
]

const education = [
  {
    degree: "Master of Engineering (M.Eng.)",
    school: "Carleton University",
    location: "Ottawa, Canada",
    period: "Expected Dec 2027",
    focus: "Electrical & Computer Engineering — Optical Communications, Photonics, Semiconductor Devices, High-Speed Systems, Test Engineering",
  },
  {
    degree: "Bachelor of Information Technology (BIT)",
    school: "Carleton University",
    location: "Ottawa, Canada",
    period: "2022 – 2026",
    focus: "Optical Systems & Sensors Engineering · GPA 11.88/12 · Dean's List 2023–2025 · Senate Medal",
  },
  {
    degree: "Advanced Diploma",
    school: "Algonquin College",
    location: "Ottawa, Canada",
    period: "2022 – 2026",
    focus: "Photonics and Laser Technology · CGPA 11.98/12",
  },
  {
    degree: "Bachelor of Engineering",
    school: "Technical University of Applied Sciences Würzburg-Schweinfurt (THWS)",
    location: "Schweinfurt, Germany",
    period: "2022",
    focus: "Business & Engineering — Engineering Project Management, Systems Engineering, Operations & Process Optimization, Data Analysis for Engineering, Technical Business Strategy, Cross-Functional Team Collaboration",
  },
]

export function AwardsEducationSection() {
  return (
    <section id="awards" className="py-20 md:py-28 relative scroll-mt-24">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary mb-3">Recognition</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Awards & Honours</h2>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {awards.map((a, i) => {
            const Icon = a.icon
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
                className="card-elevated rounded-2xl p-5"
              >
                <div className="rounded-xl bg-primary/10 p-2.5 text-primary w-fit mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-sm font-semibold leading-snug mb-1">
                  {a.title}
                </h3>
                <p className="text-xs text-muted-foreground">{a.detail}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Education */}
        <motion.div
          id="education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14 scroll-mt-24"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary mb-3">Education</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Academic Path</h2>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-6">
            {education.map((e, i) => (
              <motion.div
                key={e.degree + e.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-4 md:left-6 top-6 w-3 h-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-primary/20" />
                <div className="card-elevated rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                      <p className="text-sm text-primary">{e.school}</p>
                      <p className="text-xs text-muted-foreground">{e.location}</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/30">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.focus}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
