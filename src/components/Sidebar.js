import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarLogo,
  SidebarLogo2,
} from "./SidebarElements";
import BackgroundImage from "./BackgroundImage";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarLogo2 to="/">O c e a n s i d e</SidebarLogo2>

      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarLogo to="/">O c e a n s i d e</SidebarLogo>
        <SidebarMenu>
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="/appartments">Appartments</SidebarLink>
          <SidebarLink to="/about">About Us</SidebarLink>
          <SidebarLink to="/contact">Contact Us</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">I n v e s t</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
