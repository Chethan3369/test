//import { useEffect, useRef, useState } from "react";
import About from "./Components/About";
import CanvasContainer from "./Components/CanvasContainer";
import Hero from "./Components/Hero";
import BuyNow from "./Components/Buynow";
import Navbar from "./Components/Navbar/Navbar";
import No from "./Components/No/No";
import Lightening from "./Components/Lightening/Lightening";
import ControlNumi from "./Components/ControlNumi/ControlNumi";

import VideoAnim from "./Components/VideoAnim/VideoAnim";
import MobileApp from "./Components/MobileApp/MobileApp";
import AudioControl from "./Components/AudioControl/AudioControl";
import NoRight from "./Components/NoRight/NoRight";

function App() {
  return (
    <main className="overflow-x-hidden  bg-gradient-to-br from-[#0c0c23] to-[#222240]">
    <Navbar />
      <div className="h-screen w-full fixed top-0 z-10 hidden lg:block">
        <CanvasContainer />
      </div>
      <Hero />
      <About />
      <BuyNow />
      <No />
      <NoRight />
      <Lightening/>
      <VideoAnim />
      <ControlNumi />
       <MobileApp/>
      <AudioControl/> 
    </main>
  );
}

export default App;
