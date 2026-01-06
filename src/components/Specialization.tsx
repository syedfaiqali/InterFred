import React from 'react'

const cards = [
  { title: 'Sea Freight', text: 'Ocean transport and consolidations.' },
  { title: 'Air Freight', text: 'Fast international air shipments.' },
  { title: 'Project Cargo', text: 'Oversized and special cargo solutions.' },
]

const Specialization: React.FC = () => {
  return (
    <section className="py-12 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Areas of Specialization</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-white/10 p-6 rounded">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-white/80 mt-2">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialization
