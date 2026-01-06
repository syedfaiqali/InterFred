import React from 'react'

const faqs = [
  { q: 'How do I track my shipment?', a: 'Use our tracking tool or contact support with your AWB or reference.' },
  { q: 'Do you handle customs?', a: 'Yes — we provide customs clearance and documentation support.' },
]

const FAQ: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-xl font-semibold mb-4">Quick answers to questions you may have</h3>
        <div className="grid gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="p-4 bg-white rounded shadow">
              <summary className="font-medium">{f.q}</summary>
              <p className="text-sm text-gray-600 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
