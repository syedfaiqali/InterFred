import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShipMainSVG from '../Assets/Helighted Ship.svg';

gsap.registerPlugin(ScrollTrigger);

const ValueProp: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !shipRef.current || !contentRef.current) return;

    // Initial states
    gsap.set(shipRef.current, {
      x: 300,
      y: -300,
      scale: 0.9,
      opacity: 0,
    });

    gsap.set(contentRef.current, {
      opacity: 0,
      y: 80,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=200%',
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Ship animation (CargoKite style)
    tl.to(shipRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: 'power3.out',
    });

    // Content fade in AFTER ship settles
    tl.to(
      contentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
      },
      '+=0.4'
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* SHIP */}
      <img
        ref={shipRef}
        src={ShipMainSVG}
        alt="Highlighted Ship"
        className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          max-w-[900px] w-[90%]
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="relative z-10 pt-[70vh] pb-24"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {/* <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white">
              Value Proposition
            </h2>
            <p className="text-gray-400 mt-2">
              Reliable, cost-effective, and transparent logistic services.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ['End-to-end visibility', 'Track shipments at every step.'],
              ['Custom workflows', 'Adapted solutions for complex demands.'],
              ['Trusted partners', 'A global network you can rely on.'],
              ['Optimized costs', 'Competitive pricing with reliable service.'],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="p-6 bg-white/95 rounded-xl shadow-lg"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
