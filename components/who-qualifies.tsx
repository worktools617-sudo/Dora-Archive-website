const categories = [
  { icon: '👨‍👩‍👧', label: 'Single Parent' },
  { icon: '👴', label: 'Senior Citizen' },
  { icon: '👷', label: 'Part-Time Worker' },
  { icon: '📈', label: 'Facing Rising\nGrocery Costs' },
]

export default function WhoQualifies() {
  return (
    <section className="px-4 pt-8 pb-6" style={{ background: '#f5f0e8' }}>
      <p
        className="text-center text-gray-500 mb-0.5"
        style={{ fontSize: '0.8rem', fontFamily: 'var(--font-nunito)' }}
      >
        Who Qualifies Section
      </p>
      <h2
        className="text-center text-gray-800 text-balance mb-5"
        style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.7rem', letterSpacing: '0.02em' }}
      >
        You May Qualify If You Are A...
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="bg-white rounded-2xl flex flex-col items-center justify-center py-6 px-3 shadow-sm border border-gray-100"
          >
            <span className="text-4xl mb-2" role="img" aria-hidden="true">
              {cat.icon}
            </span>
            <p
              className="text-gray-800 font-semibold text-center leading-snug"
              style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}
            >
              {cat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
