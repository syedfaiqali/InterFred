import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { websiteContent } from '../data/websiteContent';
import ContactModal from './ContactModal';

const Partners: React.FC = () => {
  const content = websiteContent.partners;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 overflow-hidden" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <p className={`text-gray-400 font-medium tracking-widest text-sm mb-6 block transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {content.label}
        </p>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-10 tracking-tight leading-[1.1] transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {content.title.split('top').map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i === 0 && <>top<br /></>}
            </React.Fragment>
          ))}
        </h2>
        <div className={`inline-block transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button className="bg-[#07119B] text-white font-medium py-4 px-10 rounded-sm hover:bg-[#050D8A] transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl active:scale-95 shadow-lg text-sm tracking-wider" onClick={() => setIsContactModalOpen(true)}>
            Partner with us today
          </button>
        </div>
      </div>

      {/* Partners Logo Track - Continuous Infinite Marquee */}
      <div className={`relative mb-32 border-y border-gray-300 py-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
        <div className="flex w-max animate-marquee-infinite">
          {/* Two sets are enough for -50% infinite loop */}
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex flex-nowrap">
              {content.partnerLogos.map((logo, index) => (
                <div
                  key={`${groupIndex}-${index}`}
                  className="flex-shrink-0 w-44 md:w-60 h-32 border-r border-gray-300 flex items-center justify-center p-6 transition-all duration-300 bg-[#F9FBFC]"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h3 className={`text-3xl md:text-4xl font-medium text-gray-900 mb-10 transition-all duration-700 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Awards & Recognition
          </h3>
        </div>
      </div>

      {/* Awards Track - Continuous Infinite Marquee */}
      <div className={`relative overflow-hidden mb-12 border-y border-gray-300 py-2 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
        <div className="flex w-max animate-marquee-infinite-reverse">
          {[...Array(2)].map((_, groupIndex) => (groupIndex === 0 || groupIndex === 1) && (
            <div key={groupIndex} className="flex flex-nowrap">
              {content.awards.map((src, index) => (
                <div
                  key={`${groupIndex}-${index}`}
                  className="flex-shrink-0 w-44 md:w-60 h-32 border-r border-gray-300 flex items-center justify-center p-6 transition-all duration-300 bg-[#F9FBFC]"
                >
                  <img
                    src={src}
                    alt={`Award ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
};

export default Partners;
