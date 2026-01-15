import * as React from 'react';
import { useState } from 'react';

interface ValueCardProps {
    title: React.ReactNode;
    text: string;
    bgColor: string;
    textColor: string;
    titleColor?: string;
    className?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, text, bgColor, textColor, titleColor, className = "" }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${bgColor} h-[400px] md:h-full group overflow-hidden relative md:mt-12 transition-all hover:shadow-xl duration-500 cursor-pointer ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="absolute top-0 left-0 w-full h-full p-10 md:p-12 flex flex-col transition-transform duration-700 ease-in-out"
                style={{
                    transform: isHovered ? 'translateY(0)' : 'translateY(calc(100% - 160px))'
                }}
            >
                <h3 className={`text-2xl md:text-3xl font-bold ${titleColor || textColor} mb-12 leading-tight shrink-0`}>
                    {title}
                </h3>
                <p
                    className={`${textColor === 'text-white' ? 'text-blue-100/90' : 'text-gray-600'} leading-relaxed text-base md:text-lg font-medium transition-opacity duration-700 delay-100`}
                    style={{ opacity: isHovered ? 1 : 0 }}
                >
                    {text}
                </p>
            </div>
        </div>
    );
};

const ValuePropSub: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-0 items-stretch">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-12 md:pr-12">
                        <div className="pt-4">
                            <p className="text-[#8E8E8E] text-lg font-medium mb-4 tracking-widest">Why us</p>
                            <h2 className="text-5xl font-medium text-[#1A1A1A] mb-8 leading-[1.1]">
                                Value<br />Proposition
                            </h2>
                            <button className="bg-[#07119B] hover:bg-[#050D8A] text-white font-bold py-4 px-8 rounded-sm transition-all text-sm uppercase tracking-wider shadow-lg">
                                Let's discuss today!
                            </button>
                        </div>

                        <ValueCard
                            bgColor="bg-[#E9EEF2]"
                            textColor="text-gray-600"
                            titleColor="text-[#1A1A1A]"
                            title={<>Proven Track<br />Record</>}
                            text="Since 1987, we have won contracts for the U.S. Armed Forces and the United Nations, and serve clients like Schlumberger, BASF, and Abbott Laboratories."
                        />
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col justify-center">
                        <div className="md:h-80">
                            <ValueCard
                                className="md:!mt-0 shadow-xl z-10"
                                bgColor="bg-[#07119B]"
                                textColor="text-white"
                                title={<>Industrial<br />Engineering</>}
                                text="Beyond transport, we offer specialized maintenance services for industrial machinery, including lifecycle assessments, pipeline pigging, and repairs."
                            />
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-12 md:pl-12">
                        <ValueCard
                            bgColor="bg-[#E9EEF2]"
                            textColor="text-gray-600"
                            titleColor="text-[#1A1A1A]"
                            title={<>Unmatched<br />Specialization</>}
                            text="We don't just move boxes. We move turbines, compressors, live animals, and sensitive bio-medical logistics under controlled conditions."
                        />

                        <ValueCard
                            bgColor="bg-[#E9EEF2]"
                            textColor="text-gray-600"
                            titleColor="text-[#1A1A1A]"
                            title={<>Strategic<br />Partnerships</>}
                            text="Exclusive relationships with Air Cargo Group, Hartrodt Group (Germany), and Target Logistics Services (USA)."
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ValuePropSub;
