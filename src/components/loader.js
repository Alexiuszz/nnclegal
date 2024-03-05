import React from "react";
import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    border: 4px solid #81abff;
    opacity: 1;
    border-radius: 50%;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;
function Loader() {
  return (
    <LoaderContainer>
      <div />
      <div />
    </LoaderContainer>
  );
}

export default Loader;
