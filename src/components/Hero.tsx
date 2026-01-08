import React from 'react'
import Header from './Header'
import svglogos from '../assets/Group 124.png';
import backgroundImage from '../assets/1.svg';

const Hero: React.FC = () => {
  return (
    <section
      className="h-[78vh] lg:h-screen bg-cover bg-center relative flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />

      <div className="relative w-full">
        <Header />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 flex-1 flex items-start w-full pt-12">
        <div className="w-full">
          <div className="text-white mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
              Global<br />Logistics & <br />Industrial<br />Solutions
            </h1>
            <div className="flex items-center gap-3">
              <img src={svglogos} alt="InterFret" className="h-16 object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-6 max-w-md text-white/90 hidden md:block">
        <div className="p-0">
          <h4 className="font-semibold mb-4 leading-relaxed text-base">We are a leader in <span style={{ color: '#75C3FF' }}>professional logistics, evolving from an airfreight forwarder to a top-tier global network covering over</span> <span className="text-white font-bold">250 destinations.</span></h4>
          <p className="text-sm text-white/70 mt-6">• Scroll down to discover how it works •</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
