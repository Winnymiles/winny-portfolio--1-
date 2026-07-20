"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
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

const projects: Project[] = [
  {
    title: "Free-Space Optical Link Reliability Optimization",
    description:
      "Investigated performance limits of free-space optical (FSO) communication systems under atmospheric turbulence. Developed optical channel models, evaluated beam scintillation, quantified link margins, and built DSP-based compensation strategies to stabilize received power under variable conditions.",
    image: "/fso-research.jpg",
    tags: ["Optical Communication", "FSO", "Atmospheric Optics", "Link Budget", "DSP", "R&D"],
    demoLink: "https://fso-system-free-space-optical-commu.vercel.app/",
    featured: true,
  },
  {
    title: "Fiber Bragg Grating Sensor System",
    description:
      "Designed a high-precision FBG sensing system including spectral interrogation, optical filtering, and real-time signal acquisition. Validated strain and temperature responses through calibrated optical measurements and environmental variation tests.",
    image: "/project2.jpg",
    tags: ["Fiber Optics", "Sensors", "Photonics", "Optical Engineering"],
  },
  {
    title: "3D-Printed Aspheric Lenses",
    description:
      "Created and optimized custom aspheric lens geometries in Zemax OpticStudio, fabricated prototypes via high-resolution 3D printing, and characterized optical efficiency, aberration profiles, and alignment sensitivities.",
    image: "/3d.png",
    tags: ["Zemax", "Optical Design", "3D Printing", "Lens Fabrication"],
  },
  {
    title: "Smart House + Digital Twin Simulator",
    description:
      "Built a bi-directional cyber-physical smart home system with a 3D-printed multi-room model controlled by an ESP32 and a virtual digital-twin dashboard. Achieved real-time synchronization between sensors, actuators, and an interactive app.",
    image: "/Smart-House.png",
    tags: ["IoT", "Embedded Systems", "Digital Twin", "ESP32"],
  },
  {
    title: "Early Detection of Cardiovascular Diseases Using AI",
    description:
      "Full cardiovascular risk detection pipeline combining ECG signal processing and machine-learning models. Wiener and wavelet filtering, CNN/LSTM classifiers, and low-latency inference for wearable applications.",
    image: "/project1.jpg",
    tags: ["Biomedical AI", "ECG", "DSP", "Machine Learning"],
  },
  {
    title: "ECG Denoising & Biomedical DSP",
    description:
      "Wiener and wavelet-based filtering pipelines to clean raw ECG signals, achieving high SNR improvements and reliable arrhythmia detection through statistical validation.",
    image: "/project7.png",
    tags: ["DSP", "ECG", "MATLAB", "Signal Processing"],
  },
]

export function ProjectsSection() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

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
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Selected Work</h2>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14 card-elevated rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            <div className="h-64 md:h-auto overflow-hidden bg-secondary">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge className="mb-4 w-fit bg-primary/10 text-primary border-primary/30">
                Featured Project
              </Badge>
              <h3 className="font-display text-2xl font-semibold mb-3">{featured.title}</h3>
              <p className="text-muted-foreground mb-5">{featured.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tags.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="bg-primary/5 text-foreground/85 border-primary/25 text-xs"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {featured.demoLink && (
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link href={featured.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
                {featured.githubLink && (
                  <Button asChild variant="outline" className="border-primary/40">
                    <Link href={featured.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Source
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="card-elevated rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="h-44 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
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
                {(project.demoLink || project.githubLink) && (
                  <div className="flex gap-2">
                    {project.demoLink && (
                      <Button asChild size="sm" variant="ghost" className="text-primary">
                        <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button asChild size="sm" variant="ghost" className="text-primary">
                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1.5 h-3.5 w-3.5" /> Code
                        </Link>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
