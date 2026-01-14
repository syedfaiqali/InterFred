import React from 'react';
import stickyLogo from '../assets/Vector.svg';

const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white">
            <div className="relative flex items-center justify-center">
                {/* Outer spinning ring */}
                <div className="w-24 h-24 border-4 border-gray-100 border-t-[#07119B] rounded-full animate-spin"></div>

                {/* Inner static logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={stickyLogo}
                        alt="Loading..."
                        className="w-12 h-12 object-contain animate-pulse"
                    />
                </div>
            </div>

            {/* Loading text with animated dots */}
            <div className="mt-8 flex flex-col items-center">
                <span className="text-[#07119B] font-bold tracking-[0.2em] uppercase text-sm animate-pulse">
                    Inter-Fret
                </span>
                <div className="mt-2 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-[#07119B] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#07119B] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#07119B] rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
