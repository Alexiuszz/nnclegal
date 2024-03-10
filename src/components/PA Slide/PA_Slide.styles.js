import styled from "styled-components";

export const Slider = styled.div`
  padding: 10px 40px;
  padding-bottom: 60px;
  background-color: #fff;
  color: ${({ theme }) => theme.primaryColor};
  .PA-container {
    transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 2s;
    /* transform: ${(props) =>
      !props.inView && "translateX(-1000px)"}; */
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 50px;
    padding-bottom: 0;
    opacity: ${(props) => !props.inView && "0"};
    .texts {
      width: 50%;
      h1 {
        transform: ${(props) =>
          !props.inView && "translateY(-100px) scale(0.5)"};
        font-size: 28px;
        margin-bottom: 30px;
      }
      p {
        transform: ${(props) =>
          !props.inView && "translateY(100px) scale(0.5)"};
        font-size: 16px;
        font-weight: 300;
      }
      h1,
      p {
        opacity: ${(props) => !props.inView && "0.5"};
        transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 1s;
        text-align: left;
      }
      @media screen and (max-width: 780px) {
        width: 100%;
      }
    }
    .arrowsContainer {
      position: absolute;
      right: 5%;
      bottom: 30%;
      margin-left: 10px;
      display: flex;
      width: 200px;
      justify-content: space-between;
      button {
        display: flex;
        align-items: end;
      }
      @media screen and (max-width: 780px) {
        bottom: 5%;
        width: 100%;
        justify-content: space-between;
        margin: 0 auto;
        right: 0;
        button {
          margin-right: 0;
        }
      }
    }
  }
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }

  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    & > div div {
      transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 1s;
      transform: ${(props) =>
        !props.inView && "translateY(-50px) scale(0.9)"};
      opacity: ${(props) => !props.inView && "0.5"};
    }
    & > div:nth-of-type(4n + 1) div {
      transform: ${(props) =>
        !props.inView && "translateY(50px) scale(0.9)"};
    }
  }
`;
