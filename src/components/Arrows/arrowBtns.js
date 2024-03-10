import styled from "styled-components";

const Arrow = styled.button`
  height: 20px;
  width: max-content;
  cursor: pointer;
  border: none;
  background-color: #fff;
  color: ${(props) =>
    props.disabled ? props.theme.primaryFontColor : props.theme.primaryColor};
`;

export const StyledLeftArrow = styled(Arrow)`
  &::before {
    content: "";
    height: 1.5px;
    width: 50px;
    background-color: ${({ theme }) => theme.accents};
    /* background-color: #eaca12; */
    display: inline-block;
    transition: width 0.5s 0.4s ease-out;
  }
`;
export const StyledRightArrow = styled(Arrow)`
  &::after {
    content: "";
    height: 1.5px;
    width: 50px;
    /* background-color: #eaca12; */
    background-color: ${({ theme }) => theme.accents};
    display: inline-block;
    transition: width 0.5s 0.4s ease-out;
  }
`;
