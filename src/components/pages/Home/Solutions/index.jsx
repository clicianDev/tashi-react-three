import React from "react";
import styles from "../../../styles";
import Experience2 from "../../../Experience2";

function Solutions() {
  return (
    <section
      id="Solutions "
      className={`max-w-screen-2xl m-auto relative ${styles.sectionContainer} overflow-hidden`}
    >
      <div className=" font-inter">
        <h2 className=" text-center text-4xl md:text-5xl lg:text-6xl leading-[1.5] md:leading-[1.6] font-semibold gradient-text">
          Tashi’s Solutions Cater to Both <br />
          Web2 & Web3 Games.
        </h2>
      </div>

      <div className="relative m-auto mt-10 xl:mt-20">
        <div className="m-auto z-20 absolute w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[700px] xl:h-[800px] top-[-45%] sm:top-[-25%] md:top-[-35%] lg:top-[-35%] xl:top-[-60%]">
          <Experience2 />
        </div>
        <div className="absolute mt-[8%] lg:mt-[5%] xl:mt-[-10%] m-auto z-10">
          <img src="\images\background-hero.png"></img>
        </div>
        {/* parallax starts here */}
        <div className="grid grid-cols-2 m-auto gap-5">
          <div className="justify-center p-5 md:p-2 lg:p-10 xl:p-0 floating">
            <img className="m-auto" src="/images/solutions/Web2.svg" />
          </div>
          <div className="justify-center p-5 md:p-2  lg:p-10 xl:p-0 floating ">
            <img className="m-auto" src="/images/solutions/Web3.svg" />
          </div>
        </div>
            {/* parallax end here */}
      </div>
    </section>
  );
}

export default Solutions;
