"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Linkedin, Github, Download } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || "Message from Portfolio")
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )
    window.location.href = `mailto:kameniwinny@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 100)
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-24">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-primary mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Get in Touch</h2>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="card-elevated h-full">
              <CardHeader>
                <CardTitle className="font-display">Contact Information</CardTitle>
                <CardDescription>
                  Open to opportunities in optical test, photonics R&D, and semiconductor
                  validation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <ContactRow
                  icon={<Mail className="h-5 w-5 text-primary" />}
                  label="Email"
                  value="kameniwinny@gmail.com"
                  href="mailto:kameniwinny@gmail.com"
                />
                <ContactRow
                  icon={<Phone className="h-5 w-5 text-primary" />}
                  label="Phone"
                  value="+1 581-309-7960"
                  href="tel:+15813097960"
                />
                <ContactRow
                  icon={<MapPin className="h-5 w-5 text-primary" />}
                  label="Location"
                  value="Ottawa, ON, Canada"
                />
                <ContactRow
                  icon={<Linkedin className="h-5 w-5 text-primary" />}
                  label="LinkedIn"
                  value="winny-kameni"
                  href="https://www.linkedin.com/in/winny-kameni-194349185/"
                />
                <ContactRow
                  icon={<Github className="h-5 w-5 text-primary" />}
                  label="GitHub"
                  value="Winnymiles"
                  href="https://github.com/Winnymiles"
                />

                <Button
                  asChild
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/winny-kameni-cv.pdf" download>
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="card-elevated h-full">
              <CardHeader>
                <CardTitle className="font-display">Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const inner = (
    <div className="flex items-center gap-4">
      <div className="bg-primary/10 p-3 rounded-xl">{icon}</div>
      <div>
        <p className="text-xs text-muted-foreground tracking-wider uppercase">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
      {inner}
    </Link>
  ) : (
    inner
  )
}
