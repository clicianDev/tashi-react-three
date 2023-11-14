import React from "react";
import styles from "../../../styles";
import Info from "./components/Info";
function Features() {
  return (
    <section id="Features"  className={`max-w-screen-2xl m-auto h-full ${styles.sectionContainer} violet-background `}>
      <div >
      <h2 className=" text-center text-4xl md:text-5xl lg:text-6xl leading-[1.5] md:leading-[1.6] font-semibold gradient-text">
        Tashi’s Features are Valuable to<br/> both Web2 + Web3 Game Devs
        </h2>
      </div>
      <Info/>
    </section>
  );
}

export default Features;
