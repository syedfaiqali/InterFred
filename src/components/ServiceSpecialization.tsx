import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import planeSide from '../assets/specializationplane.svg';
import airFreightImg from '../assets/specialization1.svg';
import movementOfRadioactiveMaterial from '../assets/specialization2.svg';
import oilAndEnergySectorLogistics from '../assets/specialization3.svg';
import oilfieldHeavyCargoTransportation from '../assets/specialization4.svg';
import transportationOfProjectEquipment from '../assets/specialization5.svg';
import bulkBreakBulkCargo from '../assets/specialization6.svg';
import customBrokerageWarehousing from '../assets/specialization7.svg';
import movementOfExplosives from '../assets/specialization8.svg';
import seamelessClearance from '../assets/specialization9.svg';
import whiteTruck from '../assets/service container.svg';

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
    {
        id: 2,
        title: "Movement of Explosives",
        description: "Secure, compliant transport for seismic and industrial applications.",
        image: movementOfExplosives
    },
    {
        id: 3,
        title: "Movement of Radioactive Material",
        description: "Licensed handling for medical and industrial isotopes.",
        image: movementOfRadioactiveMaterial
    },
    {
        id: 4,
        title: "Dangerous Goods (DGR) Handling",
        description: "Unmatched expertise in hazardous materials, ensuring full compliance with IATA/IMO regulations.",
        image: oilAndEnergySectorLogistics
    },
    {
        id: 5,
        title: "Oil & Energy Sector Logistics",
        description: "Tailored support for oil companies, including the movement of rigs and oversized drilling equipment.",
        image: oilfieldHeavyCargoTransportation
    },
    {
        id: 6,
        title: "Oilfield Heavy Cargo Transportation",
        description: "Transporting massive infrastructure via specialized air and road solutions.",
        image: transportationOfProjectEquipment
    },
    {
        id: 7,
        title: "Transportation of Project Equipment",
        description: "End-to-end logistics for large-scale industrial projects.",
        image: bulkBreakBulkCargo
    },
    {
        id: 8,
        title: "Bulk & Break Bulk Cargo",
        description: "Managing non-containerized, heavy-lift shipments.",
        image: customBrokerageWarehousing
    },
    {
        id: 9,
        title: "Custom Brokerage & Warehousing",
        description: "Seamless clearance and secure storage solutions near Karachi port.",
        image: seamelessClearance
    },
];

const AnimatedRow: React.FC<{ item: SpecializationItem; index: number }> = ({ item, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const rowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (rowRef.current) observer.observe(rowRef.current);
        return () => {
            if (rowRef.current) observer.unobserve(rowRef.current);
        };
    }, []);

    return (
        <div ref={rowRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hidden Column for consistent left alignment */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Image - Swaps position based on index */}
            <div
                className={`relative rounded-[2rem] overflow-hidden aspect-square lg:aspect-[4/3] w-full shadow-2xl border border-white/5 lg:col-span-5 transition-all duration-1000 ease-out ${index % 2 === 1 ? 'lg:order-3' : 'lg:order-2'
                    } ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
            >
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
            </div>

            {/* Text Content - Swaps position based on index */}
            <div
                className={`space-y-6 lg:col-span-5 transition-all duration-1000 ease-out delay-200 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-3'
                    } ${index % 2 === 1 ? 'lg:pr-12' : 'lg:pl-12'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
                    {item.title}
                </h3>
                <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-lg">
                    {item.description}
                </p>
            </div>
        </div>
    );
};

const ServiceSpecialization: React.FC = () => {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [truckVisible, setTruckVisible] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const truckRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const headerObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setHeaderVisible(true);
            },
            { threshold: 0.1 }
        );
        const truckObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setTruckVisible(true);
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) headerObserver.observe(headerRef.current);
        if (truckRef.current) truckObserver.observe(truckRef.current);

        return () => {
            if (headerRef.current) headerObserver.unobserve(headerRef.current);
            if (truckRef.current) truckObserver.unobserve(truckRef.current);
        };
    }, []);

    return (
        <section className="bg-[#1A1A1A] pt-24 pb-0 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Header Section with Floating Plane */}
                <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 items-center mb-20">
                    <div className="hidden lg:block lg:col-span-1"></div>
                    <div className="col-span-12 lg:col-span-11">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className={`space-y-6 transition-all duration-1000 delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                <h2 className="text-4xl lg:text-5xl font-medium text-white leading-tight">
                                    Areas of<br />
                                    <span className="text-[#5EAFEA] font-bold">Specialization</span>
                                </h2>
                                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                                    We pride ourselves on serving niche industries where precision and safety are paramount. Our core competencies include:
                                </p>
                            </div>

                            {/* Floating Plane Image */}
                            <div className={`relative h-64 lg:h-96 w-full flex items-center justify-end transition-all duration-1000 delay-300 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                                <img
                                    src={planeSide}
                                    alt="Logistics Aircraft"
                                    className="absolute right-[-10%] lg:right-[-15%] w-[120%] max-w-none object-contain drop-shadow-2xl pointer-events-none -translate-y-8 lg:-translate-y-16"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content List Section */}
                <div className="space-y-24">
                    {items.map((item, index) => (
                        <AnimatedRow key={item.id} item={item} index={index} />
                    ))}
                </div>

            </div>

            {/* Slanted Footer Section with Truck */}
            <div ref={truckRef} className="relative mt-32 w-full">
                {/* Slanted White Background */}
                <div
                    className={`absolute bottom-0 left-0 w-full bg-white z-0 transition-transform duration-1000 ease-out ${truckVisible ? 'translate-y-0' : 'translate-y-full'}`}
                    style={{
                        clipPath: 'polygon(0 35%, 100% 15%, 100% 100%, 0% 100%)',
                        height: '120%',
                    }}
                ></div>

                {/* Truck Image Container */}
                <div className="relative max-w-[1400px] mx-auto z-10 flex justify-center lg:block h-[500px]">
                    <img
                        src={whiteTruck}
                        alt="Logistics Truck"
                        className={`relative w-[90%] lg:w-[60%] max-w-4xl mx-auto lg:mx-0 lg:ml-[20%] drop-shadow-2xl transition-all duration-[1500ms] ease-out delay-500 ${truckVisible
                                ? 'opacity-100 translate-x-0 translate-y-[-10%]'
                                : 'opacity-0 -translate-x-full translate-y-[10%]'
                            }`}
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceSpecialization;
