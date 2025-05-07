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
      title: "Early Detection of Cardiovascular Diseases Using AI",
      description:
        "Utilized machine-learning algorithms on ECG and physiological data to enable real-time arrhythmia detection and early diagnosis of cardiovascular conditions.",
      image: "/project1.jpg?height=400&width=600",
      tags: ["Python", "TensorFlow/Keras", "signal processing", "data analysis", "hypothesis testing"],
      featured: true,
    },
    {
      title: "Fiber Bragg Grating Sensor System",
      description:
        "Developed a fiber Bragg grating sensor system for strain and temperature measurements with high precision and real-time monitoring capabilities.",
      image: "/project2.jpg?height=400&width=600",
      tags: ["Fiber Optics", "Sensors", "Data Analysis", "Photonics"],
    },
    {
      title: "Hand Gesture Recognition System",
      description:
        "Built a vision-based CNN classifier in Python that achieves 95 % accuracy on live video feeds for intuitive human–computer interaction via hand movements.",
      image: "/hand-gesture.png?height=400&width=600",
      tags: ["Python", "OpenCV", "TensorFlow", "convolutional neural networks", "real-time video processing"],
    },
    {
      title: "Arduino Memory Game",
      description:
        "Developed an interactive pattern-matching game on Arduino Uno using LEDs and buttons; programmed randomized sequences and user-input validation to challenge short-term memory.",
      image: "/project4.jpg?height=400&width=600",
      tags: ["Arduino (C/C++)", "embedded systems", "hardware prototyping","user interface design"],
    },
    {
      title: "3D-Printed Aspheric Lenses",
      description:
        "Designed custom aspheric lens profiles in Zemax, fabricated them via high-resolution 3D printing, and performed efficiency/aberration measurements to verify optical performance.",
      image: "/3d.png?height=400&width=600",
      tags: ["Zemax", "3D Printing", "Optical Design", "Lens Design/Fabrication"],
    },
    {
      title: "Fiber Y-Coupler Characterization",
      description:
        "Fusion-spliced and characterized fiber Y-couplers with detailed performance analysis and documentation.",
      image: "/y-coupler.png?height=400&width=600",
      tags: ["Fiber Splicing", "Optical Measurements", "Photonics"],
    },
    {
      title: "ECG Denoising",
      description:
        "Implemented Wiener and wavelet-based digital filters to clean raw ECG signals, boosting SNR and achieving 97 % arrhythmia detection accuracy; validated improvements via statistical hypothesis testing.",
      image: "/project7.png?height=400&width=600",
      tags: ["MATLAB/Python", "DSP algorithms", "wavelet analysis", "statistical analysis"],
    },
  ]

  const featuredProject = projects.find((p) => p.featured)
  const regularProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="fiber-background"></div>
      <div className="light-refraction"></div>
      <div className="optical-wave"></div>

      {/* Light beams */}
      <div className="light-beam" style={{ top: "15%", transform: "rotate(2deg)" }}></div>
      <div className="light-beam" style={{ top: "45%", transform: "rotate(-3deg)" }}></div>
      <div className="light-beam" style={{ top: "75%", transform: "rotate(1deg)" }}></div>

      <div className="container mx-auto px-4 relative z-10">
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
                <Badge className="mb-4 bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/30">
                  Featured Project
                </Badge>
                <h3 className="text-2xl font-bold mb-2">{featuredProject.title}</h3>
                <p className="text-muted-foreground mb-4">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {featuredProject.demoLink && (
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href={featuredProject.demoLink} target="_blank" rel="noopener noreferrer">
                        View Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {featuredProject.githubLink && (
                    <Button variant="outline" asChild>
                      <Link href={featuredProject.githubLink} target="_blank" rel="noopener noreferrer">
                        GitHub <Github className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col backdrop-blur-sm bg-card/80 border-blue-500/20">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  {project.demoLink && (
                    <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        Demo <ArrowUpRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        Code <Github className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
