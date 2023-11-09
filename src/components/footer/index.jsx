import React from "react";
import styles from "../styles";
import Logo from "./components/Logo";
import NavList from "../navbar/components/NavList";
import MobileNavList from "./components/mobile/MobileNavList";
function Footer() {
  return (
    <footer>
          <span className="fade-border"></span>
      <div className={`m-auto w-full z-50 py-8 ${styles.sectionContainer}`}>
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
