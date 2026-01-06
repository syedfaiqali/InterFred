import React from 'react'

const Subscribe: React.FC = () => {
  return (
    <section className="py-12 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Subscribe to Newsletters</h3>
          <p className="text-sm text-white/80">Get updates on offers and industry news.</p>
        </div>

        <form className="flex w-full md:w-auto gap-2">
          <input aria-label="email" type="email" placeholder="Enter email" className="px-3 py-2 rounded bg-white text-black flex-1" />
          <button className="px-4 py-2 bg-white text-blue-900 rounded">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
