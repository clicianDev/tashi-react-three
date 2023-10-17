import React from "react";
import content from "./content.json";

function Content() {
  return (
    <div className="about-background border border-tashi-tertiary rounded-[30px]">
      <div className="grid grid-cols-2 gap-4  about-icon justify-center ">
        {content.map((item, index) => (
          <div
            key={index}
            className="py-5 justify-center font-inter text-center px-10 "
          >
            <img
              src={`./images/about/icons/${item.image}.svg`}
              className="m-auto"
            />
            <div className="text-white">
              <h1 className="font-bold ">{item.title}</h1>
              <p>{item.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
