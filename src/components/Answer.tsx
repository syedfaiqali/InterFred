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

  useEffect(() => {
    if (!textSectionRef.current) return;

    wordRefs.current = wordRefs.current.slice(0, words.length);

    gsap.set(wordRefs.current, { color: '#666666' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textSectionRef.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
      },
    });

    wordRefs.current.forEach((word) => {
      tl.to(word, { color: '#1a1a1a', duration: 1 }, '+=0.15');
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="answer-wrapper">
      {/* White section */}
      <div className="white-section">
        <div className="container-section">
          <img src={ContainerImg} alt="Container" className="container-img" />
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
          <div className="info-box info-box-top-left text-right">
            <h3>Dangerous<br />Goods Specialists</h3>
            <p>
              We are the only freight forwarder in Pakistan with DGAC (USA)
              membership. We safely manage explosives and radioactive materials
              compliant with IATA DGR and IMO guidelines.
            </p>
          </div>

          {/* Top Right */}
          <div className="info-box info-box-top-right">
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
          <div className="plane-wrapper">
            <img src={PlaneImg} alt="Plane" className="plane-img" />
          </div>

          {/* Bottom Left */}
          <div className="info-box info-box-bottom-left text-right">
            <h3>Project Cargo<br />Expertise</h3>
            <p>
              We specialize in large, heavy, and oversized shipments. We are the
              only company in Pakistan with practical experience transporting
              15–20ft oil drilling equipment by air via passenger aircraft.
            </p>
          </div>

          {/* Bottom Right */}
          <div className="info-box info-box-bottom-right">
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
