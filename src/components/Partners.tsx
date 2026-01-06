import React from 'react'

const logos = ['Logo A','Logo B','Logo C','Logo D']

const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold mb-6">Trusted by top Partners & supporters</h3>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          {logos.map((l) => (
            <div key={l} className="w-32 h-12 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-600">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
