"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  demoLink?: string
  githubLink?: string
  featured?: boolean
}

export function ProjectsSection() {

  const projects: Project[] = [
    {
      title: "Smart House + Digital Twin Simulator",
      description:
        "Built a bi-directional cyber-physical smart home system with a 3D-printed multi-room model controlled by an ESP32 and a virtual digital-twin dashboard. Achieved real-time synchronization between sensors, actuators, and an interactive app.",
      image: "/Smart-House.png",
      tags: ["IoT", "Embedded Systems", "Digital Twin", "ESP32", "Wireless Control"],
    },
    {
      title: "Free-Space Optical Link Reliability Optimization",
      description:
        "Investigated reliability and performance limits of free-space optical (FSO) communication systems under atmospheric turbulence. Modeled optical channels, evaluated link budgets, analyzed scintillation effects, and developed DSP-based calibration strategies to improve signal stability over long-range air pathways.",
      image: "/fso-research.jpg",
      tags: [
        "Optical Communication",
        "FSO",
        "Atmospheric Optics",
        "Link Budget Modeling",
        "DSP",
        "R&D",
      ],
    },
    {
      title: "Bio-Adaptive Bunion Realigner (Futuristic Concept)",
      description:
        "A visionary biomedical concept device using micro-skeletal pulse therapy, self-conforming nanosilk mesh, adaptive kinetic guidance, and bio-inductive patches to stimulate natural bone and soft-tissue remodeling.",
      image: "/Bunion-corrector.png",
      tags: ["Biomedical Engineering", "Regenerative Tech", "Smart Materials", "Biomechanics"],
      featured: true,
    },
    {
      title: "Early Detection of Cardiovascular Diseases Using AI",
      description:
        "Developed a full cardiovascular risk detection pipeline combining ECG signal processing and machine-learning models. Implemented Wiener and wavelet filtering, engineered CNN/LSTM-based classifiers, and validated classification accuracy using clinical-style evaluation metrics. Optimized the pipeline for low-latency, real-time inference in wearable applications.",
      image: "/project1.jpg",
      tags: [
        "Biomedical AI",
        "ECG",
        "DSP",
        "Machine Learning",
        "Signal Processing",
      ],
    },
    
    {
      title: "Fiber Bragg Grating Sensor System",
      description:
        "Designed a strain- and temperature-sensing FBG system with high-precision spectral interrogation and real-time data acquisition for photonic measurements.",
      image: "/project2.jpg",
      tags: ["Fiber Optics", "Sensors", "Photonics", "Optical Engineering"],
    },
    {
      title: "3D-Printed Aspheric Lenses",
      description:
        "Created custom aspheric lens designs in Zemax, fabricated prototypes using high-resolution 3D printing, and performed optical efficiency and aberration analysis.",
      image: "/3d.png",
      tags: ["Zemax", "Optical Design", "3D Printing", "Lens Fabrication"],
    },
    {
      title: "ECG Denoising & Biomedical DSP",
      description:
        "Implemented Wiener and wavelet-based filtering pipelines to clean raw ECG signals, achieving high SNR improvements and reliable arrhythmia detection through statistical validation.",
      image: "/project7.png",
      tags: ["DSP", "ECG", "Signal Processing", "MATLAB", "Biomedical AI"],
    },
  ]

  const featuredProject = projects.find((p) => p.featured)
  const regularProjects = projects.filter((p) => !p.featured)

  return (
   // <section id="projects" className="py-16 md:py-24 relative">
   <section id="projects" className="py-20 scroll-mt-24">

      <div className="container mx-auto px-4 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <Badge className="mb-4 bg-blue-500/10 text-blue-500 border-blue-500/30">
                  Featured Project
                </Badge>
                <h3 className="text-2xl font-bold mb-2">{featuredProject.title}</h3>
                <p className="text-muted-foreground mb-4">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-500 border-blue-500/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularProjects.map((project, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative"
  >

    {/* Parallax Glow */}
    <motion.div
      className="absolute -inset-0.5 rounded-xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-40 transition duration-500 pointer-events-none"
      animate={{
        x: [0, 10, -10, 0],
        y: [0, -10, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "easeInOut",
      }}
    />

    {/* Card */}
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group rounded-xl border border-blue-500/30 bg-card/80 backdrop-blur shadow-md hover:shadow-blue-400/30 hover:shadow-xl transition-shadow duration-300 overflow-hidden relative"
    >

      {/* IMAGE */}
      <div className="h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* TEXT */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-500 border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  </motion.div>
))}

        </div>

        {/* OTHER PROJECTS LIST */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">Other Technical Projects (Selected)</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>• <b>Real-Time Gesture Tracking (Edge AI Prototype):</b> Implemented a lightweight, OpenCV-based hand-pose classifier optimized for low-latency edge processing.</li>
            <li>• <b>Embedded State-Machine Controller (Arduino, C/C++):</b> Designed a deterministic finite-state interaction controller using debouncing, interrupts, and modular firmware design.</li>
            <li>• <b>Optical Component Handling & Micro-Assembly:</b> Fiber preparation, connector polishing, and micron-scale alignment for optical testbeds.</li>
            <li>• <b>Sensor-Integrated Microcontroller Prototypes:</b> Built multi-sensor embedded prototypes for biomedical and environmental monitoring.</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
