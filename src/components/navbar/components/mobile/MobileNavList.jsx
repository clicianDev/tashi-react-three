import React from "react";
import styles from "../../../styles";



function MobileNavList() {
  return (
    <div className="flex items-center gap-4">
      {/* Mobile */}
      <div className="lg:hidden">
        <button
          id="navbar-toggle"
          type="button"
          className="relative z-10 -m-2 p-2 inline-flex items-center rounded-lg opacity-70 transition-opacity active:opacity-100 hover:bg-gray-200/50 [&:not(:focus-visible)]:focus:outline-none"
          aria-label="Toggle site navigation"
          aria-expanded="false"
        >
          <img
            id="navbar-toggle-expand"
            className="h-8 w-8"
            src="/images/navbar/icons/menu-expand.svg"
            type="image/svg+xml"
            alt="Show Menu"
          />
          <img
            id="navbar-toggle-collapse"
            className="hidden h-8 w-8"
            src="/images/navbar/icons/menu-collapse.svg"
            type="image/svg+xml"
            alt="Hide Menu"
          />
        </button>
        <div
          id="navbar-popover-overlay"
          className="hidden fixed inset-0 z-0 bg-gray-300/30 backdrop-blur opacity-100"
          aria-hidden="true"
        ></div>
        <div
          id="navbar-popover-panel"
          className=" opacity-100 transform-none hidden absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
          tabIndex="-1"
        >
          <div className="space-y-4">
            <a
              className="block tashi-nav-link-mobile"
              href="https://medium.com/tashi-gg"
            >
              Blog
            </a>
            <a className="block tashi-nav-link-mobile" href="/careers.html">
              Careers
            </a>
            <a className="block tashi-nav-link-mobile" href="https://tashi.dev">
              Documentation
            </a>
          </div>

          <div className="mt-8 flex flex-row gap-4">
            <a
              className="lg:block tashi-nav-social-media"
              href="https://www.linkedin.com/company/tashigg"
              target="_blank"
            >
              <img src="/images/navbar/logos/social/linkedin.svg" alt="LinkedIn" />
            </a>
            <a
              className="lg:block tashi-nav-social-media"
              href="https://discord.gg/fPNdgUCGnk"
              target="_blank"
            >
              <img src="/images/navbar/logos/social/discord.svg" alt="Discord" />
            </a>
            <a
              className="lg:block tashi-nav-social-media"
              href="https://www.reddit.com/user/tashigg"
              target="_blank"
            >
              <img src="/images/navbar/logos/social/reddit.svg" alt="Reddit" />
            </a>
            <a
              className="lg:block tashi-nav-social-media"
              href="https://twitter.com/tashiggofficial"
              target="_blank"
            >
              <img src="/images/navbar/logos/social/twitter.svg" alt="Twitter" />
            </a>
            <a
              className="lg:block tashi-nav-social-media"
              href="https://medium.com/tashi-gg"
              target="_blank"
            >
              <img src="/images/navbar/logos/social/medium.svg" alt="Medium" />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden sm:hidden md:flex lg:flex gap-5">
          <img src="/images/navbar/icons/discord.svg"/>
          <img src="/images/navbar/icons/reddit.svg"/>
          <img src="/images/navbar/icons/twitter.svg"/>
        </div>
      <div className=" hidden sm:hidden  md:block lg:block">
     
        <a className={`${styles.buttonBg}`}>Contact Us</a>
      </div>
    </div>
  );
}

export default MobileNavList;
