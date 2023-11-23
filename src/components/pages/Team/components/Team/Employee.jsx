import React from "react";
import Team from "./team.json";
function Employee() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20 w-full my-20 sm:px-5 md:px-20 lg:px-20 xl:px-32">
      {Team.Employee.map((item, index) => (
        <div
          key={index}
          className="border border-tashi-tertiary rounded-2xl p-2 flex gap-5"
        >
          <div className="border border-tashi-tertiary rounded-2xl flex gap-2 justify-center overflow-hidden  ">
            <img src={`./images/About/team/${item.imgPath}.jpeg`} width={140} height={130} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-normal text-lg">{item.name}</h3>
            <p className="text-gray-500 font-normal text-base">
              {item.position}
            </p>
            <div className=" h-full w-max items-end flex flex-col">
              <a href={item.url} className="mt-auto">
                <img src="./images/About/icons/linkedIn.svg"    alt={`LinkedIn of ${item.name}`}/>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Employee;
