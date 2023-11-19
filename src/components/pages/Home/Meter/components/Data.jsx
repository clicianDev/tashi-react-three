import React, { useState, useEffect } from "react";
import CircularGauge from "./CircularGauge";
import Gauge from "./sample";

function Data({ isActive }) {
  const [gaugeValue, setGaugeValue] = useState(50);

  useEffect(() => {
    // Update gauge value when the section is active
    if (isActive) {
      // Set the desired gauge value here
      setGaugeValue(/* Your desired value */);
    }
  }, [isActive]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 md:p-10 lg:p-20 gap-5 mt-20 md:mt-20">
      <div className="text-center">
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl leading-normal font-semibold">
          1mm+
        </h3>
        <p className="text-white text-base md:text-lg lg:text-xl leading-normal font-normal opacity-70">
          Transactions Per Second
        </p>
      </div>
      <div className="text-center relative ">
    
        <div className="absolute mt-[-15%] md:top-1/2 transform -translate-y-1/2 m-auto w-full   flex justify-center">
          {/* <img src="/images/meter.svg" alt="Meter" /> */}
      <Gauge value={gaugeValue}  isActive={isActive}/>

        </div>
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl leading-normal font-semibold">
          ~50%
        </h3>
        <p className="text-white text-base md:text-lg lg:text-xl leading-normal font-normal opacity-70">
          Decrease in Network
          <br /> Egress Cost
        </p>
      </div>
      <div className="text-center">
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl leading-normal font-semibold">
          30-50ms
        </h3>
        <p className="text-white text-base md:text-lg lg:text-xl leading-normal font-normal opacity-70">
          Consensus Latency
        </p>
      </div>
    </div>
  );
}

export default Data;
