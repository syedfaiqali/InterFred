import * as React from 'react';

const Tracking: React.FC = () => {
    return (
        <section className="bg-white min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6 text-center w-full">
                <span className="text-gray-400 font-medium tracking-widest text-sm block mb-4 uppercase">Visibility</span>
                <h1 className="text-4xl lg:text-6xl font-medium text-[#1A1A1A] leading-tight mb-8">
                    Real-time <span className="text-[#07119B] font-bold">Tracking</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                    Enter your tracking number below to see the status of your shipment.
                </p>

                <div className="max-w-md mx-auto relative">
                    <input
                        type="text"
                        placeholder="Enter Tracking Number"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-full outline-none focus:border-[#07119B] focus:ring-1 focus:ring-[#07119B] transition-all pr-32"
                    />
                    <button className="absolute right-2 top-2 bottom-2 bg-[#07119B] text-white px-6 rounded-full font-bold hover:bg-[#050D8A] transition-colors">
                        Track
                    </button>
                </div>

                <div className="mt-20 py-10 border-t border-gray-100 text-gray-400 text-sm">
                    <p>Supported carriers: Air, Sea, and Ground Freight.</p>
                </div>
            </div>
        </section>
    );
};

export default Tracking;
