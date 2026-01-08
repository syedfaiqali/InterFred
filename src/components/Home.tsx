import React from 'react'

interface HomeSectionProps {
  sectionData?: {
    label: string
    title: React.ReactNode
    image: string
    firstText: string
    secondText: string
    moreLinkVisible?: boolean
    bgColor?: string
  }
}

const Home: React.FC<HomeSectionProps> = ({ sectionData }) => {
  if (!sectionData) return null

  const backgroundColor = sectionData.bgColor || '#ffffff'

  return (
    <section className="py-24" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12">

          {/* Label Column - 2/12 */}
          <div className="lg:col-span-2 text-right">
            <span className="text-gray-400 font-medium tracking-wide text-sm top-32">{sectionData.label}</span>
          </div>

          {/* Heading Column - 5/12 */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {sectionData.title}
            </h2>
          </div>

          {/* Content Column - 4/12 */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:pl-8">
            <img src={sectionData.image} alt="Section Image" className="w-full rounded-lg shadow-sm" />

            <div className="space-y-6">
              <p className="text-lg font-bold text-gray-900 leading-snug">
                {sectionData.firstText}
              </p>

              <p className="text-base text-gray-600 leading-relaxed">
                {sectionData.secondText}
              </p>

              {sectionData.moreLinkVisible && (
                <a href="#" className="inline-block relative text-[#07119B] font-bold text-lg group">
                  More about us
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#07119B] transition-all duration-300 group-hover:w-full"></span>
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home
