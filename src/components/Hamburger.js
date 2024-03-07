import styled from "styled-components";
import React from "react";

const HamburgerContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  height: 20px;
  width: 30px;
  position: absolute;
  right: 5vw;
  @media screen and (max-width: 960px) {
    display: flex;
  }
  div {
    height: 15%;
    transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 0.3s;
    border-radius: 40px;
    background-color: ${({theme}) => theme.accents};
  }

  #l1 {
    width: 100%;
  }

  #l2 {
    width: 50%;
  }

  #l3 {
    width: 30%;
  }

  .active {
    transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 0.2s;
    background-color: #535252;
  }

  .active#l1 {
    transition-delay: 0.2s;
    transform: translateY(8px) rotate(135deg);
    width: 80%;
  }

  .active#l3 {
    transform: translateY(-6px) rotate(-135deg);
    width: 80%;
    transition-delay: 0.2s;
  }

  .active#l2 {
    width: 0;
  }
`;

function Hamburger({ opened = false, open = (f) => f }) {
  return (
    <HamburgerContainer
      onClick={(e) => {
        e.stopPropagation();
        open();
      }}
    >
      <div className={opened ? "active" : ""} id="l1"></div>
      <div className={opened ? "active" : ""} id="l2"></div>
      <div className={opened ? "active" : ""} id="l3"></div>
    </HamburgerContainer>
  );
}

export default Hamburger;
