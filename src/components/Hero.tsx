import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { websiteContent } from '../data/websiteContent';
import Loader from './Loader';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const [content] = useState(websiteContent.hero);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Preload the large background image with onload set FIRST
    const img = new Image();
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true); // Ensure content shows if image fails
    img.src = content.bgImage;

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
          scrub: 1,
        },
      });

      /* ================= CONTENT PARALLAX ================= */
      gsap.fromTo(
        contentRef.current,
        { y: 0, opacity: 1 },
        {
          y: 120,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, heroRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [location.pathname, content.bgImage]);

  return (
    <>
      {!isImageLoaded && <Loader />}
      <section
        ref={heroRef}
        className="h-screen sticky top-0 relative overflow-hidden bg-[#050505]"
      >
        {/* Using <img> tag for faster browser discovery */}
        <img
          src={content.bgImage}
          alt="Background"
          onLoad={() => setIsImageLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Subtle gradient placeholder */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
        )}

        {/* Gradient overlay - always visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />

        <div ref={contentRef} className="hero-content relative z-10 flex flex-col justify-between h-full">
          {/* ================= HEADING ================= */}
          <div className="flex-1 flex items-start lg:items-end px-6 pt-32 md:pt-36 lg:pt-0 relative lg:top-[-10%]">
            <div className="text-white w-full lg:max-w-[90%]">
              <h1 className="!leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-8 md:mb-12">
                {content.heading.line1}<br />{content.heading.line2}<br />{content.heading.line3}
              </h1>

              <div className="flex flex-wrap gap-4 items-center">
                <img
                  src={content.certLogos}
                  alt="Certifications"
                  className="h-8 md:h-12 brightness-0 invert object-contain"
                />
              </div>
            </div>
          </div>

          {/* ================= DESCRIPTION ================= */}
          <div className="lg:absolute lg:bottom-6 lg:right-6 max-w-sm text-white/90 px-6 pb-20 lg:pb-10">
            <h4 className="font-semibold leading-relaxed text-[clamp(0.85rem,1.5vw,1rem)] mb-4">
              We are a leader in{' '}
              <span className="text-[#75C3FF]">{content.description.highlight}</span>{' '}
              <span className="text-white font-bold">{content.description.bold}</span>
            </h4>

            {/* ================= MARQUEE ================= */}
            <div className="overflow-hidden flex">
              {[0, 1].map((i) => (
                <div key={i} className="flex gap-4 whitespace-nowrap pr-4 animate-slide-in-left">
                  {content.scrollingTexts.map((text, index) => (
                    <p key={`${i}-${index}`} className="text-[clamp(0.75rem,1.2vw,0.875rem)] text-white/70">
                      <span className="text-blue-400">•</span> {text}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
