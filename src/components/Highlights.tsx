import React from 'react'
import hazardousImage from '../assets/Rectangle 56.svg'
import cargoImage from '../assets/Rectangle 57.svg'
import regularatoryImage from '../assets/Rectangle 58.svg'
import Lis from '../assets/Rectangle 59.svg'
import BreakSection from '../assets/2151998711 1.svg'
import UC from '../assets/Rectangle 60.svg'
import Home from './Home'

const Highlights: React.FC = () => {
  const challenges = [
    {
      title: 'Handling Hazardous Materials',
      description: 'Many carriers refuse to transport dangerous goods. Inter-Fret\'s expertise in chemical logistics requires strict adherence to safety protocols that most logistics providers lack.',
      image: hazardousImage,
    },
    {
      title: 'Complex Oversized Cargo',
      description: 'Incorporating industrial machinery like 25-foot tall structures or wide cargo equipment is logistically complex. Our expertise results in costly delays.',
      image: cargoImage,
    },
    {
      title: 'Regulatory Bottlenecks',
      description: 'Navigating customs, tariff classifications, and international trade laws without expert guidance can derail shipments and disrupt supply chains.',
      image: regularatoryImage,
    },
    {
      title: 'Lack of Integrated Support',
      description: 'Clients often have to juggle multiple vendors for warehousing, and transportation, leading to a fragmented and obsolete supply chain.',
      image: Lis,
    },
    {
      title: 'Unequipped for Every City',
      description: 'Finding logistics partners for every destination (especially far-flung locations) is difficult in a volatile market.',
      image: UC,
    },
  ]

  return (
    <>
      <Home />

      <section className="relative py-20 bg-[#f9fafb] pt-60">

        {/* Absolute Image Overlay Centered on Section Boundary */}
        <div className="absolute top-0 left-0 w-full -translate-y-[75%] z-10 px-6 pointer-events-none">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="hidden lg:block lg:col-span-1"></div>
              <div className="hidden lg:block lg:col-span-1"></div>
              <div className="lg:col-span-3">
                <img src={BreakSection} alt="Logistics" className="w-full h-[400px] object-cover rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* LEFT COLUMN (40%) - Title Section */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <p className="text-sm font-medium text-gray-400 mb-4 sticky top-32">Problem</p>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                  The industry<br />challenges<span className="block">that <span className="text-blue-900">Inter-Fret</span></span>
                  <span className="block text-blue-900">solves</span>
                </h2>
              </div>
            </div>

            {/* RIGHT COLUMN (60%) - 2x3 Card Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex flex-col h-full">
                    <div className="flex-shrink-0 mb-5">
                      <img
                        src={challenge.image}
                        alt={challenge.title}
                        className="w-full h-56 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-grow flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{challenge.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Highlights
