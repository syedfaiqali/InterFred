import React, { useEffect, useRef, useState } from 'react'
import cargoImage from '../assets/Rectangle 57.svg'
import regularatoryImage from '../assets/Rectangle 58.svg'
import Lis from '../assets/Rectangle 59.svg'
import UC from '../assets/Rectangle 60.svg'

const ChallengeGrid: React.FC = () => {
    const [isSec2Visible, setIsSec2Visible] = useState(false)
    const [isSec4Visible, setIsSec4Visible] = useState(false)
    const [isSecLackVisible, setIsSecLackVisible] = useState(false)
    const [isSecCityVisible, setIsSecCityVisible] = useState(false)

    const sec2Ref = useRef<HTMLDivElement>(null)
    const sec4Ref = useRef<HTMLDivElement>(null)
    const secLackRef = useRef<HTMLDivElement>(null)
    const secCityRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === sec2Ref.current) setIsSec2Visible(true)
                        if (entry.target === sec4Ref.current) setIsSec4Visible(true)
                        if (entry.target === secLackRef.current) setIsSecLackVisible(true)
                        if (entry.target === secCityRef.current) setIsSecCityVisible(true)
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (sec2Ref.current) observer.observe(sec2Ref.current)
        if (sec4Ref.current) observer.observe(sec4Ref.current)
        if (secLackRef.current) observer.observe(secLackRef.current)
        if (secCityRef.current) observer.observe(secCityRef.current)

        return () => {
            if (sec2Ref.current) observer.unobserve(sec2Ref.current)
            if (sec4Ref.current) observer.unobserve(sec4Ref.current)
            if (secLackRef.current) observer.unobserve(secLackRef.current)
            if (secCityRef.current) observer.unobserve(secCityRef.current)
        }
    }, [])

    const textTransition = (isVisible: boolean, delay: string) => ({
        className: `inline-block transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`,
        style: { transitionDelay: isVisible ? delay : '0ms' }
    })

    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Section 2: Complex Oversized Cargo */}
                <div className="hidden lg:block lg:col-span-1"></div>
                <div className="lg:col-span-4" ref={sec2Ref}>
                    <div className="flex flex-col">
                        <div className="flex-shrink-0 mb-6">
                            <img
                                src={cargoImage}
                                alt="Complex Oversized Cargo"
                                className={`w-full object-cover rounded-lg shadow-sm transition-all duration-500 ${isSec2Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                style={{
                                    transitionDelay: isSec2Visible ? '0ms' : '0ms',
                                    clipPath: isSec2Visible ? 'circle(100% at 50% 50%)' : 'circle(0% at 50% 50%)',
                                    transitionProperty: 'opacity, transform, clip-path'
                                }}
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                                <span {...textTransition(isSec2Visible, '100ms')}>Complex&nbsp;</span>
                                <span {...textTransition(isSec2Visible, '200ms')}>Oversized&nbsp;</span>
                                <span {...textTransition(isSec2Visible, '300ms')}>Cargo</span>
                            </h3>
                            <p
                                className={`text-sm text-gray-500 leading-relaxed font-medium transition-all duration-500 ${isSec2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                                style={{ transitionDelay: isSec2Visible ? '400ms' : '0ms' }}
                            >
                                Incorporating industrial machinery like 25-foot tall structures or wide cargo equipment is logistically complex. Our expertise results in costly delays.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4: Regulatory Bottlenecks */}
                <div className="hidden lg:block lg:col-span-2"></div>
                <div className="lg:col-span-4 lg:pt-80" ref={sec4Ref}>
                    <div className="flex flex-col">
                        <div className="flex-shrink-0 mb-6">
                            <img
                                src={regularatoryImage}
                                alt="Regulatory Bottlenecks"
                                className={`w-full object-cover rounded-lg shadow-sm transition-all duration-500 ${isSec4Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                style={{
                                    transitionDelay: isSec4Visible ? '0ms' : '0ms',
                                    clipPath: isSec4Visible ? 'circle(100% at 50% 50%)' : 'circle(0% at 50% 50%)',
                                    transitionProperty: 'opacity, transform, clip-path'
                                }}
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                                <span {...textTransition(isSec4Visible, '100ms')}>Regulatory&nbsp;</span>
                                <span {...textTransition(isSec4Visible, '200ms')}>Bottlenecks</span>
                            </h3>
                            <p
                                className={`text-sm text-gray-500 leading-relaxed font-medium transition-all duration-500 ${isSec4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                                style={{ transitionDelay: isSec4Visible ? '400ms' : '0ms' }}
                            >
                                Navigating customs, tariff classifications, and international trade laws without expert guidance can derail shipments and disrupt supply chains.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:col-span-1"></div>

                {/* Section 6: Lack of Integrated Support */}
                {/* <div className="hidden lg:block ml-4"></div> */}
                <div className="lg:col-span-3 lg:col-start-1 ml-8" ref={secLackRef}>
                    <div className="flex flex-col">
                        <div className="flex-shrink-0 mb-6">
                            <img
                                src={Lis}
                                alt="Lack of Integrated Support"
                                className={`w-full object-cover rounded-lg shadow-sm transition-all duration-500 ${isSecLackVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                style={{
                                    transitionDelay: isSecLackVisible ? '0ms' : '0ms',
                                    clipPath: isSecLackVisible ? 'circle(100% at 50% 50%)' : 'circle(0% at 50% 50%)',
                                    transitionProperty: 'opacity, transform, clip-path'
                                }}
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                                <span {...textTransition(isSecLackVisible, '100ms')}>Lack&nbsp;</span>
                                <span {...textTransition(isSecLackVisible, '200ms')}>of&nbsp;</span>
                                <span {...textTransition(isSecLackVisible, '300ms')}>Integrated&nbsp;</span>
                                <span {...textTransition(isSecLackVisible, '400ms')}>Support</span>
                            </h3>
                            <p
                                className={`text-sm text-gray-500 leading-relaxed font-medium transition-all duration-500 ${isSecLackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                                style={{ transitionDelay: isSecLackVisible ? '500ms' : '0ms' }}
                            >
                                Clients often have to juggle multiple vendors for warehousing, and transportation, leading to a fragmented and obsolete supply chain.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 8: Unequipped for Every City */}
                <div className="hidden lg:block lg:col-span-1"></div>
                <div className="lg:col-span-4 lg:pt-60" ref={secCityRef}>
                    <div className="flex flex-col">
                        <div className="flex-shrink-0 mb-6">
                            <img
                                src={UC}
                                alt="Unequipped for Every City"
                                className={`w-full object-cover rounded-lg shadow-sm transition-all duration-500 ${isSecCityVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                style={{
                                    transitionDelay: isSecCityVisible ? '0ms' : '0ms',
                                    clipPath: isSecCityVisible ? 'circle(100% at 50% 50%)' : 'circle(0% at 50% 50%)',
                                    transitionProperty: 'opacity, transform, clip-path'
                                }}
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                                <span {...textTransition(isSecCityVisible, '100ms')}>Unequipped&nbsp;</span>
                                <span {...textTransition(isSecCityVisible, '200ms')}>for&nbsp;</span>
                                <span {...textTransition(isSecCityVisible, '300ms')}>Every&nbsp;</span>
                                <span {...textTransition(isSecCityVisible, '400ms')}>City</span>
                            </h3>
                            <p
                                className={`text-sm text-gray-500 leading-relaxed font-medium transition-all duration-500 ${isSecCityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                                style={{ transitionDelay: isSecCityVisible ? '500ms' : '0ms' }}
                            >
                                Finding logistics partners for every destination (especially far-flung locations) is difficult in a volatile market.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:col-span-3"></div>

            </div>
        </div>
    )
}

export default ChallengeGrid
