import React from "react";
import InfoData from "./FeaturesInfo.json";

function Info() {
  return (
    <div className="grid md:grid-cols-3 gap-5 mt-20 ">
      {InfoData.map((item, index) => (
        <div key={index} className="features-container px-5 py-0 sm:py-10 ">
          <div className="flip-card-inner m-auto">
            <div className="flip-card-front">
              <div className="mb-[40%]">
                <img
                  src="/tashi-logo.svg"
                  className="flex-shrink-0"
                  width={70}
                  height={70}
                  alt="Logo"
                />
              </div>
              <div className="font-inter">
                <h3 className="text-white text-2xl font-semibold m-auto mt-2">
                  {item.title}
                </h3>
                <p className="text-white opacity-[0.5] font-normal text-xl">
                  {item.subtitle}
                </p>
              </div>
            </div>
            <div className="flip-card-back ">
              <div className="font-inter m-auto">
                <h3 className="text-white text-2xl font-semibold m-auto mt-2">
                  {item.title}
                </h3>
                <p className="text-white font-normal text-xl leading-9">
                  {item.description}
                </p>
              </div>
              {item.status ? (
                <div className="font-inter h-max w-max mt-auto xl:mt-10">
                  <a className="underline text-white font-normal text-xl leading-9">
                    Coming Soon!
                  </a>
                </div>
              ) : (
                <div className="font-inter h-max w-max mt-auto xl:mt-10">
                  <a className="underline text-white font-normal text-xl leading-9" href="https://docs.tashi.gg/documentation/" target="_blank">
                    Read more . . .
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Info;
