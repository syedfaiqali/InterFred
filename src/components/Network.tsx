import * as React from 'react';
import networkHero from '../assets/Network1.svg';
import networkMap from '../assets/Network2.svg';
import NetworkLocations from './NetworkLocations';

const Network: React.FC = () => {
    return (
        <>
            <section className="bg-white py-12 lg:py-24 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                    {/* Hero Section */}
                    <div className="relative mb-16 pt-24 md:pt-32 lg:pt-0">
                        <div className="relative w-full aspect-[21/9] lg:aspect-[3/1] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl z-10">
                            <img
                                src={networkHero}
                                alt="Interfret Global Network"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        {/* Content Section */}
                        <div className='lg:col-span-1 hidden lg:block'></div>
                        <div className="lg:col-span-4 space-y-8">
                            <div className="space-y-6">
                                <span className="text-gray-400 font-medium tracking-widest text-sm block mb-4">Network</span>
                                <h2 className="text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-tight">
                                    Where <span className="text-[#07119B] font-bold">Inter-Fret</span><br />Meets<br />Connection.
                                </h2>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="lg:col-span-7 relative">
                            <div className="rounded-2xl overflow-hidden p-4">
                                <img
                                    src={networkMap}
                                    alt="Global Coverage Map"
                                    className="w-full h-auto object-contain scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NetworkLocations />
        </>
    );
};

export default Network;
