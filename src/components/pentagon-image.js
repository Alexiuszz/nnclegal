import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { centerContent } from "@/styles/style_mixins";

const Pentagon = styled.div`
  position: absolute;
  aspect-ratio: 1/0.85;
  background-color: #fff;
  ${centerContent};
  clip-path: polygon(
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%,
    0% 50%
  ) !important;
  div {
    width: 90%;
    aspect-ratio: 1/0.85;
    overflow: hidden;
    clip-path: polygon(
      25% 0%,
      75% 0%,
      100% 50%,
      75% 100%,
      25% 100%,
      0% 50%
    );
    img {
      object-fit: cover;
      object-position: center;
    }
  }
`;
function PentagonImage({ className, img, size }) {
  return (
    <Pentagon className={className}>
      <div>
        <Image
          height={size || 180}
          width={size || 180}
          loading="lazy"
          src={img}
          alt="intro-image"
        />
      </div>
    </Pentagon>
  );
}

export default PentagonImage;
