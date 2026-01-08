import { FC } from 'react';

const ScrollingText: FC = () => {
    const text = "Let's discuss today! Are you Interested?";

    return (
        <section className="bg-black py-16 md:py-24 overflow-hidden">
            <div className="flex whitespace-nowrap">
                {/* First instance of text */}
                <div className="animate-marquee-ltr flex flex-row">
                    {[...Array(6)].map((_, i) => (
                        <span
                            key={i}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1A1A1A] mx-8 tracking-tighter hover:text-white transition-colors duration-500 cursor-default uppercase"
                        >
                            {text}
                        </span>
                    ))}
                </div>
                {/* Second instance for seamless loop */}
                <div className="animate-marquee-ltr flex flex-row">
                    {[...Array(6)].map((_, i) => (
                        <span
                            key={i}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1A1A1A] mx-8 tracking-tighter hover:text-white transition-colors duration-500 cursor-default uppercase"
                        >
                            {text}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScrollingText;
