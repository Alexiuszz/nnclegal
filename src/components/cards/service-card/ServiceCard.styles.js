import styled from "styled-components";
import { centerContent } from "../../../styles/style_mixins";

export const StyledServiceCard = styled.a`
  ${centerContent}
  flex-direction: column;
  width: 224px;
  height: 170px;
  box-shadow: 2px 6px 10px #ccc;
  padding: 10px;
  padding-top: 30px;
  background-color: #eef0f9d5;
  user-select: none;
  margin: 10px -10px;
  transform: scale(0.8);
  border-radius: 5px;
  cursor: pointer;
  && > h1 {
    font-size: 16px;
    font-weight: 500;
    margin-top: 30px;
  }
  img {
    width: 40px;
  }
  @media screen and (max-width: 780px) {
    transform: scale(0.6);
    margin: 10px -35px;
  }
`;
