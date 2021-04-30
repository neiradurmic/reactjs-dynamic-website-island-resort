import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const CardContainer = styled.div`
  width: calc(50% - 2em);
  margin: 1em;
  height: 90vh;
  overflow: hidden;
  box-shadow: 0px 0px -15px 5px;
  display: flex;
  flex-direction: column;
  margin: 25px;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    flex-grow: 1;
    flex-basis: 1;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ImageContainer = styled.img`
  width: auto;
  height: 350px;
  display: inline-block;
  overflow: hidden;
  background-size: cover;
  animation: ease-in;
  transition: transform 0.15s ease-out;
  margin-top: 20px;

  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
    height: 350px;
    width: auto;
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const CardContent = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    min-height: 30vh;
    justify-content: flex-start;
    flex-basis: 1;
  }
`;

export const CardTitle = styled.h3`
  height: 100px;
  color: #22bed9;
  font-family: Cinzel;
  font-size: 25px;

  @media screen and (max-height: 768px) {
    color: #fff;
    font-size: 25px;
    margin-top: -15vh;
    margin-bottom: 10vh;
    z-index: 9;
  }
`;

export const CardText = styled.p`
  color: #22bed9;
  font-weight: 300;

  @media screen and (max-height: 768px) {
    color: black;
    text-shadow: #111 0px 0px 1px;
    -webkit-text-stroke-width: 0.3px;
    background: #fff;
    opacity: 0.7;
  }
`;

export const CardButton = styled(LinkRouter)`
  border-radius: 25px;
  background: #22bed9;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #22bed9;
  }

  @media screen and (max-width: 768px) {
  }
`;
