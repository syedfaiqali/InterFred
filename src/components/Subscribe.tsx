import type { FC } from 'react';

const Subscribe: FC = () => {
  return (
    <footer className="bg-[#E9EDF0] pt-12 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Column - Subscription Box */}
          <div className="lg:w-2/5 bg-[#07119B] p-8 md:p-12 lg:p-14 text-white rounded-[1rem] lg:-mt-32 shadow-2xl relative z-20">
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
          <div className="lg:w-3/5">
            {/* Top Navigation */}
            <nav className="flex flex-wrap justify-start md:justify-start gap-x-6 md:gap-x-8 gap-y-4 mb-8">
              {['About us.', 'Services.', 'Achievements.', 'Network.', 'Tracking.'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace('.', '')}`}
                  className="text-base md:text-lg font-bold text-gray-800 hover:text-[#07119B] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <hr className="border-gray-300 mb-8 md:mb-10" />

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Head Office */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Head Office</h3>
                <address className="not-italic text-gray-600 text-sm leading-relaxed max-w-[280px]">
                  Suite 814, 815, Park Avenue, PECHS Block 6,<br />
                  Shahra-e-Faisal, Karachi,<br />
                  Pakistan.
                </address>
              </div>

              {/* Email & Phone */}
              <div className="flex flex-col gap-10">
                <div>
                  <span className="block text-xs font-medium text-gray-400 mb-2">Email</span>
                  <a href="mailto:info@interfret.com" className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-1 hover:border-[#07119B] transition-colors">
                    info@interfret.com
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-medium text-gray-400 mb-2">Phone</span>
                  <a href="tel:+9233154989455" className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-1 hover:border-[#07119B] transition-colors">
                    +9233154989455
                  </a>
                </div>
              </div>

              {/* Branch Office */}
              <div className="md:col-start-1">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Branch Office</h3>
                <div className="space-y-6 text-sm text-gray-500 font-medium">
                  <div>
                    <span className="block text-gray-900 font-bold mb-1 underline decoration-gray-200 md:no-underline">Lahore:</span>
                    Cavalry Ground (+92 42 3662-0837-9)
                  </div>
                  <div>
                    <span className="block text-gray-900 font-bold mb-1">Rawalpindi:</span>
                    New Gulzar-E-Quaid (+92 51 3570-7924-5)
                  </div>
                  <div>
                    <span className="block text-gray-900 font-bold mb-1">Sialkot:</span>
                    Ugoki Road (+92 52 3355-4468)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 md:mt-20 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-6">
          <p className="text-xs md:text-sm text-gray-500 font-medium">
            © 2025, Inter-Fret Consolidators (Pvt) Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-4 md:gap-8">
            <a href="#privacy" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 font-medium">Privacy policy</a>
            <a href="#legal" className="text-xs md:text-sm text-gray-500 hover:text-gray-900 font-medium">Legal notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Subscribe;
