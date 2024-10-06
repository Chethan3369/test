import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Control.css';

gsap.registerPlugin(ScrollTrigger);

const ControlNumi = () => {
    const controlPanelRef = useRef(null);
    const arrowsRef = useRef([]);
    const textsRef = useRef([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const arrowTranslateY = 50;

        // Arrows animation
        arrowsRef.current.forEach((arrow) => {
            gsap.fromTo(
                arrow,
                { opacity: 0, y: arrowTranslateY },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: arrow,
                        start: 'top 80%',
                        end: 'top 80%',
                        scrub: true,
                    },
                }
            );
        });

        // Text animation
        textsRef.current.forEach((text) => {
            gsap.fromTo(
                text,
                { opacity: 0, y: arrowTranslateY },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: text,
                        start: 'top 70%',
                        end: 'top 70%',
                        scrub: true,
                    },
                }
            );
        });

        // Section animation
        const sectionAnimation = gsap.fromTo(
            sectionRef.current,
            { scale: 1.5, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 2,
                paused: true,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: false,
                    onEnter: () => sectionAnimation.restart(),
                    onLeaveBack: () => sectionAnimation.reverse(),
                },
            }
        );

    }, []);

    return (
        <section ref={sectionRef} className="Eight-section overflow-hidden min-h-screen">
            <div className="control-section flex items-center justify-center py-10 min-h-screen">
                <div className="control-text mr-15 text-left">
                    <h1 className="text-5xl font-bold text-gradient mb-5">Always On<br />Control</h1>
                </div>
                <div className="control-panel relative flex items-center" ref={controlPanelRef}>
                    <div className="control-image-container relative ">
                        <img 
                            src="./remotePanel.png" 
                            alt="Control Panel" 
                            className="w-80 rounded-full shadow-lg"
                        />
                        {/* Horizontal Arrows */}
                        <img
                            className="absolute top-[9%] right-[-50px] w-3 h-3"
                            src="./kArrow.svg"
                            alt="arrow"
                            ref={el => arrowsRef.current[0] = el}
                        />
                        <img
                            className="absolute top-[31%] right-[-160px] w-3 h-3"
                            src="./kArrow.svg"
                            alt="arrow"
                            ref={el => arrowsRef.current[1] = el}
                        />
                        <img
                            className="absolute top-[42%] right-[-160px] w-3 h-3"
                            src="./kArrow.svg"
                            alt="arrow"
                            ref={el => arrowsRef.current[2] = el}
                        />
                        <img
                            className="absolute top-[69%] right-[-110px] w-3 h-3"
                            src="./kArrow.svg"
                            alt="arrow"
                            ref={el => arrowsRef.current[3] = el}
                        />
                        <img
                            className="absolute top-[87.5%] right-[-80px] w-3 h-3"
                            src="./kArrow.svg"
                            alt="arrow"
                            ref={el => arrowsRef.current[4] = el}
                        />
                    </div>
                    <div className="arrows-container relative min-h-screen">
                        {/* Horizontal Lines */}
                        <div
                            className="absolute top-[148px] right-[-20px] w-[160px] h-0.5 bg-gray-50"
                            ref={el => arrowsRef.current[5] = el}
                        />
                        <div
                            className="absolute top-[220px] right-[-130px] w-[370px] h-0.5 bg-gray-300"
                            ref={el => arrowsRef.current[6] = el}
                        />
                        <div
                            className="absolute top-[340px] right-[-90px] w-[225px] h-0.5 bg-gray-100"
                            ref={el => arrowsRef.current[7] = el}
                        />
                        <div
                            className="absolute top-[400px] right-[-60px] w-[200px] h-0.5 bg-gray-300"
                            ref={el => arrowsRef.current[8] = el}
                        />
                        {/* Vertical Arrows */}
                        <div
                            className="absolute top-[40.2%] left-[-240px] w-0.5 h-5 bg-gray-300 transform rotate-180"
                            ref={el => arrowsRef.current[9] = el}
                        />
                        <div
                            className="absolute top-[40.2%] left-[-90px] w-0.5 h-5 bg-gray-300 transform rotate-180"
                            ref={el => arrowsRef.current[10] = el}
                        />
                    </div>
                    <div className="relative pla min-h-[500px]">
                        <p
                            className="absolute text-white text-lg right-[-240px] top-[21.5%]"
                            ref={el => textsRef.current[0] = el}
                        >
                            Play / Pause Music
                        </p>
                        <p
                            className="absolute text-white text-lg right-[-285px] top-[35.9%]"
                            ref={el => textsRef.current[1] = el}
                        >
                            Spray Pressure
                        </p>
                        <p
                            className="absolute text-white text-lg right-[-266px] top-[43%]"
                            ref={el => textsRef.current[2] = el}
                        >
                            Spray Angle
                        </p>
                        <p
                            className="absolute text-white text-lg right-[-250px] top-[60%]"
                            ref={el => textsRef.current[3] = el}
                        >
                            Heated Seating
                        </p>
                        <p
                            className="absolute text-white text-lg right-[-190px] top-[72%]"
                            ref={el => textsRef.current[4] = el}
                        >
                            LED Lighting
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ControlNumi;
