import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import orangeTruck from '../assets/serviceslider1.svg';
import specializedLogistics from '../assets/serviceslider2.svg';
import aviationServices from '../assets/serviceslider3.svg';
import outsourcingAndMaintenance from '../assets/serviceslider4.svg';
import tradingAndEquipmentSupply from '../assets/serviceslider5.svg';
import valueAddedServices from '../assets/serviceslider6.svg';
import warehouse from '../assets/serviceslider7.svg';

interface ServiceSlide {
    id: number;
    title: string;
    image: string;
    description: string;
    slug: string;
}

const services: ServiceSlide[] = [
    {
        id: 1,
        title: "Core Freight & Logistics",
        image: orangeTruck,
        description: "Comprehensive freight solutions tailored to your global needs.",
        slug: "CoreFreightLogistics"
    },
    {
        id: 2,
        title: "Specialized Cargo & DG",
        image: specializedLogistics,
        description: "State-of-the-art storage and distribution networks.",
        slug: "SpecializedCargoDG"
    },
    {
        id: 3,
        title: "Specialized Logistics",
        image: aviationServices,
        description: "State-of-the-art storage and distribution networks.",
        slug: "SpecializedLogistics"
    },
    {
        id: 4,
        title: "Aviation Services",
        image: outsourcingAndMaintenance,
        description: "State-of-the-art storage and distribution networks.",
        slug: "AviationServices"
    },
    {
        id: 5,
        title: "Outsourcing & Maintenance",
        image: tradingAndEquipmentSupply,
        description: "State-of-the-art storage and distribution networks.",
        slug: "OutsourcingMaintenance"
    },
    {
        id: 6,
        title: "Trading & Equipment Supply",
        image: valueAddedServices,
        description: "State-of-the-art storage and distribution networks.",
        slug: "TradingEquipmentSupply"
    },
    {
        id: 7,
        title: "Value-Added Services",
        image: warehouse,
        description: "State-of-the-art storage and distribution networks.",
        slug: "ValueAddedServices"
    }
];

const ServiceSlider: React.FC = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = React.useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
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

    // Initialize from localStorage if available
    const [activeIndex, setActiveIndex] = React.useState(() => {
        const saved = localStorage.getItem('lastServiceSliderIndex');
        return saved ? parseInt(saved, 10) : 0;
    });

    // Save index to localStorage whenever it changes
    React.useEffect(() => {
        localStorage.setItem('lastServiceSliderIndex', activeIndex.toString());
    }, [activeIndex]);

    React.useEffect(() => {
        // Check if we came back from a detail page via state
        if (location.state && (location.state as any).fromDetail) {
            const element = document.getElementById('services-slider');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Clean up state to prevent scrolling on every refresh
                window.history.replaceState({}, document.title);
            }
        }
    }, [location.state]);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    return (
        <section id="services-slider" ref={sectionRef} className="bg-white py-16 px-4">
            <div className="max-w-[1200px] mx-auto text-center mb-12">
                <span className={`text-gray-500 text-sm font-medium uppercase tracking-wider block mb-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    Explore
                </span>
                <h2 className={`text-3xl md:text-4xl font-bold text-[#1A1A1A] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    Inter-Fret Services
                </h2>
            </div>

            <div className={`max-w-[1000px] mx-auto relative flex items-center justify-center gap-2 md:gap-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                }`}>

                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
                </button>

                {/* Card Container */}
                <div className="relative w-full max-w-[800px] aspect-square md:aspect-[16/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl group">
                    {/* Image */}
                    <img
                        src={services[activeIndex].image}
                        alt={services[activeIndex].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Learn More Badge */}
                    <Link
                        to={`/service/${services[activeIndex].slug}`}
                        className="absolute top-4 left-4 md:top-8 md:left-8 bg-black/80 backdrop-blur-sm text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium z-10 hover:bg-black transition-colors"
                    >
                        Learn More
                    </Link>

                    {/* Blue Bottom Bar with Title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#07119B] py-4 px-6 md:py-6 md:px-8 transition-transform duration-300 translate-y-0">
                        <h3 className="text-center text-xl md:text-3xl font-bold text-white">
                            {services[activeIndex].title}
                        </h3>
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
                </button>

            </div>
        </section>
    );
};

export default ServiceSlider;
