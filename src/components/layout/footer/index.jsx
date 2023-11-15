import React from "react";
import Logo from "./components/Logo";
import NavList from "../navbar/components/NavList";
import MobileNavList from "./components/mobile/MobileNavList";
function Footer() {
  return (
    <footer>
          <span className="fade-border"></span>
      <div className={`m-auto w-full z-50 py-5 px-4  sm:px-6  mx-auto max-w-7xl`}>
        <div className="flex justify-between mb-5">
          <Logo />
          <NavList />
          <MobileNavList />
        </div>
      </div>
      <span className="fade-border"></span>
    </footer>
  );
}

export default Footer;
