import React, { Suspense, lazy } from 'react'
import Home from './components/Home'
const About = lazy(() => import('./components/About'))

import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from './store'
import { increment, decrement } from './features/counter/counterSlice'

const App: React.FC = () => {
  const count = useSelector((s: RootState) => s.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold">Vite + React + TS + Tailwind + Redux</h1>
      </header>
      <main className="max-w-4xl mx-auto p-6 space-y-6">
        <Home />

        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            -
          </button>
          <div className="font-mono">{count}</div>
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            +
          </button>
        </div>

        <Suspense fallback={<div>Loading about...</div>}>
          <About />
        </Suspense>
      </main>
    </div>
  )
}

export default App
