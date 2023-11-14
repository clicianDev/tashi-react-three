import React from "react";
import styles from "../../../styles";
import Experience from "../../../Experience";

function Solutions() {
  return (
    <section
      id="Solutions "
      className={`max-w-screen-2xl m-auto relative ${styles.sectionContainer} overflow-clip`}
    >
      <div className=" font-inter">
        <h1 className="justify-center gradient-text-2 text-center text-[54px] leading-[60px] font-semibold p-5">
          Tashi’s Solutions Cater to Both <br />
          Web2 & Web3 Games.
        </h1>
      </div>
      <div className="relative m-auto w-full h-full">

        <div className="absolute mt-[-15%] flex justify-center m-auto z-0 h-auto">
          <div className="absolute h-screen">
          <Experience/>
          </div>
        
          <img src="\images\background-hero.png"></img>
        
        </div>
       
       
        <div className="grid grid-cols-2 m-auto">
          <div className="justify-center">
            <img className="m-auto" src="/images/solutions/Web2.svg" />
          </div>
          <div className="justify-center">
            <img className="m-auto" src="/images/solutions/Web3.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
