import * as React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from './store'
import { increment, decrement } from './features/counter/counterSlice'

import Header from './components/Header'
import Hero from './components/Hero'
import Home from './components/Home'
import Answer from './components/Answer'
const About = React.lazy(() => import('./components/About'))
const SlideGallery = React.lazy(() => import('./components/SlideGallery'))
const Highlights = React.lazy(() => import('./components/Highlights'))
const ValueProp = React.lazy(() => import('./components/ValueProp'))
const Specialization = React.lazy(() => import('./components/Specialization'))
const Partners = React.lazy(() => import('./components/Partners'))
const FAQ = React.lazy(() => import('./components/FAQ'))
const Subscribe = React.lazy(() => import('./components/Subscribe'))
const ScrollingText = React.lazy(() => import('./components/ScrollingText'))
const Footer = React.lazy(() => import('./components/Footer'))

const App: React.FC = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>

        <React.Suspense fallback={<div className="py-12 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div className="space-y-6">
                  <Highlights />
                  <Answer />
                  <SlideGallery />
                  <ValueProp />
                  <Specialization />
                  <Partners />
                  <FAQ />
                </div>
              </>
            } />
            <Route path="/about" element={
              <div className="space-y-6">
                <About />
                <ValueProp />
              </div>
            } />
          </Routes>

          {/* Common Footer Sections for all pages as requested */}
          <div className="mt-12 space-y-6">
            <Subscribe />
            <ScrollingText />
          </div>
        </React.Suspense>
      </main>
    </div>
  )
}

export default App
