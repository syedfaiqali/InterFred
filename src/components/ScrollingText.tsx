import { FC, useState, useEffect } from 'react';
import ContactModal from './ContactModal';

const ScrollingText: FC = () => {
    const text = "Let's discuss today! Are you Interested?";
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsModalOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <>
            <section
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsModalOpen(true)}
                className="bg-black py-12 md:py-16 overflow-hidden border-y border-white/5 relative cursor-pointer group"
            >
                {/* Custom Blue Cursor - Changed to absolute to stay within section bounds */}
                <div
                    className={`absolute pointer-events-none z-50 flex items-center justify-center transition-opacity duration-300 ease-out ${isHovered && !isModalOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        left: `${mousePos.x}px`,
                        top: `${mousePos.y}px`,
                        transform: 'translate(-50%, -50%)',
                        // Smoothing effect: the box "lags" slightly behind the pointer
                        transition: 'left 0.15s ease-out, top 0.15s ease-out, opacity 0.3s ease-out',
                    }}
                >
                    <div className="bg-[#07119B] w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center rounded-[4px] text-white shadow-2xl">
                        <span className="text-[12px] md:text-sm font-bold mb-2 tracking-wider">Say Hi!</span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`md:w-6 md:h-6 transform transition-all duration-500 ease-out ${isHovered ? 'translate-x-0 translate-y-0 opacity-100 scale-100' : '-translate-x-4 translate-y-4 opacity-0 scale-50'
                                }`}
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </div>

                <div className="flex whitespace-nowrap">
                    {/* First instance of text */}
                    <div className="animate-marquee flex flex-row items-center">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex items-center">
                                <span
                                    className="text-5xl md:text-8xl lg:text-9xl font-medium text-white/20 mx-8 tracking-tighter hover:text-white transition-colors duration-500"
                                >
                                    {text}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Second instance for seamless loop */}
                    <div className="animate-marquee flex flex-row items-center">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex items-center">
                                <span
                                    className="text-5xl md:text-8xl lg:text-9xl font-medium text-white/20 mx-8 tracking-tighter hover:text-white transition-colors duration-500"
                                >
                                    {text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default ScrollingText;
