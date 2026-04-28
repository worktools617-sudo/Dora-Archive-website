import Image from 'next/image'
import { Star } from 'lucide-react'

export default function SocialProofStrip() {
  return (
    <div className="mx-4 mt-4 rounded-2xl px-4 py-4" style={{ background: '#e8f4fd' }}>
      <div className="flex items-center gap-3">
        {/* Profile photo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/maria-profile.jpg"
            alt="Maria T. from Texas"
            width={52}
            height={52}
            className="rounded-full object-cover border-2 border-white shadow"
          />
        </div>

        {/* Quote */}
        <div className="flex-1">
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '0.82rem' }}>
            &ldquo;I didn&apos;t think I&apos;d qualify — turns out I get{' '}
            <strong className="text-[#1a5fa8]">$400/month</strong>{' '}for groceries. It took 3 minutes.&rdquo;
          </p>
          <p className="text-gray-500 mt-0.5" style={{ fontSize: '0.75rem' }}>
            — Maria T., Texas
          </p>
        </div>

        {/* Stars + trusted */}
        <div className="flex-shrink-0 flex flex-col items-center gap-1">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-gray-500 text-center leading-tight" style={{ fontSize: '0.68rem' }}>
            Trusted by
            <br />
            <strong className="text-gray-700">2M+ Americans</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
