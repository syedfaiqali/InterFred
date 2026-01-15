import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import stickyLogo from '../assets/Vector.svg'
import ContactModal from './ContactModal'

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const lastScrollY = useRef(0)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [currentScrollY, setCurrentScrollY] = useState(0)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      setCurrentScrollY(scrollPos)

      if (scrollPos > lastScrollY.current) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      lastScrollY.current = scrollPos

      if (scrollPos > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      setIsScrolling(true)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [])

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Original Header - Hidden on scroll */}
      <div className={`w-full shadow-lg transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="ml-4 mr-4 mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 cursor-pointer group">
            <img src={stickyLogo} alt="InterFret"
              className={`h-14 w-auto object-contain group-hover:scale-105 transition-all duration-300`}
            />
            <div className={`flex flex-col transition-all duration-300 origin-left ${!scrolled ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-8 opacity-0 scale-95'}`}>
              <h1 className={`text-2xl font-black tracking-wide leading-none ${isHomePage ? 'text-white' : 'text-[#1A1A1A]'}`}>
                INTER-FRET
              </h1>
              <p className={`text-[0.65rem] font-bold tracking-[0.15em] leading-tight ${isHomePage ? 'text-gray-200' : 'text-gray-600'}`}>
                CONSOLIDATORS (PVT) LTD
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <div className={`flex items-center gap-8 transition-all duration-300 origin-right ${!scrolled ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'} ${isHomePage ? 'text-white' : 'text-gray-800'}`}>
              <Link to="/about" className={`transition-all duration-300 hover:text-[#5EAFEA] ${isActive('/about') ? 'text-[#5EAFEA] font-semibold' : ''}`}>About us</Link>
              <Link to="/service" className={`transition-all duration-300 hover:text-[#5EAFEA] ${isActive('/service') ? 'text-[#5EAFEA] font-semibold' : ''}`}>Services</Link>
              <Link to="/achievements" className={`transition-all duration-300 hover:text-[#5EAFEA] ${isActive('/achievements') ? 'text-[#5EAFEA] font-semibold' : ''}`}>Achievements</Link>
              <Link to="/network" className={`transition-all duration-300 hover:text-[#5EAFEA] ${isActive('/network') ? 'text-[#5EAFEA] font-semibold' : ''}`}>Network</Link>
              <Link to="/tracking" className={`transition-all duration-300 hover:text-[#5EAFEA] ${isActive('/tracking') ? 'text-[#5EAFEA] font-semibold' : ''}`}>Tracking</Link>
            </div>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="ml-4 px-4 py-2 bg-[#07119B] text-white rounded-md hover:bg-[#0a1bc0] transition-colors"
            >
              Get in touch
            </button>
          </nav>

          <div className="md:hidden">
            <button className={`${isHomePage ? 'text-white' : 'text-gray-800'} text-2xl`} onClick={() => setMobileMenuOpen(true)}>☰</button>
          </div>
        </div>
      </div>

      {/* Sticky Burger Menu & Get in Touch - Appears on scroll */}
      <div className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="ml-4 mr-4 mx-auto px-6 pt-6 flex justify-between items-center">
          {/* Sticky Logo - Scroll to Top */}
          <div
            className={`pointer-events-auto cursor-pointer transition-all duration-500 flex items-center gap-4 ${scrolled ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={stickyLogo}
              alt="Back to Top"
              className="h-10 w-10 object-contain animate-spin"
              style={{
                animationDirection: scrollDirection === 'up' ? 'reverse' : 'normal',
                animationDuration: '3s',
                animationPlayState: isScrolling ? 'running' : 'paused'
              }}
            />
          </div>

          <div
            className={`flex items-center gap-3 pointer-events-auto transition-transform duration-300 ${scrolled ? 'translate-y-0' : '-translate-y-12'}`}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            {/* Floating Navigation Items (Appears to the left) - Desktop Only */}
            <div
              className={`hidden md:flex bg-[#f6f6f6] shadow-md rounded-md px-6 py-2.5 items-center gap-6 transition-all duration-300 origin-right ${isMenuOpen ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95 pointer-events-none absolute right-full mr-4'}`}
            >
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`transition-all duration-300 hover:text-[#5EAFEA] text-sm whitespace-nowrap ${isActive('/about') ? 'text-[#5EAFEA] font-semibold' : 'text-gray-800'}`}>About us</Link>
              <Link to="/service" onClick={() => setIsMenuOpen(false)} className={`transition-all duration-300 hover:text-[#5EAFEA] text-sm whitespace-nowrap ${isActive('/service') ? 'text-[#5EAFEA] font-semibold' : 'text-gray-800'}`}>Services</Link>
              <Link to="/achievements" onClick={() => setIsMenuOpen(false)} className={`transition-all duration-300 hover:text-[#5EAFEA] text-sm whitespace-nowrap ${isActive('/achievements') ? 'text-[#5EAFEA] font-semibold' : 'text-gray-800'}`}>Achievements</Link>
              <Link to="/network" onClick={() => setIsMenuOpen(false)} className={`transition-all duration-300 hover:text-[#5EAFEA] text-sm whitespace-nowrap ${isActive('/network') ? 'text-[#5EAFEA] font-semibold' : 'text-gray-800'}`}>Network</Link>
              <Link to="/tracking" onClick={() => setIsMenuOpen(false)} className={`transition-all duration-300 hover:text-[#5EAFEA] text-sm whitespace-nowrap ${isActive('/tracking') ? 'text-[#5EAFEA] font-semibold' : 'text-gray-800'}`}>Tracking</Link>
            </div>

            {/* Custom Burger Button - Desktop Only */}
            <button
              className={`hidden md:flex bg-[#f6f6f6] p-3 rounded-md shadow-md hover:bg-gray-200 transition-colors group flex-col items-end justify-center w-[46px] h-[40px] gap-[5px] ${isMenuOpen ? 'hidden md:hidden' : 'flex'}`}
              onMouseEnter={() => setIsMenuOpen(true)}
            >
              <span className="w-6 h-[3px] bg-black rounded-full block"></span>
              <span className="w-6 h-[3px] bg-black rounded-full block"></span>
              <span className="w-3 h-[3px] bg-black rounded-full block"></span>
            </button>

            {/* Mobile Sticky Burger Button - Mobile Only */}
            <button
              className="md:hidden bg-[#f6f6f6] p-3 rounded-md shadow-md flex flex-col items-end justify-center w-[46px] h-[40px] gap-[5px]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="w-6 h-[3px] bg-black rounded-full block"></span>
              <span className="w-6 h-[3px] bg-black rounded-full block"></span>
              <span className="w-3 h-[3px] bg-black rounded-full block"></span>
            </button>

            {/* Get in Touch Button - Desktop Only */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="hidden md:block px-4 py-2 bg-[#07119B] text-white rounded-md text-sm shadow-md hover:bg-[#0a1bc0] transition-colors whitespace-nowrap"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] bg-[#1a1a1a] transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
        <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-6 text-white text-4xl z-50 font-light">✕</button>

        <div className="grid grid-cols-2 w-full min-h-full content-start text-left">
          {/* About Us */}
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`aspect-square p-6 flex flex-col justify-end border border-white/5 transition-colors no-underline ${isActive('/about') ? 'bg-[#252525]' : 'bg-[#1a1a1a] hover:bg-[#252525]'}`}>
            <span className={`text-lg font-bold ${isActive('/about') ? 'text-[#5EAFEA]' : 'text-white'}`}>About us.</span>
          </Link>

          {/* Services */}
          <Link to="/service" onClick={() => setMobileMenuOpen(false)} className={`aspect-square p-6 flex flex-col justify-end border border-white/5 transition-colors no-underline ${isActive('/service') ? 'bg-[#252525]' : 'bg-[#1a1a1a] hover:bg-[#252525]'}`}>
            <span className={`text-lg font-bold ${isActive('/service') ? 'text-[#5EAFEA]' : 'text-white'}`}>Services.</span>
          </Link>

          {/* Achievements */}
          <Link to="/achievements" onClick={() => setMobileMenuOpen(false)} className={`aspect-square p-6 flex flex-col justify-end border border-white/5 transition-colors no-underline ${isActive('/achievements') ? 'bg-[#252525]' : 'bg-[#1a1a1a] hover:bg-[#252525]'}`}>
            <span className={`text-lg font-bold ${isActive('/achievements') ? 'text-[#5EAFEA]' : 'text-white'}`}>Achievements.</span>
          </Link>

          {/* Network */}
          <Link to="/network" onClick={() => setMobileMenuOpen(false)} className={`aspect-square p-6 flex flex-col justify-end border border-white/5 transition-colors no-underline ${isActive('/network') ? 'bg-[#252525]' : 'bg-[#1a1a1a] hover:bg-[#252525]'}`}>
            <span className={`text-lg font-bold ${isActive('/network') ? 'text-[#5EAFEA]' : 'text-white'}`}>Network.</span>
          </Link>

          {/* Tracking */}
          <Link to="/tracking" onClick={() => setMobileMenuOpen(false)} className={`aspect-square p-6 flex flex-col justify-end border border-white/5 transition-colors no-underline ${isActive('/tracking') ? 'bg-[#252525]' : 'bg-[#1a1a1a] hover:bg-[#252525]'}`}>
            <span className={`text-lg font-bold ${isActive('/tracking') ? 'text-[#5EAFEA]' : 'text-white'}`}>Tracking.</span>
          </Link>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsContactModalOpen(true);
            }}
            className="col-span-2 bg-[#1a1a1a] p-6 flex flex-col justify-end border border-white/5 hover:bg-[#252525] transition-colors text-left h-32"
          >
            <span className="text-white text-lg font-bold">Get in touch.</span>
          </button>
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}

export default Header
