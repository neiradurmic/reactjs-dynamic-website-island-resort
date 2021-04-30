import styled from "styled-components";

export const ImageContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px;
  height: 80vh;
  position: relative;
  z-index: 1;
  margin-top: 100px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    height: 50vh;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const ImageContent = styled.div`
  z-index: 3;
  max-width: 1500px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    margin-top: -220px;
  }
`;

export const ImageH1 = styled.h1`
  color: #fff;
  font-family: Bad Script;
  text-shadow: #111 0px 0px 1px;
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
