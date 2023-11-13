import React from "react";
import PartnersList from "./components/PartnersList";

function Partners() {
  return (
    <section className="max-w-7xl m-auto">
      <div className=" my-0 lg:my-5">
        <h2 className="font-inter text-center text-3xl lg:text-2xl lg:leading-[50px] text-white">
          Our Partners
        </h2>
      </div>

      <PartnersList />
      <span className="fade-border"></span>
    </section>
  );
}

export default Partners;
