import React from 'react';
import styles from '../../styles';
import Team from './components/Team';

function About() {
    return ( 
    <>
    <section
        id="Team"
        className={`relative max-w-7xl m-auto w-full h-full ${styles.sectionContainer}`}
      >
        <div className="relative font-inter violet-background py-20">
          <h1 className="justify-center gradient-text-2 text-center text-[54px] leading-[60px] font-semibold p-5">
            Tashi's Team
          </h1>
          <p className="font-normal text-lg text-center text-white lg:px-96">
          Seasoned professionals with specialized Web3 experience
          </p>
        </div>
        <Team/>
       
      </section>
    </> );
}

export default About;