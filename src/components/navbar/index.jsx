import React from "react";
import items from "./items.json";
import styles from "../styles";
import Logo from "./components/Logo";
import NavList from "./components/NavList";
import MobileNavList from "./components/mobile/MobileNavList";
function Navbar() {
  return (
    <header>
      <nav>
        <div className={`fixed w-full z-50 py-8 ${styles.sectionContainer}`}>
          <div className="flex justify-between mb-5">
            <Logo/>
            <NavList/>
           <MobileNavList/>
          </div>

          <span class="fade-border"></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
