import React, { useState } from "react";

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

  return (
 <div
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className={`
    ${bg} relative overflow-hidden 
    h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] 
    w-full transition-all duration-500 ${className}
  `}
>

     <div
  className="absolute inset-0 px-10 py-12 flex flex-col justify-end transition-transform duration-500 ease-out"
  style={{
    transform: hovered ? "translateY(0)" : "translateY(160px)",
  }}
>
        <h3
          className={`text-[28px] leading-tight font-semibold ${titleColor}`}
        >
          {title}
        </h3>

        <p
          className={`text-base leading-relaxed transition-all duration-500 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
    <section className="bg-white px-10 pb-10">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 px-10 md:grid-cols-3 gap-y-14 md:gap-y-0">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-14 justify-end">
            <div className="relative top-[-10%] left-[-10%]">
              <p className="text-sm tracking-widest text-gray-400 mb-3">
                Why us
              </p>

              <h2 className="text-[48px] leading-[48px] font-medium text-gray-900 mb-8">
                Value <br /> Proposition
              </h2>

              <button className="bg-[#07119B] text-white px-8 py-4 text-sm  tracking-wider font-semibold hover:bg-[#050D8A] transition">
                Let’s discuss today!
              </button>
            </div>

            <ValueCard
              bg="bg-[#E9EEF2]"
              titleColor="text-gray-900 mb-5"
              textColor="text-gray-600"
              title={<>Proven Track<br />Record</>}
              text="Since 1987, we have won contracts for the U.S. Armed Forces and the United Nations, and serve clients like Schlumberger, BASF, and Abbott Laboratories."
            />
          </div>

{/* CENTER COLUMN */}
<div className="relative flex justify-end items-center">
  <div className="w-full max-w-[380px] md:-mt-24">
    <ValueCard
      className="shadow-2xl mt-24 "
      bg="bg-[#07119B]"
      titleColor="text-white mb-5"
      textColor="text-blue-100"
      title={<>Industrial<br />Engineering</>}
      text="Beyond transport, we offer specialized maintenance services for industrial machinery, including lifecycle assessments, pipeline pigging, and repairs."
    />
  </div>
</div>
          {/* RIGHT COLUMN */}
          <div className="flex flex-col ">
            <ValueCard
              bg="bg-[#E9EEF2]"
              titleColor="text-gray-900 mb-12"
              textColor="text-gray-600 "
              title={<>Unmatched<br />Specialization</>}
              text="We don't just move boxes. We move turbines, compressors, live animals, and sensitive bio-medical logistics under controlled conditions."
            />
            <ValueCard
              bg=""
              titleColor="text-gray-900 mb-8"
              textColor="text-gray-600"
              title={<></>}
              text=""
            />

            <ValueCard
              bg="bg-[#E9EEF2]"
              titleColor="text-gray-900 mb-12"
              textColor="text-gray-600 mb-5"
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
