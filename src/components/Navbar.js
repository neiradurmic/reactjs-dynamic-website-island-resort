import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { MobileIconSecondSidebar } from "./SecondSidebarElements";
import Sidebar from "./Sidebar";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 600) {
      setScrollNav(true);
    } else if (
      window.location.pathname == "/about" ||
      "/appartments" ||
      "/contact"
    ) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <MobileIconSecondSidebar onClick={toggle}>
            <FaBars />
          </MobileIconSecondSidebar>
          <NavLogo to="/">O c e a n s i d e</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/appartments" scrollNav={scrollNav}>
                Appartments
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about" scrollNav={scrollNav}>
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact" scrollNav={scrollNav}>
                Contact
              </NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/contact">Invest</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
