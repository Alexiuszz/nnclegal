import styled from "styled-components";

export const ContactCardContainer = styled.div`
  padding: 30px 20px;
  height: fit-content;
  width: 30%;
  min-width: 300px;
  background-color: #f4f4f4;
  border-radius: 5px;
  box-shadow: 0px 5px 12px #858585a2;
  transition-delay: ${(props) => props.i * 0.2}s !important;
  .card-header {
    margin-bottom: 10px;
  }
  a {
    font-size: 12px;
  }
  p {
    text-align: left;
  }
  .full-address {
    margin-bottom: 15px;
    p {
      margin: 5px 0;
      font-size: 14px;
    }
  }
`;
