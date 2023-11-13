import React from "react";
import content from "./content.json";

function Content() {
  return (
   
       <div className="px-36 benefits-background relative m-auto">
        <div className="grid grid-cols-2 gap-4  benefits-icon justify-center ">
          {content.map((item, index) => (
            <div
              key={index}
              className="py-5 justify-center font-inter text-center px-1 sm:px-2 lg:px-10 "
            >
              <img
                src={`./images/benefits/icons/${item.image}.svg`}
                className="m-auto"
              />
              <div className="text-white">
                <h3 className="font-bold ">{item.title}</h3>
                <p className="px-5">{item.Description}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
   
     
   
  );
}

export default Content;
