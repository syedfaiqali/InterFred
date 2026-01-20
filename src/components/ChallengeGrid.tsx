import React, { useEffect, useRef, useState } from 'react'

interface Challenge {
    title: string;
    description: string;
    image: string;
}

const ChallengeGrid: React.FC<{ challenges?: Challenge[] }> = ({ challenges }) => {
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

    if (!challenges || challenges.length < 4) return null;

    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Section 2: Complex Oversized Cargo */}
                <div className="hidden lg:block lg:col-span-1"></div>
                <div className="lg:col-span-4" ref={sec2Ref}>
                    <div className="flex flex-col">
                        <div className="flex-shrink-0 mb-6">
                            <img
                                src={challenges[0].image}
                                alt={challenges[0].title}
                                className={`w-full object-cover rounded-lg shadow-sm transition-all duration-500 ${isSec2Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                style={{
                                    clipPath: isSec2Visible ? 'circle(100% at 50% 50%)' : 'circle(0% at 50% 50%)',
                                    transitionProperty: 'opacity, transform, clip-path'
                                }}
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                                {challenges[0].title.split(' ').map((word, i) => (
                                    <span key={i} {...textTransition(isSec2Visible, `${(i + 1) * 100}ms`)}>{word}&nbsp;</span>
                                ))}
                            </h3>
                            <p
                                className={`text-sm text-gray-500 leading-relaxed font-medium transition-all duration-500 ${isSec2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                                style={{ transitionDelay: isSec2Visible ? '400ms' : '0ms' }}
                            >
                                {challenges[0].description}
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
                                src={challenges[1].image}
                                alt={challenges[1].title}
                                className={`w-full object-cover rounded-lg shadow-sm transition-all duration-500 ${isSec4Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                style={{
                                    clipPath: isSec4Visible ? 'circle(100% at 50% 50%)' : 'circle(0% at 50% 50%)',
                                    transitionProperty: 'opacity, transform, clip-path'
                                }}
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                                {challenges[1].title.split(' ').map((word, i) => (
                                    <span key={i} {...textTransition(isSec4Visible, `${(i + 1) * 100}ms`)}>{word}&nbsp;</span>
                                ))}
                            </h3>
                            <p
                                className={`text-sm text-gray-500 leading-relaxed font-medium transition-all duration-500 ${isSec4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                                style={{ transitionDelay: isSec4Visible ? '400ms' : '0ms' }}
                            >
                                {challenges[1].description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:col-span-1"></div>

                {/* Section 6: Lack of Integrated Support */}
                <div className="lg:col-span-3 lg:col-start-1 lg:ml-8 ml-0" ref={secLackRef}>
                    <div className="flex flex-col">
                        <div className="flex-shrink-0 mb-6">
                            <img
                                src={challenges[2].image}
                                alt={challenges[2].title}
                                className={`w-full object-cover rounded-lg shadow-sm transition-all duration-500 ${isSecLackVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                style={{
                                    clipPath: isSecLackVisible ? 'circle(100% at 50% 50%)' : 'circle(0% at 50% 50%)',
                                    transitionProperty: 'opacity, transform, clip-path'
                                }}
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                                {challenges[2].title.split(' ').map((word, i) => (
                                    <span key={i} {...textTransition(isSecLackVisible, `${(i + 1) * 100}ms`)}>{word}&nbsp;</span>
                                ))}
                            </h3>
                            <p
                                className={`text-sm text-gray-500 leading-relaxed font-medium transition-all duration-500 ${isSecLackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                                style={{ transitionDelay: isSecLackVisible ? '500ms' : '0ms' }}
                            >
                                {challenges[2].description}
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
                                src={challenges[3].image}
                                alt={challenges[3].title}
                                className={`w-full object-cover rounded-lg shadow-sm transition-all duration-500 ${isSecCityVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                style={{
                                    clipPath: isSecCityVisible ? 'circle(100% at 50% 50%)' : 'circle(0% at 50% 50%)',
                                    transitionProperty: 'opacity, transform, clip-path'
                                }}
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                                {challenges[3].title.split(' ').map((word, i) => (
                                    <span key={i} {...textTransition(isSecCityVisible, `${(i + 1) * 100}ms`)}>{word}&nbsp;</span>
                                ))}
                            </h3>
                            <p
                                className={`text-sm text-gray-500 leading-relaxed font-medium transition-all duration-500 ${isSecCityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                                style={{ transitionDelay: isSecCityVisible ? '500ms' : '0ms' }}
                            >
                                {challenges[3].description}
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
