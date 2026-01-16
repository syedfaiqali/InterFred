import * as React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svglogos from '../assets/Group 124.svg';
import backgroundImage from '../assets/1.svg';
gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const scrollingTexts = [
    "Scroll down to discover how it works",
    "Scroll down to discover how it works",
  ];
  const heroRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Only run this effect on the Home Page
    if (location.pathname !== '/' || !heroRef.current) return;

    // Use a context for safe cleanup
    const ctx = gsap.context(() => {
      // Create a scroll trigger that masks the hero as you scroll down
      // We don't use 'pin: true' here to avoid white-screen/routing issues
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (heroRef.current) {
            // Smooth reveal effect using clip-path
            // As user scrolls, the hero is masked from the bottom up
            const progress = self.progress * 100;
            heroRef.current.style.clipPath = `inset(0% 0% ${progress}% 0%)`;

            // Subtle parallax for the inner content
            const content = heroRef.current.querySelector('.hero-content');
            if (content) {
              gsap.set(content, { y: self.progress * 100, opacity: 1 - self.progress });
            }
          }
        },
      });
    }, heroRef);

    return () => {
      ctx.revert();
      if (heroRef.current) {
        heroRef.current.style.clipPath = 'none';
      }
      // Force refresh on navigation to clear stuck states
      ScrollTrigger.refresh();
    };
  }, [location.pathname]);

  return (
    <section
      className="h-screen bg-cover bg-center relative flex flex-col overflow-hidden sticky top-0 z-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      ref={heroRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />
      <div className="hero-content relative flex-1 flex flex-col justify-between w-full">
        <div className="relative items-center lg:items-end mx-auto px-6 flex-1 flex items-start w-full pt-32 md:pt-40 lg:pt-0 lg:pb-6">
          <div className="w-full">
            <div className="text-white mb-8 md:mb-12">
              <h1 className="!leading-tight text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-medium mb-8 md:mb-12 max-w-[80%]">
                Global<br />Logistics &<br />Industrial Solutions
              </h1>
              <div className="flex items-center gap-3">
                <img src={svglogos} alt="InterFret Certifications" className="h-8 md:h-12 object-contain brightness-0 invert" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative lg:absolute lg:bottom-6 lg:right-6 lg:left-auto lg:max-w-80 w-full max-w-sm text-white/90 pb-12">
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
      </div>
    </section>
  )
}

export default Hero
