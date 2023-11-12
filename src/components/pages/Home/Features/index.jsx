import React from "react";
import styles from "../../../styles";
import Info from "./components/Info";
function Features() {
  return (
    <section id="Features"  className={`max-w-7xl m-auto  h-screen ${styles.sectionContainer} mt-[15%] violet-background `}>
      <div >
        <h1 className="justify-center gradient-text-2 text-center text-[54px] leading-[60px] font-semibold p-5">
        Tashi’s Features are Valuable to<br/> both Web2 + Web3 Game Devs
        </h1>
      </div>
      <Info/>
    </section>
  );
}

export default Features;
