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
          text1Ref.current,
          shipRef.current,
          text2Ref.current,
          truckRef.current,
          text3Ref.current,
        ],
        { opacity: 0 }
      );

      gsap.set([shipImgRef.current, truckImgRef.current], {
        xPercent: 100,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${window.innerHeight * 5}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers: true, // enable for debugging
        },
      });

      // ---- STAGE 1: TEXT 1 ----
      tl.to(text1Ref.current, { opacity: 1, duration: 1 })
        .to(text1Ref.current, { opacity: 1, duration: 1.5 })
        .to(text1Ref.current, { opacity: 0, duration: 1 });

      // ---- STAGE 2: SHIP ----
      tl.to(shipRef.current, { opacity: 1, duration: 0.5 })
        .to(
          shipImgRef.current,
          { xPercent: -160, duration: 3, ease: 'none' },
          '<'
        )
        .to(shipRef.current, { opacity: 0, duration: 0.5 });

      // ---- STAGE 3: TEXT 2 ----
      tl.to(text2Ref.current, { opacity: 1, duration: 1 })
        .to(text2Ref.current, { opacity: 1, duration: 1.5 })
        .to(text2Ref.current, { opacity: 0, duration: 1 });

      // ---- STAGE 4: TRUCK ----
      tl.to(truckRef.current, { opacity: 1, duration: 0.5 })
        .to(
          truckImgRef.current,
          { xPercent: -160, duration: 3, ease: 'none' },
          '<'
        )
        .to(truckRef.current, { opacity: 0, duration: 0.5 });

      // ---- STAGE 5: FINAL TEXT ----
      tl.to(text3Ref.current, { opacity: 1, duration: 1 })
        .to(text3Ref.current, { opacity: 1, duration: 2 });
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
        className="absolute inset-0 flex items-center justify-center text-center px-6"
      >
        <div>
          <h2 className="text-5xl font-bold">
            Shifting the paradigm <span className="text-blue-600">from</span>
          </h2>
          <p className="text-2xl mt-4 text-gray-600">
            Traditional, rigid logistics models
          </p>
        </div>
      </div>

      {/* SHIP */}
      <div
        ref={shipRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div ref={shipImgRef}>
          <img src={ShipSVG} alt="Ship" className="w-[70vw]" />
        </div>
      </div>

      {/* TEXT 2 */}
      <div
        ref={text2Ref}
        className="absolute inset-0 flex items-center justify-center text-center px-6"
      >
        <div>
          <h2 className="text-5xl font-bold">
            <span className="text-blue-600">to</span> agile, technology-driven
          </h2>
          <p className="text-2xl mt-4 text-blue-600 font-bold">
            sustainable transport solutions
          </p>
        </div>
      </div>

      {/* TRUCK */}
      <div
        ref={truckRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div ref={truckImgRef}>
          <img src={TruckSVG} alt="Truck" className="w-[70vw]" />
        </div>
      </div>

      {/* TEXT 3 */}
      <div
        ref={text3Ref}
        className="absolute inset-0 flex items-center justify-center text-center px-6"
      >
        <div>
          <h2 className="text-5xl font-bold">
            Powered by <span className="text-blue-600">AI & ML</span>
          </h2>
          <p className="text-2xl mt-4 text-gray-600">
            Secure & sustainable transport solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default SlideGallery;
