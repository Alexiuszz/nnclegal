import styled from "styled-components";

export const HeroText = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
  color: #fff;
  position: relative;
  div {
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    height: 30%;
    margin: 0 auto;
    h2,
    p {
      transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 1s;
      opacity: ${(props) => !props.inView && "0"};
    }
    h2 {
      font-size: 40px;
      transform: ${(props) =>
        !props.inView && "translateY(100px) scale(0.3)"};
    }
    p {
      font-size: 14px;
      transform: ${(props) =>
        !props.inView && "translateY(-100px) scale(0.3)"};
      width: 60%;
      @media screen and (max-width: 780px) {
        width: 90%;
      }
    }
  }
`;
