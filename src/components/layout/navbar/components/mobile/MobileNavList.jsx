import React, { useState } from "react";
import styles from "../../../../styles";
import Items from "../../../items.json";
import Socials from "../../../Socials";
import Line from "../../../../../assets/mobileMenuLine.svg";
function MobileNavList() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Mobile */}
      <div className="xl:hidden">
        <button
          onClick={toggleMobileMenu}
          id="navbar-toggle"
          type="button"
          className="relative z-10 -m-2 p-2 inline-flex items-center rounded-lg opacity-70 transition-opacity active:opacity-100  [&:not(:focus-visible)]:focus:outline-none"
          aria-label="Toggle site navigation"
          aria-expanded={isMobileMenuOpen}
        >
          <img
            id="navbar-toggle-expand"
            className={`h-8 w-8 ${isMobileMenuOpen ? "hidden" : ""}`}
            src="/images/navbar/icons/menu-expand.svg"
            alt="Show Menu"
          />
          <img
            id="navbar-toggle-collapse"
            className={`h-8 w-8 ${isMobileMenuOpen ? "" : "hidden"}`}
            src="/images/navbar/icons/menu-collapse.svg"
            alt="Hide Menu"
          />
        </button>
        {isMobileMenuOpen && (
          <>
            <div
              onClick={toggleMobileMenu}
              id="navbar-popover-overlay"
              className="fixed inset-0 z-0 bg-tashi-primary backdrop-blur opacity-70"
              aria-hidden="true"
            ></div>
            <div
              id="navbar-popover-panel"
              className="absolute text-left sm:text-center lg:text-center xl:text-left inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-tashi-primary px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
              tabIndex="-1"
            >
              <div className="space-y-4">
                {Items.map((item, index) => (
                  <div key={index}>
                    <div className="py-2 flex justify-center">
                      <img src={Line} />
                    </div>
                    <a
                      key={index}
                      className={`block tashi-nav-link-mobile ${index <=3 ? '' :'m-auto sm:justify-center flex gap-1'}`}
                      href={`${index <=3 ? `/${item.path}` : `${item.path}` }`}
                    >
                      {item.title}
                      {index <=3 ? "" : <img src="/images/icons/external-link.svg" className="mt-[-10px]"/>}
                    </a>
                    
                  </div>
                  
                ))}
                <div className="py-2 flex justify-center">
                  <img src={Line} />
                </div>
              </div>
              <div className="py-2 mt-5">
                <img src={Line} />
              </div>
              <div className="mt-8 flex flex-row gap-4">
                <Socials />
              </div>
              <div className="py-1 mt-5">
                <img src={Line} />
              </div>
              <div className="m-auto w-full flex justify-center">
                <a
                  className={`${styles.buttonBg} m-auto w-full text-center`}
                  href="mailto: contactus@tashi.gg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="hidden xl:flex gap-5">
        <Socials />
      </div>
      <div className="hidden xl:block">
        <a className={`${styles.buttonBg}`} href="mailto: contactus@tashi.gg">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default MobileNavList;
