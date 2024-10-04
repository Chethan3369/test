import { CameraControls, Plane, useGLTF, useScroll } from "@react-three/drei";
import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useControls } from "leva";
import { useThree } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


// Source : https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725
const Model = ({ ...props }) => {
  const {
    nodes,
    materials,
    scene: modelScene,
    animations,
  } = useGLTF("/Numi_Animated.glb");
  const jordans = useRef(null);
  const mixer = useRef();
  const actionRef = useRef();
  const secondActionRef = useRef(); 
  const ambientLightRef = useRef();

  const { scene, camera } = useThree();
  const tl = gsap.timeline();

  // ----- used for getting the position for the shoes ----
  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  //   cameraPosition: {
  //     value: {
  //       x: 3.00,
  //       y: 0.55,
  //       z: 0.10,
  //     },
  //     step: 0.05,
  //   },
  //   scenePosition: {
  //     value: { x: -7.83, y: -1.99, z: 0.10 },
  //     step: 0.05,
  //   },

  //   sceneRotation: {
  //     value: { x: 0.01, y: -6.37, z: -0.60 },
  //     step: 0.01,
  //   },
  // });

  useLayoutEffect(() => {
    new ScrollTrigger({});
    // component About.tsx
    

    // camera.position.set(3.30, 1.15, 0.50);
    // scene.position.set(0.98, 1.81, 0.95);
    // scene.rotation.set(0, 0.06, 0.07);

    camera.position.set(5.65, 0.55, -3.50);
    scene.position.set(1.48, -4.74, -0.65);
    scene.rotation.set(0, -2.60, -0.10);


    gsap.registerPlugin(ScrollTrigger);
    // if (typeof window !== "undefined") {
    //   gsap.registerPlugin(ScrollTrigger);
    // }

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".second-section",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //   },
    // });

  // const stopAtSixSection = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".Eight-section",
  //     start: "top bottom",  // Define when the scroll reaches the six-section
  //     end: "top top",
  //     scrub: true,
  //     immediateRender: false,
  //     onEnter: () => {
  //       // Pause the model's updates here
  //       tl.pause(); // Pauses the GSAP timeline responsible for camera and scene animations
  //       console.log("Reached six-section, pausing model animations.");
  //     },
  //     onLeaveBack: () => {
  //       // Optionally resume the animations if you scroll back up
  //       tl.play(); // Resume the GSAP timeline when scrolling back
  //       console.log("Leaving six-section, resuming model animations.");
  //     },
  //   },
  // });


    tl.to(camera.position, {
      x: 5.65,
      y: 0.55,
      z: -3.50,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
      .to(scene.position, {
        x: -3.37,
        y: -2.69,
        z: -2.60,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(scene.rotation, {
        x: 0.00,
        y: -5.48,
        z: -0.10,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })


      // component - BuyNow.tsx
      .to(camera.position, {
        x: 5.65,
        y: 0.55,
        z: -0.60,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
         // markers: true,
        },
      })
      .to(scene.position, {
        x: -0.58,
        y: -4.39,
        z: 4.75,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: -0.09,
        y: -3.57,
        z: 0.08,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })


      //No jsx

      .to(camera.position, {
        x: 4.20,
        y: 2.00,
        z: 1.05,
        scrollTrigger: {
          trigger: ".four-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        //  markers: true,
        },
      })
      .to(scene.position, {
        x: -1.28,
        y: -4.24,
        z: -0.00,
        scrollTrigger: {
          trigger: ".four-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: 0.08,
        y: -4.91,
        z: -0.11,
        scrollTrigger: {
          trigger: ".four-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      //second-text 

      .to(camera.position, {
        x: 4.20,
        y: 2.00,
        z: 1.05,
        scrollTrigger: {
          trigger: ".five-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        //  markers: true,
        },
      })
      .to(scene.position, {
        x: -1.28,
        y: -4.24,
        z: -0.00,
        scrollTrigger: {
          trigger: ".five-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: 0.08,
        y: -4.91,
        z: -0.11,
        scrollTrigger: {
          trigger: ".five-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })


      //Lightening.jsx
      .to(camera.position, {
        x: 3.00,
        y: 0.55,
        z: 0.10,
        scrollTrigger: {
          trigger: ".six-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
       //   markers: true,
        },
      })
      .to(scene.position, {
        x: -7.83,
        y: -1.99,
        z: 0.10,
        scrollTrigger: {
          trigger: ".six-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: 0.01,
        y: -6.37,
        z: -0.60,
        scrollTrigger: {
          trigger: ".six-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      

      //video.jsx
      .to(camera.position, {
        x: 3.40,
        y: -2.70,
        z: 0.80,
        scrollTrigger: {
          trigger: ".seven-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        //  markers: true,
        },
      })
      .to(scene.position, {
        x: -6.58,
        y: -0.59,
        z: -1.59,
        scrollTrigger: {
          trigger: ".seven-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: 0.01,
        y: -6.50,
        z: -0.60,
        scrollTrigger: {
          trigger: ".seven-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      //Eight
    //   .to(camera.position, {
    //     x: 3.40,
    //     y: -2.70,
    //     z: 0.80,
    //     scrollTrigger: {
    //       trigger: ".Eight-section",
    //       start: "top bottom",
    //       end: "top top",
    //       scrub: true,
    //       immediateRender: false,
    //      // markers: true,
    //     },
    //   })
    //   .to(scene.position, {
    //     x: -6.58,
    //     y: -0.59,
    //     z: -1.59,
    //     scrollTrigger: {
    //       trigger: ".Eight-section",
    //       start: "top bottom",
    //       end: "top top",
    //       scrub: true,
    //       immediateRender: false,
    //     },
    //   })
    //   .to(scene.rotation, {
    //     x: 0.01,
    //     y: -6.50,
    //     z: -0.60,
    //     scrollTrigger: {
    //       trigger: ".Eight-section",
    //       start: "top bottom",
    //       end: "top top",
    //       scrub: true,
    //       immediateRender: false,
    //     },
    //   })
    //  //Nine

    //  .to(camera.position, {
    //   x: 3.40,
    //   y: -2.70,
    //   z: 0.80,
    //   scrollTrigger: {
    //     trigger: ".nine-section",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //   //  markers: true,
    //   },
    // })
    // .to(scene.position, {
    //   x: -6.58,
    //   y: -0.59,
    //   z: -1.59,
    //   scrollTrigger: {
    //     trigger: ".nine-section",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //   },
    // })
    // .to(scene.rotation, {
    //   x: 0.01,
    //   y: -6.50,
    //   z: -0.60,
    //   scrollTrigger: {
    //     trigger: ".nine-section",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //   },
    // })

    // //Ten
    // .to(camera.position, {
    //   x: 3.40,
    //   y: -2.70,
    //   z: 0.80,
    //   scrollTrigger: {
    //     trigger: ".ten-section",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //    // markers: true,
    //   },
    // })
    // .to(scene.position, {
    //   x: -6.58,
    //   y: -0.59,
    //   z: -1.59,
    //   scrollTrigger: {
    //     trigger: ".ten-section",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //   },
    // })
    // .to(scene.rotation, {
    //   x: 0.01,
    //   y: -6.50,
    //   z: -0.60,
    //   scrollTrigger: {
    //     trigger: ".ten-section",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //   },
    // })



    

    if (ambientLightRef.current) {
      gsap.to(ambientLightRef.current, {
        intensity: 0.2,
        scrollTrigger: {
          trigger: ".six-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
    }

    if (ambientLightRef.current) {
      gsap.to(ambientLightRef.current, {
        intensity: 0.5,
        scrollTrigger: {
          trigger: ".seven-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
    }

    // Stop model animation when entering the seven-section
ScrollTrigger.create({
  trigger: ".Eight-section",
  start: "top bottom",
  end: "top top",
  scrub: true,
  onEnter: () => {
    tl.pause();  // Pauses the GSAP timeline
    console.log("Reached the seven-section, stopping model animation.");
  },
  onLeaveBack: () => {
    tl.play();   // Optionally resume the animation when scrolling back up
    console.log("Leaving seven-section, resuming model animation.");
  },
});

    

  },[]);



  // ---- used for debug ----
  useFrame((state, delta) => {
    // camera.position.x = cameraPosition.x;
    // camera.position.y = cameraPosition.y;
    // camera.position.z = cameraPosition.z;
    // scene.position.x = scenePosition.x;
    // scene.position.y = scenePosition.y;
    // scene.position.z = scenePosition.z;
    // scene.rotation.x = sceneRotation.x;
    // scene.rotation.y = sceneRotation.y;
    // scene.rotation.z = sceneRotation.z;

    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new THREE.AnimationMixer(modelScene);
      const animAction = mixer.current.clipAction(animations[0]);
      console.log("anim ", animations);
      animAction.clampWhenFinished = true;
      animAction.loop = THREE.LoopOnce;
      animAction.play();
      animAction.paused = true;

      actionRef.current = animAction;
    

    // Second animation
    const secondAnimAction = mixer.current.clipAction(animations[1]);
    secondAnimAction.clampWhenFinished = true;
    secondAnimAction.loop = THREE.LoopOnce;
    secondAnimAction.play();
    secondAnimAction.paused = true;
    secondActionRef.current = secondAnimAction;
  }

  }, [animations, modelScene]);



  useEffect(() => {
    if (actionRef.current) {
      const animDuration = actionRef.current.getClip().duration;

      // Forward animation from third-section to five-section
      gsap.to(actionRef.current, {
        time: animDuration, // Move animation forward to its full duration
        ease: "none", // Disable easing for frame-by-frame control
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
        //  markers: true,
          onUpdate: (self) => {
            // Debugging current progress
            console.log("Forward progress:", self.progress);
          },
        },
      });

      // Animation for four-section with second animation (animations[1])

      if (secondActionRef.current) {
        const secondAnimDuration = secondActionRef.current.getClip().duration;

        gsap.to(secondActionRef.current, {
          time: secondAnimDuration,    // Play the second animation entirely
          scrollTrigger: {
            trigger: ".five-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              console.log("Four-section second animation progress:", self.progress);
            },
          },
        });
      }

      // Reverse animation frame-by-frame in the five-section
      ScrollTrigger.create({
        trigger: ".six-section",
        start: "top bottom",  // Start reversing when the scroll enters the five-section
        end: "top top",       // End reversing when the top of the section is reached
        scrub: true,          // Enable scrubbing for smooth frame-by-frame control
     //   markers: true,        // For visual debugging
        onUpdate: (self) => {
          const reverseProgress = self.progress; // Get scroll progress from 0 to 1
          actionRef.current.time = animDuration * (1 - reverseProgress); // Scrub the animation in reverse
          console.log("Reverse progress:", reverseProgress);
        },
      });
    }
  }, [actionRef.current]);


  return (
    <>
      <directionalLight
        intensity={5}
      />
      <pointLight position={[10, 10, 10]} />
      <spotLight
        position={[15, 20, 5]}
        angle={0.3}
        penumbra={0.5}
        intensity={1}
        castShadow
      />
      <ambientLight ref={ambientLightRef} />
      <group
        ref={jordans}
        castShadow
        scale={10}
        {...props}
      >
        <primitive object={modelScene} />
      </group>
     
    </>
  );
};

export default Model;

