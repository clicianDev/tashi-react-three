import React from 'react';
import styles from '../../../styles';

function Integrate() {
  return (
    <section
      id="Integration"
      className={`max-w-screen-2xl m-auto px-4 sm:py-20 sm:px-6 lg:px-20 mx-auto violet-background flex flex-col sm:flex-row  gap-5 sm:gap-10`}
    >
      <div className="w-full sm:w-[50%] md:w-[60%] lg:w-[70%] xl:w-[75%] justify-center ">
        <img src="images/integrate.svg" className="m-auto" alt="Integration" />
      </div>
      <div className="flex flex-col justify-center w-full sm:w-[50%] md:w-[60%] lg:w-[70%] xl:w-[75%] mt-5 sm:mt-0">
        <h2 className="gradient-text-2 text-4xl md:text-5xl lg:text-6xl leading-[1.5] md:leading-[1.6] font-semibold p-5">
          Integration With <br /> Public Networks
        </h2>
        <p className="font-normal text-base md:text-lg lg:text-xl text-white mx-5">
          Our public network will inter-operate with all the leading L1's and L2's from the get-go
        </p>
      </div>
    </section>
  );
}

export default Integrate;
