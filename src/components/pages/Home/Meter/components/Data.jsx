import React, { useState, useEffect } from "react";

import Gauge from "./sample";

function Data({ isActive }) {
  const [gaugeValue, setGaugeValue] = useState(50);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    // Update gauge value when the section is active
    if (isActive) {
      // Set the desired gauge value here
      setGaugeValue(/* Your desired value */);
    }
  }, [isActive]);

  return (
    <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3  md:p-10 lg:p-20 gap-5 md:gap-5 mt-20 md:mt-20">
      <div className="text-center z-20">
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl leading-normal font-semibold">
          1mm+
        </h3>
        <p className="text-white text-[14px] md:text-lg lg:text-xl leading-normal font-normal opacity-70">
          Transactions Per Second
        </p>
      </div>
      <div className="text-center relative ">
    
        <div className="absolute mt-[10%] md:mt-[-15%] md:top-1/2 transform -translate-y-1/2 m-auto w-full  md:p-0  flex justify-center z-0">
          {/* <img src="/images/meter.svg" alt="Meter" /> */}
      <Gauge value={gaugeValue}  isActive={isActive} isMobile={isMobile} />

        </div>
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl leading-normal font-semibold">
          ~50%
        </h3>
        <p className="text-white text-[14px] md:text-lg lg:text-xl leading-normal font-normal opacity-70">
          Decrease in Network
          <br /> Egress Cost
        </p>
      </div>
      <div className="text-center z-20">
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl leading-normal font-semibold inline-block m-auto">
        &lt; 100ms
        </h3>
        <p className="text-white text-[14px] md:text-lg lg:text-xl leading-normal font-normal opacity-70">
          Consensus Finality
        </p>
      </div>
    </div>
  );
}

export default Data;
