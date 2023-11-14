import React from "react";
import team from "./team.json";

function Head() {
  return (
    <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 px-5 md:px-10 lg:px-20 my-10 md:my-20">
      {team.Head.map((item, index) => (
        <div
          key={index}
          className="border border-tashi-tertiary rounded-2xl p-4"
        >
          <div className="m-auto">
            <img
              src={`./images/About/team/${item.imgPath}.png`}
              className="m-auto w-full h-auto"
              alt={item.name}
            />
          </div>
          <div className="font-inter my-3 text-center lg:text-left">
            <h3 className="text-white font-normal text-base md:text-lg lg:text-xl ">
              {item.name}
            </h3>
            <p className="text-gray-500 font-normal text-sm md:text-base">
              {item.position}
            </p>
          </div>
          <div className="my-3">
            <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="m-auto">
              <img
                src="./images/About/icons/linkedIn.svg"
                alt={`LinkedIn of ${item.name}`}

              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Head;
