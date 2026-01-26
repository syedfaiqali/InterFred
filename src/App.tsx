import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Answer from './components/Answer'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'
import { websiteContent } from './data/websiteContent'
const About = React.lazy(() => import('./components/About'))
const AboutFoundation = React.lazy(() => import('./components/AboutFoundation'))
const SlideGallery = React.lazy(() => import('./components/SlideGallery'))
const Highlights = React.lazy(() => import('./components/Highlights'))
const ValueProp = React.lazy(() => import('./components/ValueProp'))
const ValuePropSub = React.lazy(() => import('./components/ValuePropSub'))
const Specialization = React.lazy(() => import('./components/Specialization'))
const Partners = React.lazy(() => import('./components/Partners'))
const FAQ = React.lazy(() => import('./components/FAQ'))
const Subscribe = React.lazy(() => import('./components/Subscribe'))
const ScrollingText = React.lazy(() => import('./components/ScrollingText'))
const ServicesSection = React.lazy(() => import('./components/ServicesSection'))
const ServiceSpecialization = React.lazy(() => import('./components/ServiceSpecialization'))
const ServiceDetail = React.lazy(() => import('./components/ServiceDetail'))
const ServiceSlider = React.lazy(() => import('./components/ServiceSlider'))
const Network = React.lazy(() => import('./components/Network'))
const Achievements = React.lazy(() => import('./components/Achievements'))
const Tracking = React.lazy(() => import('./components/Tracking'))
const CookieConsent = React.lazy(() => import('./components/CookieConsent'))

const App: React.FC = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isAssetsLoaded, setIsAssetsLoaded] = React.useState(false)

  React.useEffect(() => {
    // Critical images that affect layout and initial visual impression
    const criticalImages = [
      websiteContent.hero.bgImage,
      websiteContent.valueProp.mainShipImg,
      websiteContent.valueProp.highlightedShipImg,
      websiteContent.answer.containerImg,
      websiteContent.answer.planeImg
    ];

    let loadedCount = 0;
    const totalImages = criticalImages.length;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        // All images loaded/errored.
        // Give a little extra buffer for React to paint, then hide loader.
        setTimeout(() => {
          setIsAssetsLoaded(true);
          
          // Force a ScrollTrigger refresh after the loader lifts to ensure 
          // all pinned sections (slide gallery, ships) calculate correctly against the final DOM.
          // We delay this slightly to ensure the re-render from setIsAssetsLoaded(true) has completed.
          setTimeout(() => {
             import('gsap').then(({ default: gsap }) => {
                import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                   ScrollTrigger.refresh(); 
                });
             });
          }, 500);
        }, 800);
      }
    };

    // Safety timeout: forced unlock after 8 seconds in case of network issues
    const timeout = setTimeout(() => {
        setIsAssetsLoaded(true);
    }, 8000);

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded;
    });

    return () => clearTimeout(timeout);
  }, []); // Run once on mount

  if (!isAssetsLoaded) {
    return <Loader />
  }

  return (
    <div className="min-h-screen text-gray-800 overflow-x-hidden">
      <main className="relative">
        <ScrollToTop />
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>

        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div className="">
                  <div className="space-y-6">
                    <Highlights />
                  </div>
                  <Answer />
                  <SlideGallery />
                  <ValueProp />
                  <ValuePropSub />
                  <Specialization />
                  <Partners />
                  <FAQ />
                </div>
              </>
            } />
            <Route path="/about" element={
              <div className="space-y-0">
                <About />
                <AboutFoundation />
                <ValuePropSub />
              </div>
            } />
            <Route path="/service" element={
              <div className="space-y-0 text-gray-800">
                <ServicesSection />
                <ServiceSpecialization />
                <ServiceSlider />
                <FAQ />
              </div>
            } />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/network" element={<Network />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/tracking" element={<Tracking />} />
          </Routes>
          {/* Common Footer Sections for all pages as requested */}
          <div className="mt-12">
            <Subscribe />
            <ScrollingText />
          </div>
          <CookieConsent />
        </React.Suspense>
      </main>
    </div>
  )
}

export default App
