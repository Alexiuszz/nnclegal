import { motion } from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";
import { centerContent } from "@/styles/style_mixins";

const LinkButtonContainer = styled(motion.a)`
  font-family: cursive, "Gill Sans", "Gill Sans MT", Calibri,
    "Trebuchet MS", sans-serif;
  border: 2px solid;
  border-radius: 5px;
  border-image: repeating-linear-gradient(
      135deg,
      #596576 0 50px,
      #eaca12 0 100px,
      #758399 0 150px
    )
    2;
  padding: 5px 8px;
  width: fit-content;
  mask: conic-gradient(
        from 180deg at top 8px right 8px,
        #0000 90deg,
        #000 0
      )
      var(--_i, 200%) 0 /200% var(--_i, 8px) border-box no-repeat,
    conic-gradient(at bottom 8px left 8px, #0000 90deg, #000 0) 0
      var(--_i, 200%) / var(--_i, 8px) 200% border-box no-repeat,
    linear-gradient(#000 0 0) padding-box no-repeat;
  transition: 0.3s, -webkit-mask-position 0.3s 0.3s;
  position: relative;
  ${centerContent};
  display: inline-flex;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 2px solid ${({ theme }) => theme.hoverFontColor};
    transition: 0.2s width;
  }
  &:hover {
    --_i: 100%;
    color: ${({ theme }) => theme.hoverFontColor};
    transition: 0.3s, -webkit-mask-size 0.3s 0.3s;
    cursor: none;
    &:after {
      width: 0px;
    }
  }
`;

function LinkButton({
  className,
  href,
  children,
  rel,
  target,
  onClick = () => {},
}) {
  return (
    <LinkButtonContainer
      href={href}
      className={className}
      onClick={onClick}
      target={target}
    >
      {children}
    </LinkButtonContainer>
  );
}

export default LinkButton;
