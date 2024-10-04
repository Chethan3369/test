// import React, { useEffect, useState } from 'react';
// import './mobile.css';

// const MobileApp = ({triggerAnimation}) => {
//     const [animationStep, setAnimationStep] = useState(0);

//     useEffect(() => {
//         console.log("Trigger Animation:", triggerAnimation);
//         if (triggerAnimation) {
//             const interval = setInterval(() => {
//                 setAnimationStep(prevStep => (prevStep < 4 ? prevStep + 1 : 0));
//             }, 1000);  

//             return () => clearInterval(interval);
//         }
//     }, [triggerAnimation]);

//     return (
//         <div className="app-section">
//             <div className={`app-mockup ${animationStep >= 1 ? 'animate-mockup' : ''}`}>
//                 <img src="/phone.png" alt="Mobile App Screenshot" />
//             </div>
//             <div className={`app-details ${animationStep >= 2 ? 'animate-details' : ''}`}>
//                 <h1>Mobile App</h1>
//                 <ul>
//                     <li className={`${animationStep >= 3 ? 'animate-list' : ''}`}>
//                         Remote control of temperature, lighting, audio, and more.
//                     </li>
//                     <li className={`${animationStep >= 4 ? 'animate-list' : ''}`}>
//                         Preset customization setup
//                     </li>
//                 </ul>
//                 <button className={`download-button ${animationStep >= 4 ? 'animate-button' : ''}`}>
//                     Download App
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default MobileApp;

// import React, { useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './mobile.css';

// gsap.registerPlugin(ScrollTrigger);

// const MobileApp = ({ triggerAnimation }) => {
//     const [animationStep, setAnimationStep] = useState(0);

//     useEffect(() => {
//         if (triggerAnimation) {
//             const interval = setInterval(() => {
//                 setAnimationStep(prevStep => (prevStep < 4 ? prevStep + 1 : 0));
//             }, 1000);

//             return () => clearInterval(interval);
//         }
//     }, [triggerAnimation]);

//     useEffect(() => {
//         // Initialize ScrollTrigger to monitor when the 'Eight-section' comes into view
//         ScrollTrigger.create({
//             trigger: '.nine-section', // The section that should trigger the animation
//             start: 'top center', // When the top of the section hits the center of the viewport
//             onEnter: () => {
//                 if (animationStep === 0) {
//                     setAnimationStep(1); // Start the animation when reaching the 'Eight-section'
//                 }
//             },
//         });
//     }, [animationStep]);

//     useEffect(() => {
//         if (animationStep >= 1) {
//             gsap.fromTo('.app-mockup', 
//                 { opacity: 0, x: -100 }, 
//                 { opacity: 1, x: 0, duration: 1 }
//             );
//         }

//         if (animationStep >= 2) {
//             gsap.fromTo('.app-details', 
//                 { opacity: 0, x: 100 }, 
//                 { opacity: 1, x: 0, duration: 1 }
//             );
//         }

//         if (animationStep >= 3) {
//             gsap.fromTo('.app-details ul li:nth-child(1)', 
//                 { opacity: 0, y: 50 }, 
//                 { opacity: 1, y: 0, duration: 1 }
//             );
//         }

//         if (animationStep >= 4) {
//             gsap.fromTo('.app-details ul li:nth-child(2)', 
//                 { opacity: 0, y: 50 }, 
//                 { opacity: 1, y: 0, duration: 1 }
//             );
//             gsap.fromTo('.download-button', 
//                 { opacity: 0, scale: 0.5 }, 
//                 { opacity: 1, scale: 1, duration: 1 }
//             );
//         }
//     }, [animationStep]);

//     return (
//         <section className='nine-section min-h-screen   font-sans'>
//             <div className="app-section">
//                 <div className="app-mockup">
//                     <img src="/phone.png" alt="Mobile App Screenshot" />
//                 </div>
//                 <div className="app-details">
//                     <h1 className='text-[40px]  leading-[1.1] tracking-tight font-bold max-w-[300px] font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#C99CFF] to-[#FF99CC]'>Mobile App</h1>
//                     <ul>
//                         <li>Remote control of temperature, lighting, audio, and more.</li>
//                         <li>Preset customization setup</li>
//                     </ul>
//                     <button className="download-button">
//                         Download App
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default MobileApp;



import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './mobile.css';

gsap.registerPlugin(ScrollTrigger);

const MobileApp = () => {
    useEffect(() => {
        // Set up ScrollTrigger to trigger animation on entering and re-entering nine-section
        ScrollTrigger.create({
            trigger: '.nine-section',
            start: 'top center',
            onEnter: () => {
                // Animate in when entering the section from the top
                gsap.fromTo('.app-mockup', 
                    { opacity: 0, x: '-100%' }, 
                    { opacity: 1, x: '0%', duration: 1, ease: 'power4.out' }
                );
                gsap.fromTo('.app-details', 
                    { opacity: 0, x: '100%' }, 
                    { opacity: 1, x: '0%', duration: 1, ease: 'power4.out' }
                );
            },
            onEnterBack: () => {
                // Re-trigger animation when scrolling back to the section
                gsap.fromTo('.app-mockup', 
                    { opacity: 0, x: '-100%' }, 
                    { opacity: 1, x: '0%', duration: 1, ease: 'power4.out' }
                );
                gsap.fromTo('.app-details', 
                    { opacity: 0, x: '100%' }, 
                    { opacity: 1, x: '0%', duration: 1, ease: 'power4.out' }
                );
            },
            onLeave: () => {
                // Optionally, reset the animation when leaving the section (if needed)
                gsap.set('.app-mockup', { opacity: 0, x: '-100%' });
                gsap.set('.app-details', { opacity: 0, x: '100%' });
            },
        });

        // Clean up ScrollTrigger on component unmount
        // return () => ScrollTrigger.kill();
    }, []);

    return (
        <section className="nine-section relative left-[100px] min-h-screen flex items-center justify-center font-sans">
            <div className="app-section flex items-center space-x-8">
                <div className="app-mockup">
                    <img src="/phone.png" alt="Mobile App Screenshot" className="max-w-[300px] shadow-lg h-[400px]" />
                </div>
                <div className="app-details">
                <img
                            className="absolute top-[35%] left-[5px] w-3 h-3"
                            src="./kArrow.svg"
                            alt="arrow"
                           
                        />
                        <img
                            className="absolute top-[60%] left-[5px] w-3 h-3"
                            src="./kArrow.svg"
                            alt="arrow"
                           
                        />
                    <h1 className="text-[40px]  leading-[1.1] tracking-tight font-bold max-w-[300px] font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#C99CFF] to-[#FF99CC]">
                        Mobile App
                    </h1>
                    <ul className="list-none mb-8">
                        <li className="text-white relative left-[25px] text-xl my-4">Remote control of temperature, lighting, audio, and more.</li>
                        <li className="text-white relative left-[25px] text-xl my-4">Preset customization setup.</li>
                    </ul>
                    <button className="download-button transform bg-white/10 hover:bg-blue-700 text-white text-xl px-8 py-4 rounded-full border border-white/30 transition-all">
                        Download App
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MobileApp;
