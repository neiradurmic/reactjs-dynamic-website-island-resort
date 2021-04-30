import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 200px;
    height: 250vh;
    width: 100%;
  }
`;

export const ProjectsWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 50vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 200vh;
    width: 100%;
  }
`;

export const Project = styled.img`
  padding: 20px;
  height: 300px;
  width: auto;
`;

export const ProjectsTitle = styled.h1`
  font-family: Cinzel;
  color: #22bed9;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const Text = styled.h2`
  font-family: Lexend;
  color: #fff;
  position: absolute;
  margin-bottom: -220px;
  z-index: 99;
  text-shadow: #22bed9 0px 0px 0.5px;
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: #fff;
`;

export const ImgAndText = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
