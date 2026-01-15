import React, { useState, useEffect } from "react";

interface ValueCardProps {
  title: React.ReactNode;
  text: string;
  bg: string;
  titleColor: string;
  textColor: string;
  className?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  title,
  text,
  bg,
  titleColor,
  textColor,
  className = "",
}) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onFocus={() => !isMobile && setHovered(true)}
      className={`
        ${bg} relative overflow-hidden 
        h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] 
        w-full transition-all duration-500 ${className}
      `}
    >
      <div
        className="absolute inset-0 px-6 sm:px-10 py-8 sm:py-12 flex flex-col justify-end transition-transform duration-500 ease-out"
        style={{
          transform: (hovered || isMobile) ? "translateY(0)" : "translateY(80px)",
        }}
      >
        <h3
          className={` ${titleColor} text-xl sm:text-[28px] leading-tight font-semibold mb-3 sm:mb-4 `}
        >
          {title}
        </h3>

        <p
          className={`text-sm sm:text-base leading-relaxed transition-all duration-500 ${
            (hovered || isMobile) ? "opacity-100 translate-y-0 h-[50%] relative" : "opacity-0 translate-y-4 h-[20%]"
          } ${textColor}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const ValueProposition: React.FC = () => {
  return (
    <section className="bg-white px-4 sm:px-10 pb-6 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 px-4 sm:px-10 md:grid-cols-3 gap-y-8 sm:gap-y-14 md:gap-y-0">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8 sm:gap-14 justify-end">
            <div className="relative top-0 left-0 md:top-[-10%] md:left-[-10%]">
              <p className="text-xs sm:text-sm tracking-widest text-gray-400 mb-2 sm:mb-3">
                Why us
              </p>

              <h2 className="text-3xl sm:text-[48px] leading-tight sm:leading-[48px] font-medium text-gray-900 mb-5 sm:mb-8">
                Value <br /> Proposition
              </h2>

              <button className="bg-[#07119B] text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-wider font-semibold hover:bg-[#050D8A] transition">
                Let's discuss today!
              </button>
            </div>

            <ValueCard
              bg="bg-[#E9EEF2]"
              titleColor="text-gray-900"
              textColor="text-gray-600"
              title={<>Proven Track<br />Record</>}
              text="Since 1987, we have won contracts for the U.S. Armed Forces and the United Nations, and serve clients like Schlumberger, BASF, and Abbott Laboratories."
            />
          </div>

          {/* CENTER COLUMN */}
          <div className="relative flex justify-center md:justify-end items-center">
            <div className="w-full md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] md:-mt-24">
              <ValueCard
                className="shadow-2xl mt-0 md:mt-24"
                bg="bg-[#07119B]"
                titleColor="text-white"
                textColor="text-blue-100"
                title={<>Industrial<br />Engineering</>}
                text="Beyond transport, we offer specialized maintenance services for industrial machinery, including lifecycle assessments, pipeline pigging, and repairs."
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8 sm:gap-0">
            <ValueCard
              bg="bg-[#E9EEF2]"
              titleColor="text-gray-900"
              textColor="text-gray-600"
              title={<>Unmatched<br />Specialization</>}
              text="We don't just move boxes. We move turbines, compressors, live animals, and sensitive bio-medical logistics under controlled conditions."
            />
            <ValueCard
              bg=""
              titleColor="text-gray-900"
              textColor="text-gray-600"
              title={<></>}
              text=""
              className="hidden md:block"
            />

            <ValueCard
              bg="bg-[#E9EEF2]"
              titleColor="text-gray-900"
              textColor="text-gray-600"
              className="mt-12 md:mt-0"
              title={<>Strategic<br />Partnerships</>}
              text="Exclusive relationships with Air Cargo Group, Hartrodt Group (Germany), and Target Logistics Services (USA)."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProposition;