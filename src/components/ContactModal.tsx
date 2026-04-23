import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import Loader from './Loader';
import { Toast } from './Toast';
import emailjs from '@emailjs/browser';
import { useWebsiteContent } from '../hooks/useWebsiteContent';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const content = useWebsiteContent().ui.contactModal;
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [toast, setToast] = React.useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const validateEmail = (value: string) =>
        String(value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

    const handleSend = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (!name.trim()) {
            setToast({ message: content.validation.nameRequired, type: 'error' });
            return;
        }

        if (!email.trim()) {
            setToast({ message: content.validation.emailRequired, type: 'error' });
            return;
        }

        if (!validateEmail(email)) {
            setToast({ message: content.validation.emailInvalid, type: 'error' });
            return;
        }

        if (!message.trim()) {
            setToast({ message: content.validation.messageRequired, type: 'error' });
            return;
        }

        try {
            setIsLoading(true);
            await emailjs.send(
                'service_20ol5yp',
                'template_oyjyeqn',
                {
                    name,
                    email,
                    message,
                },
                'tQPEYvigecRlgO6iN'
            );

            setToast({
                message: content.validation.success,
                type: 'success',
            });

            setTimeout(() => {
                setName('');
                setEmail('');
                setMessage('');
                onClose();
            }, 2000);
        } catch {
            setToast({
                message: content.validation.failure,
                type: 'error',
            });
        } finally {
            setIsLoading(false);
        }
    };

    React.useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {isLoading && <Loader isTransparent />}
                    <div
                        className="fixed inset-0 z-[200] flex justify-center items-center p-4 md:p-8 lg:p-12 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    >
                        {toast && (
                            <Toast
                                message={toast.message}
                                type={toast.type}
                                onClose={() => setToast(null)}
                            />
                        )}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 10 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative grid grid-cols-1 md:grid-cols-2 bg-[#0000A3] shadow-2xl rounded-sm my-12 w-full max-w-4xl max-h-[90vh] md:max-h-[530px] overflow-y-auto md:overflow-visible"
                        >
                            <div className="grid grid-cols-[20%_80%] bg-[#0000A3] relative">
                                <div className="absolute bottom-full right-0 w-[80%] h-[100vh] bg-white z-30 hidden md:block"></div>
                                <div className="absolute top-0 right-0 w-[80%] h-2 bg-white z-[40]"></div>

                                <div className="bg-[#0000A3] flex justify-center pt-6">
                                    <button
                                        onClick={onClose}
                                        className="text-white/60 hover:text-white transition-all transform hover:scale-110 h-fit md:hidden"
                                        aria-label={content.closeAria}
                                    >
                                        <X size={28} strokeWidth={1.5} />
                                    </button>
                                </div>

                                <div className="bg-white p-10 pt-16 flex flex-col justify-start relative z-20">
                                    <h2 className="text-3xl md:text-4xl font-medium text-[#1A1A1A] leading-tight mb-8">
                                        {content.titleLines[0]}<br />{content.titleLines[1]}<br />{content.titleLines[2]}
                                    </h2>
                                    <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-xs font-medium">
                                        {content.description}
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 md:p-10 lg:p-16 relative flex flex-col justify-center bg-[#0000A3] md:max-h-[500px] overflow-y-auto">
                                <button
                                    onClick={onClose}
                                    className="hidden md:block absolute top-6 right-6 text-white/60 hover:text-white transition-all transform hover:scale-110"
                                    aria-label={content.closeAria}
                                >
                                    <X size={32} strokeWidth={1.5} />
                                </button>

                                <form className="space-y-6 md:space-y-8 w-full" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-1">
                                        <label className="text-white/70 text-[10px] md:text-xs font-bold block uppercase tracking-wider">{content.nameLabel}</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-transparent border-b border-white/30 py-1 text-white text-base md:text-lg outline-none focus:border-white transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-white/70 text-[10px] md:text-xs font-bold block uppercase tracking-wider">{content.emailLabel}</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-transparent border-b border-white/30 py-1 text-white text-base md:text-lg outline-none focus:border-white transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-white/70 text-[10px] md:text-xs font-bold block uppercase tracking-wider">{content.messageLabel}</label>
                                        <textarea
                                            rows={1}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="w-full bg-transparent border-b border-white/30 py-1 text-white text-base md:text-lg outline-none focus:border-white transition-all resize-none"
                                        />
                                    </div>
                                </form>
                            </div>

                            <div className="grid grid-cols-[20%_80%] bg-[#0000A3] min-h-[120px] md:min-h-[150px]">
                                <div className="bg-[#0000A3]"></div>
                                <div className="p-8 md:p-10 pl-0 flex flex-col justify-center overflow-y-auto">
                                    <p className="text-white/80 text-[10px] md:text-xs font-medium tracking-wider">{content.emailPrompt}</p>
                                    <a
                                        href="mailto:info@inter-fret.com"
                                        className="text-white text-lg md:text-xl lg:text-2xl underline font-medium transition-all truncate"
                                    >
                                        info@inter-fret.com
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#0000A3] min-h-[120px] md:min-h-[150px]">
                                <button
                                    onClick={handleSend}
                                    className="bg-white px-8 md:px-10 py-6 md:py-4 flex flex-col justify-between items-start group hover:bg-gray-50 transition-colors w-full"
                                >
                                    <span className="text-[#1A1A1A] group-hover:text-[#0000A3] text-xl md:text-2xl lg:text-3xl font-medium text-left leading-tight transition-colors">
                                        {content.sendCta[0]}<br className="hidden md:block" /> {content.sendCta[1]}
                                    </span>
                                    <div className="text-[#0000A3] transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 mt-4">
                                        <ArrowUpRight size={40} strokeWidth={3} />
                                    </div>
                                </button>
                                <div className="hidden md:block bg-[#0000A3]"></div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
