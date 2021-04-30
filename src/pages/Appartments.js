import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import house11 from "../img/house11.jpg";
import house21 from "../img/house21.jpg";
import house31 from "../img/house31.jpg";
import house41 from "../img/house41.jpg";
import house51 from "../img/house51.jpg";
import house61 from "../img/house61.jpg";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "./animation";
import { useScroll } from "../components/useScroll";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import { Link as LinkRouter } from "react-router-dom";

const AppartmentsOnSale = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <OnSale>Houses on Sale</OnSale>
      <Appartments
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        style={{ background: "#fff" }}
      >
        <Appartment>
          <HomeTitle variants={fade}>Maldives Villa 1339</HomeTitle>
          <Link to="/appartments/maldives-villa-1339">
            <img src={house11} alt="Maldives Villa 1339" />
          </Link>
          <ViewMoreButton to="/appartments/maldives-villa-1339">
            View More
          </ViewMoreButton>
        </Appartment>
        <Appartment initial="hidden">
          <HomeTitle>Maldives Villa 1342</HomeTitle>
          <Link to="/appartments/maldives-villa-1342">
            <img src={house21} alt="Maldives Villa 1342" />
          </Link>
          <ViewMoreButton to="/appartments/maldives-villa-1342">
            View More{" "}
          </ViewMoreButton>
        </Appartment>
      </Appartments>
      <Appartments
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        style={{ background: "#fff" }}
      >
        <Appartment initial="hidden">
          <HomeTitle>Maldives Villa 1330</HomeTitle>
          <Link to="appartments/maldives-villa-1330">
            <img src={house31} alt="Maldives Villa 1330" />
          </Link>
          <ViewMoreButton to="/appartments/maldives-villa-1330">
            View More{" "}
          </ViewMoreButton>
        </Appartment>
        <Appartment initial="hidden">
          <HomeTitle>Maldives Villa 1333</HomeTitle>
          <Link to="appartments/maldives-villa-1333">
            <img src={house41} alt="Maldives Villa 1333" />
          </Link>
          <ViewMoreButton to="/appartments/maldives-villa-1333">
            View More{" "}
          </ViewMoreButton>
        </Appartment>
      </Appartments>
      <Appartments
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        style={{ background: "#fff" }}
      >
        <Appartment initial="hidden">
          <HomeTitle>Maldives Villa 1340</HomeTitle>
          <Link to="appartments/maldives-villa-1340">
            <img src={house51} alt="Maldives Villa 1340" />
          </Link>
          <ViewMoreButton to="/appartments/maldives-villa-1340">
            View More
          </ViewMoreButton>
        </Appartment>
        <Appartment initial="hidden">
          <HomeTitle>Maldives Villa 1329</HomeTitle>
          <Link to="appartments/maldives-villa-1329">
            <img src={house61} alt="Maldives Villa 1329" />
          </Link>
          <ViewMoreButton to="/appartments/maldives-villa-1329">
            View More{" "}
          </ViewMoreButton>
        </Appartment>
      </Appartments>
      <Footer />
    </>
  );
};

const Appartments = styled(motion.div)`
  display: flex;
  flex-direction: row;
  height: 117vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  margin-bottom: -10rem;
  overflow: hidden;
  @media (max-width: 1200px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

const Appartment = styled(motion.div)`
  padding-bottom: 5rem;
  img {
    padding: 20px;
    height: 70vh;
    width: 600px;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    margin-top: 10px;
  }
`;

const HomeTitle = styled.h2`
  margin-left: 400px;
  color: #111;
  font-size: 22px;
  font-family: Dancing Script;

  @media screen and (max-width: 768px) {
    margin-left: 140px;
  }
`;

const ViewMoreButton = styled(LinkRouter)`
  border-radius: 25px;
  background: transparent;
  white-space: nowrap;
  padding: 10px 22px;
  color: #22bed9;
  font-size: 16px;
  outline: none;
  border: solid 0.5px #22bed9;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 20px;
  margin-left: 450px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #cfdfda;
    border: solid 0.5px #cfdfda;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    margin-left: 140px;
  }
`;

const OnSale = styled.div`
  font-size: 38px;
  font-family: Cinzel;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`;

export default AppartmentsOnSale;
