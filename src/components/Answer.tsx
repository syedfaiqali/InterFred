import React, { useEffect, useRef, useState } from 'react';
import '../styles/Answer.css';
import ContainerImg from '../Assets/Container.svg';
import PlaneImg from '../Assets/PLANE.svg';

const Answer: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            if (!textRef.current) return;

            const rect = textRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const start = windowHeight * 0.85; // start when text enters
            const end = windowHeight * 0.25;   // fully revealed near center

            let progress = (start - rect.top) / (start - end);
            progress = Math.max(0, Math.min(1, progress));

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', onScroll);
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);



    // Split text into words for individual animation
    const words = [
        'Solution', 'Our', 'Answer', 'is', 'a', 'fully', 'integrated,',
        'certified,', 'and', 'specialized', 'logistics', 'network.'
    ];


    // Calculate which words should be colored based on scroll progress
    const getWordColor = (index: number) => {
        const wordProgress = scrollProgress * words.length;

        if (wordProgress >= index + 1) {
            return '#1a1a1a'; // black
        }

        if (wordProgress > index) {
            const t = wordProgress - index;
            const value = Math.round(102 - t * 76); // grey → black
            return `rgb(${value}, ${value}, ${value})`;
        }

        return '#666666'; // grey
    };



    return (
        <div className="answer-wrapper" ref={sectionRef}>
            {/* White Background Section */}
            <div className="white-section">
                {/* Container Image - positioned to overlap both sections */}
                <div className="container-section">
                    <img src={ContainerImg} alt="Container" className="container-img" />
                </div>
            </div>

            {/* Colored Background Section */}
            <div className="colored-section">
                {/* Animated Text Section */}
                <div className="text-animation-section" ref={textRef}>
                    {/* Solution Heading (PART OF TYPING EFFECT) */}
                    <h2 className="solution-heading">
                        <span
                            style={{
                                color: getWordColor(0),
                                transition: 'color 0.3s ease'
                            }}
                        >
                            {words[0]}
                        </span>
                    </h2>

                    {/* Main Text */}
                    <p className="main-text">
                        {words.slice(1).map((word, index) => (
                            <span
                                key={index}
                                style={{
                                    color: getWordColor(index + 1),
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                {word}
                                {index === 3 && <br />}
                                {' '}
                            </span>
                        ))}
                    </p>
                </div>


                {/* Plane Section with Corner Text Boxes */}
                <div className="plane-section">
                    {/* Top Left Info Box - Dangerous Goods */}
                    <div className="info-box info-box-top-left">
                        <h3>Dangerous<br />Goods Specialists</h3>
                        <p>
                            We are certified to handle dangerous goods shipments, ensuring compliance with all safety regulations.
                        </p>
                    </div>

                    {/* Top Right Info Box - Syed Faiq Ali */}
                    <div className="info-box info-box-top-right">
                        <div className="info-header">
                            <span className="logo-text">Syed Faiq Ali</span>
                        </div>
                        <p>
                            Leading innovation in drone logistics with cutting-edge technology and expertise.
                        </p>
                    </div>

                    {/* Plane Image - Centered */}
                    <div className="plane-wrapper">
                        <img src={PlaneImg} alt="Plane" className="plane-img" />
                    </div>

                    {/* Bottom Left Info Box - Freight Cargo */}
                    <div className="info-box info-box-bottom-left">
                        <h3>Freight Cargo<br />Specialists</h3>
                        <p>
                            Expert handling of all types of cargo with specialized equipment and trained personnel.
                        </p>
                    </div>

                    {/* Bottom Right Info Box - End-to-End Solutions */}
                    <div className="info-box info-box-bottom-right">
                        <h3>End-to-End<br />Solutions</h3>
                        <p>
                            Complete logistics solutions from pickup to delivery, with real-time tracking and support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Answer;
