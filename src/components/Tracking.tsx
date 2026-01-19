import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { websiteContent } from '../data/websiteContent';

const Tracking: React.FC = () => {
    const content = websiteContent.tracking;
    const [trackingId, setTrackingId] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'found' | 'error'>('idle');
    const resultRef = useRef<HTMLDivElement>(null);
    const VALID_ID = content.mockData.validId;

    const handleTrack = () => {
        if (!trackingId) return;

        setStatus('loading');
        setTimeout(() => {
            if (trackingId.toUpperCase() === VALID_ID) {
                setStatus('found');
            } else {
                setStatus('error');
            }
        }, 1200);
    };

    useEffect(() => {
        if (status === 'found' && resultRef.current) {
            const ctx = gsap.context(() => {
                // Initial hide
                gsap.set('.animate-item', { y: 30, opacity: 0 });

                // Staggered reveal
                gsap.to('.animate-item', {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    force3D: true,
                    delay: 0.2
                });

                // Timeline stagger
                gsap.from('.timeline-item', {
                    x: -20,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out',
                    delay: 0.8
                });
            }, resultRef);
            return () => ctx.revert();
        }
    }, [status]);

    return (
        <section className="bg-white min-h-screen flex flex-col items-center pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full">
                {/* Header Section */}
                <div className={`text-center transition-all duration-700 ease-in-out ${status === 'found' ? 'opacity-0 h-0 -translate-y-10 pointer-events-none mb-0' : 'opacity-100 mb-12'}`}>
                    <span className="text-gray-400 font-medium tracking-widest text-sm block mb-4 uppercase">{content.header.label}</span>
                    <h1 className="text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-tight mb-8">
                        {content.header.title.split(' ').map((word: string, i: number) => (
                            <React.Fragment key={i}>
                                {i === 1 ? <span className="text-[#07119B] font-bold">{word}</span> : word}{' '}
                            </React.Fragment>
                        ))}
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                        {content.header.description} <br />
                        <span className="text-xs text-gray-400">(Try: <span className="font-bold select-all underline text-[#07119B]">{content.header.validIdNote}</span>)</span>
                    </p>

                    <div className="max-w-xl mx-auto relative group">
                        <input
                            type="text"
                            value={trackingId}
                            onChange={(e) => setTrackingId(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                            placeholder={content.placeholder}
                            className={`w-full px-8 py-5 bg-white border-2 rounded-2xl outline-none transition-all pr-40 text-lg shadow-sm ${status === 'error' ? 'border-red-500' : 'border-gray-100 focus:border-[#07119B]'
                                }`}
                        />
                        <button
                            onClick={handleTrack}
                            disabled={status === 'loading'}
                            className="absolute right-2 top-2 bottom-2 bg-[#07119B] text-white px-10 rounded-xl font-bold hover:bg-[#050D8A] transition-all flex items-center gap-2"
                        >
                            {status === 'loading' ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : content.buttonText}
                        </button>
                    </div>

                    {status === 'error' && (
                        <p className="text-red-500 mt-4 font-medium animate-shake">{content.errorMessage}</p>
                    )}
                </div>

                {/* Found / Result Section (The Container Screen) */}
                <div
                    ref={resultRef}
                    className={`transition-opacity duration-500 ${status === 'found' ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'}`}
                >
                    {status === 'found' && (
                        <div className="max-w-6xl mx-auto">
                            {/* Toolbar */}
                            <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100 animate-item">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => { setStatus('idle'); setTrackingId(''); }}
                                        className="text-gray-400 hover:text-black flex items-center gap-2 group"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform">
                                            <path d="M19 12H5M12 19l-7-7 7-7" />
                                        </svg>
                                        Back to Search
                                    </button>
                                    <div className="h-4 w-[1px] bg-gray-200"></div>
                                    <span className="text-sm text-gray-500 uppercase font-bold">ID: {VALID_ID}</span>
                                </div>
                                <div className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    {content.mockData.status}
                                </div>
                            </div>

                            {/* Main Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Details Card */}
                                <div className="lg:col-span-2 space-y-8">
                                    {/* Ship Header */}
                                    <div className="bg-[#07119B] rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl animate-item">
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold mb-2">{content.mockData.cargoType}</h3>
                                            <p className="text-white/60 text-sm mb-8 uppercase tracking-widest font-bold">Master Bill of Lading: {Math.random().toString(36).substring(7).toUpperCase()}</p>

                                            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                                                <div className="text-center md:text-left flex-1">
                                                    <p className="text-white/50 text-xs mb-1 font-bold">ORIGIN</p>
                                                    <h4 className="text-2xl font-bold">{content.mockData.origin.name}</h4>
                                                    <p className="text-sm text-white/70 font-bold uppercase tracking-tighter">{content.mockData.origin.code}</p>
                                                </div>
                                                <div className="flex-1 flex flex-col items-center">
                                                    <div className="w-full h-[2px] bg-white/20 relative">
                                                        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-[#07119B]"></div>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#75C3FF] animate-bounce-slow">
                                                            <circle cx="12" cy="12" r="10" />
                                                            <path d="M12 6v6l4 2" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-4 text-[10px] text-white/40 tracking-tighter font-bold uppercase">{content.mockData.estimatedRemaining}</p>
                                                </div>
                                                <div className="text-center md:text-right flex-1">
                                                    <p className="text-white/50 text-xs mb-1 font-bold">DESTINATION</p>
                                                    <h4 className="text-2xl font-bold">{content.mockData.destination.name}</h4>
                                                    <p className="text-sm text-white/70 font-bold uppercase tracking-tighter">{content.mockData.destination.code}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Decorative Icon */}
                                        <svg className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 pointer-events-none rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 21c0 .552-.448 1-1 1s-1-.448-1-1v-4c0-.552.448-1 1-1s1 .448 1 1v4zm-2-12h-2v2h2v-2zm-2 4h-2v2h2v-2zm-2 4h-2v2h2v-2zm-2-8h-2v2h2v-2zm-2 4h-2v2h2v-2zm-2 4h-2v2h2v-2zm2-12h-2v2h2v-2zm-2 4h-2v2h2v-2zm-2 4h-2v2h2v-2zm12-4h-2v2h2v-2zm-2 4h-2v2h2v-2zm-2 4h-2v2h2v-2zm2-12h-2v2h2v-2zm-2 4h-2v2h2v-2zm-2 4h-2v2h2v-2zM4 14v8h16v-8H4zM2 12h20l-2-10H4L2 12z" />
                                        </svg>
                                    </div>

                                    {/* Detailed Status List */}
                                    <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm animate-item">
                                        <h4 className="text-xl font-bold mb-8">Shipment Timeline</h4>
                                        <div className="space-y-10">
                                            {content.mockData.timeline.map((item: { task: string; date: string; time: string; desc: string }, idx: number) => (
                                                <div key={idx} className="flex gap-6 relative group/item timeline-item">
                                                    {idx !== content.mockData.timeline.length - 1 && <div className="absolute left-[11px] top-6 w-[2px] h-[calc(100%+20px)] bg-gray-50 group-hover/item:bg-blue-100 transition-colors"></div>}
                                                    <div className="relative z-10 w-6 h-6 rounded-full bg-white border-4 border-[#07119B] flex-shrink-0"></div>
                                                    <div>
                                                        <div className="flex gap-4 items-baseline">
                                                            <h5 className="font-bold text-gray-900">{item.task}</h5>
                                                            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{item.date} • {item.time}</span>
                                                        </div>
                                                        <p className="text-sm text-gray-500 mt-1 max-w-lg font-medium">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar Stats */}
                                <div className="space-y-8">
                                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 animate-item">
                                        <h4 className="text-lg font-bold mb-6">Cargo Info</h4>
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase mb-1 font-bold">Container Number</p>
                                                <p className="font-bold text-gray-800">{content.mockData.cargoInfo.containerNumber}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase mb-1 font-bold">Type & Size</p>
                                                <p className="font-bold text-gray-800">{content.mockData.cargoInfo.typeSize}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase mb-1 font-bold">Weight / Volume</p>
                                                <p className="font-bold text-gray-800">{content.mockData.cargoInfo.weightVolume}</p>
                                            </div>
                                            <div className="pt-6 border-t border-gray-200">
                                                <h5 className="text-sm font-bold mb-4">Certified Safe</h5>
                                                <div className="flex gap-4">
                                                    <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
                                                    <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer section (only if idle) */}
                {status === 'idle' && (
                    <div className="mt-20 py-10 border-t border-gray-100 text-gray-400 text-sm text-center">
                        <p>{content.footerNotes}</p>
                    </div>
                )}
            </div>

            {/* Global Shake Animation */}
            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                .animate-shake { animation: shake 0.3s ease-in-out; }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(-50%) translateX(-50%) translateY(0); }
                    50% { transform: translateY(-50%) translateX(-50%) translateY(-5px); }
                }
                .animate-bounce-slow { animation: bounce-slow 2s infinite ease-in-out; }
            `}</style>
        </section>
    );
};

export default Tracking;
