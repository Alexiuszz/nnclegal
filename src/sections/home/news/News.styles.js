import styled from "styled-components";
import { smallHeader } from "../../../styles/style_variables";

export const NewsContainer = styled.div`
  padding: 70px 40px;
  padding-bottom: 60px;
  h1 {
    font-weight: 400;
    font-size: ${smallHeader};
    text-align: left;
    margin-bottom: 40px;
  }
  .newsContainer {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 880px) {
      flex-direction: column;
      row-gap: 30px;
    }
    div {
      opacity: ${(props) => !props.inView && "0"};
      transform: ${(props) => !props.inView && "scale(0.5)"};
      transition: all cubic-bezier(0.66, 0.01, 0.06, 1.06) 1s;
    }
  }
`;
