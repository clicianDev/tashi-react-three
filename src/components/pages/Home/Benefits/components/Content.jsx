import React from "react";
import content from "./content.json";

function Content() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 benefits-background relative m-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 bg-none md:bg-benefits-background bg-no-repeat bg-center  justify-center" style={{ backgroundPositionY: '55%' }}>
        {content.map((item, index) => (
          <div
            key={index}
            className="py-5 justify-center font-inter text-center px-2 sm:px-4 lg:px-6"
          >
            <img
              src={`./images/benefits/icons/${item.image}.svg`}
              className="m-auto"
              alt={item.title}
            />
            <div className="text-white">
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl">
                {item.title}
              </h3>
              <p className="px-3 sm:px-5 lg:px-8 text-sm sm:text-base lg:text-lg">
                {item.Description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
