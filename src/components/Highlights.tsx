import React from 'react'
import portImage from '../assets/port.jpg'
import equipmentImage from '../assets/Rectangle 54.svg'
import hazardousImage from '../assets/Rectangle 56.svg'
import cargoImage from '../assets/Rectangle 57.svg'
import regularatoryImage from '../assets/Rectangle 58.svg'
import Lis from '../assets/Rectangle 59.svg'
import UC from '../assets/Rectangle 60.svg'

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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side */}
            <div>
              <p className="text-sm text-gray-500 mb-4">Company</p>
              <h2 className="text-4xl font-bold leading-tight mb-8">
                Welcome to <span className="text-blue-900">Inter-Fret Consolidators,</span> where innovation meets global compliance.
              </h2>
            </div>

            {/* Right side */}
            <div>
              {/* Images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img src={equipmentImage} alt="Port terminal" className="w-full h-40 object-cover rounded" />
              </div>

              {/* Text content */}
              <div className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Established in 1987 in Karachi, Inter-Fret is now one of Pakistan's top five freight forwarders, with a head office strategically located near the airport and seaport.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We believe in exceeding customer expectations by being highly innovative and strictly compliant with global quality and safety standards. Our mission is to sustain our leadership role in supply chain solutions.
                </p>
                <a href="#" className="inline-block text-blue-900 font-semibold text-sm hover:underline mt-4">
                  More about us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* LEFT COLUMN (40%) - Title Section */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">Problem</p>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                  The industry<br />challenges<span className="block">that <span className="text-blue-900">Inter-Fret</span></span>
                  <span className="block text-blue-900">solves</span>
                </h2>
              </div>
            </div>

            {/* RIGHT COLUMN (60%) - 2x3 Card Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Card 1 - Handling Hazardous Materials */}
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0 mb-5">
                    <img
                      src={challenges[0].image}
                      alt={challenges[0].title}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{challenges[0].title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{challenges[0].description}</p>
                  </div>
                </div>

                {/* Card 2 - Complex Oversized Cargo */}
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0 mb-5">
                    <img
                      src={challenges[1].image}
                      alt={challenges[1].title}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{challenges[1].title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{challenges[1].description}</p>
                  </div>
                </div>

                {/* Card 3 - Regulatory Bottlenecks */}
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0 mb-5">
                    <img
                      src={challenges[2].image}
                      alt={challenges[2].title}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{challenges[2].title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{challenges[2].description}</p>
                  </div>
                </div>

                {/* Card 4 - Lack of Integrated Support */}
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0 mb-5">
                    <img
                      src={challenges[3].image}
                      alt={challenges[3].title}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{challenges[3].title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{challenges[3].description}</p>
                  </div>
                </div>

                {/* Card 5 - Unequipped for Every City */}
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0 mb-5">
                    <img
                      src={challenges[4].image}
                      alt={challenges[4].title}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{challenges[4].title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{challenges[4].description}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Highlights
