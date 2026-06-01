import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Mail } from 'lucide-react'
import { useWebsiteContent } from '../hooks/useWebsiteContent'
import { useLanguage } from '../context/LanguageContext'

const getGoogleMapsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address.replace(/\n/g, ' ')
  )}`

const AddressBlock = ({
  flag,
  address,
  linkText,
  mapQuery,
}: {
  flag: React.ReactNode
  address: string
  linkText: string
  mapQuery?: string
}) => (
  <div className="flex items-start text-lg text-gray-700 font-medium whitespace-pre-line">
    <span className="mr-3 mt-1 rounded-sm overflow-hidden flex-shrink-0">
      {flag}
    </span>
    <div className="flex flex-col gap-2">
      <span>{address}</span>
      <a
        href={getGoogleMapsUrl(mapQuery ?? address)}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-semibold text-blue-800 underline underline-offset-2 transition-colors hover:text-blue-600"
      >
        {linkText}
      </a>
    </div>
  </div>
)

const FAQ: React.FC = () => {
  const websiteContent = useWebsiteContent()
  const content = websiteContent.faq
  const { isArabic } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 lg:pl-12 pl-0">
            <span className={`text-gray-400 font-medium tracking-widest text-sm uppercase mb-6 block transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {content.label}
            </span>
            <h2 className={`text-4xl lg:text-6xl font-medium text-gray-900 leading-[1.1] mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {content.title}
            </h2>

            <div className={`space-y-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-4">
                <p className="text-xl text-gray-900 font-semibold whitespace-pre-line">
                  {content.contactText}
                </p>
                <a
                  href={`mailto:${content.contactEmail}`}
                  className="inline-flex items-center text-xl text-blue-800 font-bold underline transition-colors hover:text-blue-600"
                >
                  <Mail className="ml-2 mr-2 h-6 w-6 shrink-0" />
                  {content.contactEmail}
                </a>
              </div>

              {/* Head Office - Pakistan */}
              <div className="pt-6 border-t border-gray-100">
                {content.globalPresence
                  .filter((office: any) => office.code === 'PK')
                  .map((office: any, index: number) => (
                    <AddressBlock
                      key={index}
                      flag={
                        <img
                          src={`https://flagcdn.com/w320/${office.code.toLowerCase()}.png`}
                          alt={`${office.country} flag`}
                          className="h-6 w-9 shrink-0 object-cover rounded-sm border border-gray-200 bg-white shadow-sm"
                        />
                      }
                      address={office.address}
                      linkText={websiteContent.ui.common.mapLink}
                    />
                  ))}
              </div>
            </div>
          </div>

          <div className={`lg:col-span-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="border-b border-gray-100">
              {content.items.map((faq, index) => (
                <div key={index} className="relative group/faq">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-100 overflow-hidden">
                    <div className="w-full h-full bg-[#07119B] -translate-x-full group-hover/faq:translate-x-0 transition-transform duration-500 ease-out"></div>
                  </div>

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-8 flex justify-between items-center text-left group focus:outline-none"
                  >
                    <span className={`text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors ${isArabic ? 'text-right' : ''}`}>
                      {faq.question}
                    </span>
                    <div className="relative flex items-center justify-center w-5 h-5 ml-4">
                      <span className="absolute block w-full h-[2px] bg-gray-900"></span>
                      <span className={`absolute block w-[2px] h-full bg-gray-900 transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}></span>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                    <p
                      className="text-gray-500 text-lg leading-relaxed w-full font-medium whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br />') }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-1"></div>
        </div>

        {/* Global Presence Section Below the Line */}
        <div className={`mt-20 pt-16 border-t-2 border-[#07119B] transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h3 className="text-3xl text-[#07119B] font-bold uppercase tracking-wider mb-12 text-center">
            {content.globalPresenceLabel}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {content.globalPresence
              .filter((office: any) => office.code !== 'PK')
              .map((office: any, index: number) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <AddressBlock
                    flag={
                      <img
                        src={`https://flagcdn.com/w320/${office.code.toLowerCase()}.png`}
                        alt={`${office.country} flag`}
                        className="h-8 w-12 shrink-0 object-cover rounded-sm border border-gray-200 bg-white shadow-sm"
                      />
                    }
                    address={office.address}
                    linkText={websiteContent.ui.common.mapLink}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
