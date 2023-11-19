import React from "react";
import styles from "../../../styles";
function Timeline() {
  return (
    <section
      id="Timeline"
      className={`max-w-screen-2xl m-auto h-full ${styles.sectionContainer} overflow-visible`}
    >
      <div className="container overflow-visible  ">
        <ul id="cards">
          <li className="card" id="card1">
            <div className="card-body bg-tashi-primary font-inter text-white violet-background">
              <h2 className="font-semibold text-5xl">2022</h2>
              <ul className="text-2xl leading-6 font-normal list-disc p-5">
                <li className="my-5">Cracked the consensus code</li>
                <li className="my-5">Showcased first decentralised demo game</li>
              </ul>
            </div>
          </li>
          <li className="card" id="card2">
            <div className="card-body bg-tashi-primary font-inter text-white violet-background">
              <h2 className="font-semibold text-5xl">2023</h2>
              <ul className="text-2xl leading-6 font-normal list-disc p-5">
                <li className="my-5">Secured seed funding</li>
                <li className="my-5">Launched PC and mobile gaming backend platform</li>
                <li className="my-5">Solved Netcode, NAT hole punching, Smart Relays</li>
              </ul>
            </div>
          </li>
          <li className="card" id="card3">
            <div className="card-body bg-tashi-primary font-inter text-white violet-background">
              <h2 className="font-semibold text-5xl">2024</h2>
              <ul className="text-2xl leading-6 font-normal list-disc p-5 ">
                <li className="my-5">Token Generation Event</li>
                <li className="my-5">Launch global nodes and Tashi Council</li>
                <li className="my-5">Onboard 1 Million Gamers on Tashi’s infrastructure</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Timeline;
