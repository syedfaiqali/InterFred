import React, { useState, useEffect, useRef, forwardRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactModal from "./ContactModal";
import { useWebsiteContent } from "../hooks/useWebsiteContent";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

interface ValueCardProps {
    title: React.ReactNode;
    text: string;
    bg: string;
    titleColor: string;
    textColor: string;
    className?: string;
}

const ValueCard = forwardRef<HTMLDivElement, ValueCardProps>(({
    title,
    text,
    bg,
    titleColor,
    textColor,
    className = "",
}, ref) => {
    const [hovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div
            ref={ref}
            onMouseEnter={() => !isMobile && setHovered(true)}
            onMouseLeave={() => !isMobile && setHovered(false)}
            onFocus={() => !isMobile && setHovered(true)}
            className={`
        ${bg} relative overflow-hidden
        h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh]
        w-full transition-all duration-500 ${className}
      `}
        >
            <div
                className="absolute inset-0 px-6 sm:px-10 py-8 sm:py-12 flex flex-col justify-end transition-transform duration-500 ease-out"
                style={{
                    transform: (hovered || isMobile) ? "translateY(0)" : "translateY(80px)",
                }}
            >
                <h3
                    className={` ${titleColor} text-xl sm:text-[28px] leading-tight font-semibold mb-3 sm:mb-4 `}
                >
                    {title}
                </h3>

                <p
                    className={`text-sm sm:text-base leading-relaxed transition-all duration-500 ${(hovered || isMobile) ? "opacity-100 translate-y-0 h-[50%] relative" : "opacity-0 translate-y-4 h-[20%]"
                        } ${textColor}`}
                >
                    {text}
                </p>
            </div>
        </div>
    );
});

ValueCard.displayName = "ValueCard";

const ValueProposition: React.FC = () => {
    const content = useWebsiteContent().ui.valuePropSub;
    const { isArabic } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // OBSERVER LOGIC - This is very reliable for detecting when the section enters view
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // We keep the observer if we want to support re-entering, 
                        // but for a one-time entrance animation, disconnect is fine.
                        observer.disconnect();
                    }
                },
                {
                    threshold: 0.1,
                    // Add rootMargin to trigger a bit earlier
                    rootMargin: "0px 0px -100px 0px"
                }
            );

            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }

            // GSAP Initial state for cards
            const cards = cardRefs.current.filter(Boolean);
            if (cards.length > 0) {
                gsap.set(cards, { y: 40, opacity: 0 });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, [location.pathname]);

    // Handle card animations when section becomes visible
    useEffect(() => {
        if (isVisible) {
            const cards = cardRefs.current.filter(Boolean);
            if (cards.length > 0) {
                gsap.to(cards, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    overwrite: true,
                    // Ensure the animation actually finishes by using a slight delay if needed
                    delay: 0.1
                });
            }
        }
    }, [isVisible]);

    useEffect(() => {
        // Multiple refreshes to catch lazy-loaded content or image loads above
        const refresh = () => ScrollTrigger.refresh();

        window.addEventListener('load', refresh);
        window.addEventListener('resize', refresh);

        const timeouts = [
            setTimeout(refresh, 500),
            setTimeout(refresh, 2000),
            setTimeout(refresh, 5000)
        ];

        return () => {
            window.removeEventListener('load', refresh);
            window.removeEventListener('resize', refresh);
            timeouts.forEach(t => clearTimeout(t));
        };
    }, []);

    return (
        <section
            className={`bg-white px-4 sm:px-10 ${isHomePage ? 'pt-0 pb-6 sm:pb-10' : 'py-16 sm:py-24'}`}
            ref={sectionRef}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-10">
                <div className={`grid grid-cols-1 px-4 sm:px-10 md:grid-cols-3 gap-y-8 sm:gap-y-14 md:gap-y-0 ${isArabic ? 'rtl-text' : ''}`}>

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-8 sm:gap-14 justify-end">
                        <div className={`relative top-0 left-0 md:top-[-10%] md:left-[-10%] ${isArabic ? 'md:left-0 md:right-[-10%]' : ''}`}>
                            <p className={`text-xs sm:text-sm tracking-widest text-gray-400 mb-2 sm:mb-3 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                {content.eyebrow}
                            </p>

                            <h2 className="text-3xl sm:text-[48px] leading-tight sm:leading-[48px] font-medium text-gray-900 mb-5 sm:mb-8">
                                <span className={`inline-block transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                    {content.titleLines[0]}
                                </span>
                                <br />
                                <span className={`inline-block transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                    {content.titleLines[1]}
                                </span>
                            </h2>

                            <div className={`inline-block transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <button className="bg-[#07119B] text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-wider font-semibold hover:bg-[#050D8A] transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl active:scale-95" onClick={() => setIsContactModalOpen(true)}>
                                    {content.cta}
                                </button>
                            </div>
                        </div>

                        <ValueCard
                            ref={el => (cardRefs.current[0] = el!)}
                            bg="bg-[#E9EEF2]"
                            titleColor="text-gray-900"
                            textColor="text-gray-600"
                            title={<>{content.cards[0].titleLines[0]}<br />{content.cards[0].titleLines[1]}</>}
                            text={content.cards[0].text}
                        />
                    </div>

                    {/* CENTER COLUMN */}
                    <div className="relative flex justify-center md:justify-end items-center">
                        <div className="w-full md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] md:-mt-24">
                            <ValueCard
                                ref={el => (cardRefs.current[1] = el!)}
                                className="shadow-2xl mt-0 md:mt-24"
                                bg="bg-[#07119B]"
                                titleColor="text-white"
                                textColor="text-blue-100"
                                title={<>{content.cards[1].titleLines[0]}<br />{content.cards[1].titleLines[1]}</>}
                                text={content.cards[1].text}
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-8 sm:gap-0">
                        <ValueCard
                            ref={el => (cardRefs.current[2] = el!)}
                            bg="bg-[#E9EEF2]"
                            titleColor="text-gray-900"
                            textColor="text-gray-600"
                            title={<>{content.cards[2].titleLines[0]}<br />{content.cards[2].titleLines[1]}</>}
                            text={content.cards[2].text}
                        />
                        <ValueCard
                            bg=""
                            titleColor="text-gray-900"
                            textColor="text-gray-600"
                            title={<></>}
                            text=""
                            className="hidden md:block"
                        />

                        <ValueCard
                            ref={el => (cardRefs.current[3] = el!)}
                            bg="bg-[#E9EEF2]"
                            titleColor="text-gray-900"
                            textColor="text-gray-600"
                            className="mt-12 md:mt-0"
                            title={<>{content.cards[3].titleLines[0]}<br />{content.cards[3].titleLines[1]}</>}
                            text={content.cards[3].text}
                        />
                    </div>

                </div>
            </div>
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </section>
    );
};

export default ValueProposition;
