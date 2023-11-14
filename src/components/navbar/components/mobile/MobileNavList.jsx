import React, { useState } from "react";
import styles from "../../../styles";

function MobileNavList() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          id="navbar-toggle"
          type="button"
          className="relative z-10 -m-2 p-2 inline-flex items-center rounded-lg opacity-70 transition-opacity active:opacity-100 hover:bg-gray-200/50 [&:not(:focus-visible)]:focus:outline-none"
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
              className="fixed inset-0 z-0 bg-gray-300/30 backdrop-blur opacity-100"
              aria-hidden="true"
            ></div>
            <div
              id="navbar-popover-panel"
              className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-tashi-primary px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
              tabIndex="-1"
            >
              <div className="space-y-4">
                {/* ... your mobile menu items ... */}
                <a
                  className="block tashi-nav-link-mobile"
                  href="/about-us"
                >
                  About
                </a>
                <a
                  className="block tashi-nav-link-mobile"
                  href="https://medium.com/tashi-gg"
                >
                  Blog
                </a>
                <a className="block tashi-nav-link-mobile" href="/careers.html">
                  Careers
                </a>
                <a
                  className="block tashi-nav-link-mobile"
                  href="https://tashi.dev"
                >
                  Documentation
                </a>
              </div>

              <div className="mt-8 flex flex-row gap-4">
                <a
                  className="lg:block tashi-nav-social-media"
                  href="https://www.linkedin.com/company/tashigg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/navbar/logos/social/linkedin.svg"
                    alt="LinkedIn"
                  />
                </a>
                {/* ... your other social media icons ... */}
              </div>
            </div>
          </>
        )}
      </div>

      {/* ... the rest of your component ... */}
      <div className="hidden lg:flex gap-5">
        <img src="/images/navbar/icons/discord.svg" alt="Discord" />
        <img src="/images/navbar/icons/reddit.svg" alt="Reddit" />
        <img src="/images/navbar/icons/twitter.svg" alt="Twitter" />
      </div>
      <div className="hidden lg:block">
        <a className={`${styles.buttonBg}`}>Contact Us</a>
      </div>
    </div>
  );
}

export default MobileNavList;
