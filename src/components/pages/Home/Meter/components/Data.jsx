import React from "react";
import CircularGauge from "./CircularGauge";

function Data() {
  return (
   
        <div className="grid grid-cols-3 p-20 gap-5 mt-20">
      <div>
        <h3 className="text-white text-[40px] leading-normal font-semibold">
          1mm+
        </h3>
        <p className="text-white text-[20px] leading-normal font-normal opacity-[0.7]">
          Game Event Per Second
        </p>
      </div>
      <div className="text-center relative">
        <div className="absolute mt-[-30%] ">
          <img src="/images/meter.svg" />
          {/* <CircularGauge/> */}
        </div>
        <h3 className="text-white text-[40px] leading-normal font-semibold">
          ~50%
        </h3>
        <p className="text-white text-[20px] leading-normal font-normal opacity-[0.7]">
          Decrease in Network
          <br /> Egress Cost
        </p>
      </div>
      <div className="text-right h-auto">
        <h3 className="text-white text-[40px] leading-normal font-semibold">
          30-50ms
        </h3>
        <p className="text-white text-[20px] leading-normal font-normal opacity-[0.7]">
          Consensus Latency
        </p>
      </div>
    </div>
   
  
  );
}

export default Data;
