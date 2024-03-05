import { point2 } from "@/styles/keyframes";
import { centerContent } from "@/styles/style_mixins";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  height: 80px;
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  top: 0;
  background: ${({ theme, $isTop }) =>
    $isTop
      ? theme.primaryColor
      : "linear-gradient(180deg,#000000b2,transparent)"};
  align-content: end;
  padding: 0 5%;
  font-size: 16px;
  -webkit-box-pack: justify;
  z-index: 3;
  backdrop-filter: ${({ $isTop }) =>
    !$isTop ? "blur(10px)" : "none"};
  box-shadow: ${({ $isTop, menu }) =>
    !$isTop && !menu ? "0px 0px 14px 0px #073018" : "none"};
  &::after {
    content: "";
    height: 40px;
    width: 25px;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    clip-path: polygon(
      50% 0,
      100% 50%,
      50% 100%,
      50% 95%,
      95% 50%,
      50% 5%
    );
  }
  &::before,
  &::after {
    animation: ${point2} 1.5s ease-out infinite;
    background-color: #becbe7f9;
    box-shadow: 0px 2px 12px #00000094;
    position: absolute;
  }
  &::before {
    content: "";
    height: 30px;
    width: 15px;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    clip-path: polygon(
      50% 0,
      100% 50%,
      50% 100%,
      50% 95%,
      95% 50%,
      50% 5%
    );
    animation-delay: 0.5s;
  }
  &:hover {
    box-shadow: none;
    &::before,
    &::after {
      display: none;
    }
  }
  .navLinks {
    margin: 0px 5px;
    padding: 10px;
    .navIndex {
      svg {
        height: 12px;
      }
      margin-right: 5px;
      color: ${({ theme }) => theme.accents};
      -webkit-text-fill-color: ${({ theme }) => theme.hoverFontColor};
    }
    &:hover .navIndex {
      transition: all 0.3s;
      margin-right: 7px;
    }
  }
  .navBtn {
    box-shadow: 0px 0px 14px 0px #073018;
    padding: 10px 25px;
  }

  .logo {
    height: 80px;
    width: 200px;
    background-clip: initial;
    background-image: linear-gradient(
      to right,
      ${({ theme, $isTop }) =>
        $isTop ? theme.primaryColor : "#000000b2"},
      ${({ theme, $isTop }) =>
          $isTop ? theme.primaryColor : "#000000b2"}
        50%,
      ${({ theme, $isTop }) =>
          $isTop ? theme.primaryColor : "transparent"}
        50%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    -webkit-text-fill-color: ${({ theme }) => theme.primaryFontColor};
    &::before {
      height: 0;
    }
    img {
      object-fit: contain;
    }
    h2 {
      font-size: 10px;
      &:before {
        content: "";
        background: ${({ theme }) => theme.accents};
        display: block;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 0;
        height: 1.5px;
        transition: all 0.3s ease-in-out;
      }
      
    }
    &:hover h2::before {
        width: 100%;
      }
  }
  &:hover .navDrop {
    height: 80px;
    opacity: 1;
    font-size: 14px;
  }

  .navDrop {
    .mobile-links {
      display: none;
    }
    ${centerContent};
    position: absolute;
    background: ${({ $isTop }) =>
      $isTop
        ? "#0912313e"
        : "linear-gradient(180deg,#000000b2,transparent)"};
    color: ${({ theme }) => theme.primaryColor};
    backdrop-filter: ${({ $isTop }) =>
      !$isTop ? "blur(10px)" : "none"};
    box-shadow: ${({ $isTop, menu }) =>
      !$isTop && !menu ? "0px 0px 14px 0px #073018" : "none"};
    top: 100%;
    left: 0;
    font-size: 4px;
    height: 0;
    width: 100%;
    opacity: 0;
    transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 0.5s;
    display: flex;
    a {
      margin-right: 30px;
      svg {
        height: 12px;
        margin-right: 2px;
        color: ${({ theme }) => theme.accents};
      }
    }
    &:hover {
      background-color: ${({ theme }) => theme.primaryColor};
    }
  }

  @media screen and (max-width: 880px) {
    background-color: ${({ theme }) => theme.primaryColor};
    &::after,
    &::before,
    .unsplash {
      display: none;
    }
    &:hover {
      box-shadow: none;
      border-bottom: none;
      .navDrop {
        height: ${(props) =>
          props.$openNav ? "calc(100svh - 80px)" : "0"};
      }
    }
    .logo {
      width: 100px;
      h2 {
        font-size: 8px;
      }
    }
    .navDrop {
      .mobile-links {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        height: 100%;
        .navLinks {
          margin: 0px 5px;
          padding: 0 10px;
          .nav-text {
            text-align: center;
          }
          .navIndex {
            svg {
              height: 12px;
            }
            margin-right: 5px;
            color: ${({ theme }) => theme.accents};
            -webkit-text-fill-color: ${({ theme }) =>
              theme.hoverFontColor};
          }
          &:hover .navIndex {
            transition: all 0.3s;
            margin-right: 7px;
          }
        }
        .navBtn {
          box-shadow: 0px 0px 14px 0px #073018;
          padding: 10px 25px;
          color: #fff;
          --_i: ${(props) => (props.$openNav ? "100%" : "0")};
          opacity: ${(props) => (props.$openNav ? "1" : "0")};
          border-bottom: none;
        }
      }
      .navDrop-links {
        display: none;
      }
      background-color: ${({ theme }) => theme.primaryColor};
      opacity: 1;
      width: ${(props) => (props.$openNav ? "100vw" : "0")};
      height: ${(props) =>
        props.$openNav ? "calc(100svh - 80px)" : "0"};
      left: 100%;
      transform: translateX(-100%);
      justify-content: start;
      align-items: start;
      flex-direction: column;
      padding: ${(props) => (props.$openNav ? "30px 20px" : "0")};
      padding-bottom: ${(props) => (props.$openNav ? "120px" : "0")};
      border-bottom-left-radius: 5px;
      a {
        font-size: ${(props) => (props.$openNav ? "12px" : "0")};
        width: ${(props) => (props.$openNav ? "55%" : "0")};
        svg {
          height: ${(props) => (props.$openNav ? "12px" : "0")};
        }
        &:before {
          width: 100%;
          height: 1px;
          bottom: -5px;
        }
      }
    }
  }
`;
