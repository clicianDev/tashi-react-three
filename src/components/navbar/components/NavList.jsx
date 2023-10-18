import React from "react";
import items from "../items.json";

function NavList() {
  return (
    <div className="flex items-center gap-16 ">
      <div className="hidden items-center lg:flex lg:gap-6">
        {items.map((item, index) => (
          <a
            key={index}
            className="p-2 tashi-nav-link"
            href="https://medium.com/tashi-gg"
          >
            <span className="relative z-10">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavList;
