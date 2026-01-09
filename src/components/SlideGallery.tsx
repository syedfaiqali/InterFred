import React, { useState, useRef, useEffect } from 'react';
import ShipSVG from '../Assets/Ship.svg';
import TruckSVG from '../Assets/Truck.svg';

interface SlideGalleryProps {
  className?: string;
}

const SlideGallery: React.FC<SlideGalleryProps> = ({ className }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAccumulator = useRef(0);
  const touchStartY = useRef(0);
  const maxScroll = 6000; // Total scroll for all stages - optimized for faster progression

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Wheel event handler with smooth easing
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container || !isIntersecting) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Component should be at or near the top of viewport
      // More forgiving range for better activation
      const isProperlyPositioned = rect.top <= 100 && rect.top >= -100 && rect.bottom > viewportHeight * 0.5;
      
      // Only hijack scroll when component is properly positioned
      if (!isProperlyPositioned) return;

      const currentProgress = scrollAccumulator.current;
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // Check if we should hijack the scroll
      const canScrollDown = scrollingDown && currentProgress < maxScroll;
      const canScrollUp = scrollingUp && currentProgress > 0;

      if (canScrollDown || canScrollUp) {
        e.preventDefault();
        e.stopPropagation();
        
        // Faster scroll for better responsiveness
        const scrollDelta = e.deltaY * 2.5;
        const newScroll = Math.max(0, Math.min(maxScroll, currentProgress + scrollDelta));
        scrollAccumulator.current = newScroll;

        // Calculate progress percentage with easing
        const progress = (newScroll / maxScroll) * 100;
        
        // Use requestAnimationFrame for smoother updates
        requestAnimationFrame(() => {
          setScrollProgress(progress);
        });
      }
    };

    if (isIntersecting) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isIntersecting, maxScroll]);

  // Touch event handlers for mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (!isIntersecting) return;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!container || !isIntersecting) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Same positioning as wheel event - more forgiving range
      const isProperlyPositioned = rect.top <= 100 && rect.top >= -100 && rect.bottom > viewportHeight * 0.5;
      
      if (!isProperlyPositioned) return;

      const currentProgress = scrollAccumulator.current;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchY;

      const scrollingDown = deltaY > 0;
      const scrollingUp = deltaY < 0;

      const canScrollDown = scrollingDown && currentProgress < maxScroll;
      const canScrollUp = scrollingUp && currentProgress > 0;

      if (canScrollDown || canScrollUp) {
        e.preventDefault();
        
        const scrollDelta = deltaY * 3.5; // Faster touch sensitivity
        const newScroll = Math.max(0, Math.min(maxScroll, currentProgress + scrollDelta));
        scrollAccumulator.current = newScroll;

        const progress = (newScroll / maxScroll) * 100;
        requestAnimationFrame(() => {
          setScrollProgress(progress);
        });

        touchStartY.current = touchY;
      }
    };

    if (isIntersecting) {
      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isIntersecting, maxScroll]);

  // Calculate which stage we're in (5 stages: 0-20%, 20-40%, 40-60%, 60-80%, 80-100%)
  const stage1Progress = Math.min(scrollProgress / 20, 1); // Text 1: 0-20%
  const stage2Progress = Math.max(0, Math.min((scrollProgress - 20) / 20, 1)); // Ship: 20-40%
  const stage3Progress = Math.max(0, Math.min((scrollProgress - 40) / 20, 1)); // Text 2: 40-60%
  const stage4Progress = Math.max(0, Math.min((scrollProgress - 60) / 20, 1)); // Truck: 60-80%
  const stage5Progress = Math.max(0, Math.min((scrollProgress - 80) / 20, 1)); // Text 3: 80-100%

  // Calculate opacity for each stage with clean transitions (no overlap)
  const text1Opacity = scrollProgress < 18 ? 1 : Math.max(0, 1 - (scrollProgress - 18) / 4);
  const shipOpacity = scrollProgress >= 22 && scrollProgress < 38 ? 1 : 
                      scrollProgress < 22 ? Math.max(0, (scrollProgress - 18) / 4) : 
                      Math.max(0, 1 - (scrollProgress - 38) / 4);
  const text2Opacity = scrollProgress >= 42 && scrollProgress < 58 ? 1 : 
                       scrollProgress < 42 ? Math.max(0, (scrollProgress - 38) / 4) : 
                       Math.max(0, 1 - (scrollProgress - 58) / 4);
  const truckOpacity = scrollProgress >= 62 && scrollProgress < 78 ? 1 : 
                       scrollProgress < 62 ? Math.max(0, (scrollProgress - 58) / 4) : 
                       Math.max(0, 1 - (scrollProgress - 78) / 4);
  const text3Opacity = scrollProgress >= 82 ? Math.min(1, (scrollProgress - 82) / 4) : 0;

  // Vehicle positions (move from right 100% to completely off-screen left -60%)
  const shipX = 100 - (stage2Progress * 160);
  const truckX = 100 - (stage4Progress * 160);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden bg-white ${className || ''}`}
    >
      {/* Stage 1: First Text - "Shifting from traditional..." */}
      <div 
        className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 transition-opacity duration-500"
        style={{ 
          opacity: text1Opacity,
          pointerEvents: text1Opacity > 0 ? 'auto' : 'none'
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight">
            Shifting the paradigm <span className="text-blue-600">from</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 mt-3 sm:mt-4 md:mt-6">
            Traditional, rigid logistics models
          </p>
        </div>
      </div>

      {/* Stage 2: Ship Animation */}
      <div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden transition-opacity duration-500"
        style={{ 
          opacity: shipOpacity,
          pointerEvents: shipOpacity > 0 ? 'auto' : 'none'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div
            className="transition-transform duration-100 ease-out"
            style={{
              transform: `translateX(${shipX}%)`,
              willChange: 'transform',
            }}
          >
            <img 
              src={ShipSVG} 
              alt="Cargo Ship" 
              className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl h-auto object-contain drop-shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Stage 3: Second Text - "to agile, technology-driven..." */}
      <div 
        className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 transition-opacity duration-500"
        style={{ 
          opacity: text2Opacity,
          pointerEvents: text2Opacity > 0 ? 'auto' : 'none'
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight">
            <span className="text-blue-600">to</span> agile, technology-driven
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-600 font-bold mt-3 sm:mt-4 md:mt-6">
            and sustainable transport solutions
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-4 sm:mt-6 md:mt-8 px-4">
            For the benefit of the <span className="font-bold text-blue-600">$400 billion ocean shipping industry</span>
          </p>
        </div>
      </div>

      {/* Stage 4: Truck Animation */}
      <div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden transition-opacity duration-500"
        style={{ 
          opacity: truckOpacity,
          pointerEvents: truckOpacity > 0 ? 'auto' : 'none'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div
            className="transition-transform duration-100 ease-out"
            style={{
              transform: `translateX(${truckX}%)`,
              willChange: 'transform',
            }}
          >
            <img 
              src={TruckSVG} 
              alt="Transport Truck" 
              className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl h-auto object-contain drop-shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Stage 5: Final Text - After Truck */}
      <div 
        className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 transition-opacity duration-500"
        style={{ 
          opacity: text3Opacity,
          pointerEvents: text3Opacity > 0 ? 'auto' : 'none'
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            Powered by <span className="text-blue-600">AI & ML technology</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 font-semibold">
            Secure and sustainable transport solutions
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 sm:mt-6 md:mt-8 px-4">
            For the benefit of the <span className="font-bold text-blue-600">$400 billion</span> ocean shipping industry
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideGallery;
