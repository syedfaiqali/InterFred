import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { websiteContent } from '../data/websiteContent';

const Specialization: React.FC = () => {
  const content = websiteContent.specialization;
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload all service images
    content.services.forEach((service, index) => {
      const img = new Image();
      img.src = service.image;
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(index));
      };
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-[#07119B] py-20 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto text-center px-4 md:px-10 lg:px-16">
        {/* Subtitle */}
        <span
          className={`text-gray-400 text-sm md:text-lg font-medium tracking-wide mb-4 block transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {content.label}
        </span>

        {/* Main Title */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-10 md:mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {content.title}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
          {content.services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-[2.5rem] overflow-hidden bg-[#E5E5E5] transition-all duration-700 shadow-2xl hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="h-64 md:h-72 lg:h-80 w-full overflow-hidden p-4 bg-[#d1d1d1]">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover rounded-[2rem] transition-opacity duration-1000 ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setLoadedImages(prev => new Set(prev).add(index))}
                />
              </div>

              {/* Content Container */}
              <div className="px-8 pb-10 pt-4 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-900 text-center leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Visit More Button */}
        <div className="flex justify-center">
          <button
            className={`bg-white text-[#07119B] font-bold py-4 px-10 text-lg rounded-sm hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-700 ease-out shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            style={{ transitionDelay: '700ms' }}
          >
            Visit More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
