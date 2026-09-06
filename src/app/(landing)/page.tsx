import { HeroSection } from "@/features/landing/components/hero/hero-section"
import { StatsSection } from "@/features/landing/components/stats/stats-section"
import { ProcessSection } from "@/features/landing/components/process/process-section"
import { ValuePropSection } from "@/features/landing/components/value-prop/value-prop-section"
import { TeamSection } from "@/features/landing/components/team/team-section"
import { FaqSection } from "@/features/landing/components/faq/faq-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProcessSection />
      <ValuePropSection />
      <TeamSection />
      <FaqSection />
    </>
  )
}
