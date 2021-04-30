import React from "react";
import Slider from "react-slick";
import Award1 from "../img/award1.png";
import Award2 from "../img/award2.png";
import Award3 from "../img/award3.png";
import Award4 from "../img/award4.png";
import Award5 from "../img/award5.png";
import Award6 from "../img/award6.png";
import Award7 from "../img/award7.jpg";
import Award8 from "../img/award8.png";
import { AwardsContainer, Award } from "./AwardsSectionElements";

const AwardsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <AwardsContainer>
      <Slider {...settings}>
        <Award src={Award2}></Award>
        <Award src={Award7}></Award>
        <Award src={Award1}></Award>
        <Award src={Award5}></Award>
        <Award src={Award3}></Award>
        <Award src={Award4}></Award>
        <Award src={Award8}></Award>
        <Award src={Award6}></Award>
      </Slider>
    </AwardsContainer>
  );
};

export default AwardsSection;
