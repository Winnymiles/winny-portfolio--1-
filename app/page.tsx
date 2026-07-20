import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { QuickStatsSection } from "@/components/quick-stats-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ResearchSection } from "@/components/research-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { AwardsEducationSection } from "@/components/awards-education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <QuickStatsSection />
        <AboutSection />
        <ExperienceSection />
        <ResearchSection />
        <ProjectsSection />
        <SkillsSection />
        <AwardsEducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
