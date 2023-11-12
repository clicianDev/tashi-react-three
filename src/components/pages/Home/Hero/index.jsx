import React from "react";
import styles from "../../../styles";
import Scramble from "react-scramble";
import Experience from "../../../Experience";

function Hero() {
  return (
    <section id="hero" className={`max-w-7xl m-auto w-screen h-screen relative hero-background flex items-center`}>
      
        <div className="absolute m-auto">
          <h1
            className={`font-inter gradient-text-2 text-3xl sm:text-4xl lg:text-5xl lg:leading-[50px] leading-none font-semibold pb-5`}
          >
            <span>Tashi Protocol</span>
            {/* <Scramble
              speed="medium"
              autoStart
              text="Protocol"
              steps={[
                {
                  roll: 10,
                  action: "+",
                  type: "random",
                },
                {
                  action: "-",
                  type: "random",
                },
              ]}
            /> */}
          </h1>
          <p className="font-inter font-normal text-lg sm:text-xl lg:text-2xl text-white lg:leading-10 sm:leading-7 leading-5">
            Pioneering decentralisation of the gaming industry
          </p>
          <div className="font-inter block my-7 w-max">
            <a className={`${styles.buttonBg} flex `}>
              <img src="./images/icons/download.svg" alt="Download Icon" />
              <span>Download Tashi</span>
            </a>
          </div>
        </div>
      <div className="w-full h-full m-auto">
        <Experience />
      </div>
    </section>
  );
}

export default Hero;
