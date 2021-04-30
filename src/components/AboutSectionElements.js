import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 61%;
  margin: 50px;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    height: 150vh;
  }
`;

export const MapContainer = styled.div`
  margin-top: 50px;
  flex-basis: 45%;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const MapBg = styled.img`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
export const AboutTextContainer = styled.div`
  flex-basis: 45%;
  margin-top: 100px;
  margin-left: 100px;
  color: #707173;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  overflow: hidden;
`;

export const HeadingAbout = styled.h1`
  font-size: 26px;
  font-family: Cinzel;
  margin: 20px;
  color: #22bed9;
`;

export const SubheadingAbout = styled.h2`
  font-size: 20px;
  font-family: Dancing Script;
  margin: 20px;
`;

export const TextAbout = styled.h3`
  font-size: 14px;
  font-family: Lexend;
  margin: 20px;
`;
