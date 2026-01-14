import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShipSVG from '../Assets/Ship.svg';
import TruckSVG from '../Assets/Truck.svg';

gsap.registerPlugin(ScrollTrigger);

interface SlideGalleryProps {
  className?: string;
}

const SlideGallery: React.FC<SlideGalleryProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);
  const shipImgRef = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const truckRef = useRef<HTMLDivElement>(null);
  const truckImgRef = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(
        [
          shipRef.current,
          text2Ref.current,
          truckRef.current,
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
          end: () => `+=${window.innerHeight * 8}`, // Increased scroll distance for stability
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ---- PHASE 1: TEXT 1 -> SHIP ----
      tl.to(text1Ref.current, { opacity: 0, duration: 1.5 }, "+=0.5")

        // Ship reveal
        .to(shipRef.current, { opacity: 1, duration: 1 }, "-=0.5")
        .to(shipImgRef.current, { xPercent: -220, duration: 6, ease: 'none' }, "<")

        // ---- PHASE 2: SHIP -> TEXT 2 ----
        // Start revealing Text 2 as the ship's main body clears the center
        .to(text2Ref.current, { opacity: 1, duration: 1.5 }, "-=2.5")
        // Fade out ship quickly as text 2 becomes the focus
        .to(shipRef.current, { opacity: 0, duration: 0.8 }, "-=1.5")

        // ---- PHASE 3: TEXT 2 -> TRUCK ----
        .to(text2Ref.current, { opacity: 0, duration: 1.5 }, "+=1.5")
        .to(truckRef.current, { opacity: 1, duration: 1 }, "-=0.5")
        .to(truckImgRef.current, { xPercent: -220, duration: 6, ease: 'none' }, "<")

        // ---- PHASE 4: TRUCK -> TEXT 3 ----
        // Start final text as truck clears
        .to(text3Ref.current, { opacity: 1, duration: 1.5 }, "-=2.5")
        .to(truckRef.current, { opacity: 0, duration: 0.8 }, "-=1.5")

        // FINAL HOLD
        .to(text3Ref.current, { opacity: 1, duration: 3 });
    }, containerRef);

    return () => ctx.revert();
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
            Shifting the paradigm <span className="text-blue-600">from</span>
          </h2>
          <p className="text-xl sm:text-2xl mt-4 text-gray-600">
            Traditional, rigid logistics models
          </p>
        </div>
      </div>

      {/* SHIP */}
      <div
        ref={shipRef}
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ opacity: 0 }}
      >
        <div ref={shipImgRef} className="translate-y-12 lg:translate-y-20">
          <img src={ShipSVG} alt="Ship" className="w-[80vw] lg:w-[70vw]" />
        </div>
      </div>

      {/* TEXT 2 */}
      <div
        ref={text2Ref}
        className="absolute inset-0 flex items-center justify-center text-center px-6 z-20"
        style={{ opacity: 0 }}
      >
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold">
            <span className="text-blue-600">to</span> agile, technology-driven
          </h2>
          <p className="text-xl sm:text-2xl mt-4 text-blue-600 font-bold">
            sustainable transport solutions
          </p>
        </div>
      </div>

      {/* TRUCK */}
      <div
        ref={truckRef}
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ opacity: 0 }}
      >
        <div ref={truckImgRef} className="translate-y-12 lg:translate-y-20">
          <img src={TruckSVG} alt="Truck" className="w-[80vw] lg:w-[70vw]" />
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
            Powered by <span className="text-blue-600">AI & ML</span>
          </h2>
          <p className="text-xl sm:text-2xl mt-4 text-gray-600">
            Secure & sustainable transport solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default SlideGallery;
