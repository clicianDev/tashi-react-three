import React from "react";
import styles from "../../../styles";
import Scramble from "react-scramble";
import Experience from "../../../Experience";

function Hero() {
  return (
    <section
      id="hero"
      className={`max-w-full hero-background lg:bg-cover lg:bg-right xl:bg-right 2xl:bg-right px-0 py-20 sm:py-20 lg:py-24 sm:px-6 lg:px-20 mx-auto mb-10 md:mb-0 lg:mb-0 xl:mb-0 overflow-hidden`}
    >
      <div className="max-w-screen-2xl m-auto relative h-full flex items-center">
        <div
          className={` z-10 text-center sm:text-left md:text-left lg:text-left py-20 xl:py-32 px-5 sm:px-3 lg:px-0 xl:px-5 `}
        >
          <h1
            className={`font-inter gradient-text-2 text-5xl lg:text-5xl xl:text-5xl 2xl:text-7xl lg:leading-[50px] leading-none font-semibold pb-5`}
          >
            <span>Tashi Protocol</span>
          </h1>
          <p className="font-inter font-normal text-lg sm:text-xl lg:text-2xl desc-color lg:leading-10 sm:leading-7 leading-5">
            Blazing Fast Decentralised Gaming Is Here!
          </p>
          <div className="font-inter flex md:my-7 w-auto sm:w-max md:w-max lg:w-max ">
            <a
              href="https://github.com/tashigg/tashi-network-transport/releases/tag/v0.3.0"
              className={`${styles.buttonBg} flex m-auto  text-center `}
            >
              <img src="./images/icons/download.svg" alt="Download Icon" />
              <span>Download Tashi</span>
            </a>
          </div>
        </div>
        <div className="hero-mascot absolute mx-0 sm:mx-32 lg:mx-36 xl:mx-36 w-full h-[300px] sm:h-[500px] md:h-[500px] lg:h-[700px] xl:h-[800px] mt-[80%] sm:mt-0 md:mt-0 lg:mt-[-5%] xl:mt-[-7%] ">
          <Experience />
        </div>
      </div>
    </section>
  );
}

export default Hero;
