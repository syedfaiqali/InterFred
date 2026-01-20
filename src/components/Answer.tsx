import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Answer.css';

gsap.registerPlugin(ScrollTrigger);

import { websiteContent } from '../data/websiteContent';

const Answer: React.FC = () => {
  const content = websiteContent.answer;
  const words = [content.heading, ...content.mainText.split(' ')];
  const [isContainerLoaded, setIsContainerLoaded] = React.useState(false);
  const [isPlaneLoaded, setIsPlaneLoaded] = React.useState(false);

  const textSectionRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  const planeRef = useRef<HTMLDivElement>(null);
  const infoBoxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Preload images
    const containerImgLoader = new Image();
    containerImgLoader.src = content.containerImg;
    containerImgLoader.onload = () => {
      setIsContainerLoaded(true);
      ScrollTrigger.refresh();
    };

    const planeImgLoader = new Image();
    planeImgLoader.src = content.planeImg;
    planeImgLoader.onload = () => {
      setIsPlaneLoaded(true);
      ScrollTrigger.refresh();
    };

    if (!textSectionRef.current) return;

    const ctx = gsap.context(() => {
      wordRefs.current = wordRefs.current.slice(0, words.length);

      // Initial states - Text is visible but light grey
      gsap.set(wordRefs.current, { y: 0, opacity: 1, color: '#d1d5db' });
      if (planeRef.current) gsap.set(planeRef.current, { y: 100, opacity: 0 });

      // Text Animation (Scroll-triggered color reveal)
      gsap.to(wordRefs.current, {
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: 0.5, // Smoothly follows scroll
        },
        color: '#1a1a1a', // Changes to black
        stagger: 0.1, // Sequentially reveals words
        ease: 'power1.inOut',
      });

      // Plane Animation (Coming from down to up)
      if (planeRef.current) {
        gsap.to(planeRef.current, {
          scrollTrigger: {
            trigger: planeRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
        });
      }

      // Info Boxes Animation (Float from up to down)
      gsap.set(infoBoxRefs.current, { y: -30, opacity: 0 });

      gsap.to(infoBoxRefs.current, {
        scrollTrigger: {
          trigger: planeRef.current, // Use plane as trigger so they animate with/after it
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.3, // Slight delay so plane starts first
      });
    }, textSectionRef);

    return () => ctx.revert();
  }, [words.length]);

  return (
    <div className="answer-wrapper">
      {/* White section */}
      <div className="white-section">
        <div className="container-section min-h-[300px] flex items-center justify-center">
          <img
            src={content.containerImg}
            alt="Container"
            className={`container-img transition-opacity duration-1000 ${isContainerLoaded ? 'opacity-100' : 'opacity-0'}`}
            decoding="async"
            onLoad={() => setIsContainerLoaded(true)}
          />
        </div>
      </div>

      {/* Colored section */}
      <div className="colored-section">
        {/* TEXT */}
        <div className="text-animation-section" ref={textSectionRef}>
          <h2 className="solution-heading">
            <span
              ref={el => (wordRefs.current[0] = el!)}
              className="word"
            >
              {content.heading}
            </span>
          </h2>

          <p className="main-text">
            {content.mainText.split(' ').map((word, i) => (
              <span
                key={i}
                ref={el => (wordRefs.current[i + 1] = el!)}
                className="word"
              >
                {word}&nbsp;
                {i === 3 && <br className="desktop-br" />}
              </span>
            ))}
          </p>
        </div>

        {/* PLANE + INFO BOXES */}
        <div className="plane-section">
          {content.infoBoxes.slice(0, 2).map((box, idx) => (
            <div
              key={idx}
              className={`info-box ${idx === 0 ? 'info-box-top-left text-right' : 'info-box-top-right'}`}
              ref={el => (infoBoxRefs.current[idx] = el!)}
            >
              {idx === 1 ? (
                <div className="info-header">
                  <span className="logo-text">{box.title}</span>
                </div>
              ) : (
                <h3>{box.title}</h3>
              )}
              <p>{box.content}</p>
            </div>
          ))}

          {/* Plane */}
          <div className="plane-wrapper" ref={planeRef}>
            <img
              src={content.planeImg}
              alt="Plane"
              className={`plane-img transition-opacity duration-1000 ${isPlaneLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setIsPlaneLoaded(true)}
            />
          </div>

          {content.infoBoxes.slice(2, 4).map((box, idx) => (
            <div
              key={idx + 2}
              className={`info-box ${idx === 0 ? 'info-box-bottom-left text-right' : 'info-box-bottom-right'}`}
              ref={el => (infoBoxRefs.current[idx + 2] = el!)}
            >
              <h3>{box.title}</h3>
              <p>{box.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answer;
