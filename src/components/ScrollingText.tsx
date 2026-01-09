import { FC, useState, useEffect } from 'react';

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

            {/* Get In Touch Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative w-full max-w-5xl bg-[#07119B] rounded-sm overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-300">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 text-white/60 hover:text-white z-10 transition-colors"
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="flex flex-col md:flex-row flex-1">
                            {/* Left Side - White Panel */}
                            <div className="w-full md:w-[45%] bg-white p-10 md:p-16 flex flex-col justify-center">
                                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
                                    Get in touch with us!
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                                    We are currently working at full speed on the development of the ship. Feel free to reach out to us if you are keen on finding out more about InterFret.
                                </p>
                            </div>

                            {/* Right Side - Blue Form Panel */}
                            <div className="w-full md:w-[55%] p-10 md:p-16 flex flex-col justify-center">
                                <form className="space-y-8">
                                    <div className="group">
                                        <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2 transition-colors group-focus-within:text-white">Your name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-transparent border-b border-white/20 py-3 text-white text-xl outline-none focus:border-white transition-colors"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2 transition-colors group-focus-within:text-white">Your email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-transparent border-b border-white/20 py-3 text-white text-xl outline-none focus:border-white transition-colors"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2 transition-colors group-focus-within:text-white">Message</label>
                                        <textarea
                                            rows={2}
                                            className="w-full bg-transparent border-b border-white/20 py-3 text-white text-xl outline-none focus:border-white transition-colors resize-none"
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="flex flex-col md:flex-row border-t border-white/10">
                            {/* Email Section (Blue) */}
                            <div className="flex-1 p-10 md:px-16 md:py-12">
                                <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4">Or just wanna say hi?</p>
                                <a href="mailto:info@interfret.com" className="text-white text-2xl md:text-3xl font-bold border-b-2 border-white/30 hover:border-white transition-colors pb-1 inline-block">
                                    info@interfret.com
                                </a>
                            </div>

                            {/* Send Button Section (White) */}
                            <button className="bg-white group p-10 md:px-16 md:py-12 flex items-center justify-between gap-12 hover:bg-gray-50 transition-colors min-w-[300px]">
                                <span className="text-gray-900 text-3xl font-bold">Send message</span>
                                <div className="w-12 h-12 flex items-center justify-center text-[#07119B] transform group-hover:translate-x-2 transition-transform">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollingText;
