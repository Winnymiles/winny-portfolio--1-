"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Briefcase,
  FlaskConical,
  Trophy,
  BookOpen,
  Terminal,
} from "lucide-react"

const stats = [
  {
    icon: GraduationCap,
    title: "B.IT Optical Systems",
    detail: "Carleton University · Senate Medal",
  },
  {
    icon: Briefcase,
    title: "Optical Test Technician",
    detail: "Credo Semiconductor",
  },
  {
    icon: FlaskConical,
    title: "3+ Research Laboratories",
    detail: "NRC · Carleton Optical Innovation Lab · SCE",
  },
  {
    icon: Trophy,
    title: "10+ Academic Awards",
    detail: "IEEE, Optica, Amplify, Dean's List",
  },
  {
    icon: BookOpen,
    title: "Applied Research",
    detail: "Free-Space Optics · Biomedical DSP",
  },
  {
    icon: Terminal,
    title: "Languages",
    detail: "Python · MATLAB · LabVIEW · C/C++",
  },
]

export function QuickStatsSection() {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="card-elevated rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="shrink-0 rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.detail}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
