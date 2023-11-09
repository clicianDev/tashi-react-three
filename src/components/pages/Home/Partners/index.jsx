import React from "react";
import PartnersList from "./components/PartnersList";

function Partners() {
  return (
    <section>
      <div className="my-5">
        <h2 className="font-inter text-center text-2xl text-white">
          Our Partners
        </h2>
      </div>

      <PartnersList />
      <span className="fade-border"></span>
    </section>
  );
}

export default Partners;
