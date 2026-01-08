import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Do you handle dangerous goods?",
    answer: "Yes. We are the only freight forwarder in Pakistan with a membership to the Dangerous Goods Advisory Council (DGAC), Washington, USA. We are fully licensed to handle explosives, radioactive materials, and chemicals."
  },
  {
    question: "Can you transport oversized industrial equipment?",
    answer: "Absolutely. We specialize in Project Cargo. We have successfully moved oversized oil well drilling equipment (up to 20 feet) and offer specialized engineering services for turbines, boilers, and vessels."
  },
  {
    question: "Do you offer customs clearance services?",
    answer: "Yes. We provide comprehensive customs brokerage, including tariff classification, documentation, and regulatory compliance to prevent delays."
  },
  {
    question: "Where does your network operate?",
    answer: "We cover over 250 global destinations, with partners in the USA, Germany,  China, UAE, and across Europe, Asia, and Africa."
  },
  {
    question: "Where does your network operate?",
    answer: "Yes, we own a secure warehouse located in Shershah, near the Karachi port,  equipped with modern inventory management systems."
  }
]

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Side: Header Info */}
          <div className="hidden lg:block lg:col-span-1"></div>
          <div className="lg:col-span-5">
            <span className="text-gray-400 font-medium tracking-widest text-sm uppercase mb-6 block">FAQ</span>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-12">
              Quick<br />answers to<br />questions you<br />may have
            </h2>

            <div className="space-y-4">
              <p className="text-xl text-gray-900 font-semibold">
                Can't find what you're looking for?<br />
                Contact us here:
              </p>
              <a
                href="mailto:info@interfret.com"
                className="text-xl text-blue-800 font-bold underline transition-colors hover:text-blue-600 block"
              >
                info@interfret.com
              </a>
            </div>
          </div>

          {/* Right Side: FAQ Accordion */}
          <div className="lg:col-span-5">
            <div className="border-t border-gray-100">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-8 flex justify-between items-center text-left group focus:outline-none"
                  >
                    <span className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                      {faq.question}
                    </span>
                    <div className="relative flex items-center justify-center w-6 h-6 ml-4">
                      {/* Horizontal line (always visible) */}
                      <span className="absolute block w-full h-[2px] bg-gray-900"></span>
                      {/* Vertical line (rotates/hides when open) */}
                      <span className={`absolute block w-[2px] h-full bg-gray-900 transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}></span>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-8' : 'max-h-0'}`}
                  >
                    <p className="text-gray-500 text-lg leading-relaxed max-w-[90%] font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-1"></div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
