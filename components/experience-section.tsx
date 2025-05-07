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
      title: "Research Assistant",
      company: "Carleton University",
      location: "Ottawa, Canada",
      period: "09/2024 – Present",
      description: [
        "Collaborating with Dr. Sima Soltanpour on ECG denoising using various filtering techniques and digital signal processing (DSP).",
        "Applied Wiener and wavelet filters to raw ECG data; quantified SNR improvements via hypothesis testing.",
        "Developing AI algorithms for early cardiovascular-disease detection, achieving significant classification accuracy.",
        "Designing wearable sensor-integration prototypes for real-time ECG acquisition and on-device inference.",
        "Documented requirement traceability and quality metrics aligned with medical-device verification standards.",
      ],
    },
    {
      title: "Research Assistant",
      company: "Carleton Optical Innovation Lab",
      location: "Ottawa, Canada",
      period: "09/2024 – 04/2025",
      description: [
        "Conducting fiber grating research under the supervision of Dr. Christopher Smelser.",
        "Engineered and validated experimental setups for optical systems and fiber Bragg gratings.",
        "Executed rigorous debugging and testing for both hardware and software components in photonic systems.",
        "Authored technical reports, abstracts, and poster presentations on fiber optic research for internal review and conferences.",
      ],
    },
    {
      title: "Technical Support Specialist",
      company: "Xplore",
      location: "Ottawa, Canada",
      period: "07/2023 – 05/2024",
      description: [
        "Delivered expert technical support for a diverse range of telecommunication equipment, including fiber equipment and satellite-connected devices.",
        "Diagnosed and resolved complex technical issues related to fiber optics and satellite communication systems.",
        "Ensured seamless connectivity and optimized performance for telecommunication infrastructure.",
        "Collaborated with interdisciplinary teams to provide prompt and effective technical solutions.",
        "Offered exceptional customer support by maintaining clear and efficient communication with clients to achieve complete issue resolution.",
      ],
    },
    {
      title: "IT Help Desk",
      company: "Gexel, Cogeco",
      location: "Ottawa, Canada",
      period: "08/2022 – 04/2023",
      description: [
        "Diagnosed and resolved technical issues efficiently for fiber optic network systems.",
        "Conducted device reboots and configurations to restore functionality.",
        "Maintained network performance and ensured the reliability of fiber optic cables.",
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
