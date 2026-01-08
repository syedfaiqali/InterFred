import React, { useState, useEffect, useRef } from 'react'
import mainLogo from '../assets/Main Logo.png'
import stickyLogo from '../assets/Vector.svg'

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [currentScrollY, setCurrentScrollY] = useState(0)

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

  return (
    <>
      {/* Original Header - Hidden on scroll */}
      <div className={`w-full shadow-lg transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="ml-4 mr-4 mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mainLogo} alt="InterFret" className="h-14 object-contain" />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-white text-sm">
            <div className={`flex items-center gap-8 transition-all duration-300 origin-right ${!scrolled ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'}`}>
              <a href="#" className="hover:underline">About us</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">Achievements</a>
              <a href="#" className="hover:underline">Network</a>
              <a href="#" className="hover:underline">Tracking</a>
            </div>
            <button className="ml-4 px-4 py-2 bg-[#07119B] text-white rounded-md hover:bg-[#0a1bc0] transition-colors">Get in Touch</button>
          </nav>

          <div className="md:hidden">
            <button className="text-white text-2xl" onClick={() => setMobileMenuOpen(true)}>☰</button>
          </div>
        </div>
      </div>

      {/* Sticky Burger Menu & Get in Touch - Appears on scroll */}
      {/* Sticky Burger Menu & Get in Touch - Appears on scroll */}
      <div className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="ml-4 mr-4 mx-auto px-6 pt-6 flex justify-between items-center">
          {/* Sticky Logo - Scroll to Top */}
          <div
            className={`pointer-events-auto cursor-pointer transition-transform duration-500 ${scrolled ? 'translate-y-0' : '-translate-y-12'}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={stickyLogo}
              alt="Back to Top"
              className="h-12 object-contain animate-spin"
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
              <a href="#" className="text-gray-800 hover:text-[#07119B] text-sm font-medium whitespace-nowrap transition-colors">About us</a>
              <a href="#" className="text-gray-800 hover:text-[#07119B] text-sm font-medium whitespace-nowrap transition-colors">Services</a>
              <a href="#" className="text-gray-800 hover:text-[#07119B] text-sm font-medium whitespace-nowrap transition-colors">Achievements</a>
              <a href="#" className="text-gray-800 hover:text-[#07119B] text-sm font-medium whitespace-nowrap transition-colors">Network</a>
              <a href="#" className="text-gray-800 hover:text-[#07119B] text-sm font-medium whitespace-nowrap transition-colors">Tracking</a>
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
            <button className="hidden md:block px-4 py-2 bg-[#07119B] text-white rounded-md text-sm shadow-md hover:bg-[#0a1bc0] transition-colors whitespace-nowrap">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] bg-white transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b">
          <img src={mainLogo} alt="InterFret" className="h-10 object-contain" />
          <button onClick={() => setMobileMenuOpen(false)} className="text-3xl text-gray-800">×</button>
        </div>
        <div className="p-6 flex flex-col gap-6 text-xl font-medium text-gray-800">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#07119B]">About us</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#07119B]">Services</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#07119B]">Achievements</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#07119B]">Network</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#07119B]">Tracking</a>
          <button className="px-6 py-3 bg-[#07119B] text-white rounded-md shadow-md hover:bg-[#0a1bc0] transition-colors w-full mt-4">
            Get in Touch
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
