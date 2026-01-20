import React, { useEffect, useRef, useState } from 'react'

interface HomeSectionProps {
  sectionData?: {
    label: string
    title: React.ReactNode
    image: string
    firstText: string | React.ReactNode
    secondText: string
    moreLinkVisible?: boolean
    bgColor?: string
  }
  setIsVisible: (visible: boolean) => void
}

const Home: React.FC<HomeSectionProps> = ({ sectionData, setIsVisible }) => {
  if (!sectionData) return null

  const backgroundColor = sectionData.bgColor || '#ffffff'
  const [isContentVisible, setIsContentVisible] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const headingRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionData.image) {
      const img = new Image();
      img.src = sectionData.image;
      img.onload = () => setIsImageLoaded(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              setIsVisible(true)
            }
            if (entry.target === contentRef.current) {
              setIsContentVisible(true)
            }
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    )

    if (headingRef.current) {
      observer.observe(headingRef.current)
    }
    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current)
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
    }
  }, [])
  return (
    <section className="py-24" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12">

          {/* Label Column - 2/12 */}
          <div className="lg:col-span-2 lg:text-right text-left">
            <span className="text-gray-400 font-medium tracking-wide text-sm top-32">{sectionData.label}</span>
          </div>

          {/* Heading Column - 5/12 */}
          <div className="lg:col-span-5" ref={headingRef}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
              {sectionData.title}
            </h2>
          </div>

          {/* Content Column - 4/12 */}
          {(sectionData.image || sectionData.firstText) && (
            <div className="lg:col-span-4 flex flex-col gap-8 lg:pl-8" ref={contentRef}>
              {sectionData.image && (
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={sectionData.image}
                    alt="Port Operations"
                    onLoad={() => setIsImageLoaded(true)}
                    className={`w-full rounded-lg shadow-sm transition-all duration-700 ${isContentVisible && isImageLoaded
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                      }`}
                    style={{
                      transitionDelay: '0ms',
                      clipPath: isContentVisible && isImageLoaded
                        ? 'circle(100% at 50% 50%)'
                        : 'circle(0% at 50% 50%)',
                      transitionProperty: 'opacity, transform, clip-path'
                    }}
                  />
                </div>
              )}

              <div className="space-y-6">
                {sectionData.firstText && (
                  <p
                    className={`text-lg font-bold text-gray-900 leading-snug transition-all duration-600 ${isContentVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-8'
                      }`}
                    style={{ transitionDelay: isContentVisible ? '400ms' : '0ms' }}
                  >
                    {sectionData.firstText}
                  </p>
                )}
                {sectionData.secondText && (
                  <p
                    className={`text-base text-gray-600 leading-relaxed transition-all duration-500 ${isContentVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-8'
                      }`}
                    style={{ transitionDelay: isContentVisible ? '400ms' : '0ms' }}
                  >
                    {sectionData.secondText}
                  </p>
                )}

                {sectionData.moreLinkVisible && (
                  <a
                    href="#"
                    className={`inline-block relative text-[#07119B] font-bold text-lg group transition-all duration-500 ${isContentVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-8'
                      }`}
                    style={{ transitionDelay: isContentVisible ? '300ms' : '0ms' }}
                  >
                    More about us
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#07119B] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default Home
