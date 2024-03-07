import styled from "styled-components";

export const StyledNewsCard = styled.div`
  display: flex;
  height: 200px;
  width: 45%;
  overflow: hidden;
  transition-delay: ${(props) => props.i * 0.3}s !important;
  .texts {
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 5%;
    p {
      text-align: left;
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 880px) {
    width: 100%;
  }
`;
