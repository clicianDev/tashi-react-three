import React from "react";
import styles from "../../../../styles";
import jobs from "./openjobs.json";
function Jobs() {
  return (
    <div className="lg:px-20 my-20">
      {jobs.map((item, index) => (
        <div key={index}>
          <div className="py-10">
            <span className="fade-border"></span>
          </div>
          <div className=" lg:flex justify-center content-center ">
            <div className="w-full  m-auto">
              <h3 className="text-white font-semibold text-4xl">
                {item.title}
              </h3>
              <div className="text-white font-normal text-xl opacity-50 my-5">
                {item.location}
              </div>
            </div>
            <div className="w-max mt-10 lg:mt-0 xl:mt-0">
              <a
                className={`py-2 px-8 rounded-full border border-tashi-tertiary text-white bg-gradient-tashi text-center inline-block m-auto w-max`}
                href={`${item.path}`}
                target="_blank"
              >
                Apply
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jobs;
