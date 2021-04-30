import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import bg1 from "../img/bg1.jpg";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fdf2d1;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (min-width: 768px) {
    background-image: url(${bg1});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: right 0px bottom -50px;
  }
`;

export const SidebarLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-family: Cinzel;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-top: 20px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SidebarLogo2 = styled(LinkRouter)`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-family: Cinzel;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    position: absolute;
    top: 1.5rem;
    left: 44px;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;

  @media screen and (max-width) {
    color: #22bed9;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;

  @media screen and (min-width: 767px) {
    box-sizing: border-box;
    width: 40%;
    background: #fdf2d1;
    height: 100%;
  }
`;

export const SidebarLink = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-family: Dancing Script;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #22bed9;
  cursor: pointer;

  &:hover {
    color: #236477;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: -100px;
  }
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #22bed9;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: Cinzel;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #7cad3e;
    color: #fff;
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
