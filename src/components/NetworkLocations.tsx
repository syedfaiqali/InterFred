import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import { websiteContent } from '../data/websiteContent';

interface Country {
    name: string;
    code: string;
}

const countries: Country[] = websiteContent.countries;

const NetworkLocations: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-20 pb-40 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <h2 className="text-3xl lg:text-4xl font-medium tracking-tight">
                        WORLDWIDE <span className="font-bold">LOCATIONS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-6 lg:gap-8">
                    {countries.map((country, index) => (
                        <div
                            key={index}
                            className={`flex flex-col group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                                }`}
                            style={{ transitionDelay: `${(index % 20) * 40}ms` }}
                        >
                            {/* Flag Container */}
                            <div className="relative aspect-[4/3] rounded-t-[1.5rem] md:rounded-t-[2rem] lg:rounded-t-[2.5rem] overflow-hidden bg-gray-50 flex items-center justify-center">
                                <img
                                    src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
                                    alt={`${country.name} flag`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Label Container */}
                            <div className="bg-[#07119B] py-5 md:py-2 px-1 md:px-2 text-center flex items-center justify-center min-h-[60px] md:min-h-0">
                                <span className="text-white font-medium text-[0.65rem] md:text-xs lg:text-sm leading-tight">
                                    {country.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NetworkLocations;
