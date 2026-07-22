import { HeroSection } from "@/components/hero-section"
import { MetricsHud } from "@/components/metrics-hud"
import { ProjectsSection } from "@/components/projects-section"
import { AskMeAgent } from "@/components/ask-me-agent"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <MetricsHud />
      <ProjectsSection />
      <AskMeAgent />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
