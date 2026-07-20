"use client"

import { motion } from "framer-motion"

const groups: { title: string; skills: string[] }[] = [
  {
    title: "Optical Test & Measurement",
    skills: [
      "Optical Spectrum Analyzer (OSA)",
      "Optical Power Meter",
      "Source Measurement Unit (SMU)",
      "Oscilloscope",
      "Variable Optical Attenuator (VOA)",
      "Optical Fibers",
      "Fiber Splicer",
      "Photodiodes",
      "Lasers",
      "Free-Space Optical Systems",
    ],
  },
  {
    title: "Programming & Automation",
    skills: [
      "Python (Test Automation & Instrument APIs)",
      "MATLAB",
      "LabVIEW",
      "C",
      "C++",
      "Git",
      "Data Analysis",
    ],
  },
  {
    title: "Optical & Semiconductor Engineering",
    skills: [
      "Optical Characterization",
      "Optical Communications",
      "Semiconductor Testing",
      "Optical Device Validation",
      "Experimental Design",
      "Signal Processing",
      "Failure Investigation",
      "Root Cause Analysis",
      "Test Automation",
      "Optical Alignment",
      "Fiber Optics",
    ],
  },
  {
    title: "Laboratory & Engineering",
    skills: [
      "R&D Testing",
      "Hardware Debugging",
      "Technical Documentation",
      "Statistical Data Analysis",
      "Experimental Validation",
      "Cross-functional Collaboration",
    ],
  },
  {
    title: "Design Tools",
    skills: ["Zemax OpticStudio", "SolidWorks", "AutoCAD", "MATLAB", "Python (Automated Data Analysis)"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 relative scroll-mt-24">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary mb-3">Skills</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Technical Skills</h2>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="card-elevated rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-primary/5 text-foreground/90 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Technologies matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 card-elevated rounded-2xl p-6 md:p-8"
        >
          <h3 className="font-display text-xl font-semibold mb-6 text-center">
            Featured Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedColumn
              heading="Optical"
              items={["OSA", "Optical Power Meter", "SMU", "VOA", "Oscilloscope", "Fiber Splicer"]}
            />
            <FeaturedColumn
              heading="Programming"
              items={["Python", "MATLAB", "LabVIEW", "C / C++", "Git"]}
            />
            <FeaturedColumn
              heading="Research"
              items={[
                "Free-Space Optical Communications",
                "Optical Characterization",
                "Biomedical Signal Processing",
                "MEMS Beam Stabilization",
                "Semiconductor Testing",
              ]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedColumn({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">{heading}</p>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it} className="text-sm text-foreground/85 flex gap-2">
            <span className="text-primary">–</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
