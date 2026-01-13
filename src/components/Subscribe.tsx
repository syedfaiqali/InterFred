import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Subscribe: FC = () => {
  const location = useLocation();
  const isLinkActive = (path: string) => location.pathname === path;

  return (
    <footer className="pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Column - Subscription Box */}
          <div className="lg:w-2/5 lg:ml-12 bg-[#07119B] p-8 md:p-12 lg:p-14 text-white rounded-[1rem] lg:-mt-32 shadow-2xl relative z-20">
            <div className="mb-10">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Subscribe to <br />Newsletters
            </h2>

            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Want to stay up to date? <br />
              Sign up for InterFret's biannual update.
            </p>

            <form className="space-y-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#050D8A] border border-blue-400/30 rounded-sm py-4 px-5 text-white placeholder-blue-300 outline-none focus:border-white transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="w-full bg-[#111111] hover:bg-black text-white font-bold py-4 px-5 rounded-sm transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm text-blue-300 font-medium">
              Don't worry about spam. We hate it too!
            </p>
          </div>

          {/* Right Column - Navigation & Contact */}
          <div className="lg:w-3/5 flex flex-col">
            {/* Top Navigation */}
            <nav className="flex flex-wrap justify-start gap-x-8 gap-y-4 mb-4">
              {['About us.', 'Services.', 'Achievements.', 'Network.', 'Tracking.'].map((item) => {
                const href = item === 'About us.' ? '/about' :
                  item === 'Services.' ? '/service' :
                    item === 'Achievements.' ? '/achievements' :
                      item === 'Network.' ? '/network' :
                        item === 'Tracking.' ? '/tracking' : '#';

                const isActive = isLinkActive(href);
                const className = `text-lg md:text-xl font-medium transition-all duration-300 hover:text-[#07119B] hover:underline ${isActive ? 'text-[#07119B] underline underline-offset-8 decoration-2' : 'text-gray-800'}`;

                if (href.startsWith('/')) {
                  return (
                    <Link key={item} to={href} className={className}>
                      {item}
                    </Link>
                  );
                }

                return (
                  <a key={item} href={href} className={className}>
                    {item}
                  </a>
                );
              })}
            </nav>

            <div className="w-full h-[1px] bg-gray-300 mb-5" />

            {/* Info Grid and Copyright integrated in right column */}
            <div className="flex-1 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-10">
                {/* Left Side: Offices */}
                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Head Office</h3>
                    <address className="not-italic text-gray-600 leading-relaxed max-w-[320px]">
                      Suite 814, 815, Park Avenue, PECHS Block 6,<br />
                      Shahra-e-Faisal, Karachi,<br />
                      Pakistan.
                    </address>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Branch Office</h3>
                    <div className="space-y-3 text-base text-gray-600 font-medium">
                      <p><span className="text-gray-900 font-bold">Lahore:</span> Cavalry Ground (+92 42 3662-0837-9)</p>
                      <p><span className="text-gray-900 font-bold">Rawalpindi:</span> New Gulzar-E-Quaid (+92 51 3570-7924-5)</p>
                      <p><span className="text-gray-900 font-bold">Sialkot:</span> Ugoki Road (+92 52 3355-4468)</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Contact */}
                <div className="flex flex-col gap-8 md:pt-20">
                  <div>
                    <span className="block text-sm font-medium text-gray-500 mb-2">Email</span>
                    <a href="mailto:info@interfret.com" className="text-xl font-medium text-gray-900 hover:text-[#07119B] transition-colors">
                      info@interfret.com
                    </a>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-500 mb-2">Phone</span>
                    <a href="tel:+9233154989455" className="text-xl font-medium text-gray-900 hover:text-[#07119B] transition-colors">
                      +9233154989455
                    </a>
                  </div>
                </div>
              </div>

              {/* Copyright Row - Now inside the right column block */}
              <div className="mt-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                <p className="text-sm md:text-base text-gray-500 font-medium whitespace-nowrap">
                  © 2025, Inter-Fret Consolidators (Pvt) Ltd. All Rights Reserved.
                </p>
                <div className="flex gap-6">
                  <a href="#privacy" className="text-sm md:text-base text-gray-500 hover:text-gray-900 font-medium transition-colors whitespace-nowrap">Privacy policy</a>
                  <a href="#legal" className="text-sm md:text-base text-gray-500 hover:text-gray-900 font-medium transition-colors whitespace-nowrap">Legal notice</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Subscribe;
