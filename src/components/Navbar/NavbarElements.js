import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
	padding: 0 2.4em 50px 0;
	height: 30px;
	display: flex;
	justify-content: space-between;
	z-index: 12;
	-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;
  
export const NavLink = styled(Link)`
	color: #8e8e8e;
	font-weight: light;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 0.7rem;
	height: 100%;
	cursor: pointer;
	transition: background-position 0ms ease;
	&.active {
		opacity: 0.2;
		background-position: 0 0;
	}
	&:hover {
		color: #696969;
		transition: 170ms ease-in;
	}
`;
  
export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -4px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
