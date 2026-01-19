import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/Answer.css';
import ContainerImg from '../assets/Container.svg';
import PlaneImg from '../assets/PLANE.svg';

gsap.registerPlugin(ScrollTrigger);

const words = [
  'Solution',
  'Our',
  'Answer',
  'is',
  'a',
  'fully',
  'integrated,',
  'certified,',
  'and',
  'specialized',
  'logistics',
  'network.'
];

const Answer: React.FC = () => {
  const textSectionRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  const planeRef = useRef<HTMLDivElement>(null);
  const infoBoxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
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
      // We set initial state here for safety, though CSS or GSAP set() works.
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
  }, []);

  return (
    <div className="answer-wrapper">
      {/* White section */}
      <div className="white-section">
        <div className="container-section">
          <img
            src={ContainerImg}
            alt="Container"
            className="container-img"
            decoding="async"
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
              {words[0]}
            </span>
          </h2>

          <p className="main-text">
            {words.slice(1).map((word, i) => (
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
          {/* Top Left */}
          <div
            className="info-box info-box-top-left text-right"
            ref={el => (infoBoxRefs.current[0] = el!)}
          >
            <h3>Dangerous<br />Goods Specialists</h3>
            <p>
              We are the only freight forwarder in Pakistan with DGAC (USA)
              membership. We safely manage explosives and radioactive materials
              compliant with IATA DGR and IMO guidelines.
            </p>
          </div>

          {/* Top Right */}
          <div
            className="info-box info-box-top-right"
            ref={el => (infoBoxRefs.current[1] = el!)}
          >
            <div className="info-header">
              <span className="logo-text">Aviation &<br />Ground Services</span>
            </div>
            <p>
              From crew handling and flight support to ramp services and customs
              formalities, we offer a complete range of ground and flight support
              services.
            </p>
          </div>

          {/* Plane */}
          <div className="plane-wrapper" ref={planeRef}>
            <img src={PlaneImg} alt="Plane" className="plane-img" />
          </div>

          {/* Bottom Left */}
          <div
            className="info-box info-box-bottom-left text-right"
            ref={el => (infoBoxRefs.current[2] = el!)}
          >
            <h3>Project Cargo<br />Expertise</h3>
            <p>
              We specialize in large, heavy, and oversized shipments. We are the
              only company in Pakistan with practical experience transporting
              15–20ft oil drilling equipment by air via passenger aircraft.
            </p>
          </div>

          {/* Bottom Right */}
          <div
            className="info-box info-box-bottom-right"
            ref={el => (infoBoxRefs.current[3] = el!)}
          >
            <h3>End-to-End<br />Supply Chain</h3>
            <p>
              Seamless door-to-door delivery, warehousing with modern inventory
              systems, and expert customs brokerage to ensure uninterrupted
              logistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
