import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // specific check to avoid showing if already accepted could be added here
        // for now, just show it after a delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 sm:bottom-4 sm:right-4 sm:left-auto z-50 w-full sm:max-w-md bg-white shadow-2xl rounded-sm p-6 transform transition-all duration-500 ease-out translate-y-0 opacity-100 animate-slide-up">
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Cookies consent</h2>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                By clicking "Accept All Cookies", you agree to the storing of
                cookies on your device to enhance site navigation, analyze site
                usage, and assist in our marketing efforts.
            </p>

            <div className="flex gap-4">
                <button
                    onClick={() => setIsVisible(false)}
                    className="flex-1 bg-[#07119B] text-white font-medium py-3 px-4 rounded-sm hover:bg-[#050D8A] transition-colors"
                >
                    Accept
                </button>
                <button
                    onClick={() => setIsVisible(false)}
                    className="flex-1 bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-sm hover:bg-gray-300 transition-colors"
                >
                    Deny
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
