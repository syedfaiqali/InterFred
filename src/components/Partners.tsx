import * as React from 'react';
import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import ContactModal from './ContactModal';
import { useWebsiteContent } from '../hooks/useWebsiteContent';

const Partners: React.FC = () => {
  const websiteContent = useWebsiteContent();
  const content = websiteContent.partners;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const partnersViewportRef = useRef<HTMLDivElement>(null);
  const partnersSetRef = useRef<HTMLDivElement>(null);
  const awardsViewportRef = useRef<HTMLDivElement>(null);
  const awardsSetRef = useRef<HTMLDivElement>(null);
  const [partnerCopies, setPartnerCopies] = useState(4);
  const [awardCopies, setAwardCopies] = useState(4);
  const [partnerSetWidth, setPartnerSetWidth] = useState(0);
  const [awardSetWidth, setAwardSetWidth] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useLayoutEffect(() => {
    const updateTrackMetrics = (
      viewport: HTMLDivElement | null,
      setNode: HTMLDivElement | null,
      setCopies: React.Dispatch<React.SetStateAction<number>>,
      setWidth: React.Dispatch<React.SetStateAction<number>>
    ) => {
      if (!viewport || !setNode) return;

      const singleSetWidth = setNode.scrollWidth;
      const viewportWidth = viewport.clientWidth;

      if (!singleSetWidth || !viewportWidth) return;

      setWidth(singleSetWidth);
      setCopies(Math.max(4, Math.ceil((viewportWidth * 2) / singleSetWidth) + 1));
    };

    const refresh = () => {
      updateTrackMetrics(partnersViewportRef.current, partnersSetRef.current, setPartnerCopies, setPartnerSetWidth);
      updateTrackMetrics(awardsViewportRef.current, awardsSetRef.current, setAwardCopies, setAwardSetWidth);
    };

    refresh();

    const resizeObserver = new ResizeObserver(() => {
      refresh();
    });

    if (partnersViewportRef.current) resizeObserver.observe(partnersViewportRef.current);
    if (partnersSetRef.current) resizeObserver.observe(partnersSetRef.current);
    if (awardsViewportRef.current) resizeObserver.observe(awardsViewportRef.current);
    if (awardsSetRef.current) resizeObserver.observe(awardsSetRef.current);

    window.addEventListener('resize', refresh);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', refresh);
    };
  }, [content.partnerLogos.length, content.awards.length]);

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
          {content.title}
        </h2>
        <div className={`inline-block transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button className="bg-[#07119B] text-white font-medium py-4 px-10 rounded-sm hover:bg-[#050D8A] transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl active:scale-95 shadow-lg text-sm tracking-wider" onClick={() => setIsContactModalOpen(true)}>
            {websiteContent.ui.partners.cta}
          </button>
        </div>
      </div>

      {/* Partners Logo Track - Continuous Infinite Marquee */}
      <div
        ref={partnersViewportRef}
        dir="ltr"
        className={`relative overflow-hidden mb-32 border-y border-gray-300 py-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
      >
        <div
          className="flex w-max [direction:ltr] animate-marquee-dynamic"
          style={
            {
              '--marquee-distance': `${partnerSetWidth}px`,
              '--marquee-duration': `${Math.max(partnerSetWidth / 55, 16)}s`,
            } as React.CSSProperties
          }
        >
          {[...Array(partnerCopies)].map((_, groupIndex) => (
            <div
              key={groupIndex}
              ref={groupIndex === 0 ? partnersSetRef : undefined}
              className="hero-scrolling-track flex flex-none flex-nowrap"
            >
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
            {websiteContent.ui.partners.awardsTitle}
          </h3>
        </div>
      </div>

      {/* Awards Track - Continuous Infinite Marquee */}
      <div
        ref={awardsViewportRef}
        dir="ltr"
        className={`relative overflow-hidden mb-12 border-y border-gray-300 py-2 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
      >
        <div
          className="flex w-max [direction:ltr] animate-marquee-dynamic-reverse"
          style={
            {
              '--marquee-distance': `${awardSetWidth}px`,
              '--marquee-duration': `${Math.max(awardSetWidth / 55, 18)}s`,
            } as React.CSSProperties
          }
        >
          {[...Array(awardCopies)].map((_, groupIndex) => (
            <div
              key={groupIndex}
              ref={groupIndex === 0 ? awardsSetRef : undefined}
              className="hero-scrolling-track flex flex-none flex-nowrap"
            >
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
