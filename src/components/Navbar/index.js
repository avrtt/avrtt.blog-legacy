import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
    
const Navbar = () => {
	
  let navigate = useNavigate(); 
  const routeChange = () => { 
    let path = `/`; 
    navigate(path);
  } 	
	
  return (
    <>
      <Nav>
        <NavMenu>
        	<img onClick={routeChange} class="logo" src={require("./logo.png")} alt="favicon" />
          <NavLink to="/adventures" activeStyle>
            Adventures
          </NavLink>
          <NavLink to="/research" activeStyle>
            Research
          </NavLink>
          <NavLink to="/thoughts" activeStyle>
            Thoughts
          </NavLink>
          <NavLink to="/goals" activeStyle>
            Goals
          </NavLink>
          <NavLink to="/exploration" activeStyle>
            Exploration
          </NavLink>
          <NavLink to="/freelance" activeStyle>
            Freelance
          </NavLink>
          <NavLink to="/cv" activeStyle>
            CV
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
