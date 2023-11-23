import React from "react";
import styles from "../../styles";
import Advisors from "./components/Team/Advisors";
import TeamList from "./components/Team";

function Team() {
  return (
    <>
      <section
        id="Team"
        className={`relative max-w-screen-2xl m-auto w-full h-full ${styles.sectionContainer} violet-background lg:bg-contain bg-top`}
      >
        <div className="relative font-inter py-10 md:py-20">
          <h1 className="justify-center gradient-text-2 text-center text-3xl md:text-4xl lg:text-5xl leading-[1.5] md:leading-[1.6] font-semibold p-5">
            Tashi's Team
          </h1>
          <p className="font-normal text-base md:text-lg lg:text-xl text-center text-white mx-5 lg:px-10">
            Seasoned professionals with specialized Web3 experience
          </p>
        </div>
        <TeamList />
        <span className="fade-border"></span>
        <div className="violet-background bg-contain bg-top">
          <div className="relative font-inter py-10 md:py-20 ">
            <h2 className="justify-center gradient-text-2 text-center text-3xl md:text-4xl lg:text-5xl leading-[1.5] md:leading-[1.6] font-semibold p-5">
              Our Advisors
            </h2>
            <p className="font-normal text-base md:text-lg lg:text-xl text-center text-white mx-5 lg:px-10">
              Tashi knows what’s up, we’re advised by heavyweights of the gaming
              sector.
            </p>
          </div>
          <Advisors />
        </div>
      </section>
    </>
  );
}

export default Team;
