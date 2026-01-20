import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { websiteContent } from '../data/websiteContent';

const ValueProp: React.FC = () => {
  const content = websiteContent.valueProp;
  const [isMainShipLoaded, setIsMainShipLoaded] = React.useState(false);
  const [isHighShipLoaded, setIsHighShipLoaded] = React.useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const highlightRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shipSectionRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Preload ships
    const mainImg = new Image();
    mainImg.src = content.mainShipImg;
    mainImg.onload = () => {
      setIsMainShipLoaded(true);
      ScrollTrigger.refresh();
    };

    const highImg = new Image();
    highImg.src = content.highlightedShipImg;
    highImg.onload = () => {
      setIsHighShipLoaded(true);
      ScrollTrigger.refresh();
    };

    /* ================= HIGHLIGHT CARD ================= */
    if (highlightRef.current) {
      gsap.set(highlightRef.current, {
        opacity: 0,
        y: 80,
      });

      gsap.to(highlightRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          end: "top 25%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }

    /* ================= CARDS ================= */
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          opacity: 0,
          y: 60,
          scale: 0.95,
        });

        gsap.to(card, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.2,
        });
      }
    });

    /* ================= SECOND SHIP (TOP-RIGHT → CENTER → BOTTOM-LEFT) ================= */
    if (shipRef.current && shipSectionRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: shipSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2, // Increased inertia for a "heavier" industrial feel
        },
      });

      tl.fromTo(
        shipRef.current,
        {
          x: 400,
          y: -5,
          scale: 1,
          opacity: 1,
        },
        {
          x: 0,
          y: 200,
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
        }
      ).to(shipRef.current, {
        x: -400,
        y: 450,
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power1.in",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* ================= FIRST SHIP (FULL SECTION) ================= */}
      <div className="relative w-full h-[100vh] bg-[#0a0a0a] overflow-hidden">
        <img
          src={content.mainShipImg}
          alt="Ship"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isMainShipLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsMainShipLoaded(true)}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div ref={contentRef} className="relative z-10 bg-black ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 ">
          <div className="flex flex-col lg:flex-row gap-0">
            {/* LEFT SIDE */}
            <div className="w-full lg:w-[25%] flex flex-col justify-start mb-8 lg:mb-0">
              <div
                ref={highlightRef}
                className="bg-[#07119B] p-6 md:p-10 lg:absolute lg:w-[28%] lg:min-h-[400px] lg:top-[-10.9%] lg:left-[7%]"
              >
                <p className="text-white/80 text-sm mb-4">
                  {content.highlight.label}
                </p>
                <h2 className="text-white text-4xl font-bold leading-tight">
                  {content.highlight.title}
                </h2>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[75%] flex flex-col gap-4 sm:gap-0 lg:mt-12">
              <div className="flex justify-center">
                <div
                  ref={el => (cardRefs.current[0] = el)}
                  className="bg-[#1E1E1E] p-6 md:p-10 flex flex-col w-full sm:w-[60%] md:w-[40%] lg:w-[25%] min-h-[180px] md:h-[200px] relative"
                >
                  <img src={content.cards[0].icon} alt={content.cards[0].title} className="absolute top-6 right-6 w-12 h-12" />
                  <div className="mt-auto">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {content.cards[0].title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {content.cards[0].description}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-0 gap-4 sm:gap-0"
                style={{ justifyContent: "space-around" }}
              >
                {[1, 2].map((idx) => (
                  <div
                    key={idx}
                    ref={el => (cardRefs.current[idx] = el)}
                    className="w-full sm:w-[48%] md:w-[40%] lg:w-[25%] bg-[#1E1E1E] p-6 md:p-8 min-h-[180px] md:h-[200px] relative flex flex-col"
                  >
                    <img src={content.cards[idx].icon} alt={content.cards[idx].title} className="absolute top-6 right-6 w-10 h-10" />
                    <div className="mt-auto">
                      <h3 className="text-white text-lg font-semibold mb-2">
                        {content.cards[idx].title}
                      </h3>
                      <p className="text-white/70 text-xs">
                        {content.cards[idx].description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <div
                  ref={el => (cardRefs.current[3] = el)}
                  className="w-full sm:w-[60%] md:w-[40%] lg:w-[25%] bg-[#1E1E1E] p-6 md:p-10 min-h-[180px] md:h-[200px] relative flex flex-col"
                >
                  <img src={content.cards[3].icon} alt={content.cards[3].title} className="absolute top-6 right-6 w-10 h-10" />
                  <div className="mt-auto">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {content.cards[3].title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {content.cards[3].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-4 sm:mt-0">
          <div className="flex flex-col lg:flex-row gap-4">

            {/* Spacer to align with left column */}
            <div className="hidden lg:block lg:w-[25%]" />

            {/* Cards */}
            <div className="w-full lg:w-[75%] flex flex-col sm:flex-row gap-4 justify-around">
              <div
                ref={el => (cardRefs.current[4] = el)}
                className="w-full sm:w-[48%] md:w-[40%] lg:w-[25%] bg-[#07119B] p-6 md:p-8 min-h-[180px] md:h-[200px] relative flex flex-col"
              >
                <img src={content.cards[4].icon} alt={content.cards[4].title} className="absolute top-6 right-6 w-12 h-12" />
                <div className="mt-auto">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {content.cards[4].title}
                  </h3>
                  <p className="text-white/70 text-xs">
                    {content.cards[4].description}
                  </p>
                </div>
              </div>

              <div
                className="w-full sm:w-[48%] md:w-[40%] lg:w-[25%] p-6 md:p-8 min-h-[1px] md:h-[1px]"
              >
              </div>
            </div>

          </div>
        </div>
        {/* Spacer / Layout Holder */}
        <div className="relative w-full h-[100vh]">
          <div
            className="absolute inset-0 w-[100vw]"
            style={{ zIndex: 11111 }}
          >
            <div
              ref={shipSectionRef}
              className="h-full bg-black overflow-hidden "
              style={{
                background:
                  "linear-gradient(156deg, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 40%, rgb(255, 255, 255) 101%)",
              }}
            >
              <img
                ref={shipRef}
                src={content.highlightedShipImg}
                alt="Highlighted Ship"
                className={`absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] transition-opacity duration-1000 ${isHighShipLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsHighShipLoaded(true)}
              />
            </div>
          </div>

        </div>

      </div>


      <div className=" "></div>
    </>
  );
};

export default ValueProp;
