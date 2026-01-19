import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { websiteContent } from '../data/websiteContent';
import CoreFreight from '../assets/CFLMain.svg';
import CFL1 from '../assets/CFL1.svg';
import CFL2 from '../assets/CFL2.svg';
import CFL3 from '../assets/CFL3.svg';
import CFL4 from '../assets/CFL$.svg';
import SPCDG1 from '../assets/SPCDG1.svg';
import SPCDG2 from '../assets/SPCDG2.svg';
import SPCDG3 from '../assets/SPCDG3.svg';
import SL1 from '../assets/SL1.svg';
import SL2 from '../assets/SL2.svg';
import SL3 from '../assets/SL3.svg';
import AS1 from '../assets/AS1.svg';
import AS2 from '../assets/AS2.svg';
import AS3 from '../assets/AS3.svg';
import AS4 from '../assets/AS4.svg';
import OM1 from '../assets/OM1.svg';
import OM2 from '../assets/OM2.svg';
import OM3 from '../assets/OM3.svg';
import TES1 from '../assets/TES1.svg';
import TES2 from '../assets/TES2.svg';
import TES3 from '../assets/TES3.svg';
import VAS1 from '../assets/VAS1.svg';
import VAS2 from '../assets/VAS2.svg';
import VAS3 from '../assets/VAS3.svg';
import VAS4 from '../assets/VAS4.svg';
import VAS5 from '../assets/VAS5.svg';

interface ServiceSection {
    title: string;
    description: string;
    points?: string[];
    image: string;
}

interface ServiceDetailData {
    id: number;
    title: string;
    subtitle: string;
    heroImage: string;
    sections: ServiceSection[];
}

// Image mapping for each service
const serviceImages: Record<string, { heroImage: string; sectionImages: string[] }> = {
    "CoreFreightLogistics": {
        heroImage: CoreFreight,
        sectionImages: [CFL1, CFL2, CFL3, CFL4]
    },
    "SpecializedCargoDG": {
        heroImage: SPCDG3,
        sectionImages: [SPCDG1, SPCDG2]
    },
    "SpecializedLogistics": {
        heroImage: SL3,
        sectionImages: [SL1, SL2]
    },
    "AviationServices": {
        heroImage: AS4,
        sectionImages: [AS3, AS2, AS1]
    },
    "OutsourcingMaintenance": {
        heroImage: OM1,
        sectionImages: [OM2, OM3]
    },
    "TradingEquipmentSupply": {
        heroImage: TES1,
        sectionImages: [TES2, TES3]
    },
    "ValueAddedServices": {
        heroImage: VAS5,
        sectionImages: [VAS1, VAS2, VAS3, VAS4]
    }
};

// Merge content from websiteContent with images
const buildServiceDetails = (): Record<string, ServiceDetailData> => {
    const details: Record<string, ServiceDetailData> = {};
    const contentDetails = websiteContent.serviceDetails;

    Object.keys(contentDetails).forEach(key => {
        const content = contentDetails[key as keyof typeof contentDetails];
        const images = serviceImages[key];

        if (content && images) {
            details[key] = {
                id: content.id,
                title: content.title,
                subtitle: content.subtitle,
                heroImage: images.heroImage,
                sections: content.sections.map((section, index) => ({
                    ...section,
                    image: images.sectionImages[index] || images.heroImage
                }))
            };
        }
    });

    // Add default fallback
    details["default"] = details["CoreFreightLogistics"];

    return details;
};

const serviceDetails = buildServiceDetails();

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const data = (id && serviceDetails[id]) ? serviceDetails[id] : serviceDetails["default"];
    const [visibleSections, setVisibleSections] = React.useState<Set<number>>(new Set());

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleSections(prev => new Set(prev).add(index));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        const sections = document.querySelectorAll('.service-section');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [data]);

    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-12">
                    {/* Hero Section */}
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden mb-12 lg:mb-16 shadow-2xl group">
                        <img
                            src={data.heroImage}
                            alt={data.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                </div>
                {/* Left Spacer */}
                <div className="hidden lg:block col-span-1"></div>

                {/* Main Content Area */}
                <div className="col-span-12 lg:col-span-10">

                    {/* Main Heading */}
                    <div className="mb-12 lg:mb-16 transition-all duration-700 opacity-100 translate-y-0">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#07119B] mb-4">
                            {data.title}
                        </h1>
                        <p className="text-lg lg:text-2xl text-gray-700 font-medium">
                            {data.subtitle}
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-24 lg:space-y-32">
                        {data.sections.map((section, index) => (
                            <div
                                key={index}
                                data-index={index}
                                className={`service-section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center transition-all duration-1000 ${visibleSections.has(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-20'
                                    }`}
                            >

                                {/* Text Content */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">{section.title}</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        {section.description}
                                    </p>

                                    {section.points && section.points.length > 0 && (
                                        <ul className="space-y-4 mt-6">
                                            {section.points.map((point, pIndex) => (
                                                <li key={pIndex} className="flex items-start gap-3">
                                                    <div className="mt-2 w-3 h-3 rounded-full bg-[#07119B] flex-shrink-0"></div>
                                                    <span className="text-gray-700 font-medium leading-relaxed">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Image */}
                                <div className="relative">
                                    <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] w-full">
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                    {/* Decorative Element */}
                                    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gray-100 -z-10 rounded-full hidden lg:block"></div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Back Link */}
                    <div className="mt-16">
                        <Link
                            to="/service"
                            state={{ fromDetail: true }}
                            className="text-[#07119B] font-semibold hover:underline flex items-center gap-2 transition-all duration-300 hover:gap-3"
                        >
                            &larr; Back to Services
                        </Link>
                    </div>

                </div>

                {/* Right Spacer */}
                <div className="hidden lg:block col-span-1"></div>

            </div>
        </div>
    );
};

export default ServiceDetail;
