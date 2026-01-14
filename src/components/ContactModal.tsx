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
                    className="fixed inset-0 z-[200] flex justify-center items-center p-4 md:p-8 lg:p-12 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                >
                    {/* Modal Content - Checkerboard 2x2 Layout */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative grid grid-cols-1 min-h-[350px] max-h-[530px] md:grid-cols-2 bg-[#0000A3] shadow-2xl rounded-sm my-12"
                    >
                        {/* 1. Top Left - White Information with Top Extension */}
                        <div className="grid grid-cols-[20%_80%] bg-[#0000A3] relative">
                            {/* Extension that goes to the top of the screen */}
                            <div className="absolute bottom-full right-0 w-[80%] h-[100vh] bg-white z-30 hidden md:block"></div>

                            {/* Top Accent Bar */}
                            <div className="absolute top-0 right-0 w-[80%] h-2 bg-white z-[40]"></div>

                            <div className="bg-[#0000A3]"></div>
                            <div className="bg-white p-10 pt-16 flex flex-col justify-start relative z-20">
                                <h2 className="text-4xl font-medium text-[#1A1A1A] leading-tight mb-8">
                                    Get in<br />touch with<br />us!
                                </h2>
                                <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-xs font-medium">
                                    We are currently working at full speed on the development of the ship. Feel free to reach out to us if you are keen on finding out more about InterFret.
                                </p>
                            </div>
                        </div>

                        {/* 2. Top Right - Blue Form Area */}
                        {/* Note: This side follows the height of the left side. You can also add 'max-h' and 'overflow-y-auto' if needed */}
                        <div className="p-10 lg:p-16 relative flex flex-col justify-center bg-[#0000A3] max-h-[500px] overflow-y-auto">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-white/60 hover:text-white transition-all transform hover:scale-110"
                            >
                                <X size={32} strokeWidth={1.5} />
                            </button>

                            <form className="space-y-8 w-full" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-1">
                                    <label className="text-white/70 text-xs font-bold block">Your name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-white/30 py-1 text-white text-lg outline-none focus:border-white transition-all"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-white/70 text-xs font-bold block">Your email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-white/30 py-1 text-white text-lg outline-none focus:border-white transition-all"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-white/70 text-xs font-bold block">Message</label>
                                    <textarea
                                        rows={1}
                                        className="w-full bg-transparent border-b border-white/30 py-1 text-white text-lg outline-none focus:border-white transition-all resize-none"
                                    />
                                </div>
                            </form>
                        </div>

                        {/* 3. Bottom Left - Blue Email Area aligned with top */}
                        <div className="grid grid-cols-[20%_80%] bg-[#0000A3] min-h-[150px]">
                            <div className="bg-[#0000A3]"></div>
                            <div className="p-10 pl-0 flex flex-col justify-center overflow-y-auto">
                                <p className="text-white/80 text-xs font-medium tracking-wider">Or just wanna say hi?</p>
                                <a
                                    href="mailto:info@interfret.com"
                                    className="text-white text-xl lg:text-2xl underline font-medium transition-all truncate"
                                >
                                    info@interfret.com
                                </a>
                            </div>
                        </div>

                        {/* 4. Bottom Right - White Send Message Button + Blue Space */}
                        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#0000A3] min-h-[150px]">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    onClose();
                                }}
                                className="bg-white px-10 py-4 flex flex-col justify-between items-start group hover:bg-gray-50 transition-colors w-full"
                            >
                                <span className="text-[#1A1A1A] text-2xl lg:text-3xl font-medium text-left leading-tight">
                                    Send<br />message
                                </span>
                                <div className="text-[#0000A3] transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 mt-4">
                                    <ArrowUpRight size={48} strokeWidth={3} />
                                </div>
                            </button>
                            <div className="hidden md:block bg-[#0000A3]"></div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
