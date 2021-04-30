import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  padding: 0 24px;
  width: 100%;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    height: 210vh;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
`;
