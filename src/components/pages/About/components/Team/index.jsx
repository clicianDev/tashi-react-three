import React from "react";
import Employee from "./Employee"
import Head from "./Head";
function Team() {
  return (
    <div className="relative m-auto">
     <Head/>
     <span className="fade-border"></span>
    <Employee/>
    </div>
  );
}

export default Team;
