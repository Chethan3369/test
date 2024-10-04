// import React, { useEffect, useState } from 'react';
// import './Control.css';

// const ControlNumi = ({triggerAnimations}) => {
//     const [animationStep, setAnimationStep] = useState(0);

//     useEffect(() => {
//         console.log("Trigger Animation:", triggerAnimations);
//         if (triggerAnimations) {
//             const interval = setInterval(() => {
//                 setAnimationStep(prevStep => ( prevStep + 1));
//             }, 1000);  // Adjust the duration as needed

//             return () => clearInterval(interval);  // Cleanup on unmount
//         }
//     }, [triggerAnimations]);

//     return (
//         <div className="control-section">
//             <div className="control-text">
//                 <h1>Always On<br />Control</h1>
//             </div>
//             <div className="control-panel">
//                 <div className="control-image-container">
//                     <img src="./remotePanel.png" alt="Control Panel" />
//                     <img className={`ar0 ${animationStep >= 1 ? 'animate-ar0' : ''}`} src="./img/kArrow.svg" alt="arrow" />
//                     <img className={`ar1 ${animationStep >= 3 ? 'animate-ar1' : ''}`} src="./img/kArrow.svg" alt="arrow" />
//                     <img className={`ar11 ${animationStep >= 3 ? 'animate-ar11' : ''}`} src="./img/kArrow.svg" alt="arrow" />
//                     <img className={`ar2 ${animationStep >= 5 ? 'animate-ar2' : ''}`} src="./img/kArrow.svg" alt="arrow" />
//                     <img className={`ar3 ${animationStep >= 7 ? 'animate-ar3' : ''}`} src="./img/kArrow.svg" alt="arrow" />
//                     <div className={`arrow0 ${animationStep >= 1 ? 'animate-arrow0' : ''}`}></div>
//                     <div className={`arrow1 ${animationStep >= 3 ? 'animate-arrow1' : ''}`}></div>
//                     <div className={`arrowdown0 ${animationStep >= 3 ? 'animate-arrowdown0' : ''}`}></div>
//                     <div className={`arrowdown1 ${animationStep >= 3 ? 'animate-arrowdown1' : ''}`}></div>
//                     <div className={`arrow2 ${animationStep >= 5 ? 'animate-arrow2' : ''}`}></div>
//                     <div className={`arrow3 ${animationStep >= 7 ? 'animate-arrow3' : ''}`}></div>
//                 </div>
//                 <div className='pla'>
//                     <p className={`play-music ${animationStep >= 2 ? 'animate-play-music' : ''}`}>Play / Pause Music</p>
//                     <p className={`play-music1 ${animationStep >= 4 ? 'animate-play-music1' : ''}`}>Spray Pressure</p>
//                     <p className={`play-music2 ${animationStep >= 4 ? 'animate-play-music2' : ''}`}>Spray Angle</p>
//                     <p className={`play-music3 ${animationStep >= 6 ? 'animate-play-music3' : ''}`}>Heated Seating</p>
//                     <p className={`play-music4 ${animationStep >= 8 ? 'animate-play-music4' : ''}`}>LED Lighting</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ControlNumi;

// import React from 'react';
// import { motion, useViewportScroll, useTransform } from 'framer-motion';
// import './Control.css';

// const ControlNumi = () => {
//     const { scrollYProgress } = useViewportScroll();

//     // Arrow animations based on scroll
//     const arrowOpacity0 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
//     const arrowOpacity1 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
//     const arrowOpacity2 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
//     const arrowOpacity3 = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

//     const arrowTranslateY0 = useTransform(scrollYProgress, [0.1, 0.2], [50, 0]);
//     const arrowTranslateY1 = useTransform(scrollYProgress, [0.3, 0.4], [50, 0]);
//     const arrowTranslateY2 = useTransform(scrollYProgress, [0.5, 0.6], [50, 0]);
//     const arrowTranslateY3 = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);

//     // Arrow down animations based on scroll
//     const arrowdownOpacity0 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
//     const arrowdownOpacity1 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

//     const arrowdownTranslateY0 = useTransform(scrollYProgress, [0.3, 0.4], [50, 0]);
//     const arrowdownTranslateY1 = useTransform(scrollYProgress, [0.5, 0.6], [50, 0]);

//     // Text animations based on scroll
//     const textOpacity1 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
//     const textOpacity2 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
//     const textOpacity3 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
//     const textOpacity4 = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

//     return (
//         <section className='seven-section overflow-hidden'>
//         <div className="control-section">
//             <div className="control-text">
//                 <h1>Always On<br />Control</h1>
//             </div>
//             <div className="control-panel">
//                 <div className="control-image-container">
//                     <motion.img 
//                         src="./remotePanel.png" 
//                         alt="Control Panel" 
//                         className="control-panel-image"
//                     />
//                     {/* Horizontal Arrows */}
//                     <motion.img
//                         className="ar0"
//                         src="./kArrow.svg"
//                         alt="arrow"
//                         style={{ opacity: arrowOpacity0, translateY: arrowTranslateY0 }}
//                     />
//                     <motion.img
//                         className="ar1"
//                         src="./kArrow.svg"
//                         alt="arrow"
//                         style={{ opacity: arrowOpacity1, translateY: arrowTranslateY1 }}
//                     />
//                     <motion.img
//                         className="ar2"
//                         src="./kArrow.svg"
//                         alt="arrow"
//                         style={{ opacity: arrowOpacity2, translateY: arrowTranslateY2 }}
//                     />
//                     <motion.img
//                         className="ar3"
//                         src="./kArrow.svg"
//                         alt="arrow"
//                         style={{ opacity: arrowOpacity3, translateY: arrowTranslateY3 }}
//                     />
//                 </div>

//                 <div className="arrows-container">
//                     {/* Horizontal Lines */}
//                     <motion.div 
//                         className="arrow0"
//                         style={{ opacity: arrowOpacity0, translateY: arrowTranslateY0 }}
//                     />
//                     <motion.div 
//                         className="arrow1"
//                         style={{ opacity: arrowOpacity1, translateY: arrowTranslateY1 }}
//                     />
//                     <motion.div 
//                         className="arrow2"
//                         style={{ opacity: arrowOpacity2, translateY: arrowTranslateY2 }}
//                     />
//                     <motion.div 
//                         className="arrow3"
//                         style={{ opacity: arrowOpacity3, translateY: arrowTranslateY3 }}
//                     />
//                     {/* Vertical Arrows */}
//                     <motion.div 
//                         className="arrowdown0"
//                         style={{ 
//                             opacity: arrowdownOpacity0, 
//                             translateY: arrowdownTranslateY0,
//                         }}
//                     />
//                     <motion.div 
//                         className="arrowdown1"
//                         style={{ 
//                             opacity: arrowdownOpacity1, 
//                             translateY: arrowdownTranslateY1,
//                         }}
//                     />
//                 </div>

//                 <div className='pla'>
//                     <motion.p
//                         className="play-music"
//                         style={{ opacity: textOpacity1 }}
//                     >
//                         Play / Pause Music
//                     </motion.p>
//                     <motion.p
//                         className="play-music1"
//                         style={{ opacity: textOpacity2 }}
//                     >
//                         Spray Pressure
//                     </motion.p>
//                     <motion.p
//                         className="play-music2"
//                         style={{ opacity: textOpacity3 }}
//                     >
//                         Spray Angle
//                     </motion.p>
//                     <motion.p
//                         className="play-music3"
//                         style={{ opacity: textOpacity4 }}
//                     >
//                         Heated Seating
//                     </motion.p>
//                     <motion.p
//                         className="play-music4"
//                         style={{ opacity: textOpacity4 }}
//                     >
//                         LED Lighting
//                     </motion.p>
//                 </div>
//             </div>
//         </div>
//         </section>
//     );
// };

// export default ControlNumi;






// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// //import './Control.css'; // Ensure you have necessary styles in this file

// gsap.registerPlugin(ScrollTrigger);

// const ControlNumi = () => {
//   const controlSectionRef = useRef(null); // Reference to the control section

//   const arrow0Ref = useRef(null);
//   const arrow1Ref = useRef(null);
//   const arrow2Ref = useRef(null);
//   const arrow3Ref = useRef(null);

//   const arrowDown0Ref = useRef(null);
//   const arrowDown1Ref = useRef(null);

//   const textRef1 = useRef(null);
//   const textRef2 = useRef(null);
//   const textRef3 = useRef(null);
//   const textRef4 = useRef(null);
//   const textRef5 = useRef(null);

//   const sectionRef = useRef(null);


//   useEffect(() => {
//     // GSAP Animations for horizontal arrows
//     [arrow0Ref, arrow1Ref, arrow2Ref, arrow3Ref].forEach((arrowRef, index) => {
//       gsap.fromTo(
//         arrowRef.current,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           scrollTrigger: {
//             trigger: arrowRef.current,
//             start: 'top 80%',
//             end: 'top 60%',
//             scrub: true,
//           },
//         }
//       );
//     });

//     // GSAP Animations for vertical arrows
//     [arrowDown0Ref, arrowDown1Ref].forEach((arrowRef) => {
//       gsap.fromTo(
//         arrowRef.current,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           scrollTrigger: {
//             trigger: arrowRef.current,
//             start: 'top 80%',
//             end: 'top 60%',
//             scrub: true,
//           },
//         }
//       );
//     });

//     // GSAP Animations for text
//     [textRef1, textRef2, textRef3, textRef4, textRef5].forEach((textRef) => {
//       gsap.fromTo(
//         textRef.current,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           scrollTrigger: {
//             trigger: textRef.current,
//             start: 'top 70%',
//             end: 'top 50%',
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Zoom-out effect when the Eight-section is reached
//     // ScrollTrigger.create({
//     //   trigger: '.Eight-section', // Trigger when Eight-section is in view
//     //   start: 'top center', // When the top of Eight-section reaches the center of the viewport
//     //   onEnter: () => {
//     //     gsap.to(controlSectionRef.current, {
//     //       duration: 2,
//     //       opacity: 0,
//     //       scale: 1.2,
//     //       ease: 'power1.inOut',
//     //     });
//     //   },
     
//     // });

    
//     // Trigger the zoom-in effect when the Eight-section is in view
//     const sectionAnimation = gsap.fromTo(
//       sectionRef.current,
//       {scale:1,  opacity: 0 },
//       {
//         scale:1,
//         opacity: 1,
//         duration: 2,
//         paused: true, // Prevent it from starting immediately
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top center',
//           end: 'bottom center',
//           scrub: false,
//           onEnter: () => sectionAnimation.restart(), // Restart animation on entering the section
//           onLeaveBack: () => sectionAnimation.reverse(), // Reverse animation when scrolling back
//         },
//       }
//     );
//   }, []);

//   return (
//     <section ref={sectionRef} className="Eight-section  overflow-hidden max-h-screen flex flex-col items-center text-center text-white font-sans ">
//       <div
//         ref={controlSectionRef}
//         className="control-section flex justify-center items-center max-h-screen px-8"
//       >
//         <div className="control-text mr-12 text-left">
//           <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
//             Always On <br /> Control
//           </h1>
//         </div>

//         <div className="control-panel relative">
//           <div className="control-image-container relative">
//             <img
//               src="./remotePanel.png"
//               alt="Control Panel"
//               className="max-w-[400px] rounded-full shadow-lg"
//             />

//             {/* Horizontal Arrows */}
//             <div
//               ref={arrow0Ref}
//               className="absolute arrow0 bg-gray-300 h-1 w-32 top-10 right-[-80px]"
//             />
//             <img
//               ref={arrow0Ref}
//               className="absolute ar0 top-6 right-[-95px] h-6 w-6 transform rotate-90"
//               src="./kArrow.svg"
//               alt="arrow"
//             />

//             <div
//               ref={arrow1Ref}
//               className="absolute arrow1 bg-gray-300 h-1 w-32 top-28 right-[-80px]"
//             />
//             <img
//               ref={arrow1Ref}
//               className="absolute ar1 top-24 right-[-95px] h-6 w-6 transform rotate-90"
//               src="./kArrow.svg"
//               alt="arrow"
//             />

//             <div
//               ref={arrow2Ref}
//               className="absolute arrow2 bg-gray-300 h-1 w-32 top-48 right-[-80px]"
//             />
//             <img
//               ref={arrow2Ref}
//               className="absolute ar2 top-44 right-[-95px] h-6 w-6 transform rotate-90"
//               src="./kArrow.svg"
//               alt="arrow"
//             />

//             <div
//               ref={arrow3Ref}
//               className="absolute arrow3 bg-gray-300 h-1 w-32 top-72 right-[-80px]"
//             />
//             <img
//               ref={arrow3Ref}
//               className="absolute ar3 top-68 right-[-95px] h-6 w-6 transform rotate-90"
//               src="./kArrow.svg"
//               alt="arrow"
//             />
//           </div>

//           <div className="arrows-container">
//             {/* Vertical Arrows */}
//             <div
//               ref={arrowDown0Ref}
//               className="absolute arrowdown0 bg-gray-300 h-20 w-1 left-[50%] top-10"
//             />
//             <div
//               ref={arrowDown1Ref}
//               className="absolute arrowdown1 bg-gray-300 h-20 w-1 left-[50%] top-28"
//             />
//           </div>

//           {/* Text descriptions */}
//           <div className="pla text-right text-white">
//             <p ref={textRef1} className="text-lg">
//               Play / Pause Music
//             </p>
//             <p ref={textRef2} className="text-lg mt-4">
//               Spray Pressure
//             </p>
//             <p ref={textRef3} className="text-lg mt-4">
//               Spray Angle
//             </p>
//             <p ref={textRef4} className="text-lg mt-4">
//               Heated Seating
//             </p>
//             <p ref={textRef5} className="text-lg mt-4">
//               LED Lighting
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ControlNumi;





// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './Control.css';

// gsap.registerPlugin(ScrollTrigger);

// const ControlNumi = () => {
//     const controlPanelRef = useRef(null);
//     const arrowsRef = useRef([]);
//     const textsRef = useRef([]);
//     const sectionRef=useRef([]);

//     useEffect(() => {
//         const arrowTranslateY = 50;
//         // Arrows animation
//         arrowsRef.current.forEach((arrow, index) => {
//             gsap.fromTo(
//                 arrow,
//                 { opacity: 0, y: arrowTranslateY },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     scrollTrigger: {
//                         trigger: arrow,
//                         start: `top 80%`,
//                         end: `top 80%`,
//                         scrub: true,
//                     }
//                 }
//             );
//         });

//         // Text animation
//         textsRef.current.forEach((text, index) => {
//             gsap.fromTo(
//                 text,
//                 { opacity: 0 },
//                 {
//                     opacity: 1,
//                     scrollTrigger: {
//                         trigger: text,
//                         start: 'top 70%',
//                         end: 'top 70%',
//                         scrub: true,
//                     },
//                 }
//             );
//         });

//         //     // Trigger the zoom-in effect when the Eight-section is in view
//     const sectionAnimation = gsap.fromTo(
//       sectionRef.current,
//       { scale: 1, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 2,
//         paused: true, // Prevent it from starting immediately
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top center',
//           end: 'bottom center',
//           scrub: false,
//           onEnter: () => sectionAnimation.restart(), // Restart animation on entering the section
//           onLeaveBack: () => sectionAnimation.reverse(), // Reverse animation when scrolling back
//         },
//       }
//     );

//     }, []);

//     return (
//         <section ref={sectionRef} className="Eight-section overflow-hidden min-h-screen">
//             <div className="control-section flex items-center justify-center py-10 min-h-screen">
//                 <div className="control-text mr-15 text-left">
//                     <h1 className="text-5xl  font-bold text-gradient mb-5">Always On<br />Control</h1>
//                 </div>
//                 <div className="control-panel relative flex items-center" ref={controlPanelRef}>
//                     <div className="control-image-container relative">
//                         <img 
//                             src="./remotePanel.png" 
//                             alt="Control Panel" 
//                             className="w-80 rounded-full shadow-lg"
//                         />
//                         {/* Horizontal Arrows */}
//                         <img
//                             className="absolute top-[9%] right-[-50px] w-3 h-3"
//                             src="./kArrow.svg"
//                             alt="arrow"
//                             ref={el => arrowsRef.current[0] = el}
//                         />
//                         <img
//                             className="absolute top-[31%] right-[-160px] w-3 h-3"
//                             src="./kArrow.svg"
//                             alt="arrow"
//                             ref={el => arrowsRef.current[1] = el}
//                         />
//                         <img
//                             className="absolute top-[42%] right-[-160px] w-3 h-3"
//                             src="./kArrow.svg"
//                             alt="arrow"
//                             ref={el => arrowsRef.current[2] = el}
//                         />
//                         <img
//                             className="absolute top-[69%] right-[-110px] w-3 h-3"
//                             src="./kArrow.svg"
//                             alt="arrow"
//                             ref={el => arrowsRef.current[3] = el}
//                         />

//                         <img
//                             className="absolute top-[87.5%] right-[-80px] w-3 h-3"
//                             src="./kArrow.svg"
//                             alt="arrow"
//                             ref={el => arrowsRef.current[4] = el}
//                         />
//                     </div>
//                     <div className="arrows-container relative min-h-screen">
//     {/* Horizontal Lines */}
//     <div
//         className="absolute top-[148px] right-[-20px] w-[160px] h-0.5 bg-gray-50"
//         ref={el => arrowsRef.current[5] = el}
//     />
//     <div
//         className="absolute top-[220px] right-[-130px] w-[370px] h-0.5 bg-gray-300"
//         ref={el => arrowsRef.current[6] = el}
//     />
//     <div
//         className="absolute top-[340px] right-[-90px] w-[225px] h-0.5 bg-gray-100"
//         ref={el => arrowsRef.current[7] = el}
//     />
//     <div
//         className="absolute top-[400px] right-[-60px] w-[200px] h-0.5 bg-gray-300"
//         ref={el => arrowsRef.current[8] = el}
//     />


//  {/* Vertical Arrows */}
//  <div
//   className="absolute top-[40.2%] left-[-240px] w-0.5 h-5 bg-gray-300 transform rotate-180"
//   ref={(el) => (arrowsRef.current[9] = el)}
// />
// <div
//   className="absolute top-[40.2%] left-[-90px] w-0.5 h-5 bg-gray-300 transform rotate-180"
//   ref={(el) => (arrowsRef.current[10] = el)}
// />

          

// </div>



//                     <div className="relative pla min-h-[500px]">
//                         <p
//                             className="absolute text-white text-lg right-[-240px] top-[21.5%]"
//                             ref={el => textsRef.current[0] = el}
//                         >
//                             Play / Pause Music
//                         </p>
//                         <p
//                             className="absolute text-white text-lg right-[-285px] top-[35.9%]"
//                             ref={el => textsRef.current[1] = el}
//                         >
//                             Spray Pressure
//                         </p>
//                         <p
//                             className="absolute text-white text-lg right-[-266px] top-[43%]"
//                             ref={el => textsRef.current[2] = el}
//                         >
//                             Spray Angle
//                         </p>
//                         <p
//                             className="absolute text-white text-lg right-[-250px] top-[60%]"
//                             ref={el => textsRef.current[3] = el}
//                         >
//                             Heated Seating
//                         </p>
//                         <p
//                             className="absolute text-white text-lg right-[-190px] top-[72%]"
//                             ref={el => textsRef.current[4] = el}
//                         >
//                             LED Lighting
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ControlNumi;



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
