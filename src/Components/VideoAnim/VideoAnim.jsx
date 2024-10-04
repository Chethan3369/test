// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// const VideoAnim = () => {
//   const videoRef1 = useRef(null); // First video (infoDots)
//   const videoRef2 = useRef(null); // Second video (autoClean)
//   const videoRef3 = useRef(null); // Third video (inner)
//   const videoRef4 = useRef(null); // Fourth video (uvWaves)

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const playVideos = () => {
//       // Set all videos to be hidden initially
//       [videoRef1.current, videoRef2.current, videoRef3.current, videoRef4.current].forEach((video) => {
//         if (video) {
//           video.pause();
//           gsap.set(video, { opacity: 0 }); // Set all videos to hidden
//         }
//       });
//       // Fade in and play videoRef1
//       gsap.to(videoRef1.current, { opacity: 1, duration: 1 });
//       videoRef1.current.play();

//       // Start videoRef2 after 1 second delay while videoRef1 is playing
//       setTimeout(() => {
//         gsap.to(videoRef2.current, { opacity: 1, duration: 1 });
//         videoRef2.current.play();
//       },1000 ); // Adjust this delay as needed

//       // Start videoRef3 after 2 seconds delay while videoRef1 is playing
//       setTimeout(() => {
//         gsap.to(videoRef2.current, { opacity: 0, duration: 1 });
//         gsap.to(videoRef3.current, { opacity: 1, duration: 1 });
//         videoRef3.current.play();
//       }, 2000); // Adjust this delay as needed

//       // Start videoRef4 after 3 seconds delay while videoRef1 is playing
//       setTimeout(() => {
//         gsap.to(videoRef3.current, { opacity: 0, duration: 1 });
//         gsap.to(videoRef4.current, { opacity: 1, duration: 1 });
//         videoRef4.current.play();
//       }, 3000); // Adjust this delay as needed

//       // Manage video playback end events
//       videoRef1.current.onended = () => {
//         gsap.to(videoRef1.current, { opacity: 1, duration: 1 });
//         gsap.to(videoRef2.current, { opacity: 0, duration: 1 });
//         gsap.to(videoRef3.current, { opacity: 0, duration: 1 });
//         gsap.to(videoRef4.current, { opacity: 0, duration: 1 });
//       };

//       // Handle end of videoRef2 to fade it out and videoRef3
//       videoRef2.current.onended = () => {
//         gsap.to(videoRef2.current, { opacity: 0, duration: 1 });
//       };

//       // Handle end of videoRef3 to fade it out and videoRef4
//       videoRef3.current.onended = () => {
//         gsap.to(videoRef3.current, { opacity: 0, duration: 1 });
//       };

//       // Handle end of videoRef4 to fade it out
//       videoRef4.current.onended = () => {
//         gsap.to(videoRef4.current, { opacity: 1, duration: 1 });
//       };
//     };

//     ScrollTrigger.create({
//       trigger: ".six-section",
//       start: "top bottom",
//       end: "top top",
//       onEnter: () => {
//         setTimeout(() => {
//           playVideos();
//         }, 1000);
//       },
//       onLeave: () => {
//         [videoRef1, videoRef2, videoRef3, videoRef4].forEach((ref) => {
//           if (ref.current) ref.current.pause();
//         });
//       },
//       onEnterBack: () => {
//         playVideos();
//       },
//       onLeaveBack: () => {
//         [videoRef1, videoRef2, videoRef3, videoRef4].forEach((ref) => {
//           if (ref.current) ref.current.pause();
//         });
//       },
//       scrub: true,
//     });
//   }, []);

//   return (
//     <section className="h-screen overflow-hidden six-section flex flex-col items-center text-center text-white font-sans">
//       <div className="relative z-20 pt-0 max-w-[900px] items-start font-sans">
//         <video
//           ref={videoRef1}
//           src="./webm/infoDots.webm"
//           type="video/webm"
//           muted
//           preload="auto"
//           className="mt-[90px] opacity-0" // Initially hidden
//         />
//       </div>

//       <div className="z-30 items-start font-sans">
//         <video
//           ref={videoRef2}
//           src="./webm/autoClean.webm"
//           type="video/webm"
//           muted
//           preload="auto"
//           className="max-w-[180px] mt-[120px] md:left-[50px] opacity-0" // Initially hidden
//         />
//       </div>

//       <div className="z-30 pt-0 items-start font-sans">
//         <video
//           ref={videoRef3}
//           src="./webm/inner.webm"
//           type="video/webm"
//           muted
//           preload="auto"
//           className="h-[450px] w-[346px] mt-[-330px] opacity-0" // Initially hidden
//         />
//       </div>

//       <div className="z-30 pt-0 items-start font-sans">
//         <video
//           ref={videoRef4}
//           src="./webm/uvWaves.webm"
//           type="video/webm"
//           muted
//           preload="auto"
//           className="mt-[-330px] opacity-0" // Initially hidden
//         />
//       </div>
//     </section>
//   );
// };

// export default VideoAnim;




// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// const VideoAnim = () => {
//   const videoRef1 = useRef(null); // First video (infoDots)
//   const videoRef2 = useRef(null); // Second video (autoClean)
//   const videoRef3 = useRef(null); // Third video (inner)
//   const videoRef4 = useRef(null); // Fourth video (uvWaves)

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const playVideoSafely = (video) => {
//       if (video) {
//         const playPromise = video.play();
//         if (playPromise !== undefined) {
//           playPromise.then(() => {
//             // Auto-play started successfully
//           }).catch((error) => {
//             console.log("Autoplay blocked:", error);
//           });
//         }
//       }
//     };

//     const playVideos = () => {
//       // Set all videos to be hidden initially
//       [videoRef1.current, videoRef2.current, videoRef3.current, videoRef4.current].forEach((video) => {
//         if (video) {
//           gsap.set(video, { opacity: 0 }); // Set all videos to hidden
//         }
//       });

//       // Fade in and play videoRef1
//       gsap.to(videoRef1.current, { opacity: 1, duration: 1 });
//       playVideoSafely(videoRef1.current);

//       // Start videoRef2 after 1 second delay while videoRef1 is playing
//       setTimeout(() => {
//         gsap.to(videoRef2.current, { opacity: 1, duration: 1 });
//         playVideoSafely(videoRef2.current);
//       }, 1000); // Adjust this delay as needed

//       // Start videoRef3 after 2 seconds delay while videoRef2 is playing
//       setTimeout(() => {
//         gsap.to(videoRef2.current, { opacity: 0, duration: 1 });
//         gsap.to(videoRef3.current, { opacity: 1, duration: 1 });
//         playVideoSafely(videoRef3.current);
//       }, 2000); // Adjust this delay as needed

//       // Start videoRef4 after 3 seconds delay while videoRef3 is playing
//       setTimeout(() => {
//         gsap.to(videoRef3.current, { opacity: 0, duration: 1 });
//         gsap.to(videoRef4.current, { opacity: 1, duration: 1 });
//         playVideoSafely(videoRef4.current);
//       }, 3000); // Adjust this delay as needed

//       // Manage video playback end events
//       videoRef1.current.onended = () => {
//         gsap.to(videoRef1.current, { opacity: 1, duration: 1 });
//       };

//       videoRef2.current.onended = () => {
//         gsap.to(videoRef2.current, { opacity: 0, duration: 1 });
//       };

//       videoRef3.current.onended = () => {
//         gsap.to(videoRef3.current, { opacity: 0, duration: 1 });
//       };

//       videoRef4.current.onended = () => {
//         gsap.to(videoRef4.current, { opacity: 0, duration: 1 });
//       };
//     };

//     ScrollTrigger.create({
//       trigger: ".six-section",
//       start: "top bottom",
//       end: "top top",
//       onEnter: () => {
//         setTimeout(() => {
//           playVideos();
//         }, 1000);
//       },
//       onLeave: () => {
//         [videoRef1, videoRef2, videoRef3, videoRef4].forEach((ref) => {
//           if (ref.current) ref.current.pause();
//         });
//       },
//       onEnterBack: () => {
//         playVideos();
//       },
//       onLeaveBack: () => {
//         [videoRef1, videoRef2, videoRef3, videoRef4].forEach((ref) => {
//           if (ref.current) ref.current.pause();
//         });
//       },
//       scrub: true,
//     });
//   }, []);

//   return (
//     <section className="h-screen overflow-hidden six-section flex flex-col items-center text-center text-white font-sans">
//       <div className="relative z-20 pt-0 max-w-[900px] items-start font-sans">
//         <video
//           ref={videoRef1}
//           src="./webm/infoDots.webm"
//           type="video/webm"
//           muted
//           preload="auto"
//           autoplay
//           className="mt-[90px] opacity-0" // Initially hidden
//         />
//       </div>

//       <div className="z-30 items-start font-sans">
//         <video
//           ref={videoRef2}
//           src="./webm/autoClean.webm"
//           type="video/webm"
//           muted
//           preload="auto"
//           autoplay
//           className="max-w-[180px] mt-[120px] md:left-[50px] opacity-0" // Initially hidden
//         />
//       </div>

//       <div className="z-30 pt-0 items-start font-sans">
//         <video
//           ref={videoRef3}
//           src="./webm/inner.webm"
//           type="video/webm"
//           muted
//           preload="auto"
//           autoplay
//           className="h-[450px] w-[346px] mt-[-330px] opacity-0" // Initially hidden
//         />
//       </div>

//       <div className="z-30 pt-0 items-start font-sans">
//         <video
//           ref={videoRef4}
//           src="./webm/uvWaves.webm"
//           type="video/webm"
//           muted
//           preload="auto"
//           autoplay
//           className="mt-[-330px] opacity-0" // Initially hidden
//         />
//       </div>

//       {/* Optional Play Button for User Interaction */}
//       {/* <button
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//         onClick={() => {
//           playVideos(); // Optional user-triggered play button
//         }}
//       >
//         Play Videos
//       </button> */}
//     </section>
//   );
// };

// export default VideoAnim;



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const VideoAnim = () => {
  const videoRef1 = useRef(null); // First video (infoDots)
  const videoRef2 = useRef(null); // Second video (autoClean)
  const videoRef3 = useRef(null); // Third video (inner)
  const videoRef4 = useRef(null); // Fourth video (uvWaves)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Play video safely with autoplay policy handling
    const playVideoSafely = async (video) => {
      if (video && video.paused) {
        try {
          await video.play();
        } catch (err) {
          console.log("Video play was blocked by the browser: ", err);
        }
      }
    };

    const playVideos = () => {
      // Hide all videos initially
      [videoRef1.current, videoRef2.current, videoRef3.current, videoRef4.current].forEach((video) => {
        if (video) {
          gsap.set(video, { opacity: 0 });
        }
      });

      // Fade in and play the first video
      gsap.to(videoRef1.current, { opacity: 1, duration: 1 });
      playVideoSafely(videoRef1.current);

      // Fade in and play the second video after 1 second delay
      setTimeout(() => {
        gsap.to(videoRef2.current, { opacity: 1, duration: 1 });
        playVideoSafely(videoRef2.current);
      }, 1000);

      // Fade in and play the third video after 2 seconds delay
      setTimeout(() => {
        gsap.to(videoRef2.current, { opacity: 0, duration: 1 });
        gsap.to(videoRef3.current, { opacity: 1, duration: 1 });
        playVideoSafely(videoRef3.current);
      }, 2000);

      // Fade in and play the fourth video after 3 seconds delay
      setTimeout(() => {
        gsap.to(videoRef3.current, { opacity: 0, duration: 1 });
        gsap.to(videoRef4.current, { opacity: 1, duration: 1 });
        playVideoSafely(videoRef4.current);
      }, 3000);
    };

    const pauseVideos = () => {
      [videoRef1.current, videoRef2.current, videoRef3.current, videoRef4.current].forEach((video) => {
        if (video && !video.paused) {
          video.pause();
        }
      });
    };

    ScrollTrigger.create({
      trigger: ".seven-section",
      start: "top bottom",
      end: "top top",
      onEnter: () => {
        setTimeout(() => {
          playVideos();
        }, 3000);
      },
      onLeave: () => {
        pauseVideos();
      },
      onEnterBack: () => {
        playVideos();
      },
      onLeaveBack: () => {
        pauseVideos();
      },
      scrub: true,
      
    });
  }, []);

  return (
    <section className="h-screen overflow-hidden seven-section flex flex-col items-center text-center text-white font-sans">
      <div className="relative z-20 pt-0 max-w-[900px] items-start font-sans">
        <video
          ref={videoRef1}
          src="./webm/infoDots.webm"
          type="video/webm"
          muted
          preload="auto"
          playsInline
          className="mt-[90px] opacity-0" // Initially hidden
        />
      </div>

      <div className="z-30 items-start font-sans">
        <video
          ref={videoRef2}
          src="./webm/autoClean.webm"
          type="video/webm"
          muted
          preload="auto"
          playsInline
          className="max-w-[180px] mt-[120px] md:left-[50px] opacity-0" // Initially hidden
        />
      </div>

      <div className="z-30 pt-0 items-start font-sans">
        <video
          ref={videoRef3}
          src="./webm/inner.webm"
          type="video/webm"
          muted
          preload="auto"
          playsInline
          className="h-[450px] w-[346px] mt-[-330px] opacity-0" // Initially hidden
        />
      </div>

      <div className="z-30 pt-0 items-start font-sans">
        <video
          ref={videoRef4}
          src="./webm/uvWaves.webm"
          type="video/webm"
          muted
          preload="auto"
          playsInline
          className="mt-[-330px] opacity-0" // Initially hidden
        />
      </div>
    </section>
  );
};

export default VideoAnim;
