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
      <h2 className=" text-center text-4xl md:text-5xl lg:text-6xl leading-[1.5] md:leading-[1.6] font-semibold gradient-text">
          Tashi’s Solutions Cater to Both <br />
          Web2 & Web3 Games.
        </h2>
      </div>
      <div className="relative m-auto">
        <div className="absolute mt-[8%] lg:mt-[-10%] m-auto z-0">
          <img src="\images\background-hero.png"></img>
        </div>
        <div className="grid grid-cols-2 m-auto gap-5">
          <div className="justify-center p-5 md:p-2 lg:p-0">
            <img className="m-auto" src="/images/solutions/Web2.svg"/>
          </div>
          <div className="justify-center p-5 md:p-2 lg:p-0">
            <img className="m-auto" src="/images/solutions/Web3.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
