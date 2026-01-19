import React, { type FC, useState, useEffect } from 'react';

interface ToastProps {
    message: string;
    type?: 'success' | 'error';
    onClose: () => void;
}

export const Toast: FC<ToastProps> = ({ message, type = 'success', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-24 right-6 z-50 animate-slide-in-right">
            <div
                className={`${type === 'success'
                        ? 'bg-gradient-to-r from-[#0000A3] to-[#5EAFEA]'
                        : 'bg-gradient-to-r from-[#DC2626] to-[#EF4444]'
                    } text-white px-6 py-4 rounded-lg shadow-2xl backdrop-blur-sm flex items-center gap-3 min-w-[320px] max-w-md transition-all duration-300 border border-white/10`}
            >
                {type === 'success' ? (
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                )}
                <p className="font-medium text-sm flex-1">{message}</p>
                <button
                    onClick={onClose}
                    className="ml-auto text-white/80 hover:text-white transition-colors"
                    aria-label="Close notification"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};
