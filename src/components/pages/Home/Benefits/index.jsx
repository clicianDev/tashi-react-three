import React from "react";
import styles from "../../../styles";
import Content from "./components/Content";
function Benefits() {
  return (
    <section
      id="Benefits"
      className={`w-screen h-screen ${styles.sectionContainer} violet-background `}
    >
      <div className="my-28 font-inter">
        <h1 className="justify-center gradient-text-2 text-center text-[54px] leading-[60px] font-semibold p-5">
          Benefits that we deliver.
        </h1>
        <p className="font-normal text-lg text-center text-white lg:px-96">
        Tashi simplifies the game dev backend while offering many benefits to game studios
        </p>
      </div>
      <Content/>
    </section>
  );
}

export default Benefits;
