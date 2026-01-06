import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-lg">INTERFRET</div>

        <nav className="hidden md:flex items-center gap-6 text-white">
          <a href="#" className="hover:underline">About us</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Achievements</a>
          <a href="#" className="hover:underline">Network</a>
          <a href="#" className="hover:underline">Tracking</a>
          <button className="ml-4 px-4 py-2 bg-blue-900 text-white rounded">Get in Touch</button>
        </nav>

        <div className="md:hidden">
          <button className="text-white">Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Header
