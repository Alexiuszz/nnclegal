import styled from "styled-components";

export const HeroText = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
  position: relative;
  div {
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    & * {
      opacity: 0;
    }
    h2,
    p {
        width: 50%;
      @media screen and (max-width: 880px) {
        width: 90%;
      }
    }
  }
`;
