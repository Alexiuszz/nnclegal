import styled from "styled-components";
import { absCenter, centerContent } from "../../styles/style_mixins";

export const RoomModalContainer = styled.div`
  ${centerContent}
  position: fixed;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.isOpen ? "100vw" : "0")};
  height: ${(props) => (props.isOpen ? "102vh" : "0")};
  min-height: ${(props) => (props.isOpen ? "100vh" : "0")};
  background-color: ${(props) =>
    props.isOpen ? "#000000b6" : "#0000000"};
  overflow: hidden;
  z-index: 10;
  transition: height 0.4s, width 0.4s;
  padding: 30px 0;
  overflow: auto;
  .modal-content {
    position: absolute;
    top: 40px;
    background-color: #fff;
    padding: 10px 20px;
    height: fit-content;
    min-height: 650px;
    min-width: 560px;
    width: 85%;
    box-shadow: 0px 3px 13px #000;
    border-radius: 10px;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    transform: ${(props) => (props.isOpen ? "scale(1)" : "scale(0)")};
    transition: all 0.4s;
    .modal-close {
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
      background-color: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.accents};
      height: 23px;
      width: 23px;
      padding: 3px;
      border-radius: 5px;
      z-index: 12;
      border: 1px solid ${({ theme }) => theme.accents};
      ${centerContent};
      svg {
        height: 20px;
        cursor: pointer;
      }
    }
    .room-details {
      height: 100%;
      width: 100%;
      color: ${({ theme }) => theme.primaryColor};
      .img-container {
        width: 76vw;
        height: 600px;
        overflow: hidden;
        border-radius: 12px;
        position: relative;
        img {
          pointer-events: none;
          object-fit: cover;
          ${absCenter};
        }
      }
      .details {
        display: flex;
        justify-content: space-around;
        width: 50%;
        margin: 15px auto;

        p {
          display: flex;
          svg {
            height: 20px;
            margin-right: 5px;
          }
        }
      }
      .price {
        display: flex;
        width: 80%;
        justify-content: space-between;
        span {
          font-weight: 600;
          font-size: 35px;
        }
        a {
          font-size: 20px;
          color: ${({ theme }) => theme.primaryColor};
          &:hover {
            background-color: ${({ theme }) => theme.primaryColor};
            color: ${({ theme }) => theme.accents};
          }
        }
      }
      .amenities {
        margin-top: 40px;
        h2 {
          &::after,
          &::before {
            width: 25%;
          }
        }
        &-list {
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            minmax(140px, 250px)
          );
          gap: 0px 30px;
          padding: 0px;
          margin: 20px 0px 0px;
          overflow: hidden;
          justify-content: center;
        }
      }
    }
    @media screen and (max-width: 880px) {
      .room-details {
        .slide-container {
          p {
            padding-top: 30px;
          }
        }
        .description {
          margin-top: 20px;
        }
        .img-container {
          height: 400px;
          width: 80vw;
        }
        .price {
          width: 100%;
          p {
            span {
              font-size: 25px;
            }
          }
          a {
            font-size: 18px;
            width: 200px;
          }
        }
      }
    }
    @media screen and (max-width: 600px) {
      min-width: 300px;
      width: 95%;
    }
  }
`;
