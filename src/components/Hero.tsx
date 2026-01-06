import React from 'react'
import Header from './Header'

const Hero: React.FC = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex flex-col"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative w-full">
        <Header />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold">Global Logistic</h1>
          </div>

          <div className="text-white/90">
            <p className="text-base md:text-lg">
              We provide efficient, reliable logistics solutions across the globe. Our network
              ensures timely delivery and advanced tracking for your shipments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
