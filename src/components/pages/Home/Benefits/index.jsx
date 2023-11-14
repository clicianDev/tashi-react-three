import React from "react";
import styles from "../../../styles";
import Content from "./components/Content";

function Benefits() {
  return (
    <section
      id="Benefits"
      className={`max-w-screen-2xl m-auto ${styles.sectionContainer} violet-background `}
    >
      <div className="font-inter text-center p- lg:p-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.5] md:leading-[1.6] font-semibold gradient-text">
          Benefits that we deliver.
        </h2>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-white">
          Tashi simplifies the game dev backend while offering many benefits to game studios
        </p>
      </div>
      <Content />
    </section>
  );
}

export default Benefits;
