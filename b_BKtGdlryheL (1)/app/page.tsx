import HeroSection from '@/components/hero-section'
import EligibilityCard from '@/components/eligibility-card'
import SocialProofStrip from '@/components/social-proof-strip'
import WhoQualifies from '@/components/who-qualifies'

export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: '#f5f0e8' }}>
      {/* Constrain to mobile width, centered */}
      <div className="mx-auto max-w-[430px] w-full">
        {/* Hero */}
        <HeroSection />

        {/* Eligibility card overlapping hero */}
        <EligibilityCard />

        {/* Social proof */}
        <SocialProofStrip />

        {/* Who qualifies */}
        <WhoQualifies />

        {/* Footer */}
        <footer className="px-4 pb-8 pt-2 text-center">
          <p className="text-gray-400" style={{ fontSize: '0.72rem' }}>
            U.S. residents only. Safe &amp; confidential.
          </p>
        </footer>
      </div>
    </main>
  )
}
