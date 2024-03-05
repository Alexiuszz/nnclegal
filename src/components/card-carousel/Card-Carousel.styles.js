import { absCenter, atTop } from "@/styles/style_mixins";
import styled from "styled-components";

export const CardCarouselContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 20px 0 #9f9f9f40;
  height: ${(props) => props.$height}px;
  width: ${(props) => props.$width}px;
  border-radius: 10px;
  overflow: hidden;
  .room-details {
    color: ${({ theme }) => theme.primaryColor};
    display: flex;
    height: 20%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    a:first-of-type {
      margin-right: 10px;
    }
    .card-links {
      display: flex;
    }
  }
  .carousel-imgs {
    position: relative;
    overflow: hidden;
    height: ${(props) => (props.$full ? "100%" : "80%")};
    width: 100%;
    background-color: ${({ theme }) => theme.mediaBG};
    img {
      ${atTop};
      object-fit: cover;
      object-position: bottom;
      transition: opacity 2s;
      opacity: 0;
      z-index: 1;
    }
    .currImg.currImg {
      transform: translateX(0vw);
      opacity: 1;
    }
    .slideButton {
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100px;
      ${absCenter};
      top: 90%;
      transition-delay: 0.5s;
      button {
        border-radius: 50%;
        height: 12px;
        width: 12px;
        padding: 0;
        background-image: linear-gradient(
          to right,
          #91b5fc,
          #91b5fc 50%,
          #fff 50%
        );
        color: #fff;
        font-size: 14px;
        border: solid 1px #fff;
        cursor: pointer;
      }
      .fill {
        background: ${({ theme }) => theme.accents};
      }
    }
  }

  @media screen and (max-width: 580px) {
    height: ${(props) => props.$height * 0.8}px;
    width: ${(props) => props.$width * 0.7}px;
    .room-details {
      padding: 15px;
      p {
        font-size: 16px;
      }
      a {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 400px) {
    height: ${(props) => props.$height * 0.7}px;
    width: ${(props) => props.$width * 0.6}px;
    .room-details {
      padding: 10px;
    }
  }
  @media screen and (max-width: 300px) {
    height: ${(props) => props.$height * 0.7}px;
    width: ${(props) => props.$width * 0.45}px;
    .room-details {
      padding: 10px;
    }
  }
`;
