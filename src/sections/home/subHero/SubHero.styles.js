import styled from "styled-components";

export const StyledSubHero = styled.div`
  margin-top: 50px;
  .inView {
    h1 {
      transform: translateY(-60px) scale(.5);
    }
    button {
      transform: translateY(60px) scale(.5);
    }
    opacity: 0;
  }
  .heroContent {
    z-index: 1;
    color: #fff;
    width: 500px;
    transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 1s;
    h1 {
      font-size: 28px;
      font-weight: 500;
      transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 1s;
    }
    button {
      background-image: linear-gradient(
        to right,
        #91b5fc,
        #91b5fc 50%,
        #fff 50%
      );
      border: solid 1px #fff;
      border-radius: 8px;
      color: #fff;
      font-size: 14px;
      margin: 0 auto;
      margin-top: 30px;
      padding: 14px;
      transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 1s .2s;
    }
  }
`;
