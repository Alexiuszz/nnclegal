import { createGlobalStyle } from "styled-components";
import { mobile } from "./style_variables";
export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  
  @media screen and (max-width: ${mobile}) {
    cursor:initial;
  }
  &::-webkit-scrollbar{
    display: none;
  }
}
  body {   
    color: ${({ theme }) => theme.secondaryFontColor};
    line-height: 1.3;
       
  background-size: cover;
  background-position: top;
  font-family: "SF UI Text", "Helvetica Neue", "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", sans-serif;

  &:hover{
    .custom-cursor{
      display: initial;
    }
  }
  }
  &::-webkit-scrollbar {
    width: 12px;
    z-index: 3;
    @media screen and (max-width: 760px) {
    width: 6px;
  }
}
&::-webkit-scrollbar-thumb {
    background-color:${({ theme }) => theme.secondaryFontColor};
    border: 1px solid ${({ theme }) => theme.accents};
    border-radius: 10px;   
    z-index: 3;
    @media screen and (max-width: 760px) {
    width: 6px;
    border: 0.5px solid ${({ theme }) => theme.accents};
  }
}&::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.tetiaryColor};
    z-index: 3;
}
&::selection {
    background-color: ${({ theme }) => theme.secondaryFontColor};;
    color: ${({ theme }) => theme.primaryFontColor};;
}
  ul{
    list-style: none;
  }

  input, input:focus-visible{
    outline: none;
  }
  `;
