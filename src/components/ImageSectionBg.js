import React, { useState, useEffect } from "react";
import house13 from "../img/house13.jpg";
import house23 from "../img/house23.jpg";
import house33 from "../img/house33.jpg";
import house43 from "../img/house43.jpg";
import house53 from "../img/house53.jpg";
import house63 from "../img/house63.jpg";
import { useHistory } from "react-router-dom";
import { AppartmentState } from "../appartmentState";
import {
  ImageContainer,
  ImageWrapper,
  ImageBg,
  ImageContent,
  ImageH1,
} from "./ImageSectionElements";

const ImageSection = () => {
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

  return (
    <>
      {appartment && (
        <ImageContainer>
          <ImageWrapper>
            <ImageBg src={appartment.thirdImg} />
          </ImageWrapper>
          <ImageContent>
            <ImageH1>{appartment.title}</ImageH1>
          </ImageContent>
        </ImageContainer>
      )}
    </>
  );
};

export default ImageSection;
