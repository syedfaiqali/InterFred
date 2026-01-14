import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
// import servicesHero from '../assets/services_hero_combo_1768219477140.png';
import shipGlobal from '../assets/ServicePlane.svg';
import servicesShip from '../assets/connectionship.svg';

const ServicesSection: React.FC = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer1 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible1(true);
            },
            { threshold: 0.1 }
        );

        const observer2 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible2(true);
            },
            { threshold: 0.1 }
        );

        if (section1Ref.current) observer1.observe(section1Ref.current);
        if (section2Ref.current) observer2.observe(section2Ref.current);

        return () => {
            if (section1Ref.current) observer1.unobserve(section1Ref.current);
            if (section2Ref.current) observer2.unobserve(section2Ref.current);
        };
    }, []);

    return (
        <section className="bg-white py-12 lg:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={section1Ref}>

                {/* Top wide hero image wrapper */}
                <div className={`relative pt-24 md:pt-32 lg:pt-0 mb-16 lg:mb-24 transition-all duration-1000 delay-100 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative w-full aspect-[21/9] lg:aspect-[3/1] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl z-10">
                        <img
                            src={shipGlobal}
                            alt="Interfret Global Logistics"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* Left: Heading and Label */}
                    <div className="lg:col-span-1 hidden lg:block"></div>
                    <div className={`lg:col-span-4 space-y-8 transition-all duration-700 delay-300 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="space-y-4">
                            <span className="text-gray-400 font-medium tracking-widest text-sm block">Service</span>
                            <h2 className="text-4xl lg:text-6xl font-medium leading-[1.1] text-[#1A1A1A]">
                                Connecting<br />
                                Businesses with<br />
                                <span className="text-[#07119B] font-bold">Global Cargo<br />Networks</span>
                            </h2>
                        </div>
                    </div>

                    {/* Right: Secondary Image */}
                    <div className={`lg:col-span-6 relative transition-all duration-1000 delay-500 ${isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        {/* Decorative Blue Square - Connecting sections */}
                        <div className="absolute -top-32 -right-32 w-32 h-32 bg-[#07119B] z-20 hidden lg:block"></div>

                        <div className="rounded-lg overflow-hidden shadow-xl border border-gray-100 relative z-10">
                            <img
                                src={servicesShip}
                                alt="Global Network"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>

                {/* Comprehensive Solutions Section */}
                <div className="mt-32 lg:mt-40 max-w-4xl mx-auto text-center space-y-10" ref={section2Ref}>
                    <h3 className={`text-3xl lg:text-5xl font-medium leading-tight text-[#1A1A1A] transition-all duration-700 delay-100 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Comprehensive <span className="text-[#07119B] font-bold">Global Logistics, Aviation, and Industrial Solutions</span>
                    </h3>
                    <p className={`text-lg lg:text-xl text-gray-600 leading-relaxed font-meduim px-4 transition-all duration-700 delay-300 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        At Inter-Fret Consolidators (Pvt) Ltd, we go beyond traditional freight forwarding.
                        We offer a fully integrated supply chain solution, ranging from specialized
                        aviation support to industrial engineering. As Pakistan's only DGAC member and
                        an IATA-approved agent, we handle the complex challenges others cannot.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
