import React from "react";

function Logo() {
  return (
    <div className="relative z-10">
      <a aria-label="Home" href="/">
        <img
          className="mx-auto h-12"
          src="/images/logos/logo.svg"
          type="image/svg+xml"
          alt="Logo"
        />
      </a>
    </div>
  );
}

export default Logo;
