import React from "react";
import styles from "../../../styles";
import Data from "./components/Data";
function Meter() {
  return (
    <section
      id="Meter"
      className={`relative ${styles.sectionContainer} max-w-screen-2xl violet-background`}
    >
      
         <div className="font-inter ">
            <h1 className="justify-center gradient-text-2 text-center text-[54px] leading-[60px] font-semibold p-5">
                Fastest Consensus <br/> Engine in the gaming industry
            </h1>
            <p className="font-normal text-lg text-center text-white">
            Orders of magnitude faster and higher throughput compared to industry standards
            </p>
        </div>
         
        <Data/>
     
       
    </section>
  );
}

export default Meter;
