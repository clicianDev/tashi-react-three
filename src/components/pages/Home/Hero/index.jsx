import React from "react";
import styles from "../../../styles";
import Scramble from "react-scramble";
import Experience from "../../../Experience";
function Hero() {
  return (
    <section
      id="hero"
      className={`flex w-screen h-screen   relative`}
    >
      <div className={`inset-0.5  pt-10 px-36 mt-36 w-1/3`}>
        <div className="absolute">
          <h1
          className={` mt-20 font-inter gradient-text-2  text-5xl sm:text-5xl lg:text-[54px] lg:leading-[50px] leading-none font-semibold pb-5`}
        >
          <span>Tashi </span>
          <Scramble
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
            ]}/>
         
        </h1>
        <p className="font-inter font-normal text-2xl text-white lg:leading-10 sm:leading-7 leading-5">
        Pioneering decentralisation of the gaming industry
        </p>
        <div className="font-inter block my-7 w-max">
          <a className={`${styles.buttonBg} flex `}><img src="./images/icons/download.svg"/><span>Download Tashi</span></a>
        </div>
        </div>
        
      </div>
     <div className="hero-background w-full h-auto ">
       <Experience />
     </div>
     
      
    </section>
  );
}

export default Hero;
