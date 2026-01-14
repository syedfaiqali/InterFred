import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

interface Country {
    name: string;
    code: string;
}

const countries: Country[] = [
    { name: "Albania", code: "AL" },
    { name: "Angola", code: "AO" },
    { name: "Argentina", code: "AR" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Bangladesh", code: "BD" },
    { name: "Belgium", code: "BE" },
    { name: "Benin", code: "BJ" },
    { name: "Bulgaria", code: "BG" },
    { name: "Cambodia", code: "KH" },
    { name: "Canada", code: "CA" },
    { name: "Chad", code: "TD" },
    { name: "China", code: "CN" },
    { name: "Congo", code: "CG" },
    { name: "Croatia", code: "HR" },
    { name: "Cyprus", code: "CY" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "France", code: "FR" },
    { name: "French Polynesia", code: "PF" },
    { name: "Germany", code: "DE" },
    { name: "Greece", code: "GR" },
    { name: "Guadeloupe", code: "GP" },
    { name: "Guinea", code: "GN" },
    { name: "Hong Kong", code: "HK" },
    { name: "Hungary", code: "HU" },
    { name: "India", code: "IN" },
    { name: "Italy", code: "IT" },
    { name: "Korea", code: "KR" },
    { name: "Lebanon", code: "LB" },
    { name: "Luxembourg", code: "LU" },
    { name: "Madagascar", code: "MG" },
    { name: "Malaysia", code: "MY" },
    { name: "Martinique", code: "MQ" },
    { name: "Mayotte", code: "YT" },
    { name: "Morocco", code: "MA" },
    { name: "Netherlands", code: "NL" },
    { name: "New Caledonia", code: "NC" },
    { name: "New Zealand", code: "NZ" },
    { name: "Norway", code: "NO" },
    { name: "Poland", code: "PL" },
    { name: "Reunion", code: "RE" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Singapore", code: "SG" },
    { name: "Slovenia", code: "SI" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sweden", code: "SE" },
    { name: "Thailand", code: "TH" },
    { name: "Togo", code: "TG" },
    { name: "Turkey", code: "TR" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" }
];

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
