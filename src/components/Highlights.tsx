import React from 'react'

const items = [
  { title: 'Complete Operational Capacity', text: 'End-to-end cargo handling across modes.' },
  { title: 'Integrated Tracking', text: 'Real-time tracking and notifications.' },
  { title: 'Custom Solutions', text: 'Tailored logistics for complex shipments.' },
  { title: 'Global Network', text: 'Partners and agents worldwide.' },
]

const Highlights: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <article key={it.title} className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-blue-900 rounded-md flex items-center justify-center text-white font-semibold">✓</div>
              <div>
                <h3 className="font-semibold text-lg">{it.title}</h3>
                <p className="text-sm text-gray-600">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
