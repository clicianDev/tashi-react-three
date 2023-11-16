
import React from "react";

const SearchContainer = ({ children }) => {
    return (
      <div className="border border-tashi-tertiary rounded-2xl p-4 flex w-[300px] m-auto sm:m-0 md:m-0 lg:m-0">
        {children}
      </div>
    );
  };

  export default SearchContainer;