import { ShieldCheck, FileX, Zap, Lock } from 'lucide-react'

const steps = [
  'Click the button below',
  'Answer a few simple questions (takes ~2 minutes)',
  'Get instantly matched with benefits you qualify for',
  'Start receiving monthly funds for groceries & essentials',
]

export default function EligibilityCard() {
  return (
    <div
      className="mx-4 -mt-6 relative rounded-3xl bg-white shadow-2xl px-5 py-6"
      style={{ zIndex: 10 }}
    >
      <h2
        className="text-center text-[#1a5fa8] text-balance leading-tight mb-5"
        style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.65rem', letterSpacing: '0.02em' }}
      >
        Check Your Eligibility in 4 Easy Steps
      </h2>

      {/* Steps */}
      <div className="flex flex-col gap-2.5 mb-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-full border border-gray-100 bg-gray-50 py-3 px-4"
          >
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: '#1a5fa8', fontFamily: 'var(--font-nunito)' }}
            >
              {i + 1}
            </span>
            <span className="text-gray-700 leading-snug" style={{ fontSize: '0.9rem' }}>
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Trust row */}
      <div className="flex items-center justify-center gap-3 mb-5 flex-wrap">
        <TrustPill icon={<ShieldCheck size={14} />} label="Private & Secure" />
        <span className="text-gray-300 text-xs">·</span>
        <TrustPill icon={<FileX size={14} />} label="No Paperwork" />
        <span className="text-gray-300 text-xs">·</span>
        <TrustPill icon={<Zap size={14} />} label="Takes Just Minutes" />
      </div>

      {/* CTA Button */}
      <a
        href="https://giftclick.org/aff_c?offer_id=2399&aff_id=179699"
        className="flex items-center justify-center w-full rounded-xl py-4 text-white font-bold tracking-widest transition-opacity hover:opacity-90 active:opacity-80"
        style={{
          background: '#163d6a',
          fontFamily: 'var(--font-bebas)',
          fontSize: '1.2rem',
          letterSpacing: '0.1em',
        }}
        aria-label="Check my SNAP eligibility now"
        target="_blank"
        rel="noopener noreferrer"
      >
        CHECK MY ELIGIBILITY NOW &nbsp;→
      </a>

      {/* Safe & Confidential */}
      <div className="flex items-center justify-center gap-1.5 mt-3 text-gray-500" style={{ fontSize: '0.8rem' }}>
        <Lock size={12} />
        <span>Safe &amp; Confidential</span>
      </div>
    </div>
  )
}

function TrustPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1 text-gray-500" style={{ fontSize: '0.78rem' }}>
      <span className="text-[#1a5fa8]">{icon}</span>
      <span>{label}</span>
    </div>
  )
}
