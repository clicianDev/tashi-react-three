import React from "react";
import items from "../../items.json";

function NavList() {
  return (
    <div className="flex items-center">
      <div className="hidden items-center xl:flex gap-0 xl:gap-5">
        {items.map((item, index) => (
          <a
            key={index}
            className="p-2 tashi-nav-link"
            href={`/${item.path}`}
          >
            <span className="relative z-10">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavList;
