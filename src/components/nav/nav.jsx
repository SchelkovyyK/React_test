import React from "react";
import c from  "./nav.module.css"

const Nav = () => {
  return ( 
    <nav className={c.sidebar}>
        <div className={c.items}>profile</div>
        <div className={c.items}>message</div>
      </nav>
  )
};
export default Nav
