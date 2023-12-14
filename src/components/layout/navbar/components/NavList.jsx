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
            
            to={`${index <= 3 ? `/${item.path}` : `${item.path}`}`}
            activeClassName="selected"
            target={index<= 3 ? "" : "_blank"}
          >
            <span className={`relative z-10 tashi-nav-link p-2 ${index <=3 ? '' :'m-auto justify-center flex gap-1'}`}>
              {item.title}
              {index <=3 ? "" : <img src="/images/icons/external-link.svg" className="mt-[-10px]"/>}
            </span>
          </NavHashLink>
          
        ))}
      </div>
    </div>
  );
}

export default NavList;
