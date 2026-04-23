import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import orangeTruck from '../assets/serviceslider1.webp';
import specializedLogistics from '../assets/serviceslider2.webp';
import aviationServices from '../assets/serviceslider3.webp';
import outsourcingAndMaintenance from '../assets/serviceslider4.webp';
import tradingAndEquipmentSupply from '../assets/serviceslider5.webp';
import valueAddedServices from '../assets/serviceslider6.webp';
import warehouse from '../assets/serviceslider7.webp';
import { useWebsiteContent } from '../hooks/useWebsiteContent';
import { useLanguage } from '../context/LanguageContext';

interface ServiceSlide {
    id: number;
    title: string;
    image: string;
    description: string;
    slug: string;
}

const serviceImages = [
    orangeTruck,
    specializedLogistics,
    aviationServices,
    outsourcingAndMaintenance,
    tradingAndEquipmentSupply,
    valueAddedServices,
    warehouse,
];

const serviceSlugs = [
    'CoreFreightLogistics',
    'SpecializedCargoDG',
    'SpecializedLogistics',
    'AviationServices',
    'OutsourcingMaintenance',
    'TradingEquipmentSupply',
    'ValueAddedServices',
];

const ServiceSlider: React.FC = () => {
    const location = useLocation();
    const content = useWebsiteContent().ui.serviceSlider;
    const { isArabic } = useLanguage();
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

    const services: ServiceSlide[] = content.slides.map((slide, index) => ({
        id: index + 1,
        title: slide.title,
        description: slide.description,
        image: serviceImages[index],
        slug: serviceSlugs[index],
    }));

    const [activeIndex, setActiveIndex] = React.useState(() => {
        const saved = localStorage.getItem('lastServiceSliderIndex');
        return saved ? parseInt(saved, 10) : 0;
    });

    React.useEffect(() => {
        localStorage.setItem('lastServiceSliderIndex', activeIndex.toString());
    }, [activeIndex]);

    React.useEffect(() => {
        if (location.state && (location.state as any).fromDetail) {
            const element = document.getElementById('services-slider');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
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
                <span className={`text-gray-500 text-sm font-medium uppercase tracking-wider block mb-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {content.eyebrow}
                </span>
                <h2 className={`text-3xl md:text-4xl font-bold text-[#1A1A1A] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${isArabic ? 'rtl-text' : ''}`}>
                    {content.title}
                </h2>
            </div>

            <div className={`max-w-[1000px] mx-auto relative flex items-center justify-center gap-2 md:gap-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'} ${isArabic ? 'rtl-row' : ''}`}>
                <button
                    onClick={prevSlide}
                    className="p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
                    aria-label={content.prevAria}
                >
                    {isArabic ? <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-700" /> : <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />}
                </button>

                <div className="relative w-full max-w-[800px] aspect-square md:aspect-[16/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl group">
                    <img
                        src={services[activeIndex].image}
                        alt={services[activeIndex].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <Link
                        to={`/service/${services[activeIndex].slug}`}
                        className={`absolute top-4 md:top-8 bg-black/80 backdrop-blur-sm text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium z-10 hover:bg-black transition-colors ${isArabic ? 'right-4 md:right-8' : 'left-4 md:left-8'}`}
                    >
                        {content.learnMore}
                    </Link>

                    <div className="absolute bottom-0 left-0 right-0 bg-[#07119B] py-4 px-6 md:py-6 md:px-8 transition-transform duration-300 translate-y-0">
                        <h3 className={`text-center text-xl md:text-3xl font-bold text-white ${isArabic ? 'rtl-text' : ''}`}>
                            {services[activeIndex].title}
                        </h3>
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
                    aria-label={content.nextAria}
                >
                    {isArabic ? <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-700" /> : <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />}
                </button>
            </div>
        </section>
    );
};

export default ServiceSlider;
