import React from 'react';
import styles from '../../styles';
import Team from './components/Team';

function About() {
  return (
    <>
      <section
        id="Team"
        className={`relative max-w-screen-2xl m-auto w-full h-full ${styles.sectionContainer} violet-background bg-contain bg-top`}
      >
        <div className="relative font-inter py-10 md:py-20">
          <h1 className="justify-center gradient-text-2 text-center text-3xl md:text-4xl lg:text-5xl leading-[1.5] md:leading-[1.6] font-semibold p-5">
            Tashi's Team
          </h1>
          <p className="font-normal text-base md:text-lg lg:text-xl text-center text-white mx-5 lg:px-10">
            Seasoned professionals with specialized Web3 experience
          </p>
        </div>
        <Team />
      </section>
    </>
  );
}

export default About;
