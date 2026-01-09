import * as React from 'react';
import cargoPlane from '../assets/AboutUsPlane.svg';
import howWeDoItImage from '../assets/how we do it.svg';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <span className="text-gray-400 font-medium tracking-wide text-sm block mb-6">What we do</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                Top IATA-rated<br />
                freight partner,<br />
                connecting <br />
                <span className="text-[#07119B]">Pakistan<br />worldwide.</span>
              </h2>
            </div>

            {/* Stats Boxes */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#E5E5E5] w-48 p-8 flex flex-col justify-center gap-2">
                <span className="text-6xl font-bold text-gray-900 leading-none">4</span>
                <span className="text-gray-600 font-bold text-sm tracking-tight uppercase">Office Location</span>
              </div>

              <div className="bg-[#E5E5E5] w-48 p-8 ml-24 flex flex-col justify-center gap-2">
                <span className="text-6xl font-bold text-gray-900 leading-none">250</span>
                <span className="text-gray-600 font-bold text-sm tracking-tight uppercase">Team Member</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 relative lg:pt-12">
            {/* Image Container with Blue accent */}
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#07119B] hidden lg:block"></div>
              <img
                src={cargoPlane}
                alt="Cargo Plane"
                className="w-full h-auto grayscale-0 hover:grayscale-0 transition-all duration-500 shadow-xl"
              />
            </div>

            <div className="space-y-8 max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                We show the world it's possible.
              </h3>

              <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
                <p>
                  Inter-Fret Consolidators (Pvt) Ltd being among the leaders in
                  providing professional solution of speedy transportation to its
                  valued customers in Pakistan and beyond. Managed by some
                  of the most experienced personnel in the aviation trade,
                </p>
                <p>
                  Inter-Fret rightly claim to be the top 5th most competitive and
                  service oriented freight forwarding organization based in
                  Pakistan (rated by IATA). And also developed a network for
                  more than 250 destinations world wide.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">How we do it</h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="font-medium">
                IFCL is being the only company in Pakistan who has been accredited for IMS certification
                (Integrated Management System) for Quality, Environment, Health and Safety as follows:
              </p>

              <ul className="space-y-2 font-bold text-gray-800">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#07119B] rounded-full"></span>
                  Quality 19001:2000
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#07119B] rounded-full"></span>
                  Environment: 14001:2004
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#07119B] rounded-full"></span>
                  Health and Safety: 18001:1999
                </li>
              </ul>

              <p>
                IFCL offers comprehensive services in the field of Supply Chain Management & logistics
                and always meet the expectations of its customers round the clock with an easy .
                Located in the heart of Karachi and 15 minutes drive from Karachi International Airport
                and Karachi Port makes IFCL very accessible to its clients round the clock.
              </p>

              <p>
                Not only in Karachi but too in upper Pakistan IFCL offices are located near by Airport.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#07119B]/5 rounded-xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
            <img
              src={howWeDoItImage}
              alt="Logistics Operations"
              className="relative w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
