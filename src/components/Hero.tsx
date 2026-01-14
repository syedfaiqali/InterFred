import * as React from 'react'

import svglogos from '../assets/Group 124.svg';
import backgroundImage from '../assets/1.svg';

const Hero: React.FC = () => {
  const scrollingTexts = [
    "Scroll down to discover how it works",
    "Scroll down to discover how it works",
  ];

  return (
    <section
      className="min-h-screen lg:h-screen bg-cover bg-center relative flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />



      <div className="relative items-center mx-auto px-6 flex-1 flex items-start w-full pt-32 md:pt-40 lg:pt-12">
        <div className="w-full">
          <div className="text-white mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6 md:mb-8">
              Global Logistics<br className="hidden sm:block" /> & <br className="sm:hidden" />Industrial Solutions
            </h1>
            <div className="flex items-center gap-3">
              <img src={svglogos} alt="InterFret Certifications" className="h-12 md:h-16 object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:absolute lg:bottom-12 lg:right-6 lg:left-auto lg:max-w-md w-full max-w-sm text-white/90 pb-12 lg:pb-0">
        <div className="px-6">
          <h4 className="font-semibold mb-4 leading-relaxed text-sm md:text-base">We are a leader in <span style={{ color: '#75C3FF' }}>professional logistics, evolving from an airfreight forwarder to a top-tier global network covering over</span> <span className="text-white font-bold">250 destinations.</span></h4>
          <div className="overflow-hidden mt-2 flex">
            <div className="flex gap-4 animate-slide-in-left whitespace-nowrap pr-4">
              {scrollingTexts.map((text, index) => (
                <p key={index} className="text-sm text-white/70">
                  <span className="text-blue-400">•</span> {text}
                </p>
              ))}
            </div>
            <div className="flex gap-4 animate-slide-in-left whitespace-nowrap pr-4">
              {scrollingTexts.map((text, index) => (
                <p key={`copy-${index}`} className="text-sm text-white/70">
                  <span className="text-blue-400">•</span> {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
