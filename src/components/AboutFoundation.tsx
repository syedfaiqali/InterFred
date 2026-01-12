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

interface Milestone {
    year: string;
    description: React.ReactNode;
    image: string;
}

const milestones: Milestone[] = [
    {
        year: '1987',
        description: 'Inter-Fret Consolidators (Pvt) Ltd is established in Karachi, starting operations primarily as an Airfreight Forwarder.',
        image: milestone1987
    },
    {
        year: '1990',
        description: 'Expansion into Ocean Freight. The company diversifies into Sea Cargo, establishing itself as a Non-Vessel Operating Common Carrier (NVOCC).',
        image: milestone1990
    },
    {
        year: '1991-93',
        description: 'National Network Growth Domestic presence is expanded by opening strategic branch offices in key industrial hubs: Lahore and Sialkot.',
        image: milestone1991
    },
    {
        year: '1995',
        description: 'Industry Accreditation Officially became members of the Pakistan International Freight Forwarders Association (PIFFA) and the Karachi Chamber of Commerce & Industry (KCCI).',
        image: milestone1995
    },
    {
        year: '1996',
        description: 'Launch of Customs Brokerage Introduced Customs Clearance services, offering clients a complete "one-window" solution for import and export documentation.',
        image: milestone1996
    },
    {
        year: '1998',
        description: 'Pivot to Niche Logistics Made a strategic shift to specialize in high-stakes logistics, specifically Project Cargo and the Transportation of Dangerous Goods, setting the stage for future market leadership.',
        image: milestone1998
    },
    {
        year: '2000',
        description: 'IATA Certification Achieved status as an IATA Approved Agent (International Air Transport Association), validating adherence to global aviation standards.',
        image: milestone2000
    },
    {
        year: '2002',
        description: 'Global Compliance Milestone Recognized as a Top Agent and achieved membership with the Dangerous Goods Advisory Council (DGAC) in Washington, USA. Note: Inter-Fret became the only freight forwarder in Pakistan to hold this membership.',
        image: milestone2002
    },
    {
        year: '2005',
        description: 'Market Dominance Recorded substantial growth in Sea Cargo market share, solidifying position as a top-tier logistics provider for ocean freight.',
        image: milestone2005
    },
    {
        year: '2006-07',
        description: (
            <div className="space-y-2">
                <p>
                    HSE Certification Triad – Formalized commitment to quality and safety by
                    achieving a comprehensive suite of international certifications:
                </p>
                <ul className="pl-4 space-y-1 list-disc">
                    <li>ISO 9001 – Quality Management</li>
                    <li>ISO 14001 – Environmental Management</li>
                    <li>OHSAS 18001 – Occupational Health & Safety</li>
                </ul>
            </div>
        ),
        image: milestone2006
    },
    {
        year: '2008 - Present',
        description: 'Innovation & Global Expansion Continued expansion of the global network to over 250 destinations and securing contracts with the U.S. Armed Forces and UN for Afghanistan logistics.',
        image: milestone2008
    },
    {
        year: '2018-19',
        description: (
            <div className="space-y-2">
                <p>Carrier Recognition Awards:</p>
                <ul className="pl-4 space-y-1 list-disc">
                    <li>Emirates SkyCargo – "Contribution to Success" Award</li>
                    <li>Qatar Airways Cargo – "Outstanding Support Recognition"</li>
                    <li>Lufthansa Cargo – "Best Performance Award" (2019)</li>
                    <li>Turkish Cargo – "Award of Appreciation" (2019)</li>
                </ul>
            </div>
        ),
        image: milestone2018
    }
];

const AboutFoundation: React.FC = () => {
    const [scrollProgress, setScrollProgress] = React.useState(0);
    const milestoneRef = React.useRef<HTMLDivElement>(null);

    // Determine the heading content based on scroll progress
    const getHeadingContent = () => {
        if (scrollProgress < 0.28) {
            return {
                label: "Our History",
                line1: "The",
                line2: "Foundation &",
                line3: "Early Expansion"
            };
        } else if (scrollProgress < 0.72) {
            return {
                label: "Global Reach",
                line1: "Global",
                line2: "Standards &",
                line3: "Authority"
            };
        } else {
            return {
                label: "Excellence",
                line1: "Excellence &",
                line2: "Integrated",
                line3: "Safety"
            };
        }
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

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
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
                                className="w-10 lg:w-16 h-auto object-contain"
                                style={{
                                    filter: 'brightness(1.5)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Dynamic Heading */}
                    <div className="col-span-3 lg:col-span-3 lg:col-start-2 lg:row-start-1 sticky top-0 lg:top-[25vh] z-30 self-start pt-24 pb-8 bg-[#1A1A1A] lg:bg-transparent">
                        <div key={currentHeading.line1} className="space-y-4 transition-all duration-700 animate-in fade-in slide-in-from-bottom-2">
                            <span className="text-gray-400 lg:text-gray-500 font-medium tracking-widest text-xs lg:text-sm uppercase block">
                                {currentHeading.label}
                            </span>
                            <h2 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                {currentHeading.line1}<br />
                                <span className="text-[#5EAFEA]">{currentHeading.line2}</span><br />
                                <span className="text-[#5EAFEA]">{currentHeading.line3}</span>
                            </h2>
                        </div>

                        {/* Mobile Gradient Mask for smooth scrolling transition */}
                        <div className="absolute left-0 right-0 top-full h-16 bg-gradient-to-b from-[#1A1A1A] to-transparent lg:hidden pointer-events-none"></div>
                    </div>

                    {/* Milestones Content (Mobile only) */}
                    <div className="col-span-3 lg:hidden mt-12 mb-24 space-y-20 relative z-10">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="space-y-6 relative">
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
                            <div key={index} className="space-y-6 relative pl-12">
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
