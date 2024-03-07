import styled from "styled-components";
import { centerContent } from "../../styles/style_mixins";

export const StyledSlider = styled.div`
  background-color: #080c1c;
  position: relative;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  min-height: ${(props) => !props.height && "670px"};
  ${(props) => !props.noCenter && centerContent};
  overflow: hidden;
  .currImg.currImg {
    transform: translateX(0vw);
    opacity: 1;
  }
  .multi.multi {
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100vw;
    height: 100vh; */
  }
`;
export const StyledSlide = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transition: opacity 2s;
  opacity: 0;
  background-image: ${(props) =>
      props.bgMask === "full"
        ? "linear-gradient(to bottom,rgba(8, 12, 28, 0.721) 0%,      rgba(8, 12, 28, 0.699) 50%,      rgba(8, 12, 28, 0.737) 70%    )"
        : props.bgMask === "half"
        ? "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%,      rgba(28, 31, 44, 0.674) 50%,      rgba(31, 32, 40, 0.86) 100%    )"
        : "linear-gradient(to bottom,rgba(8, 12, 28, 0) 0%,      rgba(8, 12, 28, 0) 50%,      rgba(8, 12, 28, 0) 70%    )"},
    url(${(props) => props.image});
  background-size: cover;
  background-position: top;
  z-index: 0;
`;
