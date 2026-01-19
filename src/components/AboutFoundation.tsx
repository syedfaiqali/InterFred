import * as React from 'react';
import centerShip from '../assets/FoundationShip.svg';
import milestone1987 from '../assets/Foundation12.svg';
import milestone1990 from '../assets/Foundation11.svg';
import milestone1991 from '../assets/Foundation10.svg';
import milestone1995 from '../assets/Foundation9.svg';
import milestone1996 from '../assets/Foundation8.svg';
import milestone1998 from '../assets/Foundation7.svg';
import milestone2000 from '../assets/Foundation6.svg';
import milestone2002 from '../assets/Foundation5.svg';
import milestone2005 from '../assets/Foundation4.svg';
import milestone2006 from '../assets/Foundation3.svg';
import milestone2008 from '../assets/Foundation2.svg';
import milestone2018 from '../assets/Foundation1.svg';

import { websiteContent } from '../data/websiteContent';

interface Milestone {
    year: string;
    description: string;
    image: string;
}

const milestones: Milestone[] = websiteContent.milestones;

const AboutFoundation: React.FC = () => {
    const historyContent = websiteContent.about.history;
    const [scrollProgress, setScrollProgress] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);
    const milestoneRef = React.useRef<HTMLDivElement>(null);

    // Determine the heading content based on scroll progress
    const getHeadingContent = () => {
        const phases = historyContent.phases;
        if (scrollProgress < 0.28) return phases[0];
        if (scrollProgress < 0.72) return phases[1];
        return phases[2];
    };

    const currentHeading = getHeadingContent();

    React.useEffect(() => {
        const handleScroll = () => {
            if (!milestoneRef.current) return;

            const rect = milestoneRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const stickyOffset = 160;

            const startScroll = rect.top - stickyOffset;
            const totalScrollable = rect.height - viewportHeight + stickyOffset;

            const currentScroll = -startScroll;
            const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

            setScrollProgress(progress);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.05 }
        );

        if (milestoneRef.current) {
            observer.observe(milestoneRef.current);
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (milestoneRef.current) observer.unobserve(milestoneRef.current);
        };
    }, []);

    return (
        <div ref={milestoneRef} className="bg-[#1A1A1A] text-white py-24 lg:py-32 relative overflow-visible">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
                <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-12 relative items-start">

                    {/* Left: Ship (Mobile and Desktop) */}
                    <div className="col-span-1 lg:col-span-2 lg:col-start-5 row-span-2 justify-center flex relative self-stretch">
                        <div className="absolute top-0 bottom-0 w-px border-l border-dashed border-gray-700/20"></div>

                        {/* Ship Container */}
                        <div
                            className="absolute w-full flex justify-center z-10"
                            style={{
                                top: `${scrollProgress * 100}%`,
                                transform: 'translateY(-50%)',
                                transition: 'top 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                                willChange: 'top'
                            }}
                        >
                            <img
                                src={centerShip}
                                alt="Moving Ship"
                                className={`w-10 lg:w-16 h-auto object-contain transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                                style={{
                                    filter: 'brightness(1.5)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Dynamic Heading */}
                    <div className="col-span-3 lg:col-span-3 lg:col-start-2 lg:row-start-1 sticky top-0 lg:top-[15vh] z-30 self-start pt-12 lg:pt-8 pb-12 bg-[#1A1A1A] lg:bg-transparent overflow-visible">
                        {/* Wrapper with key for smooth transitions */}
                        <div key={currentHeading.label} className={`space-y-3 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <span className="text-gray-400 lg:text-gray-500 font-medium tracking-widest text-xs lg:text-sm uppercase block transition-all duration-500">
                                {currentHeading.label}
                            </span>
                            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] transition-all duration-500">
                                {currentHeading.line1}<br />
                                <span className="text-[#5EAFEA] block md:inline">{currentHeading.line2}</span><br className="hidden md:block" />
                                <span className="text-[#5EAFEA] block md:inline">{currentHeading.line3}</span>
                            </h2>
                        </div>

                        {/* Mobile Gradient Mask for smooth scrolling transition */}
                        <div className="absolute left-0 right-0 top-full h-16 bg-gradient-to-b from-[#1A1A1A] to-transparent lg:hidden pointer-events-none"></div>
                    </div>

                    {/* Milestones Content (Mobile only) */}
                    <div className="col-span-3 lg:hidden mt-12 mb-24 space-y-20 relative z-10">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`space-y-6 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <span className="text-4xl font-bold text-white/90 leading-none block">{milestone.year}</span>
                                <div className="space-y-6">
                                    <div className="text-gray-400 text-base leading-relaxed font-light">
                                        {milestone.description}
                                    </div>
                                    <div className="w-full h-32 bg-zinc-800/20 flex items-center justify-center rounded-sm overflow-hidden shadow-lg border border-white/5">
                                        <img
                                            src={milestone.image}
                                            alt={milestone.year}
                                            className="w-full h-full object-cover opacity-70 grayscale transition-all duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side: Milestones content (Desktop only) */}
                    <div className="hidden lg:block lg:col-span-5 space-y-24 pb-48 lg:col-start-7">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`space-y-6 relative pl-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <span className="text-5xl lg:text-7xl font-bold text-white/90 leading-none block">{milestone.year}</span>

                                <div className="space-y-6 max-w-sm">
                                    <div className="text-gray-400 text-lg leading-relaxed font-light">
                                        {milestone.description}
                                    </div>
                                    <div className="w-[70%] h-34 bg-zinc-800/20 flex items-center justify-center rounded-sm overflow-hidden shadow-lg group border border-white/5">
                                        <img
                                            src={milestone.image}
                                            alt={milestone.year}
                                            className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutFoundation;
