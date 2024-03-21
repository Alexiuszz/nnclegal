import {
  Merienda,
  Montserrat,
  Playfair_Display,
} from "next/font/google";
import styled from "styled-components";



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

export const Header = styled.h2.attrs((props) => ({
  className: playfair.className,
}))`
  text-align: ${(props) => props.center || "left"};
  font-weight: ${(props) => props.weight || "300"};
  font-size: ${(props) => props.size || "45px"};
  color: ${(props) => props.color || "inherit"};
  margin-bottom: ${(props) => props.bottom || "0"};
  margin-top: ${(props) => props.top || "0"};
  line-height: ${(props) => props.height || "inherit"};
  width: ${(props) => props.width || ""};
`;

export const Text = styled.p.attrs((props) => ({
  className: montserrat.className,
}))`
  text-align: ${(props) => props.center || "left"};
  font-weight: ${(props) => props.weight || "400"};
  font-size: ${(props) => props.size || "16px"};
  color: ${(props) => props.color || "inherit"};
  margin-bottom: ${(props) => props.bottom || "0"};
  margin-top: ${(props) => props.top || "0"};
  line-height: ${(props) => props.height || "inherit"};
  width: ${(props) => props.width || "fit-content"};
`;

export const SectionHeader = styled(Header)`
  &::after {
    content: "";
    height: 1px;
    width: ${({ $inView }) => ($inView ? "50%" : "0")};
    background-color: ${({ theme }) => theme.accents};
    display: inline-block;
    transition: width 0.5s 0.4s ease-out;
    @media screen and (max-width: 880px) {
      width: ${({ $inView }) => ($inView ? "20%" : "0")};
    }
  }
`;
export const SectionHeader2 = styled(Header)`
  &::before {
    content: "";
    height: 1px;
    width: ${({ $inView }) => ($inView ? "20%" : "0")};
    background-color: ${({ theme }) => theme.accents};
    display: inline-block;
    transition: width 0.5s 0.4s ease-out;
    @media screen and (max-width: 880px) {
      width: 0;
    }
  }
  &::after {
    content: "";
    height: 1px;
    width: ${({ $inView }) => ($inView ? "25%" : "0")};
    background-color: ${({ theme }) => theme.accents};
    display: inline-block;
    transition: width 0.5s 0.4s ease-out;
  }
`;
