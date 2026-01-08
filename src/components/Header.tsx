import React from 'react'
import mainLogo from '../assets/Main Logo.png'

const Header: React.FC = () => {
  return (
    <div className="w-full shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={mainLogo} alt="InterFret" className="h-14 object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-white text-sm">
          <a href="#" className="hover:underline">About us</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Achievements</a>
          <a href="#" className="hover:underline">Network</a>
          <a href="#" className="hover:underline">Tracking</a>
          <button className="ml-4 px-4 py-2 bg-[#07119B] text-white rounded-md">Get in Touch</button>
        </nav>

        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </div>
  )
}

export default Header
