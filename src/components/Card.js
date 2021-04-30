import React from "react";
import {
  CardContainer,
  ImageContainer,
  CardTitle,
  CardText,
  CardButton,
  CardContent,
} from "./CardElements";

const Card = ({ title, imageUrl, text }) => {
  return (
    <CardContainer>
      <ImageContainer src={imageUrl} alt=""></ImageContainer>
      <CardContent>
        <CardTitle title={title}>{title} </CardTitle>
        <CardText text={text}>{text}</CardText>
      </CardContent>
      <CardButton to={title}>View More</CardButton>
    </CardContainer>
  );
};

export default Card;
