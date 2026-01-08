import React, { useState } from 'react'
import hazardousImage from '../assets/Rectangle 56.svg'
import cargoImage from '../assets/Rectangle 57.svg'
import regularatoryImage from '../assets/Rectangle 58.svg'
import Lis from '../assets/Rectangle 59.svg'
import UC from '../assets/Rectangle 60.svg'
import BreakSection from '../assets/2151998711 1.svg'
import welcomeImage from '../assets/Rectangle 54.svg'
import Home from './Home'
import ChallengeGrid from './ChallengeGrid'

const Highlights: React.FC = () => {
  const challenges = [
    // {
    //   title: 'Handling Hazardous Materials',
    //   description: 'Many carriers refuse to transport dangerous goods. Inter-Fret\'s expertise in chemical logistics requires strict adherence to safety protocols that most logistics providers lack.',
    //   image: hazardousImage,
    // },
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

  const [isVisible, setIsVisible] = useState(false);
  const [isIndustryVisible, setIsIndustryVisible] = useState(false);
  const welcomeSectionData = {
    label: 'Company',
    title: <><span
      className={`inline-block transition-all duration-500 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-8'
        }`}
      style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
    >
      Welcome to{' '}
    </span>
      <span
        className={`inline-block text-[#07119B] transition-all duration-500 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-8'
          }`}
        style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
      >
        Inter-Fret Consolidators,
      </span>
      <span
        className={`inline-block transition-all duration-500 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-8'
          }`}
        style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
      >
        {' '}where innovation
      </span>
      <span
        className={`inline-block transition-all duration-500 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-8'
          }`}
        style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
      >
        {' '}meets global compliance.
      </span></>,
    image: welcomeImage,
    firstText: 'Established in 1987 in Karachi, Inter-Fret is now one of Pakistan’s top five freight forwarders, with a head office strategically located near the airport and seaport.',
    secondText: 'We believe in exceeding customer expectations by being highly innovative and strictly compliant with global quality and safety standards. Our mission is to sustain our leadership role in supply chain solutions.',
    moreLinkVisible: true,
    bgColor: '#ffffff',
  }

  const IndustrySectionData = {
    label: 'Problem',
    title: <>
      <span
        className={`inline-block transition-all duration-500 ${isIndustryVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-8'
          }`}
        style={{ transitionDelay: isIndustryVisible ? '100ms' : '0ms' }}
      >
        The industry
        <br />
      </span>
      <span
        className={`inline-block transition-all duration-500 ${isIndustryVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-8'
          }`}
        style={{ transitionDelay: isIndustryVisible ? '200ms' : '0ms' }}
      >
        challenges
      </span>
      <span
        className={`block transition-all duration-500 ${isIndustryVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-8'
          }`}
        style={{ transitionDelay: isIndustryVisible ? '300ms' : '0ms' }}
      >
        that <span className="text-blue-900">Inter-Fret</span>
      </span>
      <span
        className={`block text-blue-900 transition-all duration-500 ${isIndustryVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-8'
          }`}
        style={{ transitionDelay: isIndustryVisible ? '400ms' : '0ms' }}
      >
        solves
      </span>
    </>,
    image: hazardousImage,
    firstText: <><span>Handling Hazardous Materials</span></>,
    secondText: 'Many carriers refuse to transport dangerous goods. Inter-Fret\'s expertise in chemical logistics requires strict adherence to safety protocols that most logistics providers lack.',
    moreLinkVisible: false,
    bgColor: '#f9fafb',
  }

  return (
    <>
      <Home sectionData={welcomeSectionData} setIsVisible={setIsVisible} />

      <section className="relative py-20 bg-[#f9fafb]">

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

        <Home sectionData={IndustrySectionData} setIsVisible={setIsIndustryVisible} />
        <ChallengeGrid />
      </section>
    </>
  )
}

export default Highlights
