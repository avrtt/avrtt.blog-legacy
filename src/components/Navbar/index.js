import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Notes
          </NavLink>
          <NavLink to="/memories" activeStyle>
            Memories
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/donate" activeStyle>
            Donate
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
