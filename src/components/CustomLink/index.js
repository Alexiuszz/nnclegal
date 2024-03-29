import React, { useContext } from "react";
import styled from "styled-components";

const CustomLink = styled.a`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.hoverFontColor},
    ${({ theme }) => theme.hoverFontColor} 50%,
    ${({ theme }) => theme.primaryFontColor} 50%
  );
  font-weight: 500;
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  position: relative;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:before {
    content: "";
    background: ${({ theme }) => theme.accents};
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1.5px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0;
  }

  &:hover::before {
    width: 100%;
  }
`;
function Link({ className, href, children, blank = false }) {
  return (
    <CustomLink
      href={href}
      className={className}
      target={blank ? "_blank" : "_self"}
    >
      {children}
    </CustomLink>
  );
}

export default Link;
