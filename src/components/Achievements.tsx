import * as React from 'react';

const Achievements: React.FC = () => {
    return (
        <section className="bg-white min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <span className="text-gray-400 font-medium tracking-widest text-sm block mb-4 uppercase">Recognition</span>
                <h1 className="text-4xl lg:text-6xl font-medium text-[#1A1A1A] leading-tight mb-8">
                    Our <span className="text-[#07119B] font-bold">Achievements</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We are currently detailing our milestones and recognized excellence in the logistics industry.
                    Check back soon to see our journey of performance and quality.
                </p>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 h-40 flex items-center justify-center">
                            <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
