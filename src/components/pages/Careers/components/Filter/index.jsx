import React from "react";
import SearchLocation from "./SearchLocation";
import SearchDapartment from "./SearchDepartment";

function Filter() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-center">
      <SearchLocation />
      <SearchDapartment />
    </div>
  );
}

export default Filter;
