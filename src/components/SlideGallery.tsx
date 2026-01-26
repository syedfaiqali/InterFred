import React, { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShipSVG from '../Assets/Ship.svg';
import TruckSVG from '../Assets/Truck.svg';
import { websiteContent } from '../data/websiteContent';

gsap.registerPlugin(ScrollTrigger);

interface SlideGalleryProps {
  className?: string;
}

const SlideGallery: React.FC<SlideGalleryProps> = ({ className }) => {
  const content = websiteContent.slideGallery;
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);
  const shipImgRef = useRef<HTMLDivElement>(null);
  const waterRef = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const truckRef = useRef<HTMLDivElement>(null);
  const truckImgRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(
        [
          shipRef.current,
          waterRef.current,
          text2Ref.current,
          truckRef.current,
          roadRef.current,
          text3Ref.current,
        ],
        { opacity: 0 }
      );

      // Text 1 is visible by default
      gsap.set(text1Ref.current, { opacity: 1 });

      gsap.set([shipImgRef.current, truckImgRef.current], {
        xPercent: 100,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${window.innerHeight * 5}`, // Optimized scroll distance for better responsiveness
          scrub: 1.2, // Added inertia for smooth "move forward" effect
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ---- PHASE 1: TEXT 1 -> SHIP ----
      tl.to(text1Ref.current, { opacity: 0, duration: 1 }, "+=0.2")

        // Ship and Water reveal
        .to([shipRef.current, waterRef.current], { opacity: 1, duration: 1 }, "-=0.2")
        .to(shipImgRef.current, { xPercent: -220, duration: 8, ease: 'power1.inOut' }, "<")

        // ---- PHASE 2: SHIP -> TEXT 2 ----
        .to(text2Ref.current, { opacity: 1, duration: 1.5 }, "-=3.5")
        .to([shipRef.current, waterRef.current], { opacity: 0, duration: 0.8 }, "-=2.5")

        // ---- PHASE 3: TEXT 2 -> TRUCK ----
        .to(text2Ref.current, { opacity: 0, duration: 1 }, "+=0.5")
        .to([truckRef.current, roadRef.current], { opacity: 1, duration: 1 }, "-=0.2")
        .to(truckImgRef.current, { xPercent: -220, duration: 8, ease: 'power1.inOut' }, "<")

        // ---- PHASE 4: TRUCK -> TEXT 3 ----
        .to(text3Ref.current, { opacity: 1, duration: 1.5 }, "-=3.5")
        .to([truckRef.current, roadRef.current], { opacity: 0, duration: 0.8 }, "-=2.5")

        // FINAL HOLD
        .to(text3Ref.current, { opacity: 1, duration: 2 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Force refresh after a short delay to ensure everything is settled, 
    // especially important for first load if images/fonts take time
    const handleLoad = () => {
        ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);
    
    // Also trigger a refresh after a small timeout as a fallback 
    // in case the load event already fired or is missed
    const timer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 500);

    return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative h-screen w-full overflow-hidden bg-white ${className || ''}`}
    >
      {/* TEXT 1 */}
      <div
        ref={text1Ref}
        className="absolute inset-0 flex items-center justify-center text-center px-6 z-20"
        style={{ opacity: 1 }}
      >
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold">
            {content.slides[0].title.split('from').map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-blue-600">from</span>}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-xl sm:text-2xl mt-4 text-gray-600">
            {content.slides[0].description}
          </p>
        </div>
      </div>

      {/* SHIP & WATER */}
      <div
        ref={shipRef}
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ opacity: 0 }}
      >
        <div ref={shipImgRef} className="translate-y-12 lg:translate-y-20">
          <img src={ShipSVG} alt="Ship" className="w-[80vw] lg:w-[70vw]" />
        </div>
      </div>
      <div
        ref={waterRef}
        className="absolute bottom-0 left-0 w-full h-[15vh] bg-[#75C3FF]/20 backdrop-blur-sm z-5 pointer-events-none"
        style={{
          opacity: 0,
          clipPath: 'polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)'
        }}
      >
        {/* Simple animated waves could go here */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#75C3FF]/40"></div>
      </div>

      {/* TEXT 2 */}
      <div
        ref={text2Ref}
        className="absolute inset-0 flex items-center justify-center text-center px-6 z-20"
        style={{ opacity: 0 }}
      >
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold">
            {content.slides[1].title.split('to').map((part, i) => (
              <React.Fragment key={i}>
                {i === 0 && <span className="text-blue-600">to</span>}
                {part}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-xl sm:text-2xl mt-4 text-blue-600 font-bold">
            {content.slides[1].description}
          </p>
        </div>
      </div>

      {/* TRUCK & ROAD */}
      <div
        ref={truckRef}
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ opacity: 0 }}
      >
        <div ref={truckImgRef} className="translate-y-12 lg:translate-y-20">
          <img src={TruckSVG} alt="Truck" className="w-[80vw] lg:w-[70vw]" />
        </div>
      </div>
      <div
        ref={roadRef}
        className="absolute bottom-0 left-0 w-full h-[12vh] bg-gray-100 z-5 pointer-events-none flex items-center"
        style={{
          opacity: 0,
        }}
      >
        <div className="w-full h-px bg-gray-300 relative">
          <div className="absolute w-full flex justify-around">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-12 h-1 bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>

      {/* TEXT 3 */}
      <div
        ref={text3Ref}
        className="absolute inset-0 flex items-center justify-center text-center px-6 z-20"
        style={{ opacity: 0 }}
      >
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold">
            {content.slides[2].title.split('AI & ML').map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-blue-600">AI & ML</span>}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-xl sm:text-2xl mt-4 text-gray-600">
            {content.slides[2].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SlideGallery;
