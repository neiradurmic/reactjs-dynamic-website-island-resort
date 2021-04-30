import React from "react";
import IslandAbove from "../img/islandabove2.jpg";
import {
  ImageContainer,
  ImageWrapper,
  ImageBg,
  ImageContent,
  ImageH1,
} from "./ImageSectionElements";

const ImageSection = () => {
  return (
    <ImageContainer>
      <ImageWrapper>
        <ImageBg src={IslandAbove} />
      </ImageWrapper>
      <ImageContent>
        <ImageH1>Your own Heaven</ImageH1>
      </ImageContent>
    </ImageContainer>
  );
};

export default ImageSection;
