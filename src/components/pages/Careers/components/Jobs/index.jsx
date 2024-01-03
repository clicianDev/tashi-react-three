import {React, useState, useEffect} from "react";
import styles from "../../../../styles";
import jobsData from "./openjobs.json";
function Jobs(props) {
  const [selectedDepartment, setSelectedDepartment] = useState("");

  // Update selected department when props.selectedItem changes
  useEffect(() => {
    setSelectedDepartment(props.selectedItem);
  }, [props.selectedItem]);

  // Filter jobs based on the selected department
  const filteredJobs = selectedDepartment && selectedDepartment !== "All"
    ? jobsData.filter((job) => job.department === selectedDepartment)
    : jobsData;

  // Sort jobs based on some criteria (you can modify this)
  const sortedJobs = filteredJobs.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="lg:px-20 my-20">
       {sortedJobs.map((item, index) => (
        <div key={index}>
          {/* Your job rendering logic */}
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
