import React from "react";
import PartnersList from "./components/PartnersList";

function Partners() {
  return (
    <section className=" max-w-screen-2xl m-auto">
      <div>
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
