import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
/*
export const Nav = styled.nav`
	padding: 0 2.4em 50px 0;
	width: 100%;
	height: 30px;
	display: flex;
	justify-content: space-between;
	z-index: 12;
	-webkit-touch-callout: none;
     -webkit-user-select: none;
      -khtml-user-select: none;
        -moz-user-select: none; 
         -ms-user-select: none;
             user-select: none;
`;

export const NavLink = styled(Link)`
	border-bottom: 0;
	overflow: hidden;	
	color: #8e8e8e;
	font-weight: 1000;
	font-size: 22px;
	display: flex;
	align-items: center;
	padding: 0 0.65rem;
	height: 100%;
	cursor: pointer;
  	-webkit-transition-duration: 0.15s;
  	transition-duration: 0.15s;
	text-decoration: none;
	&.active {
		opacity: 0.22;
	}
	&:hover {
		color: #545456;
		transform: translate(1px, 2px);
	}
	&:hover.active {
		transform: translate(0px, 0px);
		opacity: 0.14;
	}
`;
*/

export const Nav = styled.nav`
	margin-bottom: 6vh; 
	margin-top: -2vh;
	margin-left: -7.5vh;
	padding: 0 2.4em 2vh 0;
	width: 100%;
	height: 2vh;
	display: flex;
	justify-content: center;
	z-index: 12;
	-webkit-touch-callout: none;
     -webkit-user-select: none;
      -khtml-user-select: none;
        -moz-user-select: none; 
         -ms-user-select: none;
             user-select: none;
`;

export const NavLink = styled(Link)`
	width: fit-content;
	border-radius: 1vh;
	background-color: rgb(255, 255, 255);
	height: 4.2vh;
	font-size: 2.2vh;
	justify-content: center;
	margin: 0 0.4vh 0 0.4vh;
	border-bottom: 0;
	overflow: hidden;	
	color: #8e8e8e;
	font-weight: 1000;
	display: flex;
	align-items: center;
	padding: 0 1.75vh;
	cursor: pointer;
	text-decoration: none;
	transition-duration: 0.1s;
	&.active {
		opacity: 0.22;
		background-color: rgba(255, 255, 255, 0) !important;
	}
	&:hover {
		color: #545456;
		transform: translate(1px, 2px);
		background-color: #f2f2f2;
	}
	&:hover.active {
		transform: translate(0px, 0px);
		opacity: 0.14;
	}
`;
  
export const NavMenu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 1482px) {
		display: none;
	}
`;
