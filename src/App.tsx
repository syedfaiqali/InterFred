import { Suspense, lazy } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from './store'
import { increment, decrement } from './features/counter/counterSlice'

import Header from './components/Header'
import Hero from './components/Hero'
import Home from './components/Home'
import Answer from './components/Answer'
const About = lazy(() => import('./components/About'))
const SlideGallery = lazy(() => import('./components/SlideGallery'))
const Highlights = lazy(() => import('./components/Highlights'))
const ValueProp = lazy(() => import('./components/ValueProp'))
const Specialization = lazy(() => import('./components/Specialization'))
const Partners = lazy(() => import('./components/Partners'))
const FAQ = lazy(() => import('./components/FAQ'))
const Subscribe = lazy(() => import('./components/Subscribe'))
const ScrollingText = lazy(() => import('./components/ScrollingText'))
const Footer = lazy(() => import('./components/Footer'))

const App: React.FC = () => {
  const count = useSelector((s: RootState) => s.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main>
        <Hero />

        <div className="space-y-6">
          {/* <div className="max-w-6xl mx-auto px-6">
            <Home />
          </div> */}

          <Suspense fallback={<div className="py-12 text-center">Loading highlights...</div>}>
            <Highlights />
            <Answer />
            <SlideGallery />
            <ValueProp />
            <Specialization />
            <Partners />
            <FAQ />
            <Subscribe />
            <ScrollingText />
          </Suspense>
        </div>
      </main>
    </div>
  )
}

export default App
