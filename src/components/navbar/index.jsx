import React from "react";
import items from "./items.json";
import styles from "../styles";
import Logo from "./components/Logo";
import NavList from "./components/NavList";
import MobileNavList from "./components/mobile/MobileNavList";
function Navbar() {
  return (
    <header className="relative max-w-screen-2xl m-auto">
      <nav>
        <div className={`absolute m-auto w-full z-50 py-8 ${styles.sectionContainer}`}>
          <div className="flex justify-between mb-5">
            <Logo/>
            <NavList/>
           <MobileNavList/>
          </div>

          <span className="fade-border"></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
