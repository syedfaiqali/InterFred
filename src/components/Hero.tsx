import React from 'react'
import Header from './Header'
import svglogos from '../assets/Group 124.png';

const Hero: React.FC = () => {
  return (
    <section
      className="h-[78vh] lg:h-screen bg-cover bg-center relative flex flex-col"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />

      <div className="relative w-full">
        <Header />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Global 
              <br />Logistics & Industrial Solutions
            </h1>
            <div className="flex items-center gap-3 mt-8">
                      <img src={svglogos} alt="InterFret" className="h-14 object-contain" />
                    </div>
          </div>

          <div className="text-white/90 hidden md:block">
            <div className="bg-white/6 p-6 rounded-md max-w-md">
              <h4 className="font-semibold mb-2">We are a leader in <p style={{ color: '#75C3FF' }}>professional logistics, evolving from an airfreight  forwarder to a 
                top-tier global network covering over</p> 250 destinations.</h4>
              <p className="text-sm text-white/80">Scroll down to discover how it works.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
