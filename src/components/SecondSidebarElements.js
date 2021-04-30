import styled from "styled-components";

export const MobileIconSecondSidebar = styled.div`
  display: block;
  position: absolute;
  top: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #22bed9;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
