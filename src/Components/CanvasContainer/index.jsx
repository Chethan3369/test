// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { Suspense } from "react";
// import Loading from "../Loading";
// import Model from "../Model";
// // without registering scrolltriiger the model will break
// gsap.registerPlugin(ScrollTrigger);

// const CanvasContainer = () => {
//   return (
//     <Canvas
//       camera={{
//         position: [4.742922067308307, 2.2387122409413784, 1.2218255872664914],
//       }}
//       shadows
//     >
//       <OrbitControls enablePan={false} enableRotate={true} enableZoom={false} />
//       <Suspense fallback={<Loading />}>
//         <Model />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default CanvasContainer;

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { Suspense, useEffect, useState } from "react";
// import Loading from "../Loading";
// import Model from "../Model";

// gsap.registerPlugin(ScrollTrigger);

// const CanvasContainer = () => {
//   const [isCanvasVisible, setIsCanvasVisible] = useState(true); // State to control Canvas visibility

//   useEffect(() => {
//     const scrollTrigger = ScrollTrigger.create({
//       trigger: ".seven-section",
//       start: "bottom bottom",
//       end: "top top",
//       scrub: 0,
//       immediateRender: false,
//       onEnter: () => {
//         setIsCanvasVisible(false); // Hide the Canvas when entering the seven-section
//         console.log("Canvas hidden at seven-section.");
//       },
//       onLeaveBack: () => {
//         setIsCanvasVisible(true); // Show the Canvas when leaving back
//         console.log("Canvas visible after leaving seven-section.");
//       },
//     });

//      return () => {
//       scrollTrigger.kill(); // Clean up the ScrollTrigger instance on unmount
//      };
//   }, []);

//   return (
//     <>
//       {isCanvasVisible && ( // Conditionally render the Canvas
//         <Canvas
//           camera={{
//             position: [4.742922067308307, 2.2387122409413784, 1.2218255872664914],
//           }}
//           shadows
//         >
//           <OrbitControls enablePan={false} enableRotate={true} enableZoom={false} />
//           <Suspense fallback={<Loading />}>
//             <Model />
//           </Suspense>
//         </Canvas>
//       )}
//     </>
//   );
// };

//  export default CanvasContainer;

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { Suspense, useLayoutEffect, useState, useRef } from "react";
// import Loading from "../Loading";
// import Model from "../Model";

// gsap.registerPlugin(ScrollTrigger);

// const CanvasContainer = () => {
//   const [isCanvasVisible, setIsCanvasVisible] = useState(true); // State to control Canvas visibility
//   const canvasRef = useRef(); // Ref to access the Canvas for opacity transitions

//   // Use useLayoutEffect for better performance on scroll-triggered DOM changes
//   useLayoutEffect(() => {
//     const scrollTrigger = ScrollTrigger.create({
//       trigger: ".Eight-section", // Adjusted to new section
//       start: "top top", // Adjusted start position
//       end: "bottom top", // Adjusted end position
//       scrub: 1,
//       immediateRender: false,
//       invalidateOnRefresh: true,
//       onEnter: () => {
//         // Animate opacity to hide the canvas
//         gsap.to(canvasRef.current, { opacity: 0, duration: 0.5, onComplete: () => setIsCanvasVisible(false) });
//         console.log("Canvas hidden at eight-section.");
//       },
//       onLeaveBack: () => {
//         // Show the canvas first, then animate opacity
//         setIsCanvasVisible(true);
//         gsap.to(canvasRef.current, { opacity: 1, duration: 0.5 });
//         console.log("Canvas visible after leaving eight-section.");
//       },
//     });

//     // Additional ScrollTrigger for nine-section or ten-section if needed
//     const additionalScrollTrigger = ScrollTrigger.create({
//       trigger: ".nine-section", // Example for another section
//       start: "top top",
//       end: "bottom top",
//       scrub: 1,
//       immediateRender: false,
//       onEnter: () => {
//         gsap.to(canvasRef.current, { opacity: 0, duration: 0.5, onComplete: () => setIsCanvasVisible(false) });
//         console.log("Canvas hidden at nine-section.");
//       },
//       onLeaveBack: () => {
//         setIsCanvasVisible(true);
//         gsap.to(canvasRef.current, { opacity: 1, duration: 0.5 });
//         console.log("Canvas visible after leaving nine-section.");
//       },
//     });

//     const additional1ScrollTrigger = ScrollTrigger.create({
//       trigger: ".ten-section", // Example for another section
//       start: "top top",
//       end: "bottom top",
//       scrub: 1,
//       immediateRender: false,
//       onEnter: () => {
//         gsap.to(canvasRef.current, { opacity: 0, duration: 0.5, onComplete: () => setIsCanvasVisible(false) });
//         console.log("Canvas hidden at nine-section.");
//       },
//       onLeaveBack: () => {
//         setIsCanvasVisible(true);
//         gsap.to(canvasRef.current, { opacity: 1, duration: 0.5 });
//         console.log("Canvas visible after leaving nine-section.");
//       },
//     });

//     return () => {
//       scrollTrigger.kill(); // Clean up the first ScrollTrigger instance on unmount
//       additionalScrollTrigger.kill();
//       additional1ScrollTrigger.kill(); // Clean up additional ScrollTrigger if used
//     };
//   }, []);

//   return (
//     <>
//       {isCanvasVisible && ( // Conditionally render the Canvas
       
//           <Canvas
//           ref={canvasRef}
//             camera={{
//               position: [4.742922067308307, 2.2387122409413784, 1.2218255872664914],
//             }}
//             shadows
//           >
//             <OrbitControls enablePan={false} enableRotate={true} enableZoom={false} />
//             <Suspense fallback={<Loading />}>
//               <Model />
//             </Suspense>
//           </Canvas>
      
//       )}
//     </>
//   );
// };

// export default CanvasContainer;


import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Suspense } from "react";
import Loading from "../Loading";
import Model from "../Model";

gsap.registerPlugin(ScrollTrigger);

const CanvasContainer = () => {
  const canvasRef = useRef(null); // Reference for the canvas container

  useEffect(() => {
    const canvasElement = canvasRef.current;

    // Create the ScrollTrigger for controlling the canvas visibility
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: ".Eight-section", // Trigger the animation based on the Eight-section
      start: "top top", // When the top of the Eight-section hits the top of the viewport
      onEnter: () => {
        gsap.to(canvasElement, { opacity: 0, duration: 0.5 }); // Fade out
      },
      onLeaveBack: () => {
        gsap.to(canvasElement, { opacity: 1, duration: 0.5 }); // Fade in when scrolling back up
      },
    });

    // return () => {
    //   scrollTriggerInstance.kill(); // Clean up on component unmount
    // };
  }, []);

  return (
    <Canvas
      ref={canvasRef}
      style={{ opacity: 1 }} // Initial opacity
      camera={{
        position: [4.742922067308307, 2.2387122409413784, 1.2218255872664914],
      }}
      shadows
    >
      <OrbitControls enablePan={false} enableRotate={true} enableZoom={false} />
      <Suspense fallback={<Loading />}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default CanvasContainer;
