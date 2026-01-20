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
    // Only preload on first land or landing on home
    if (location.pathname !== '/' && isAssetsLoaded) return;

    const criticalImages = [
      websiteContent.hero.bgImage,
      websiteContent.valueProp.mainShipImg,
      websiteContent.valueProp.highlightedShipImg,
      websiteContent.answer.containerImg,
      websiteContent.answer.planeImg
    ];

    let loadedCount = 0;

    // Safety timeout: don't keep users waiting longer than 6 seconds
    const timeout = setTimeout(() => {
      setIsAssetsLoaded(true);
    }, 6000);

    const handleAssetLoad = () => {
      loadedCount++;
      if (loadedCount === criticalImages.length) {
        clearTimeout(timeout);
        setIsAssetsLoaded(true);
        // Refresh ScrollTrigger after lazy components have had time to mount
        // 1500ms is a safe window for React to resolve Suspense and render children
        setTimeout(() => {
          import('gsap').then(({ default: gsap }) => {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
              gsap.registerPlugin(ScrollTrigger);
              ScrollTrigger.refresh(true);
            });
          });
        }, 1500);
      }
    };

    // If not on home page, and assets are not yet loaded,
    // we still want to set isAssetsLoaded to true immediately
    // to avoid showing the loader on non-home pages.
    // The image loading will still happen in the background.
    if (location.pathname !== '/' && !isAssetsLoaded) {
      setIsAssetsLoaded(true);
    }

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = handleAssetLoad;
      img.onerror = handleAssetLoad;
    });

    return () => clearTimeout(timeout);
  }, [location.pathname, isAssetsLoaded]); // Added isAssetsLoaded to dependencies for the new logic

  if (!isAssetsLoaded && isHomePage) {
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
