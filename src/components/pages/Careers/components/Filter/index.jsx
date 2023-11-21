import React from "react";
import SearchLocation from "./SearchLocation";
import SearchDepartment from "./SearchDepartment";

function Filter() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-center m-auto">
      <SearchLocation />
      <SearchDepartment />
    </div>
  );
}

export default Filter;
