import React from "react";

const About = () => {
  return (

    <section id="about" className="second-section h-screen relative">
 
  <div className="absolute top-[25%] md:left-[150px] text-white">
    <h1 className="text-[48px] leading-[1.1] tracking-tight font-bold max-w-[400px] font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#C99CFF] to-[#FF99CC]">
      Upgrade Your Comfort Level
    </h1>
    <div className="flex items-center w-[300px] space-x-2 pt-3">
  <img src="./kArrow.svg" className="w-3 h-3" alt="Arrow" />
  <p className="font-semibold text-[18px]">
    Elevate your daily routine.
  </p>
  </div>
  <div className="flex items-center w-[300px] space-x-2  pt-2">
  <img src="./kArrow.svg" className="w-3 h-3" alt="Arrow" />
  <p className="font-semibold text-[18px] ">
      Cutting-edge convenience and effortless control.
    </p>
    </div>
  </div>
</section>

  );
};

export default About;
