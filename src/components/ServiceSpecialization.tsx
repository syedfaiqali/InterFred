import * as React from 'react';
import planeSide from '../assets/specializationplane.svg';
import airFreightImg from '../assets/specialization1.svg';

interface SpecializationItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

const items: SpecializationItem[] = [
    {
        id: 1,
        title: "Air Freight Specialists",
        description: "Priority handling for time-sensitive global cargo.",
        image: airFreightImg
    },
    // Placeholder items for carousel functionality demonstration
    {
        id: 2,
        title: "Sea Freight Logistics",
        description: "Cost-effective ocean transport for large volume shipments.",
        image: airFreightImg
    },
    {
        id: 3,
        title: "Overland Transport",
        description: "Reliable ground distribution networks across nations.",
        image: airFreightImg
    }
];

const ServiceSpecialization: React.FC = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <section className="bg-[#1A1A1A] py-24 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Header Section with Floating Plane */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-4xl lg:text-5xl font-medium text-white leading-tight">
                            Areas of<br />
                            <span className="text-[#5EAFEA] font-bold">Specialization</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                            We pride ourselves on serving niche industries where precision and safety are paramount. Our core competencies include:
                        </p>
                    </div>

                    {/* Floating Plane Image - Styled to look like it's entering from right */}
                    <div className="relative h-64 lg:h-96 w-full flex items-center justify-end">
                        <img
                            src={planeSide}
                            alt="Logistics Aircraft"
                            className="absolute right-[-10%] lg:right-[-15%] w-[120%] max-w-none object-contain drop-shadow-2xl pointer-events-none"
                        />
                    </div>
                </div>

                {/* Content Carousel/List Section */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* Pagination Indicators */}
                    <div className="hidden lg:flex flex-col gap-4 mt-12">
                        {items.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#5EAFEA] scale-125' : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Active Content Card */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="relative rounded-[2rem] overflow-hidden aspect-square lg:aspect-[4/3] w-full max-w-md shadow-2xl border border-white/5">
                            <img
                                src={items[activeIndex].image}
                                alt={items[activeIndex].title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="space-y-6">
                            <h3 className="text-4xl lg:text-5xl font-medium text-white leading-tight">
                                {items[activeIndex].title.split(" ").slice(0, 2).join(" ")}<br />
                                {items[activeIndex].title.split(" ").slice(2).join(" ")}
                            </h3>
                            <p className="text-gray-400 text-xl leading-relaxed max-w-sm">
                                {items[activeIndex].description}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServiceSpecialization;
