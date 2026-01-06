import React from 'react'

const ValueProp: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold">Value Proposition</h2>
          <p className="text-gray-600 mt-2">Reliable, cost-effective, and transparent logistic services.</p>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold">End-to-end visibility</h3>
            <p className="text-sm text-gray-600">Track shipments at every step.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold">Custom workflows</h3>
            <p className="text-sm text-gray-600">Adapted solutions for complex demands.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold">Trusted partners</h3>
            <p className="text-sm text-gray-600">A large network for global reach.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold">Optimized costs</h3>
            <p className="text-sm text-gray-600">Competitive pricing with reliable service.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProp
