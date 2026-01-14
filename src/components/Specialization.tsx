import * as React from 'react';
import AOS1 from '../assets/AOS1.svg';
import AOS2 from '../assets/AOS2.svg';
import AOS3 from '../assets/AOS3.svg';

const Specialization: React.FC = () => {
  const services = [
    {
      title: 'Dangerous Goods (DGR) Handling',
      image: AOS1,
    },
    {
      title: 'Oil & Energy Sector Logistics',
      image: AOS2,
    },
    {
      title: 'Human Remains Repatriation (HUM)',
      image: AOS3,
    },
  ];

  return (
    <section className="bg-[#07119B] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-10 lg:px-16">
        {/* Subtitle */}
        <span className="text-gray-400 text-sm md:text-lg font-medium tracking-wide mb-4 block">
          Our Services
        </span>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-10 md:mb-16">
          Areas of Specialization
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[2.5rem] overflow-hidden bg-[#E5E5E5] transition-transform duration-300 hover:scale-[1.02] shadow-2xl"
            >
              {/* Image Container */}
              <div className="h-64 md:h-72 lg:h-80 w-full overflow-hidden p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              </div>

              {/* Content Container */}
              <div className="px-8 pb-10 pt-4 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-900 text-center leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Visit More Button */}
        <div className="flex justify-center">
          <button className="bg-white text-[#07119B] font-bold py-4 px-10 text-lg rounded-sm hover:bg-white hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 ease-out shadow-lg">
            Visit More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
