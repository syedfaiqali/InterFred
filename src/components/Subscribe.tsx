import React, { type FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Toast } from './Toast';

import { websiteContent } from '../data/websiteContent';

const Subscribe: FC = () => {
  const content = websiteContent.subscribe;
  const location = useLocation();

  const [email, setEmail] = React.useState('');
  const [toast, setToast] = React.useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Step 1: Check if email is provided
    if (!email.trim()) {
      setToast({ message: 'Please enter your email address', type: 'error' });
      return;
    }

    // Step 2: Validate email pattern
    if (!validateEmail(email)) {
      setToast({ message: 'Please enter a valid email address', type: 'error' });
      return;
    }

    // Step 3: Success - Show thank you message
    setToast({ message: 'Thanks for subscribing! 🎉', type: 'success' });
    setEmail(''); // Clear the input
  };

  return (
    <footer className="pt-12 pb-10">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Column - Subscription Box */}
          <div className="lg:w-2/5 lg:ml-12 bg-[#0000A3] p-8 md:p-12 lg:p-14 text-white rounded-[1rem] lg:-mt-32 shadow-2xl relative z-20">
            <div className="mb-10">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {content.title.split('to').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i === 0 && <>to<br /></>}
                </React.Fragment>
              ))}
            </h2>

            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              {content.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/20 rounded-sm py-4 px-5 text-white placeholder-blue-300 outline-none focus:border-white focus:bg-white/10 transition-all font-medium"
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
                        item === 'Tracking.' ? '/tracking' : '/';

                const className = `text-lg md:text-xl font-medium transition-colors ${location.pathname === href ? 'text-[#0000A3]' : 'text-gray-600'} hover:text-[#0000A3]`;

                return (
                  <Link key={item} to={href} className={className}>
                    {item}
                  </Link>
                );
              })}
            </nav>

            <div className="w-full h-[1px] bg-gray-300 mb-5" />

            {/* Info Grid and Copyright integrated in right column */}
            <div className="flex-1 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-10">
                {/* Left Side: Offices */}
                <div className="space-y-12">
                  {content.offices.map((office, idx) => (
                    <div key={idx}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.title}</h3>
                      {office.address && (
                        <address className="not-italic text-gray-600 leading-relaxed max-w-[320px]">
                          {office.address}
                        </address>
                      )}
                      {office.branches && (
                        <div className="space-y-3 text-base text-gray-600 font-medium">
                          {office.branches.map((branch, bIdx) => (
                            <p key={bIdx}><span className="text-gray-900 font-bold">{branch.name}:</span> {branch.info}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Side: Contact */}
                <div className="flex flex-col gap-8 md:pt-20">
                  <div>
                    <span className="block text-sm font-medium text-gray-500 mb-2">Email</span>
                    <a href={`mailto:${content.contact.email}`} className="text-xl font-medium text-gray-900 hover:text-[#0000A3] transition-colors">
                      {content.contact.email}
                    </a>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-500 mb-2">Phone</span>
                    <a href={`tel:${content.contact.phone}`} className="text-xl font-medium text-gray-900 hover:text-[#0000A3] transition-colors">
                      {content.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Copyright Row */}
              <div className="mt-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                <p className="text-sm md:text-base text-gray-500 font-medium md:whitespace-nowrap">
                  © {new Date().getFullYear()}, Inter-Fret Consolidators (Pvt) Ltd. All Rights Reserved.
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
