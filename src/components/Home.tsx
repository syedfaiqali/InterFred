import React from 'react'
import welcomeImage from '../assets/Rectangle 54.svg'

const Home: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12">

          {/* Label Column - 1/12 */}
          <div className="lg:col-span-2 text-right">
            <span className="text-gray-400 font-medium tracking-wide text-sm top-32">Company</span>
          </div>

          {/* Spacer Column - 1/12 */}
          {/* <div className="hidden lg:block lg:col-span-1"></div> */}

          {/* Heading Column - 5/12 */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Welcome to <span className="text-[#07119B]">Inter-Fret Consolidators,</span> where innovation meets global compliance.
            </h2>
          </div>

          {/* Content Column - 5/12 */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:pl-8">
            <img src={welcomeImage} alt="Port Operations" className="w-full rounded-lg shadow-sm" />

            <div className="space-y-6">
              <p className="text-lg font-bold text-gray-900 leading-snug">
                Established in 1987 in Karachi, Inter-Fret is now one of Pakistan’s top five freight forwarders, with a head office strategically located near the airport and seaport.
              </p>

              <p className="text-base text-gray-600 leading-relaxed">
                We believe in exceeding customer expectations by being highly innovative and strictly compliant with global quality and safety standards. Our mission is to sustain our leadership role in supply chain solutions.
              </p>

              <a href="#" className="inline-block relative text-[#07119B] font-bold text-lg group">
                More about us
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#07119B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home
