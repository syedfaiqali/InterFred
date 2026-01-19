import React, { useState } from 'react'
import Home from './Home'
import ChallengeGrid from './ChallengeGrid'
import { websiteContent } from '../data/websiteContent'

const Highlights: React.FC = () => {
  const content = websiteContent.highlights;
  const [isVisible, setIsVisible] = useState(false);
  const [isIndustryVisible, setIsIndustryVisible] = useState(false);

  const welcomeTarget = "Inter-Fret Consolidators,";
  const industryTarget = "Inter-Fret solves";

  const welcomeSectionData = {
    ...content.welcomeSection,
    title: (
      <>
        {content.welcomeSection.title.split(welcomeTarget).map((part, i) => (
          <React.Fragment key={i}>
            <span
              className={`inline-block transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              {part}
            </span>
            {i === 0 && (
              <span
                className={`inline-block text-[#07119B] font-bold transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                style={{ transitionDelay: `${150}ms` }}
              >
                {welcomeTarget}
              </span>
            )}
          </React.Fragment>
        ))}
      </>
    )
  };

  const IndustrySectionData = {
    ...content.industrySection,
    title: (
      <>
        {content.industrySection.title.split(industryTarget).map((part, i) => (
          <React.Fragment key={i}>
            <span
              className={`inline-block transition-all duration-500 ${isIndustryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              {part}
            </span>
            {i === 0 && (
              <span
                className={`inline-block text-[#07119B] font-bold transition-all duration-500 ${isIndustryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                style={{ transitionDelay: `${150}ms` }}
              >
                {industryTarget}
              </span>
            )}
          </React.Fragment>
        ))}
      </>
    ),
    firstText: <><span>{content.industrySection.firstText}</span></>
  };

  return (
    <>
      <Home sectionData={welcomeSectionData} setIsVisible={setIsVisible} />

      <section className="relative py-20 bg-[#f9fafb] mt-32 md:mt-0">

        {/* Absolute Image Overlay Centered on Section Boundary */}
        <div className="absolute top-0 left-0 w-full -translate-y-[35%] md:-translate-y-[75%] z-10 px-6 pointer-events-none">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="hidden lg:block lg:col-span-1"></div>
              <div className="hidden lg:block lg:col-span-1"></div>
              <div className="lg:col-span-3">
                <img src={content.breakSectionImage} alt="Logistics" className="w-full h-[400px] object-cover rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </div>

        <Home sectionData={IndustrySectionData} setIsVisible={setIsIndustryVisible} />
        <ChallengeGrid challenges={content.challenges} />
      </section>
    </>
  )
}

export default Highlights;
