import React from "react";
import styles from "../../styles";
import content from "./content.json";
function About() {
  return (
    <section
      id="About"
      className={`w-screen h-screen ${styles.sectionContainer} `}
    >
      <div className={` text-center py-12 justify-center font-inter `}>
        <div className="hidden lg:block mb-7">
          <a className={`${styles.buttonBgTwo}`}>Integrations</a>
        </div>
        <h1 className={`gradient-text-2 text-white text-[54px] font-semibold`}>
          Benefits that
          <br /> we deliver.
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 about-background justify-center items-center ">
        <div className="relative m-auto  w-screen mt-[30px] bg-red-500">
          <img src="./images/about/Logo.svg " className="m-auto" />
        </div>
        {content.map((item, index) => (
          <div
            key={index}
            className="py-5 justify-center font-inter text-center px-28 "
          >
            <img
              src={`./images/about/icons/${item.image}.svg`}
              className="m-auto"
            />
            <div className="text-white">
              <h1 className="font-bold ">{item.title}</h1>
              <p>{item.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
