import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white text-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} InterFret — All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
