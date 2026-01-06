import React from 'react'

const featureCards = [
  { title: 'Complete Operational Capacity', text: 'End-to-end cargo handling across modes.' },
  { title: 'Integrated Tracking', text: 'Real-time tracking and notifications.' },
  { title: 'Custom Solutions', text: 'Tailored logistics for complex shipments.' },
  { title: 'Global Network', text: 'Partners and agents worldwide.' },
  { title: 'Project Cargo', text: 'Oversized and special cargo handling.' },
  { title: 'Regulatory Expertise', text: 'Customs and compliance support.' },
]

const Home: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Left narrow column - stacked content like the screenshot */}
          <aside className="space-y-6">
            <div className="p-4 bg-gray-50 rounded">
              <h4 className="text-sm font-semibold">Welcome to</h4>
              <p className="text-xs text-gray-600 mt-2">Inter-Fret Consolidators, where innovation meets global compliance.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded">
              <h4 className="text-sm font-semibold">The industry challenges</h4>
              <p className="text-xs text-gray-600 mt-2">How Inter-Fret solves common logistics pain points.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded">
              <h4 className="text-sm font-semibold">Case studies</h4>
              <p className="text-xs text-gray-600 mt-2">Short previews of successful projects.</p>
            </div>
          </aside>

          {/* Right main column - grid of feature cards */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featureCards.map((c) => (
                <article key={c.title} className="bg-white rounded shadow overflow-hidden">
                  <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60')" }} />
                  <div className="p-4">
                    <h3 className="font-semibold">{c.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{c.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
