import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/life" activeStyle>
            Life
          </NavLink>
          <NavLink to="/it" activeStyle>
            IT
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
