import styled from "styled-components";

export const Slider = styled.div`
  padding: 10px 0;
  width: 100%;
  .slide-container {
    transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 2s;
    position: relative;
    margin-top: 30px;
    opacity: ${(props) => !props.inView && "0"};

    .arrowsContainer {
      position: absolute;
      right: 5%;
      bottom: 30%;
      margin-left: 10px;
      display: flex;
      width: 20%;
      justify-content: space-between;
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

  .react-horizontal-scrolling-menu--footer,
  .react-horizontal-scrolling-menu--header
    .react-horizontal-scrolling-menu--footer,
  .react-horizontal-scrolling-menu--header {
    height: 40px;
  }

  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }

  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    gap: 20px;
    padding: 20px;
    padding-bottom: 30px;
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

export const Slider2 = styled.div`
  padding: 10px 0;
  width: 100%;
  .slide-container {
    transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 2s;
    position: relative;
    color: ${({ theme }) => theme.primaryColor};
    .arrowsContainer {
      position: absolute;
      right: 5%;
      top: 0%;
      margin-left: 10px;
      display: flex;
      width: 250px;
      button {
        background-color: #fff;
        color: ${({ theme }) => theme.primaryColor};
      }
      justify-content: space-between;
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

  .react-horizontal-scrolling-menu--footer {
    height: 40px;
  }

  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }

  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    gap: 20px;
    padding: 20px;
    padding-bottom: 30px;
    /* & > div div {
      transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 1s;
      transform: ${(props) =>
      !props.inView && "translateY(-50px) scale(0.9)"};
      opacity: ${(props) => !props.inView && "0.5"};
    }
    & > div:nth-of-type(4n + 1) div {
      transform: ${(props) =>
      !props.inView && "translateY(50px) scale(0.9)"};
    } */
  }
`;
