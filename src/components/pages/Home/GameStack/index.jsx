import React from "react";
import styles from "../../../styles";

function GameStack() {
  return (
    <section
      id="dGame-stack"
      className={`max-w-screen-2xl m-auto px-4 py-20 sm:py-20 lg:py-20 sm:px-6 lg:px-20 mx-auto violet-background2`}
    >
      <div className="text-center">
        <h2 className="gradient-text-2 text-4xl md:text-5xl lg:text-6xl leading-[1.5] md:leading-[1.6] font-semibold">
          dGame-Stack
        </h2>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-white lg:px-32">
          Our backend game stack is the most decentralized in the gaming
          industry
        </p>
      </div>

      {/* <div className="grid grid-cols-3 gap-20 h-auto m-auto  px-20">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-10 justify-center ">
            <div className="flex justify-center">
              <div className="m-auto">
                <div className="gap-2">
                  <h3 className="text-white font-normal text-xl lg:text-3xl my-5">
                    Play
                  </h3>
                  <p className="text-white opacity-50 font-normal text-base lg:text-xl">
                    Cross-platform Lobby
                    <br /> & Match-making
                  </p>
                </div>
                <div className="gap-2">
                  <h3 className="text-white font-normal text-xl lg:text-3xl my-5">
                    Access
                  </h3>
                  <p className="text-white opacity-50 font-normal text-base lg:text-xl">
                    3rd Party Account
                    <br />
                    Integration
                    <br />
                    GDPR & COPPA Compliance
                  </p>
                </div>
                <div className="gap-2">
                  <h3 className="text-white font-normal text-xl lg:text-3xl my-5">
                    Engagement
                  </h3>
                  <p className="text-white opacity-50 font-normal text-base lg:text-xl">
                    Leaderboards, Achievements & Rewards
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="absolute xl:w-[50%] xl:h-[50%] xl:left-[17%] xl:mt-[3%]">
              <img
                src="images/gamestack/circle-2.png"
                className="m-auto"
                alt="Circle"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-10 justify-center col-start-3 m-auto">
            <div className="flex justify-center mt-7 ">
              <div className="m-auto">
                <div className="gap-2">
                  <h3
                    className="text-white font-normal text-xl lg:text-3xl my-5
              "
                  >
                    Storage
                  </h3>
                  <p className="text-white opacity-50 font-normal text-base lg:text-xl ">
                    Decentralized, Persistent, <br />
                    Player Profiles, Statistics Tracking
                  </p>
                </div>
                <div className="gap-2">
                  <h3 className="text-white font-normal text-xl lg:text-3xl my-5">
                    Monetization
                  </h3>
                  <p className="text-white opacity-50 font-normal text-base lg:text-xl">
                    Catalogue, Order, and Entitlements
                    <br /> Wallets & Currency Rails <br /> In-Game/App purchases
                  </p>
                </div>
                <div className="gap-2">
                  <h3 className="text-white font-normal text-xl lg:text-3xl my-5">
                    Dashboard
                  </h3>
                  <p className="text-white opacity-50 font-normal text-base lg:text-xl">
                    KPI Tracking <br />
                    Custom Metric Creation, <br />
                    Data-Warehouse, Streaming
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      <div className="flex flex-col md:flex-row lg:flex-row my-10 justify-center z-50">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-10 justify-center md:m-auto">
          <div className="flex md:block gap-2 items-center">
            <div className="block md:hidden">
              <img src="./images/About/icons/person.svg" />
            </div>
            <div>
              <h3 className="text-white font-normal text-xl lg:text-3xl">
                Play
              </h3>
              <p className="text-white opacity-50 font-normal text-base lg:text-xl">
              Cross-Platform Lobby<br/>& Match-Making
              </p>
            </div>
          </div>
          <div className="flex md:block gap-2 items-center">
            <div className="block md:hidden">
              <img src="./images/About/icons/person.svg" />
            </div>
            <div>
              <h3 className="text-white font-normal text-xl lg:text-3xl">
                Access
              </h3>
              <p className="text-white opacity-50 font-normal text-base lg:text-xl">
                3rd Party Account
                <br />
                Integration
                <br />
                GDPR & COPPA Compliance
              </p>
            </div>
          </div>
          <div className="flex md:block gap-2 items-center">
            <div className="block md:hidden">
              <img src="./images/About/icons/person.svg" />
            </div>
            <div>
              <h3 className="text-white font-normal text-xl lg:text-3xl">
                Engagement
              </h3>
              <p className="text-white opacity-50 font-normal text-base lg:text-xl">
                Leaderboards, Achievements & Rewards
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full m-0 md:ml-[-10%] md:w-1/2 lg:w-1/2 justify-center my-10 z-50 hidden md:block lg:block ">
          <div className="justify-center w-full">
            <img
              src="images/gamestack/circle.svg"
              className="m-auto"
              alt="Circle"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-10 justify-center md:m-auto">
          <div className="flex md:block gap-2 items-center">
            <div className="block md:hidden">
              <img src="./images/About/icons/person.svg" />
            </div>
            <div>
              <h3 className="text-white font-normal text-xl lg:text-3xl">
                Storage
              </h3>
              <p className="text-white opacity-50 font-normal text-base lg:text-xl">
                Decentralized, Persistent, <br />
                Player Profiles, Statistics Tracking
              </p>
            </div>
          </div>
          <div className="flex md:block gap-2 items-center">
            <div className="block md:hidden">
              <img src="./images/About/icons/person.svg" />
            </div>
            <div>
              <h3 className="text-white font-normal text-xl lg:text-3xl">
                Monetization
              </h3>
              <p className="text-white opacity-50 font-normal text-base lg:text-xl">
                Catalogue, Order, and Entitlements
                <br /> Wallets & Currency Rails <br /> In-Game/App Purchases
              </p>
            </div>
          </div>
          <div className="flex md:block gap-2 items-center">
            <div className="block md:hidden">
              <img src="./images/About/icons/person.svg" />
            </div>
            <div>
              <h3 className="text-white font-normal text-xl lg:text-3xl">
                Dashboard
              </h3>
              <p className="text-white opacity-50 font-normal text-base lg:text-xl">
                KPI Tracking <br />
                Custom Metric Creation, <br />
                Data-Warehouse, Streaming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameStack;
