// import React from 'react';
// import './Audio.css';
// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';

// const spotifyIcon = 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg';
// const alexaIcon = '/amazon-alexa.svg';

// const AudioControl = () => {
    
//     const titleControls = useAnimation();
//     const listControls = useAnimation();
//     const iconControls = useAnimation();
//     const imageControls = useAnimation();

//     const images = Array.from({ length: 60 }, (_, i) => `/imgseq/speaker/numi_speaker_${String(i + 1).padStart(4, '0')}.png`);

//     useEffect(() => {
        
//         const animateComponents = async () => {
            
//             titleControls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
//             listControls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
//             iconControls.start({ opacity: 1, transition: { duration: 1 } });
//             imageControls.start({ scale: 1, opacity: 1, transition: { duration: 1 } });
//         };
//         animateComponents(); 
//     }, [titleControls, listControls, iconControls, imageControls]);

//     return (
//         <div className="containers">
//             <div className="text-contenttis">
//                 <motion.h1
//                     className="titless"
//                     initial={{ y: -20, opacity: 0 }} 
//                     animate={titleControls} 
//                 >
//                     Audio Control
//                 </motion.h1>
//                 <motion.ul
//                     className="feature-lists"
//                     initial={{ x: -20, opacity: 0 }} 
//                     animate={listControls} 
//                 >
//                     <motion.li className="feature-items">Voice Control</motion.li>
//                     <motion.li className="feature-items">Music Playback</motion.li>
//                     <motion.div
//                         className="icon-containers"
//                         initial={{ opacity: 0 }} 
//                         animate={iconControls} 
//                     >
//                         <img src={spotifyIcon} alt="Spotify" className="icon" />
//                         <img src={alexaIcon} alt="Alexa" className="icon-alexa" />
//                     </motion.div>
//                 </motion.ul>
//             </div>
            
//             <motion.div
//                 className="image-containerr"
//                 initial={{ scale: 0.9, opacity: 0 }} 
//                 animate={imageControls} 
//             >
//          {images.map((src, index) => (
//     <motion.img
//     key={index}
//     src={src}
//     alt={`Speaker Image ${index + 1}`}
//     className="image"
//     initial={{ opacity: 0 }} // Initially hidden
//     animate={index === 59 ? { opacity: 1 } : { opacity: [0, 1, 0] }} // If it's the last image (index 59), keep it visible
//     transition={{
//         delay: index * 0.5, // Staggered delay between each image
//         duration: index === 59 ? 1 : 1, // Standard duration for all images
//         times: index === 59 ? [0, 1] : [0, 0.5, 1], // Times array for fade-in/fade-out or just fade-in for the last image
//         ease: 'easeInOut',
//         repeat: 0, // No repeat, runs once
//     }}
// />
// ))}
//             </motion.div>
//         </div>
//     );
// };

// export default AudioControl;


// import React from 'react';
// import './Audio.css';
// import { motion } from 'framer-motion';

// const AudioControl = () => {

//     // Create an array of 60 images
//     const images = Array.from({ length: 60 }, (_, i) => `/imgseq/speaker/numi_speaker_${String(i + 1).padStart(4, '0')}.png`);

//     return (
//         <div className="containers">
//             <div className="text-contenttis">
//                 <h1 className="titless">Audio Control</h1>
//                 <ul className="feature-lists">
//                     <li className="feature-items">Voice Control</li>
//                     <li className="feature-items">Music Playback</li>
//                     <div className="icon-containers">
//                         <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" alt="Spotify" className="icon" />
//                         <img src="/amazon-alexa.svg" alt="Alexa" className="icon-alexa" />
//                     </div>
//                 </ul>
//             </div>

//             <div className="image-container">
//                 {images.map((src, index) => (
//                     <motion.img
//                         key={index}
//                         src={src}
//                         alt={`Speaker Image ${index + 1}`}
//                         className="image"
//                         initial={{ opacity: 0 }} // Initially hidden
//                         animate={index === 59 ? { opacity: 1 } : { opacity: [0, 1, 0] }} // If it's the last image (index 59), keep it visible
//                         transition={{
//                             delay: index * 0.5, // Staggered delay between each image
//                             duration: index === 59 ? 1 : 1, // Standard duration for all images
//                             times: index === 59 ? [0, 1] : [0, 0.5, 1], // Times array for fade-in/fade-out or just fade-in for the last image
//                             ease: 'easeInOut',
//                             repeat: 0, // No repeat, runs once
//                         }}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AudioControl;


// import React, { useEffect } from 'react';
// import './Audio.css';
// import { motion } from 'framer-motion';

// const spotifyIcon = 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg';
// const alexaIcon = '/amazon-alexa.svg';

// const AudioControl = ({ triggerAnimation }) => {
//     // Array of 60 images
//     const images = Array.from({ length: 60 }, (_, i) => `/imgseq/speaker/numi_speaker_${String(i + 1).padStart(4, '0')}.png`);

    

//     return (
//         <div className="containerrss">
//             <div className="text-contenttis">
//                 <motion.h1
//                     className="titless"
//                     initial={{ y: -20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
//                 >
//                     Audio Control
//                 </motion.h1>
//                 <motion.ul
//                     className="feature-lists"
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
//                 >
//                     <motion.li className="feature-items">Voice Control</motion.li>
//                     <motion.li className="feature-items">Music Playback</motion.li>
//                     <motion.div
//                         className="icon-containers"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1, transition: { duration: 1 } }}
//                     >
//                         <img src={spotifyIcon} alt="Spotify" className="icon" />
//                         <img src={alexaIcon} alt="Alexa" className="icon-alexa" />
//                     </motion.div>
//                 </motion.ul>
//             </div>

//             <div className="image-containerrss">
//                 {images.map((src, index) => (
//                     <motion.img
//                         key={index}
//                         src={src}
//                         alt={`Speaker Image ${index + 1}`}
//                         className="imagei"
//                         initial={{ opacity: 0 }} // Initially hidden
//                         animate={index === 59 ? { opacity: 1 } :{ opacity: [0, 1, 1, 0] }} // Image fades in, stays, and fades out
//                         transition={{
//                             delay: index * 0.1, // Adjust the delay for smooth transitions
//                             duration: 0.5, // Total duration for fade-in and fade-out
//                             ease: 'easeInOut',
//                         }}
//                         style={{
//                             position: 'absolute', // Stack the images on top of each other
//                             top: 0,
                            
//                         }}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AudioControl;


// import React, { useEffect } from 'react';
// import './Audio.css';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { motion, useAnimation } from 'framer-motion';

// const spotifyIcon = 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg';
// const alexaIcon = '/amazon-alexa.svg';

// const AudioControl = ({ triggerAnimation }) => {
   
//     const controls = useAnimation();

    
   
//     const images = Array.from({ length: 60 }, (_, i) => `/imgseq/speaker/numi_speaker_${String(i + 1).padStart(4, '0')}.png`);

//     useEffect(() => {
//         if (triggerAnimation) {
//             controls.start({ opacity: 1, transition: { duration: 1 } });
//         }
       
//     }, [triggerAnimation, controls]);

//     useEffect(() => {
//         ScrollTrigger.create({
//             trigger: '.ten-section',
//             start: 'top center',
//             onEnter: () => {
//                 // Animate text (h1) and features
//                 gsap.fromTo('.ten-section', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out' });
//                 gsap.fromTo('.feature-lists', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 0.5 });
//                 gsap.fromTo('.icon-containers', { opacity: 0, y: 50, scale: 0.5 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 1 });

//                 images.forEach((src, index) => {
//                     gsap.fromTo(`.image-${index}`, { opacity: 0, scale: 0.5, x: 100 }, { opacity: 1, scale: 1, x: 0, duration: 0.5, delay: index * 0.05, ease: 'power4.out' });
//                 });
//             },
//             onEnterBack: () => {
//                 // Re-trigger animations when coming back to the section
//                 gsap.fromTo('.ten-section', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out' });
//                 gsap.fromTo('.feature-lists', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 0.5 });
//                 gsap.fromTo('.icon-containers', { opacity: 0, y: 50, scale: 0.5 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 1 });

//                 images.forEach((src, index) => {
//                     gsap.fromTo(`.image-${index}`, { opacity: 0, scale: 0.5, x: 100 }, { opacity: 1, scale: 1, x: 0, duration: 0.5, delay: index * 0.05, ease: 'power4.out' });
//                 });
//             },
//         });

//         // return () => ScrollTrigger.kill();
//     }, [images]);

//     return (
//         <section className='ten-section overflow-hidden'>
//         <div className="containerrss" animate={controls}>
//             <div className="text-contenttis">
//                 <motion.h1
//                     className="titless"
//                     initial={{ y: -20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
//                 >
//                     Audio Control
//                 </motion.h1>
//                 <motion.ul
//                     className="feature-lists"
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
//                 >
//                     <motion.li className="feature-items">Voice Control</motion.li>
//                     <motion.li className="feature-items">Music Playback</motion.li>
//                     <motion.div
//                         className="icon-containers"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1, transition: { duration: 1 } }}
//                     >
//                         <img src={spotifyIcon} alt="Spotify" className="icon" />
//                         <img src={alexaIcon} alt="Alexa" className="icon-alexa" />
//                     </motion.div>
//                 </motion.ul>
//             </div>

//             <div className="image-containerrss">
//                 {images.map((src, index) => (
//                     <motion.img
//                         key={index}
//                         src={src}
//                         alt={`Speaker Image ${index + 1}`}
//                         className="image"
//                         initial={{ opacity: 0 }} // Initially hidden
//                         animate={index === 59 ? { opacity: 1 } : { opacity: [0, 1, 1, 0] }} // Fade in, stay, fade out
//                         transition={{
//                             delay: index * 0.1, // Adjust delay for smooth transitions
//                             duration: 0.5,
//                             ease: 'easeInOut',
//                         }}
//                         style={{
//                             position: 'absolute', // Stack images
//                             top: 0,
//                         }}
//                     />
//                 ))}
//             </div>
//             {/* <div className="image-container ">
//                     {images.map((src, index) => (
//                         <img
//                             key={index}
//                             src={src}
//                             alt={`Speaker Image ${index + 1}`}
//                             className={`image absolute right-[-00px] w-4/5 h-full object-cover image-${index}`}
//                             // style={{ zIndex: images.length - index }} // Ensures the last image is on top
//                         />
//                     ))}
//                 </div> */}
//         </div>
//         </section>
//     );
// };

// export default AudioControl;


// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './Audio.css';

// gsap.registerPlugin(ScrollTrigger);

// const spotifyIcon = 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg';
// const alexaIcon = '/amazon-alexa.svg';

// const AudioControl = () => {
//     const images = Array.from({ length: 60 }, (_, i) => `/imgseq/speaker/numi_speaker_${String(i + 1).padStart(4, '0')}.png`);

//     useEffect(() => {
//         ScrollTrigger.create({
//             trigger: '.ten-section',
//             start: 'top center',
//             onEnter: () => {
//                 // Animate text (h1) and features
//                 gsap.fromTo('.titless', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out' });
//                 gsap.fromTo('.feature-lists', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 0.5 });
//                 gsap.fromTo('.icon-containers', { opacity: 0, y: 50, scale: 0.5 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 1 });

//                 images.forEach((src, index) => {
//                     gsap.fromTo(`.image-${index}`, { opacity: 0, scale: 0.5, x: 100 }, { opacity: 1, scale: 1, x: 0, duration: 0.5, delay: index * 0.05, ease: 'power4.out' });
//                 });
//             },
//             onEnterBack: () => {
//                 // Re-trigger animations when coming back to the section
//                 gsap.fromTo('.titless', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out' });
//                 gsap.fromTo('.feature-lists', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 0.5 });
//                 gsap.fromTo('.icon-containers', { opacity: 0, y: 50, scale: 0.5 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 1 });

//                 images.forEach((src, index) => {
//                     gsap.fromTo(`.image-${index}`, { opacity: 0, scale: 0.5, x: 100 }, { opacity: 1, scale: 1, x: 0, duration: 0.5, delay: index * 0.05, ease: 'power4.out' });
//                 });
//             },
//         });

//        // return () => ScrollTrigger.kill();
//     }, [images]);

//     return (
//         <section className="ten-section h-screen flex  items-center justify-center overflow-hidden">
//             <div className="relative flex flex-col items-center justify-center">
//                 {/* Container for text */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
//                     <h1 className="titless text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400 mb-6">
//                         Audio Control
//                     </h1>
//                     <ul className="feature-lists mt-3 text-xl space-y-4">
//                         <li className="feature-items">Voice Control</li>
//                         <li className="feature-items">Music Playback</li>
//                     </ul>
//                     <div className="icon-containers flex mt-4 space-x-4 justify-center">
//                         <img src={spotifyIcon} alt="Spotify" className="w-10 h-10" />
//                         <img src={alexaIcon} alt="Alexa" className="w-10 h-10 invert" />
//                     </div>
//                 </div>

//                 {/* Container for images */}
//                 <div className="image-containerrss flex justify-center items-center w-full h-full">
//                     {images.map((src, index) => (
//                         <img
//                             key={index}
//                             src={src}
//                             alt="speaker"
//                             className={`image absolute w-4/5 h-full object-cover image-${index}`}
//                             style={{ zIndex: images.length - index }} // Ensures the last image is on top
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AudioControl;





// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const spotifyIcon = 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg';
// const alexaIcon = '/amazon-alexa.svg';

// const AudioControl = () => {
//     const images = Array.from({ length: 60 }, (_, i) => `/imgseq/speaker/numi_speaker_${String(i + 1).padStart(4, '0')}.png`);

//     useEffect(() => {
//         const trigger = ScrollTrigger.create({
//             trigger: '.ten-section',
//             start: 'top center',
//             onEnter: animateElements,
//             onEnterBack: animateElements,
//         });

//         return () => {
//             trigger.kill();
//         };
//     }, [images]);

//     const animateElements = () => {
//         // Animate title
//         gsap.fromTo('.titless', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out' });
        
//         // Animate feature list
//         gsap.fromTo('.feature-lists', { opacity: 0, y: -20, scale: 0.5 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 0.5 });
        
//         // Animate icons
//         gsap.fromTo('.icon-containers', { opacity: 0, y: 20, scale: 0.5 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 1 });
        
//         // Animate images
//         images.forEach((_, index) => {
//             gsap.fromTo(`.image-${index}`, { opacity: 0, scale: 0.5, x: 100 }, { opacity: 1, scale: 1, x: 0, duration: 0.5, delay: index * 0.05, ease: 'power4.out' });
//         });
//     };

//     return (
//         <section className="ten-section h-screen flex items-center justify-center overflow-hidden relative">
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
//                 <h1 className="titless text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
//                     Audio Control
//                 </h1>
//                 <ul className="feature-lists text-xl space-y-4 mb-4">
//                     <li className="feature-items">Voice Control</li>
//                     <li className="feature-items">Music Playback</li>
//                 </ul>
//                 <div className="icon-containers flex space-x-4">
//                     <img src={spotifyIcon} alt="Spotify" className="w-10 h-10" />
//                     <img src={alexaIcon} alt="Alexa" className="w-10 h-10 invert" />
//                 </div>
//             </div>

//             {/* <div className="image-containerrss flex justify-center items-center w-full h-full">
//                 {images.map((src, index) => (
//                     <img
//                         key={index}
//                         src={src}
//                         alt={`Speaker Image ${index + 1}`}
//                         className={`image absolute w-4/5 h-full object-cover image-${index}`}
//                         style={{ zIndex: images.length - index, left: '50%', transform: 'translateX(-50%)' }}
//                     />
//                 ))}
//             </div> */}
//             <div className="image-containerrss">
//                 {images.map((src, index) => (
//                     <img
//                         key={index}
//                         src={src}
//                         alt={`Speaker Image ${index + 1}`}
//                         className="image"
//                         initial={{ opacity: 0 }} // Initially hidden
//                         animate={index === 59 ? { opacity: 1 } : { opacity: [0, 1, 1, 0] }} // Fade in, stay, fade out
//                         transition={{
//                             delay: index * 0.1, // Adjust delay for smooth transitions
//                             duration: 0.5,
//                             ease: 'easeInOut',
//                         }}
//                         style={{
//                             position: 'absolute', // Stack images
//                             top: 0,
//                         }}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default AudioControl;









// import React, { useEffect } from 'react';
// import './Audio.css';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import { motion, useAnimation } from 'framer-motion';

// const spotifyIcon = 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg';
// const alexaIcon = '/amazon-alexa.svg';

// const AudioControl = ({ triggerAnimation }) => {
   
//     //const controls = useAnimation();

    
   
//     const images = Array.from({ length: 60 }, (_, i) => `/imgseq/speaker/numi_speaker_${String(i + 1).padStart(4, '0')}.png`);

//     // useEffect(() => {
//     //     if (triggerAnimation) {
//     //         controls.start({ opacity: 1, transition: { duration: 1 } });
//     //     }
       
//     // }, [triggerAnimation, controls]);

//     useEffect(() => {
//         ScrollTrigger.create({
//             trigger: '.ten-section',
//             start: 'top center',
//             onEnter: () => {
//                 // Animate text (h1) and features
//                 gsap.fromTo('.ten-section', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out' });
//                 gsap.fromTo('.feature-lists', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 0.5 });
//                 gsap.fromTo('.icon-containers', { opacity: 0, y: 50, scale: 0.5 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 1 });

//                 images.forEach((src, index) => {
//                     gsap.fromTo(`.image-${index}`, { opacity: 0, scale: 0.5, x: 100 }, { opacity: 1, scale: 1, x: 0, duration: 0.5, delay: index * 0.05, ease: 'power4.out' });
//                 });
//             },
//             onEnterBack: () => {
//                 // Re-trigger animations when coming back to the section
//                 gsap.fromTo('.ten-section', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out' });
//                 gsap.fromTo('.feature-lists', { opacity: 0, x: -100, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 0.5 });
//                 gsap.fromTo('.icon-containers', { opacity: 0, y: 50, scale: 0.5 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power4.out', delay: 1 });

//                 images.forEach((src, index) => {
//                     gsap.fromTo(`.image-${index}`, { opacity: 0, scale: 0.5, x: 100 }, { opacity: 1, scale: 1, x: 0, duration: 0.5, delay: index * 0.05, ease: 'power4.out' });
//                 });
//             },
//         });

//         // return () => ScrollTrigger.kill();
//     }, [images]);

//     return (
//         <section className='ten-section overflow-hidden'>
//         <div className="containerrss" >
//             <div className="text-contenttis">
//                 <h1 className="titless"
//                     initial={{ y: -20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
//                 >
//                     Audio Control
//                 </h1>
//                 <ul
//                     className="feature-lists"
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
//                 >
//                     <li className="feature-items">Voice Control</li>
//                     <li className="feature-items">Music Playback</li>
//                     <div
//                         className="icon-containers"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1, transition: { duration: 1 } }}
//                     >
//                         <img src={spotifyIcon} alt="Spotify" className="icon" />
//                         <img src={alexaIcon} alt="Alexa" className="icon-alexa" />
//                     </div>
//                 </ul>
//             </div>

//             <div className="image-containerrss">
//                 {images.map((src, index) => (
//                     <img
//                         key={index}
//                         src={src}
//                         alt={`Speaker Image ${index + 1}`}
//                         className="image"
//                         initial={{ opacity: 0 }} // Initially hidden
//                         animate={index === 59 ? { opacity: 1 } : { opacity: [0, 1, 1, 0] }} // Fade in, stay, fade out
//                         transition={{
//                             delay: index * 0.1, // Adjust delay for smooth transitions
//                             duration: 0.5,
//                             ease: 'easeInOut',
//                         }}
//                         style={{
//                             position: 'absolute', // Stack images
//                             top: 0,
//                         }}
//                     />
//                 ))}
//             </div>
//             {/* <div className="image-container ">
//                     {images.map((src, index) => (
//                         <img
//                             key={index}
//                             src={src}
//                             alt={`Speaker Image ${index + 1}`}
//                             className={`image absolute right-[-00px] w-4/5 h-full object-cover image-${index}`}
//                             // style={{ zIndex: images.length - index }} // Ensures the last image is on top
//                         />
//                     ))}
//                 </div> */}
//         </div>
//         </section>
//     );
// };

// export default AudioControl;



// import React, { useEffect } from 'react';
// import './Audio.css';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const spotifyIcon = 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg';
// const alexaIcon = '/amazon-alexa.svg';

// const AudioControl = () => {
//     const images = Array.from({ length: 60 }, (_, i) => `/imgseq/speaker/numi_speaker_${String(i + 1).padStart(4, '0')}.png`);

//     useEffect(() => {
//         const animateSection = () => {
//             // Animate text and features
//             const textTl = gsap.timeline();
//             textTl.fromTo('.titless', { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1, ease: 'power4.out' });
//             textTl.fromTo('.feature-lists', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: 'power4.out' });
//             textTl.fromTo('.icon-containers', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power4.out' });

//             // Image sequence animations
//             const imageTl = gsap.timeline();
//             images.forEach((_, index) => {
//                 imageTl.to(`.image-${index}`, { opacity: 1, duration: 0.5, ease: 'power4.out' }, index * 0.05)
//                     .to(`.image-${index}`, { opacity: index === images.length - 1 ? 1 : 0, duration: 0.5 }, index * 0.05 + 0.5); // Keep the last image visible
//             });
//         };

//         const resetImages = () => {
//             gsap.set('.image', { opacity: 0 }); // Reset all images to hidden
//         };

//         ScrollTrigger.create({
//             trigger: '.ten-section',
//             start: 'top center',
//             onEnter: () => {
//                 resetImages(); // Ensure the images are hidden before starting the animation
//                 animateSection(); // Start fresh animation
//             },
//             onEnterBack: () => {
//                 resetImages(); // Hide all images when coming back
//                 animateSection(); // Restart the animation
//             },
//             onLeave: resetImages, // Hide images when leaving the section
//             onLeaveBack: () => {
//                 // Fade out the last image when scrolling up
//                 gsap.to(`.image-${images.length - 1}`, { opacity: 0, duration: 0.5 });
//             },
//         });

//         // return () => {
//         //     ScrollTrigger.kill(); // Clean up ScrollTrigger on component unmount
//         // };
//     }, [images]);

//     return (
//         <section className='ten-section overflow-hidden'>
//             <div className="containerrss">
//                 <div className="text-contenttis">
//                     <h1 className="titless">Audio Control</h1>
//                     <ul className="feature-lists">
//                         <li className="feature-items">Voice Control</li>
//                         <li className="feature-items">Music Playback</li>
//                         <div className="icon-containers">
//                             <img src={spotifyIcon} alt="Spotify" className="icon" />
//                             <img src={alexaIcon} alt="Alexa" className="icon-alexa" />
//                         </div>
//                     </ul>
//                 </div>

//                 <div className="image-containerrss">
//                     {images.map((src, index) => (
//                         <img
//                             key={index}
//                             src={src}
//                             alt={`Speaker Image ${index + 1}`}
//                             className={`image image-${index}`}
//                             style={{
//                                 position: 'absolute',
//                                 opacity: 0, // Initially hidden
//                                 zIndex: images.length - index, // Ensure the last image is on top
//                                 width: '80%', // Adjust width for better visibility
//                                 height: '100%',
//                                 objectFit: 'cover', // Ensure images cover the container
//                             }}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AudioControl;



import React, { useEffect } from 'react';
import './Audio.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const spotifyIcon = 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg';
const alexaIcon = '/amazon-alexa.svg';

const AudioControl = () => {
    const images = Array.from({ length: 60 }, (_, i) => `/imgseq/speaker/numi_speaker_${String(i + 1).padStart(4, '0')}.png`);

    useEffect(() => {
        const animateSection = () => {
            // Animate text and features
            const textTl = gsap.timeline();
            textTl.fromTo('.titless', { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1, ease: 'power4.out' });
            textTl.fromTo('.feature-lists', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: 'power4.out' });
            textTl.fromTo('.icon-containers', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power4.out' });

            // Image sequence animations
            const imageTl = gsap.timeline();
            images.forEach((_, index) => {
                imageTl.to(`.image-${index}`, { opacity: 1, duration: 0.5, ease: 'power4.out' }, index * 0.05)
                    .to(`.image-${index}`, { opacity: index === images.length - 1 ? 1 : 0, duration: 0.5 }, index * 0.05 + 0.5); // Keep the last image visible
            });
        };

        const resetImages = () => {
            gsap.set('.image', { opacity: 0 }); // Reset all images to hidden
        };

        const triggerAnimation = ScrollTrigger.create({
            trigger: '.ten-section',
            start: 'top center',
            onEnter: () => {
                resetImages(); // Ensure the images are hidden before starting the animation
                animateSection(); // Start fresh animation
            },
            onEnterBack: () => {
                resetImages(); // Hide all images when coming back
                animateSection(); // Restart the animation
            },
            onLeave: resetImages, // Hide images when leaving the section
            onLeaveBack: () => {
                // Fade out the last image when scrolling up
                gsap.to(`.image-${images.length - 1}`, { opacity: 0, duration: 0.5 });
            },
        });

        // Clean up ScrollTrigger on component unmount
        // return () => {
        //     triggerAnimation.kill();
        //     ScrollTrigger.kill();
        // };
    }, [images]);

    return (
        <section className='ten-section overflow-hidden'>
            <div className="containerrss">
                <div className="text-contenttis">
                    <h1 className="titless">Audio Control</h1>
                    <ul className="feature-lists">
                        <li className="feature-items">Voice Control</li>
                        <li className="feature-items">Music Playback</li>
                        <div className="icon-containers">
                            <img src={spotifyIcon} alt="Spotify" className="icon" />
                            <img src={alexaIcon} alt="Alexa" className="icon-alexa" />
                        </div>
                    </ul>
                </div>

                <div className="image-containerrss">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Speaker Image ${index + 1}`}
                            className={`image image-${index}`}
                            style={{
                                position: 'absolute',
                                opacity: 0, // Initially hidden
                                zIndex: images.length - index, // Ensure the last image is on top
                                width: '80%', // Adjust width for better visibility
                                height: '100%',
                                objectFit: 'cover', // Ensure images cover the container
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AudioControl;
