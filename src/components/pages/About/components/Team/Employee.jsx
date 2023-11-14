import React from "react";
import Team from "./team.json";

function Employee() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 w-full my-10 md:my-20 px-5 md:px-10 lg:px-20">
      {Team.Employee.map((item, index) => (
        <div
          key={index}
          className="border border-tashi-tertiary rounded-2xl p-4 flex flex-col justify-between"
        >
          <div className="border border-tashi-tertiary rounded-2xl flex justify-center items-center w-20 h-20 mx-auto mb-4">
            <img
              src="/images/About/icons/person.svg"
              alt="Person Icon"
              className="w-12 h-12"
            />
          </div>
          <div className="text-center">
            <h3 className="text-white font-normal text-base md:text-lg lg:text-xl">
              {item.name}
            </h3>
            <p className="text-gray-500 font-normal text-sm md:text-base">
              {item.position}
            </p>
          </div>
          <div className="mt-3 text-center">
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

export default Employee;
