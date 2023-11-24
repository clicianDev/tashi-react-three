import React from "react";

function Socials() {
  return (
    <>
     <a
        className="lg:block tashi-nav-social-media"
        href="https://www.linkedin.com/company/tashigg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/navbar/icons/linkedin.svg" alt="LinkedIn" />
      </a>
      <a
        className="lg:block tashi-nav-social-media"
        href="https://discord.gg/SJge5pTwkb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/navbar/icons/discord.svg" alt="Discord" />
      </a>
      <a
        className="lg:block tashi-nav-social-media"
        href="https://www.reddit.com/user/tashigg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/navbar/icons/reddit.svg" alt="Reddit" />
      </a>
      <a
        className="lg:block tashi-nav-social-media"
        href="https://twitter.com/tashiggofficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/navbar/icons/twitter.svg" alt="Twitter" />
      </a>
     
    </>
  );
}

export default Socials;
