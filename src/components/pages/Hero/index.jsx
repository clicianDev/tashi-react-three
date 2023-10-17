import React from "react";
import styles from "../../styles";
function Hero() {
 
  return (
    <section id="hero" className={`w-screen h-screen ${styles.sectionContainer} `}>
      <div className={` text-center lg:pt-[150px] justify-center font-inter`}>
        <h1 className={`gradient-text text-white text-[54px]  font-semibold`}>
          Introducing Mesh Multiplayer Gaming
        </h1>
        <p className=" font-normal text-center text-white leading-9		">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          <br /> suscipit semper nunc, a ultricies neque imperdiet et.
        </p>
        <div className="hidden lg:block my-7">
          <a className={`${styles.buttonBg}`}>Download Tashi</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
