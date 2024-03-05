import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { absCenter } from "@/styles/style_mixins";

const StyledSimpleHero = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.mediaBG};
  overflow: hidden;
  img {
    ${absCenter};
    object-fit: cover;
  }
  .mouse-scroll {
    ${absCenter};
    top: 75%;
  }
`;

function SimpleHero({ bgImage, children }) {
  return (
    <StyledSimpleHero className="simple-hero">
      <Image
        priority
        src={bgImage}
        height={1085}
        width={1600}
        alt="hero"
      />
      {children}
    </StyledSimpleHero>
  );
}

export default SimpleHero;
