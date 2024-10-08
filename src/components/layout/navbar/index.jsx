import React from "react";

import Logo from "./components/Logo";
import NavList from "./components/NavList";
import MobileNavList from "./components/mobile/MobileNavList";
function Navbar() {
  return (
    <header className="relative max-w-screen-2xl m-auto">
      <nav>
        <div
          className={`absolute m-auto w-full z-50 px-4 py-8 sm:px-6 lg:px-20`}
        >
          <div className="flex justify-between mb-5">
            <Logo />
            <NavList />
            <MobileNavList />
          </div>

          <span className="fade-border"></span>
          
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
