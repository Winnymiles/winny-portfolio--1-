"use client"

import { motion } from "framer-motion"
import { Cpu, Waves, FlaskConical } from "lucide-react"

const pillars = [
  {
    icon: Cpu,
    title: "Semiconductor Testing",
    body:
      "Characterization, validation, and automated performance testing of optical devices supporting next-generation high-speed communication technologies at Credo Semiconductor.",
  },
  {
    icon: Waves,
    title: "Optical Engineering",
    body:
      "Hands-on optical characterization with OSA, SMU, VOA, power meters, oscilloscopes, and fiber-optic instrumentation. Optical alignment, fiber splicing, and laboratory validation.",
  },
  {
    icon: FlaskConical,
    title: "Research",
    body:
      "Applied research spanning MEMS-based beam stabilization for free-space optics at the NRC, ECG signal processing at Carleton SCE, and photonic characterization at the Optical Innovation Lab.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-24">
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary mb-3">About</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Who I Am</h2>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-14"
        >
          I&apos;m an optical test engineer working at the intersection of{" "}
          <span className="text-foreground">optical testing, photonics, and semiconductor
          validation</span>. My work covers automated Python-based test development, optical
          characterization for high-speed communication devices, and experimental research in
          free-space optical systems.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated rounded-2xl p-6"
              >
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
