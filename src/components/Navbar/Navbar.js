import React from "react";
import { Nav, NavbarContainer, NavLogo, NavIcon } from "./Navbar.elements"; // Import the styles for component Nav

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
