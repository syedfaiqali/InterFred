import { FC, useState } from 'react';

const ScrollingText: FC = () => {
    const text = "Let's discuss today! Are you Interested?";
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-black py-10 md:py-12 overflow-hidden border-y border-white/5 relative cursor-none group"
        >
            {/* Custom Blue Cursor */}
            <div
                className={`absolute pointer-events-none z-50 flex items-center justify-center transition-opacity duration-300 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    transform: 'translate(-50%, -50%)',
                    transition: isHovered ? 'opacity 0.3s ease-out' : 'opacity 0.3s ease-out',
                }}
            >
                <div className="bg-[#07119B] w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center rounded-[4px] text-white shadow-2xl">
                    <span className="text-[10px] md:text-xs font-bold mb-2 uppercase tracking-wider">Say Hi!</span>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="md:w-6 md:h-6"
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
                                className="text-4xl md:text-6xl lg:text-7xl font-medium text-white/20 mx-8 tracking-tighter hover:text-white transition-colors duration-500 cursor-none uppercase"
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
                                className="text-4xl md:text-6xl lg:text-7xl font-medium text-white/20 mx-8 tracking-tighter hover:text-white transition-colors duration-500 cursor-none uppercase"
                            >
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScrollingText;
