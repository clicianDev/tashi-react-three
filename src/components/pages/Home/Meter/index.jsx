import React from "react";
import styles from "../../../styles";
import Data from "./components/Data";
function Meter() {
  return (
    <section
      id="Meter"
      className={`w-screen h-screen ${styles.sectionContainer} violet-background m-auto max-w-7xl`}
    >
      
         <div className="my-28 font-inter">
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
