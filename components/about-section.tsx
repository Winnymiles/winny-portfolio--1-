"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="fiber-background"></div>
      <div className="light-refraction"></div>
      <div className="optical-wave"></div>

      {/* Light beams */}
      <div className="light-beam" style={{ top: "30%", transform: "rotate(2deg)" }}></div>
      <div className="light-beam" style={{ top: "70%", transform: "rotate(-3deg)" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
             <p>
              I'm a multidisciplinary engineer specializing in <strong>optical systems, biomedical signal processing, and sensing technologies</strong>. My background spans free-space optical communication at the National Research Council (NRC), ECG/PPG signal processing at Carleton University, and embedded, sensor-driven systems.
            </p>
            <p>
              Across all my work, I focus on <strong>identifying the right engineering questions</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>How do we improve optical link reliability in unpredictable environments?</li>
              <li>What signal-processing methods extract the most information with the least noise?</li>
              <li>How do we design sensing systems that are robust, explainable, and clinically meaningful?</li>
            </ul>
            <p>
              I enjoy bridging <strong>research, prototyping, and system validation</strong>, ensuring that algorithms, hardware, and documentation align with real-world requirements. My goal is to contribute to teams advancing <strong>medical devices, optical communication, and intelligent sensing systems</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-card/80 border-blue-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Carleton University</h4>
                    <p className="text-sm text-muted-foreground">
                      Bachelor of Information Technology (BIT), Optical Systems and Sensors
                    </p>
                    <p className="text-sm text-muted-foreground">09/2022 – Present</p>
                    <p className="text-sm">Cumulative GPA: 11.88/12 (A+ Standing)</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Relevant Coursework</h4>
                    <p className="text-sm text-muted-foreground">
                      Optical Communication Networks, Circuits and Signals, Intermediate Programming, Machine Language,
                      Assembly Language, Probability for Technology
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Certifications & Awards</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      <li>IEEE Canadian Foundation Scholarship (2024–2025)</li>
                      <li>Amplify Immersion Scholarship(2023–2024)</li>
                      <li>WHMIS, OHSA</li>
                      <li>Carleton University Dean's List (2022–2024)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
