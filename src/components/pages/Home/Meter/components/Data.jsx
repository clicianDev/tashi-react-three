import React from "react";
import CircularGauge from "./CircularGauge";

function Data() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 md:p-10 lg:p-20 gap-5 mt-20 md:mt-20">
      <div className="text-center">
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl leading-normal font-semibold">
          1mm+
        </h3>
        <p className="text-white text-base md:text-lg lg:text-xl leading-normal font-normal opacity-70">
          Game Event Per Second
        </p>
      </div>
      <div className="text-center relative">
        <div className="absolute top-1/4 md:top-1/2 transform -translate-y-1/2">
          <img src="/images/meter.svg" alt="Meter" />
          {/* <CircularGauge/> */}
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
