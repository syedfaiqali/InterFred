import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import svglogos from '../assets/Group 124.svg';
import backgroundImage from '../assets/1.svg';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const scrollingTexts = [
    'Scroll down to discover how it works',
    'Scroll down to discover how it works',
  ];

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/' || !heroRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      /* ================= HERO MASK ================= */
      gsap.to(heroRef.current, {
        clipPath: 'inset(0% 0% 10% 0%)',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1, // Added smoothing/inertia
        },
      });

      /* ================= CONTENT PARALLAX ================= */
      gsap.fromTo(
        contentRef.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: 120,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1, // Added smoothing/inertia
          },
        }
      );
    }, heroRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [location.pathname]);

  return (
    <section
      ref={heroRef}
      className="h-screen sticky top-0 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />

      <div
        ref={contentRef}
        className="hero-content relative z-10 flex flex-col justify-between h-full"
      >
        {/* ================= HEADING ================= */}
        <div className="flex-1 flex items-start lg:items-end px-6 pt-28 md:pt-36 lg:pt-0 relative top-[-10%]">
          <div className="text-white max-w-[90%]">
            <h1 className="!leading-tight text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-medium mb-8 md:mb-12">
              Global<br />Logistics &<br />Industrial Solutions
            </h1>

            <img
              src={svglogos}
              alt="InterFret Certifications"
              className="h-8 md:h-12 brightness-0 invert"
            />
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="lg:absolute lg:bottom-6 lg:right-6 max-w-sm text-white/90 px-6 pb-10">
          <h4
            className="
              font-semibold leading-relaxed
              text-[clamp(0.85rem,1.5vw,1rem)]
              mb-4
            "
          >
            We are a leader in{' '}
            <span className="text-[#75C3FF]">
              professional logistics, evolving from an airfreight forwarder to a
              top-tier global network covering over
            </span>{' '}
            <span className="text-white font-bold">250 destinations.</span>
          </h4>

          {/* ================= MARQUEE ================= */}
          <div className="overflow-hidden flex">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="flex gap-4 whitespace-nowrap pr-4 animate-slide-in-left"
              >
                {scrollingTexts.map((text, index) => (
                  <p
                    key={`${i}-${index}`}
                    className="text-[clamp(0.75rem,1.2vw,0.875rem)] text-white/70"
                  >
                    <span className="text-blue-400">•</span> {text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
