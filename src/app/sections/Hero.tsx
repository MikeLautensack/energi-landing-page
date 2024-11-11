import React from "react";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="w-full min-h-[844px] bg-hero-bg bg-no-repeat bg-right-mobile md:bg-right-tablet lg:bg-right bg-cover px-3 md:px-8 lg:px-[120px]"
    >
      <div className="w-full py-20 lg:w-[792px] lg:h-[387px]">
        <h1 className="text-[#FFFFFF] mb-4 font-normal text-[54px] md:text-[95px] leading-[65px] md:leading-[95px] font-inter">
          The Safest Blockchain in the World
        </h1>
        <button className="w-full md:w-[173px] h-20 border rounded-lg font-semibold text-[18px] border-[#01E676] text-[#01E676] py-6">
          Why NRG?
        </button>
      </div>
    </section>
  );
};

export default Hero;
