import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[200] flex justify-center items-start lg:items-center p-4 md:p-8 lg:p-12 overflow-y-auto bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                >
                    {/* Modal Content - Checkerboard Layout */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-[#07119B] shadow-2xl overflow-hidden rounded-sm my-12"
                    >
                        {/* 1. Top Left - White Information */}
                        <div className="bg-white p-10 lg:p-20 flex flex-col justify-start min-h-[450px]">
                            <h2 className="text-5xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.1] mb-12">
                                Get in<br />touch with<br />us!
                            </h2>
                            <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-md font-medium">
                                We are currently working at full speed on the development of the ship. Feel free to reach out to us if you are keen on finding out more about InterFret.
                            </p>
                        </div>

                        {/* 2. Top Right - Blue Form */}
                        <div className="p-10 lg:p-20 relative flex flex-col justify-start bg-[#07119B]">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 text-white/60 hover:text-white transition-all transform hover:scale-110"
                            >
                                <X size={40} strokeWidth={1.5} />
                            </button>

                            <form className="space-y-16 w-full mt-12" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-3">
                                    <label className="text-white/60 text-lg font-medium block">Your name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-white/20 py-2 text-white text-xl lg:text-2xl outline-none focus:border-white transition-all"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-white/60 text-lg font-medium block">Your email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-white/20 py-2 text-white text-xl lg:text-2xl outline-none focus:border-white transition-all"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-white/60 text-lg font-medium block">Message</label>
                                    <textarea
                                        rows={1}
                                        className="w-full bg-transparent border-b border-white/20 py-2 text-white text-xl lg:text-2xl outline-none focus:border-white transition-all resize-none"
                                    />
                                </div>
                            </form>
                        </div>

                        {/* 3. Bottom Left - Blue Email */}
                        <div className="p-10 lg:p-20 flex flex-col justify-end bg-[#07119B] border-t border-white/5 md:border-t-0 min-h-[300px]">
                            <p className="text-white text-xl font-medium mb-6">Or just wanna say hi?</p>
                            <a
                                href="mailto:info@interfret.com"
                                className="text-white text-3xl lg:text-4xl font-bold decoration-white/30 underline underline-offset-[12px] decoration-2 hover:decoration-white transition-all truncate"
                            >
                                info@interfret.com
                            </a>
                        </div>

                        {/* 4. Bottom Right - White Message Button */}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                onClose();
                            }}
                            className="bg-white p-10 lg:p-20 flex flex-col justify-between items-start group hover:bg-gray-50 transition-colors border-t border-gray-100 min-h-[350px]"
                        >
                            <span className="text-[#1A1A1A] text-4xl lg:text-6xl font-black text-left leading-tight">
                                Send<br />message
                            </span>
                            <div className="text-[#07119B] transition-transform group-hover:translate-x-3 group-hover:-translate-y-3">
                                <ArrowUpRight size={80} strokeWidth={2.5} />
                            </div>
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
