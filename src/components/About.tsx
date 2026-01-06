import React from 'react'

const About: React.FC = () => (
  <section className="p-4 bg-white rounded shadow">
    <h2 className="text-xl font-medium">About</h2>
    <p className="mt-2 text-sm text-gray-600">This chunk is lazy-loaded with Suspense.</p>
  </section>
)

export default About
