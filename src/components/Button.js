import { centerContent } from "@/styles/style_mixins";
import styled from "styled-components";

export const Button = styled.button.attrs((props) => ({
  className: props.className,
}))`
  ${centerContent};
  font-family: inherit;
  font-weight: 600;
  background-image: linear-gradient(
    to right,
    #547fd6,
    #547fd6 50%,
    #ffffff 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  position: relative;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  border: 2px solid;
  border-radius: 5px;
  border-image: repeating-linear-gradient(
      135deg,
      #596576 0 50px,
      #fcfcfc 0 100px,
      #758399 0 150px
    )
    2;
  padding: 5px 8px;
  width: fit-content;
  a {
    background-image: linear-gradient(
      to right,
      #91b5fc,
      #91b5fc 50%,
      #fff 50%
    );
  }
  &:hover {
    background-position: 0;
  }
`;
