import React from "react";
import items from "../../items.json";
import { NavHashLink } from 'react-router-hash-link';
function NavList() {
  return (
    <div className="flex items-center">
      <div className="hidden items-center xl:flex gap-0 xl:gap-5">
        {items.map((item, index) => (
       
          <NavHashLink
            key={index}
            
            to={`/${item.path}`}
            activeClassName="selected"
          >
            <span className="relative z-10 tashi-nav-link p-2">{item.title}</span>
          </NavHashLink>
          
        ))}
        <a className="z-10 tashi-nav-link p-2 flex gap-1" href="https://medium.com/tashi-gg" target="_blank">Blog<img src="/images/icons/external-link.svg" className="mt-[-10px]"/></a>
        <a className="relative z-10 tashi-nav-link p-2 flex gap-1" href="https://docs.tashi.gg/documentation/" target="_blank">Docs<img src="/images/icons/external-link.svg" className="mt-[-10px]"/></a>
      </div>
    </div>
  );
}

export default NavList;
