import styled from "styled-components";

export const ImgTextContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryFontColor};
  width: 100%;
  padding: 60px 50px;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.primaryColor};
  .events-section {
    display: flex;
    flex-direction: ${({ $reverse }) =>
        $reverse ? "row-reverse" : "row"};
      .events-section-media {
      position: relative;
      &-bg {
        border-radius: 20px;
        overflow: hidden;
        .carousel-imgs {
          height: 100%;
          .slideButton {
            margin-top: 70%;
          }
        }
      }
    }
    .events-section-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px;
      position: relative;
      .events-section-links {
        margin-top: 30px;
        @media screen and (max-width: 300px) {
          a {
            font-size: 12px;
          }
        }
        a:first-child {
          margin-right: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 980px) {
    padding: 50px 20px;
    h2 {
      font-size: 25px;
    }
    .events-section {
      flex-direction: column-reverse;
      .events-section-info {
        padding: 0px;
        margin-top: 20px;
      }
      &-media {
        &-bg {
          div {
            width: 100%;
          }
        }
      }
    }
  }
`;
