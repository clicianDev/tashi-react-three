import React from "react";
import { RandomReveal, useRandomReveal } from "react-random-reveal";
import styles from "../../styles";
import Scramble from 'react-scramble'
function Hero() {
 
  return (
    <section id="hero" className={`w-screen h-screen ${styles.sectionContainer} `}>
      <div className={` text-center pt-[150px] justify-center `}>
        <h1 className={`font-inter gradient-text  text-5xl sm:text-5xl lg:text-[54px] lg:leading-[50px] leading-none font-semibold pb-5`}>
        <Scramble
        speed="slow"
        autoStart
        text="Introducing Mesh "
        steps={[
          {
            
            roll:10,
            action: '+',
            type: 'all',
          },
          {
            action: '-',
            type: 'forward',
          },
        ]}
      />
      <Scramble
        speed="slow"
        autoStart
        text="Multiplayer Gaming"
        steps={[
          {
            
            roll: 10,
            action: '+',
            type: 'random',
          },
          {
            action: '-',
            type: 'random',
          },
        ]}
      />
        </h1>
        <p className="font-inter font-normal text-center text-white lg:leading-9 sm:leading-7 leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          <br /> suscipit semper nunc, a ultricies neque imperdiet et.
        </p>
        <div className="font-inter block my-7">
          <a className={`${styles.buttonBg}`}>Download Tashi</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
