import React from "react";
import styles from "../../../styles";
import Data from "./components/Data";

function Meter() {
  return (
    <section
      id="Meter"
      className={`relative ${styles.sectionContainer} max-w-screen-2xl violet-background`}
    >
      <div className="font-inter text-center p-5 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.5] md:leading-[1.6] font-semibold gradient-text-2">
          Fastest Consensus <br /> Engine in the gaming industry
        </h1>
        <p className="mt-10 text-base md:text-lg text-white">
          Orders of magnitude faster and higher throughput compared to industry standards
        </p>
      </div>

      <Data />
    </section>
  );
}

export default Meter;
