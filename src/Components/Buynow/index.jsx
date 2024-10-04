const BuyNow = () => {
  return (
    // <section className="third-section h-screen  relative ">
    //   <div className="z-20 absolute top-[30%] right-24 flex flex-col justify-center border border-yellow-800 text-yellow-800 p-5 rounded-lg">
      <section id="about" className="third-section h-screen relative">
  <div className="absolute top-[30%] right-24 text-white  flex flex-col justify-center">
    <h1 className="text-[48px] leading-[1.1] tracking-tight font-bold max-w-[400px] font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#C99CFF] to-[#FF99CC]">
      Elegant Opening And Closing
    </h1>
    <div className="flex items-center w-[300px] space-x-2 pt-3">
  <img src="./kArrow.svg" className="w-3 h-3" alt="Arrow" />
  <p className="font-semibold text-[18px] leading-[1.1] tracking-tight pt-3">
    Automatic Closing through phone, button or voice
  </p>
  </div>
  <div className="flex items-center w-[300px] space-x-2  ">
  <img src="./kArrow.svg" className="w-3 h-3" alt="Arrow" />
  <p className="font-semibold text-[18px] w-[350px] pt-5">
      Perfectly designed support for your back.
    </p>
    </div>
    <div className="pt-2 ">
    <button className="border-2 font-semibold w-24 border-white/30 rounded-full px-1 py-1 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 transition ease-in-out">
  Watch it
</button>
</div>
  </div>
</section>
    //   </div>
    // </section>
  );
};

export default BuyNow;
