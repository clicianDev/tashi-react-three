import React from "react";
import SearchContainer from "./SearchContainer";


const SearchLocation = () => {
    return( 
    <SearchContainer>
        <div className="font-inter font-normal text-lg text-white w-full">Location</div>
        <div className="flex content-center"><img src="/images/icons/arrow-down.svg"/></div>
    </SearchContainer>
    );
  };

  export default SearchLocation;