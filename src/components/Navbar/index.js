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
          <NavLink to="/adventures" activeStyle>
            Adventures
          </NavLink>
          <NavLink to="/learning" activeStyle>
            Learning
          </NavLink>
          <NavLink to="/goals" activeStyle>
            Goals
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
