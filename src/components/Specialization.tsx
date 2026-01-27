import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { websiteContent } from '../data/websiteContent';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const Specialization: React.FC = () => {
  const content = websiteContent.specialization;
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // GSAP Animation for Cards
    const cards = cardRefs.current.filter(Boolean);

    if (cards.length > 0) {
      gsap.set(cards, { y: 100, opacity: 0 });

      ScrollTrigger.batch(cards, {
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            overwrite: true,
          });
        },
        start: "top 85%",
      });
    }

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [content.services]);

  return (
    <section className="bg-[#07119B] py-20 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto text-center px-4 md:px-10 lg:px-16">
        {/* Subtitle */}
        <span
          className={`text-gray-400 text-sm md:text-lg font-medium tracking-wide mb-4 block transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          {content.label}
        </span>

        {/* Main Title */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-10 md:mb-16 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {content.title}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
          {content.services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="flex flex-col rounded-[2.5rem] overflow-hidden bg-[#E5E5E5] shadow-2xl hover:scale-[1.02] transition-transform duration-300"
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
        <div className="flex justify-center ">
          <div className={`inline-block transition-all duration-700 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              className="bg-white text-[#07119B] font-bold py-4 px-10 text-lg rounded-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl active:scale-95 shadow-lg"
            >
              <Link to={'/service'} key={'/service'}>
                Visit More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
