import React from "react";
import SearchLocation from "./SearchLocation";
import SearchDepartment from "./SearchDepartment";

function Filter(props) {

  const handleSelectedItem = (selectedItem) => {
    // Do something with the selected item
    props.selectedItem(selectedItem);
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-center m-auto">
      <SearchLocation />
      <SearchDepartment itemSelected={handleSelectedItem}/>
    </div>
  );
}

export default Filter;
