import React from "react";
import Team from "./team.json";
function Advisors() {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 w-full my-20 sm:px-5 md:px-20 lg:px-20 xl:px-32 m-auto">
      {Team.Advisors.map((item, index) => (
        <div
          key={index}
          className={`border border-tashi-tertiary rounded-2xl p-2 flex gap-5  w-auto ${
            index === 4 ? "lg:col-span-2 border-0 lg:flex lg:justify-center p-0 " : ""
          }`}
        >
          <div className={`flex gap-5 ${
            index === 4 ? "lg:col-start-2 lg:col-span-2 border border-tashi-tertiary rounded-2xl p-2 md:w-full lg:w-max" : ""}  `}>
            <div className="border border-tashi-tertiary rounded-2xl flex gap-2 justify-center overflow-hidden w-max ">
              <img
                src={`./images/About/team/advisors/${item.imgPath}.png`}
                width={140}
                height={130}
              />
            </div>
            <div className="flex flex-col w-1/2 ">
                    <h3 className="text-white font-normal text-lg">{item.name}</h3>
            <p className="text-gray-500 font-normal text-base">{item.desc}</p>
            <a href={item.url} className="mt-auto" target="_blank">
              <img
                src="./images/About/icons/linkedIn.svg"
                alt={`LinkedIn of ${item.name} `}
              />
            </a>
            </div>

        
          </div>
        </div>
      ))}
    </div>
  );
}

export default Advisors;
