import React, { useState } from "react";
import SearchContainer from "./SearchContainer";

const SearchDepartment = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    // Handle the selected item (you can perform an action here)
    console.log(`Selected: ${item}`);
    // Close the dropdown after selecting an item
    setIsDropdownOpen(false);
  };

  const arrowImage = isDropdownOpen
    ? "/images/icons/arrow-up.svg"
    : "/images/icons/arrow-down.svg";

  return (
    <SearchContainer>
      <div className="flex">
         <div  className="relative font-inter font-normal text-lg text-white w-full cursor-pointer"
          onClick={toggleDropdown}>
        Department
      </div>
      <div className="flex content-center ">
        <img src="/images/icons/arrow-down.svg" />
      </div>
      </div>
      
      {isDropdownOpen && (
        <div className="left-0 mt-2 text-white opacity-50 font-inter font-normal mx-5 text-lg">
          <div
            className="cursor-pointer mt-2"
            onClick={() => handleItemClick("Remote")}
          >
            Business
          </div>
          <div
            className="cursor-pointer mt-2"
            onClick={() => handleItemClick("Remote")}
          >
            Product
          </div>
          <div
            className="cursor-pointer mt-2"
            onClick={() => handleItemClick("Remote")}
          >
           Technology
          </div>
        </div>
      )}
     
    </SearchContainer>
  );
};

export default SearchDepartment;
