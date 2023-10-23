import React from "react";
import styles from "../../styles";
function Hero() {
 
  return (
    <section id="hero" className={`w-screen h-screen ${styles.sectionContainer} `}>
      <div className={` text-center pt-[150px] justify-center font-inter`}>
        <h1 className={`gradient-text  text-5xl sm:text-5xl lg:text-[54px] lg:leading-[50px] leading-none font-semibold pb-5`}>
          Introducing Mesh Multiplayer Gaming
        </h1>
        <p className=" font-normal text-center text-white lg:leading-9 sm:leading-7 leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          <br /> suscipit semper nunc, a ultricies neque imperdiet et.
        </p>
        <div className="block my-7">
          <a className={`${styles.buttonBg}`}>Download Tashi</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
