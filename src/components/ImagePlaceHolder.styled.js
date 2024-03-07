import { shine } from "@/styles/keyframes";
import styled from "styled-components";

export const ImagePlaceHolder = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    122deg,
    #d6d6d6 8%,
    #f5f5f5 18%,
    #d6d6d6 33%
  );
  background-size: 210% 113%;
  animation: 1.5s ${shine} linear infinite;
  opacity: 0;
  &.multi {
    opacity: 1;
  }
`;
