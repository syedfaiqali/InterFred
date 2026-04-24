import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useWebsiteContent } from '../hooks/useWebsiteContent';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const content = useWebsiteContent().hero;
  const { isArabic, language } = useLanguage();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsImageLoaded(false);

    const img = new Image();
    img.src = content.bgImage;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true);

    if (location.pathname !== '/' || !heroRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
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
  }, [location.pathname, content.bgImage, language]);

  return (
    <section
      ref={heroRef}
      className={`h-screen sticky top-0 bg-cover bg-center relative overflow-hidden bg-[#0a0a0a] transition-opacity duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundImage: isImageLoaded ? `url(${content.bgImage})` : 'none' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />

      <div
        ref={contentRef}
        className="relative z-10 h-full px-6 pt-32 pb-16 md:pt-36 md:pb-12 lg:px-8"
      >
        <div className="flex h-full flex-col justify-between lg:grid lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-8">
          <div className="flex min-h-0 flex-1 items-start lg:items-end">
            <div className={`w-full max-w-[700px] text-white ${isArabic ? 'text-right' : 'text-left'}`}>
              <h1 className="!leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-8 md:mb-12">
                {content.heading.line1}
                <br />
                {content.heading.line2}
                <br />
                {content.heading.line3}
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

          <div className={`w-full max-w-sm text-white/90 ${isArabic ? 'text-right' : 'text-left'} lg:self-end`}>
            <h4 className="font-semibold leading-relaxed text-[clamp(0.85rem,1.5vw,1rem)] mb-4">
              <span className="text-[#75C3FF]">{content.description.highlight}</span>{' '}
              <span className="text-white font-bold">{content.description.bold}</span>
            </h4>

            <div className="flex overflow-hidden [direction:ltr]">
              {[0, 1].map((i) => (
                <div
                  key={`${language}-${i}`}
                  className={`hero-scrolling-track flex flex-none gap-4 whitespace-nowrap ${isArabic ? 'pl-4' : 'pr-4'} animate-slide-in-left`}
                >
                  {content.scrollingTexts.map((text, index) => (
                    <p
                      key={`${i}-${index}`}
                      dir={isArabic ? 'rtl' : 'ltr'}
                      className="text-[clamp(0.75rem,1.2vw,0.875rem)] text-white/70"
                    >
                      <span className="text-blue-400">&bull;</span> {text}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
