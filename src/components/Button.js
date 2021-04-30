import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const ButtonScroll = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#e9d59c" : "#111")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#black" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  margin-top: ${({ primary }) => (primary ? "-200px" : "0px")};
  font-family: Cinzel;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#fff")};
    color: ${({ dark }) => (dark ? "black" : "#fff")};
  }
`;

export const ButtonRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#e9d59c" : "#111")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #111;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  margin-top: ${({ primary }) => (primary ? "-200px" : "0px")};
  font-family: Cinzel;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#fff")};
    color: ${({ dark }) => (dark ? "black" : "#fff")};
  }
`;
