"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code2, Cpu, FileCode2, Gauge, LayoutGrid, Terminal, Zap, Radio, Microscope, Cable, Wrench,
  Box, Package, Layers, CircleDot, GitBranch, Ruler, Circle, CircuitBoard
} from "lucide-react"

interface Skill {
  name: string
  icon: React.ReactNode
}

export function SkillsSection() {
  // ---------------- Programming ----------------
  const programmingSkills: Skill[] = [
    { name: "Python", icon: <Code2 className="h-8 w-8 text-blue-500" /> },
    { name: "C++", icon: <FileCode2 className="h-8 w-8 text-green-500" /> },
    { name: "MATLAB", icon: <Gauge className="h-8 w-8 text-orange-500" /> },
    { name: "Rust", icon: <Terminal className="h-8 w-8 text-yellow-500" /> },
    { name: "ARM Assembly", icon: <Cpu className="h-8 w-8 text-red-500" /> },
    { name: "LabVIEW", icon: <LayoutGrid className="h-8 w-8 text-blue-500" /> },
  ]

  // ---------------- Optical & Photonics Engineering ----------------
  const opticalSkills: Skill[] = [
    { name: "Optical Alignment", icon: <Ruler className="h-8 w-8 text-sky-400" /> },
    { name: "FSO Link Modeling", icon: <Zap className="h-8 w-8 text-indigo-400" /> },
    { name: "Atmospheric Optics", icon: <Radio className="h-8 w-8 text-blue-400" /> },
    { name: "Interferometry", icon: <Circle className="h-8 w-8 text-purple-400" /> },
    { name: "Fiber Bragg Gratings (FBGs)", icon: <Cable className="h-8 w-8 text-green-400" /> },
    { name: "Optical Channel Modeling", icon: <Microscope className="h-8 w-8 text-pink-400" /> },
  ]

  // ---------------- Silicon Photonics & Integrated Optics ----------------
  const siliconPhotonicsSkills: Skill[] = [
    { name: "Silicon Photonics (PICs)", icon: <CircuitBoard className="h-8 w-8 text-teal-400" /> },
    { name: "Integrated Waveguides", icon: <GitBranch className="h-8 w-8 text-cyan-400" /> },
    { name: "Photonic Device Testing", icon: <Gauge className="h-8 w-8 text-emerald-400" /> },
    { name: "Grating Couplers", icon: <CircleDot className="h-8 w-8 text-fuchsia-400" /> },
    { name: "Optical Packaging", icon: <Package className="h-8 w-8 text-orange-400" /> },
    { name: "OpticStudio / Zemax", icon: <Microscope className="h-8 w-8 text-purple-500" /> },
  ]

  // ---------------- CAD & Manufacturing ----------------
  const cadManufacturingSkills: Skill[] = [
    { name: "Fusion 360", icon: <Box className="h-8 w-8 text-blue-500" /> },
    { name: "3D Printing", icon: <Package className="h-8 w-8 text-green-500" /> },
    { name: "Lens Fabrication", icon: <Layers className="h-8 w-8 text-orange-500" /> },
  ]

  // ---------------- Other Technical Skills ----------------
  const otherSkills = [
    "Optical Measurements",
    "Optical Testing & Validation",
    "DSP-Based Calibration (FSO)",
    "Wavelet / Wiener Filtering",
    "Fiber Splicing & Micro-Handling",
    "Wearable Sensor Pipelines",
    "ECG/PPG Analysis",
  ]

  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <div className="fiber-background"></div>
      <div className="light-refraction"></div>
      <div className="optical-wave"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tools</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Programming */}
          <SkillCard title="Programming Languages" items={programmingSkills} />

          {/* Optical & Photonics */}
          <SkillCard title="Optical & Photonics Engineering" items={opticalSkills} />

          {/* Silicon Photonics */}
          <SkillCard title="Silicon Photonics & Integrated Optics" items={siliconPhotonicsSkills} />

          {/* CAD & Manufacturing */}
          <SkillCard title="CAD & Manufacturing" items={cadManufacturingSkills} />
        </div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="backdrop-blur-sm bg-card/80 border-blue-500/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">Other Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {otherSkills.map((skill, i) => (
                  <div key={i} className="bg-blue-500/10 rounded-lg p-4 text-center">
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// ---- Helper Component ----
const SkillCard = ({ title, items }: { title: string; items: Skill[] }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
    <Card className="backdrop-blur-sm bg-card/80 border-blue-500/30">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {items.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="tech-icon"
            >
              {skill.icon}
              <span className="mt-2 text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
)
