import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShipSVG from "../Assets/Helighted Ship.svg";
import ShipMainSVG from "../Assets/ShipMain.svg";

gsap.registerPlugin(ScrollTrigger);

const ValueProp: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const highlightRef = useRef<HTMLDivElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const shipSectionRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
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
    const cards = [
      card1Ref.current,
      card2Ref.current,
      card3Ref.current,
      card4Ref.current,
    ].filter(Boolean);

    cards.forEach((card, index) => {
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
          scrub: 0.8,
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
      <div className="relative w-full h-[100vh] bg-black overflow-hidden">
        <img
          src={ShipMainSVG}
          alt="Ship"
          className="w-full h-full object-cover"
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
                className="bg-[#07119B] p-6 md:p-10 lg:absolute lg:w-[25%] lg:top-[-7.6%] lg:left-[10.7%]"
              >
                <p className="text-white/80 text-sm mb-4">
                  Capabilities & Specs
                </p>
                <h2 className="text-white text-4xl font-bold leading-tight">
                  Highlights of our operational capacity
                </h2>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[75%] flex flex-col gap-4 sm:gap-0 lg:mt-12">
              <div className="flex justify-center">
                <div
                  ref={card1Ref}
                  className="bg-[#1E1E1E] p-6 md:p-10 flex flex-col w-full sm:w-[60%] md:w-[40%] lg:w-[25%] min-h-[180px] md:h-[200px]"
                >
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Global Reach
                  </h3>
                  <p className="text-white/70 text-sm">
                    Network covering 250+ destinations.
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-0 gap-4 sm:gap-0"
                style={{ justifyContent: "space-around" }}
              >
                <div
                  ref={card2Ref}
                  className="w-full sm:w-[48%] md:w-[40%] lg:w-[25%] bg-[#1E1E1E] p-6 md:p-8 min-h-[180px] md:h-[200px]"
                >
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Safety Standard
                  </h3>
                  <p className="text-white/70 text-xs">
                    The only Pakistani forwarder handling DGR explosives /
                    radioactive material.
                  </p>
                </div>

                <div
                  ref={card3Ref}
                  className="w-full sm:w-[48%] md:w-[40%] lg:w-[25%] bg-[#1E1E1E] p-6 md:p-8 min-h-[180px] md:h-[200px]"
                >
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Fleet
                  </h3>
                  <p className="text-white/70 text-xs">
                    Own fleet of low-bed and semi-low-bed trailers.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div
                  ref={card4Ref}
                  className="w-full sm:w-[60%] md:w-[40%] lg:w-[25%] bg-[#1E1E1E] p-6 md:p-10 min-h-[180px] md:h-[200px]"
                >
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Warehousing
                  </h3>
                  <p className="text-white/70 text-sm">
                    Secure Karachi facility with 24/7 staff availability.
                  </p>
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
              ref={card5Ref}
              className="w-full sm:w-[48%] md:w-[40%] lg:w-[25%] bg-[#07119B] p-6 md:p-8 min-h-[180px] md:h-[200px]"
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                Safety Standard
              </h3>
              <p className="text-white/70 text-xs">
                The only Pakistani forwarder handling DGR explosives /
                radioactive material.
              </p>
            </div>

            <div
              // ref={card6Ref}
              className="w-full sm:w-[48%] md:w-[40%] lg:w-[25%] p-6 md:p-8 min-h-[1px] md:h-[1px]"
            >
              {/* <h3 className="text-white text-lg font-semibold mb-2">
              </h3> */}
            </div>
          </div>

        </div>
      </div>
        {/* <div
          className="absolute  w-[100vw]"
          style={{ display: "block", zIndex: "11111" }}
        >
          <div
            ref={shipSectionRef}
            className=" h-[100vh] bg-black overflow-hidden pt-32"
            style={{
              background:
                "linear-gradient(156deg, #000000 0%, #000000 59%, #ffffff 50%, #ffffff 100%)",
            }}
          >
            <img
              ref={shipRef}
              src={ShipSVG}
              alt="Highlighted Ship"
              className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[700px] md:max-w-[900px] lg:max-w-[1000px]"
            />
          </div>
        </div> */}
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
        src={ShipSVG}
        alt="Highlighted Ship"
        className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[700px] md:max-w-[900px] lg:max-w-[1000px]"
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
