import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { AppartmentState } from "../appartmentState";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import Slider from "react-slick";
import ImageSectionBg from "../components/ImageSectionBg";
import { NavBtn, NavBtnLink } from "../components/NavbarElements";

const AppartmentDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [appartments, setAppartments] = useState(AppartmentState);
  const [appartment, setAppartment] = useState(null);

  //useEffect
  useEffect(() => {
    const currentAppartment = appartments.filter(
      (stateAppartment) => stateAppartment.url === url
    );
    setAppartment(currentAppartment[0]);
  }, [appartments, url]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {appartment && (
        <>
          <FirstScreen>
            <ImageContainer>
              <Slider {...settings}>
                <SliderImg src={appartment.mainImg}></SliderImg>
                <SliderImg src={appartment.secondaryImg}></SliderImg>
                <SliderImg src={appartment.thirdImg}></SliderImg>
              </Slider>
            </ImageContainer>
            <Info>
              <Title>{appartment.title}</Title>
              <TextContainer>
                {appartment.services.map((service) => (
                  <Text>• {service.title}</Text>
                ))}
              </TextContainer>
            </Info>
          </FirstScreen>
          <Description> {appartment.details}</Description>

          <ContactForSale>
            <SaleText>
              On Sale Now. Contact us and get all the information.
            </SaleText>
            <NavBtn>
              <NavBtnLink to="/contact">Invest</NavBtnLink>
            </NavBtn>
          </ContactForSale>
          <ImageSectionBg />
        </>
      )}
      <Footer />
    </>
  );
};

const FirstScreen = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  height: 500px;
  width: 60%;
  margin: 50px;
  margin-top: 20vh;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 360px;
    margin: 0;
  }
`;

const SliderImg = styled.img`
  height: 500px;
  width: 100%;
  padding: 50px;

  @media screen and (max-width: 768px) {
    height: 400px;
    width: auto;
    padding: 0;
    margin-top: 100px;
  }
`;

const TextContainer = styled.div`
  height: 300px;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
`;

const Info = styled.div`
  margin-top: 30vh;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Title = styled.h3`
  font-family: Cinzel;
  font-size: 32px;
  color: #22bed9;
`;

const Text = styled.h3`
  font-size: 18px;
  margin-top: 10px;
`;

const ContactForSale = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SaleText = styled.h3`
  font-size: 22px;
  color: #22bed9;
  padding: 30px;
`;

const Description = styled.h3`
  font-size: 16px;
  padding: 100px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;

export default AppartmentDetail;
