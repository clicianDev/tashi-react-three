import React from "react";
import styles from "../../../styles";

function GameStack() {
  return (
    <section
      id="Features"
      className={`w-screen h-screen ${styles.sectionContainer}  `}
    >
      <div>
        <h2 className="justify-center gradient-text-2 text-center text-[54px] leading-[60px] font-semibold p-5">
          dGame-Stack
        </h2>
        <p className="font-normal text-lg text-center text-white lg:px-96">
          Our backend game stack is the most decentralised in the gaming
          industry
        </p>
      </div>
      <div className="flex my-10 justify-center">
        <div className="grid grid-flow-row basis-1/4 gap-10 justify-center">
          <div className="gap-2">
            <h3 className="text-white font-normal text-3xl">Play</h3>
            <p className="text-white opacity-[0.5] font-normal text-xl">
              Cross-platform Lobby
              <br /> & Match-making
            </p>
          </div>
          <div className="gap-2">
            <h3 className="text-white font-normal text-3xl">Access</h3>
            <p className="text-white opacity-[0.5] font-normal text-xl">
              3rd Party Account
              <br />
              Integration
              <br />
              GDPR & COPPA Compliance
            </p>
          </div>
          <div className="gap-2">
            <h3 className="text-white font-normal text-3xl">Engagement</h3>
            <p className="text-white opacity-[0.5] font-normal text-xl">
              Leaderboards, Achievements & Rewards
            </p>
          </div>
        </div>
        <div className="relative basis-1/2 justify-center my-20">
          <div className="justify-center w-full">
            <img src="images/gamestack/circle.svg" className="m-auto" />
          </div>
        </div>
        <div className="grid grid-flow-row basis-1/4 gap-10 justify-center">
          <div className="gap-2">
            <h3 className="text-white font-normal text-3xl">Storage</h3>
            <p className="text-white opacity-[0.5] font-normal text-xl">
              Decentralized, Persistent, <br />
              Player Profiles, Statistics Tracking
            </p>
          </div>
          <div className="gap-2">
            <h3 className="text-white font-normal text-3xl">Monetization</h3>
            <p className="text-white opacity-[0.5] font-normal text-xl">
              Catalogue, Order, and Entitlements
              <br /> Wallets & Currency Rails <br /> In-Game/App purchases
            </p>
          </div>
          <div className="gap-2">
            <h3 className="text-white font-normal text-3xl">Dashboard</h3>
            <p className="text-white opacity-[0.5] font-normal text-xl">
              KPI Tracking <br />
              Custom Metric Creation, <br />
              Data-Warehouse, Streaming
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameStack;
