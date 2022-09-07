import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Posts
          </NavLink>
          <NavLink to="/diary" activeStyle>
            Diary
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
