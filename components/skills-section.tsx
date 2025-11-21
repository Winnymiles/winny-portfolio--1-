"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Cpu, FileCode2, Gauge, LayoutGrid, Terminal, Zap, Radio, Microscope, Cable, Wrench, Box, Package, Layers } from "lucide-react"

interface Skill {
  name: string
  icon: React.ReactNode
}


export function SkillsSection() {
  const programmingSkills: Skill[] = [
    { name: "Python", icon: <Code2 className="h-8 w-8 text-blue-500" /> },
    { name: "C++", icon: <FileCode2 className="h-8 w-8 text-green-500" /> },
    { name: "MATLAB", icon: <Gauge className="h-8 w-8 text-orange-500" /> },
    { name: "Rust", icon: <Terminal className="h-8 w-8 text-yellow-500" /> },
    { name: "ARM Assembly", icon: <Cpu className="h-8 w-8 text-red-500" /> },
    { name: "LabVIEW", icon: <LayoutGrid className="h-8 w-8 text-blue-500" /> },
  ]

  const opticalSkills: Skill[] = [
    { name: "Atmospheric Optics", icon: <Radio className="h-8 w-8 text-blue-400" /> },
    { name: "FSO Link Modeling", icon: <Zap className="h-8 w-8 text-indigo-400" /> },
    { name: "Optical Channel Modeling", icon: <Microscope className="h-8 w-8 text-purple-400" /> },
    { name: "Link Budgets & Power Margins", icon: <Gauge className="h-8 w-8 text-teal-400" /> },
    { name: "Beam Alignment & Pointing", icon: <Cable className="h-8 w-8 text-green-400" /> },
    { name: "Turbulence Modeling", icon: <Wrench className="h-8 w-8 text-blue-400" /> },
  ]

  const cadManufacturingSkills: Skill[] = [
    { name: "Fusion 360", icon: <Box className="h-8 w-8 text-blue-500" /> },
    { name: "3D Printing", icon: <Package className="h-8 w-8 text-green-500" /> },
    { name: "Molding", icon: <Layers className="h-8 w-8 text-orange-500" /> },
  ]

  return (
   // <section id="skills" className="py-16 md:py-24 relative">
   <section id="skills" className="py-20 scroll-mt-24">

      <div className="fiber-background"></div>
      <div className="light-refraction"></div>
      <div className="optical-wave"></div>

      {/* Light beams */}
      <div className="light-beam" style={{ top: "20%", transform: "rotate(-2deg)" }}></div>
      <div className="light-beam" style={{ top: "50%", transform: "rotate(3deg)" }}></div>
      <div className="light-beam" style={{ top: "80%", transform: "rotate(-1deg)" }}></div>

      <div className="container mx-auto px-4 relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-card/80 border-blue-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">Programming Languages</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {programmingSkills.map((skill, index) => (
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-card/80 border-blue-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">Optical & Photonics</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {opticalSkills.map((skill, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-card/80 border-blue-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">CAD & Manufacturing</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {cadManufacturingSkills.map((skill, index) => (
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
        </div>

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
                <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                  <span className="font-medium">DSP-Based Calibration (FSO)</span>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                  <span className="font-medium">ECG/PPG Analysis</span>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                  <span className="font-medium">Wearable Sensor Pipelines</span>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                  <span className="font-medium">Optical Measurements</span>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                  <span className="font-medium">Fiber Splicing</span>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                  <span className="font-medium">Wavelet / Wiener Filtering</span>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                  <span className="font-medium">Interferometry</span>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                  <span className="font-medium">Optical Testing & Validation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
