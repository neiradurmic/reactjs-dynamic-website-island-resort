import styled from "styled-components";

export const AwardsContainer = styled.div`
  height: 30vh;
  align-items: center;
  justify-items: center;
  margin-top: 100px;
  margin-bottom: 100px;

  @media screen and (max-width: 900px) {
    height: 30vh;
    margin-top: 500px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 800px) {
    height: 30vh;
    margin-top: 350px;
    margin-bottom: 20px;
  }
`;

export const Award = styled.img`
  padding: 50px;

  @media screen and (max-width: 900px) {
    padding: 20px;
    height: 100px;
    width: 100px;
  }
`;
