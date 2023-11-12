import React from "react";
import styles from "../../../styles";
import Experience from "../../../Experience";


function Solutions() {
  return (
    <section id="Solutions " className={`max-w-7xl m-auto`}>
      <div className=" font-inter">
        <h1 className="justify-center gradient-text-2 text-center text-[54px] leading-[60px] font-semibold p-5">
          Tashi’s Solutions Cater to Both <br />
          Web2 & Web3 Games.
        </h1>
      </div>
      <div className="relative m-auto p-auto">
        <div className="absolute mt-[-10%] m-auto z-0">

          
          <img src="\images\background-hero.png"></img>
        </div>
        <div className="absolute w-screen h-screen z-10">



</div>
        <div className="grid grid-cols-2 m-auto">
          <div className="justify-center">
            <img className="m-auto" src="/images/solutions/Web2.svg" />
          </div>
          <div className="justify-center">
            <img className="m-auto" src="/images/solutions/Web3.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
