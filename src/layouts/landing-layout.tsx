import { LandingNavbar } from "@/components/shared/landing-navbar"
import { LandingFooter } from "@/components/shared/landing-footer"
import { CtaSection } from "@/features/landing/components/cta/cta-section"

export function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LandingNavbar />
      <main className="flex-1">{children}</main>
      <CtaSection />
      <LandingFooter />
    </>
  )
}
