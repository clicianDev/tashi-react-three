import React from "react";
import styles from "../../../styles";
import Info from "./components/Info";

function Features() {
  return (
    <section
      id="Features"
      className={`max-w-screen-2xl m-auto ${styles.sectionContainer} violet-background`}
    >
      <div className="text-center p-5 lg:p-10">
        <h1 className="gradient-text-2 text-4xl md:text-5xl lg:text-6xl leading-[1.5] md:leading-[1.6] font-semibold">
          Tashi’s Features are Valuable to <br /> both Web2 + Web3 Game Devs
        </h1>
      </div>
      <Info />
    </section>
  );
}

export default Features;
