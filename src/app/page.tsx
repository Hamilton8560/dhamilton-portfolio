import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Pricing } from "@/components/pricing"
import { Services } from "@/components/services"
import { SplineAIShowcase } from "@/components/spline-ai-showcase"
import { Stats } from "@/components/stats"
import { Freehold } from "@/components/freehold"
import { Projects } from "@/components/projects"
import { CareerJourney } from "@/components/career-journey"
import { About } from "@/components/about"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/ui/chat-widget"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pricing />
      <Services />
      <SplineAIShowcase />
      <Stats />
      <Freehold />
      <Projects />
      <CareerJourney />
      <About />
      <CTABanner />
      <Footer />
      <ChatWidget />
    </main>
  )
}
