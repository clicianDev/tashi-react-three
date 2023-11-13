import React from "react";
import team from "./team.json";
function Head() {
  return (
    <div className="grid grid-cols-4 gap-5 px-32 my-20">
      {team.Head.map((item, index) => (
        <div
          key={index}
          className="border border-tashi-tertiary rounded-2xl p-2"
        >
          <div className="m-auto">
            <img
              src={`./images/About/team/${item.imgPath}.png`}
              className="m-auto w-full"
            />
          </div>
          <div className="font-inter my-5 mx-2">
            <h3 className="text-white font-normal text-lg">{item.name}</h3>
            <p className="text-gray-500 font-normal text-base">
              {item.position}
            </p>
          </div>
          <div className="my-5 mx-2">
            <a>
              <img src="./images/About/icons/linkedIn.svg" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Head;
