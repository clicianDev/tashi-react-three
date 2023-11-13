import React from "react";
import styles from "../../../styles";
import Scramble from "react-scramble";
import Experience from "../../../Experience";

function Hero() {
  return (
    <section
      id="hero"
      className={`m-auto w-auto h-auto relative `}
    >
      <div className={`max-w-7xl m-auto relative flex items-center gap-5 h-screen hero-background ${styles.sectionContainer}  w-screen `}>
        <div className="block lg:absolute m-auto w-auto z-10 text-center md:text-left lg:text-left p-10 md:p-5 lg:p-0 ">
          <h1
            className={`font-inter gradient-text-2 text-4xl lg:text-5xl lg:leading-[50px] leading-none font-semibold pb-5`}
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
          <div className="font-inter flex my-7 w-auto lg:w-max text-center justify-center lg:justify-start">
            <a className={`${styles.buttonBg} flex m-auto`}>
              <img src="./images/icons/download.svg" alt="Download Icon" />
              <span>Download Tashi</span>
            </a>
          </div>
        </div>
        <div className="absolute lg:block w-full h-full mx-32">
          <Experience />
        </div>
      </div>
    </section>
  );
}

export default Hero;
