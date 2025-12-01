"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

export function ExperienceSection() {
 const experiences: Experience[] = [
    {
      title: "Research Student, Free-Space Optical Communication Systems",
      company: "National Research Council Canada (NRC)",
      location: "Ottawa, Canada",
      period: "Sept 2025 – Present",
      description: [
        "Working on next-generation free-space optical (FSO) communication systems designed to extend high-speed connectivity to rural and remote regions.",
        "Solving core engineering challenges: How do we maintain reliable optical links under real atmospheric turbulence? What alignment strategies and optical models ensure stable performance over long distances? How can DSP algorithms optimize calibration and compensate for environmental variation in real time?",
        "Modeled transmitter/receiver alignment and atmospheric attenuation to optimize system reliability.",
        "Ran real-time tests under variable conditions, evaluating system performance and link stability.",
        "Developed DSP-based calibration methods for improving signal quality across environmental fluctuations.",
        "Assisted in designing experimental setups combining optics, electronics, and embedded systems.",
        "Deepening specialization in optical communication, photonics R&D, and robust DSP for challenging environments.",
      ],
    },
    {
      title: "Research Assistant, Biomedical Signal Processing",
      company: "Carleton University",
      location: "Ottawa, Canada",
      period: "09/2024 – 10/2025",
      description: [
        "Designing DSP and machine-learning pipelines that answer a central question: How can we extract clinically actionable insights from noisy physiological signals — in real time?",
        "Developed ECG denoising using Wiener + wavelet filtering; quantified SNR improvements using statistical analysis.",
        "Built AI models for cardiovascular-disease detection and validated classification accuracy on real-world data.",
        "Integrated wearable ECG sensors with microcontrollers, enabling onboard inference and latency-efficient acquisition.",
        "Reduced preprocessing time while increasing robustness to motion artifacts, improving end-to-end signal reliability.",
      ],
    },
    {
      title: "Research Assistant, Fiber Grating Research",
      company: "Carleton Optical Innovation Lab",
      location: "Ottawa, Canada",
      period: "09/2024 – 04/2025",
      description: [
        "Designed, handled, and characterized fiber Bragg gratings (FBGs) for strain and temperature sensing applications.",
        "Built and optimized optical measurement setups involving interrogation units, precision stages, spectral analyzers, and tunable light sources.",
        "Performed micron-scale alignment, coupling optimization, and interferometric measurements for photonic system evaluation.",
        "Authored technical documentation and poster presentations supporting photonics research dissemination.",
      ],
    },
    {
      title: "Technical Support Specialist",
      company: "Xplore",
      location: "Ottawa, Canada",
      period: "07/2023 – 05/2024",
      description: [
        "Delivered expert technical support addressing a critical challenge: How do we diagnose and resolve complex telecommunication issues across diverse technologies (fiber optics, satellite) while minimizing downtime and ensuring reliable connectivity?",
        "Diagnosed and resolved complex technical issues related to fiber optics and satellite communication systems, reducing average resolution time through systematic troubleshooting approaches.",
        "Ensured seamless connectivity and optimized performance for telecommunication infrastructure, improving network reliability and customer satisfaction metrics.",
        "Collaborated with interdisciplinary teams to provide prompt and effective technical solutions, streamlining cross-functional problem-solving processes.",
        "Maintained clear and efficient communication with clients, achieving high customer satisfaction rates and complete issue resolution.",
      ],
    },
    {
      title: "IT Help Desk",
      company: "Gexel, Cogeco",
      location: "Ottawa, Canada",
      period: "08/2022 – 04/2023",
      description: [
        "Supported fiber optic network systems, addressing the core question: How do we quickly diagnose and resolve network issues while maintaining service reliability and minimizing customer impact?",
        "Diagnosed and resolved technical issues efficiently for fiber optic network systems, implementing systematic troubleshooting protocols to reduce resolution time.",
        "Conducted device reboots and configurations to restore functionality, ensuring rapid service restoration and minimal downtime.",
        "Maintained network performance and ensured the reliability of fiber optic cables, contributing to improved network uptime and customer satisfaction.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="fiber-background"></div>
      <div className="light-refraction"></div>
      <div className="optical-wave"></div>

      {/* Light beams */}
      <div className="light-beam" style={{ top: "25%", transform: "rotate(-2deg)" }}></div>
      <div className="light-beam" style={{ top: "55%", transform: "rotate(3deg)" }}></div>
      <div className="light-beam" style={{ top: "85%", transform: "rotate(-1deg)" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full backdrop-blur-sm bg-card/80 border-blue-500/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>
                        {exp.company} | {exp.location}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/30"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
