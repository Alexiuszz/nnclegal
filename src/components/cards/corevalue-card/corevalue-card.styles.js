import styled from "styled-components";

export const CoreValueCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 154px;
  height: 130px;  
  flex-grow: 0;
  flex-shrink: 0;
  box-shadow: 2px 6px 10px #545454;
  padding: 20px;
  background-color: #2a3d92;
  color: #fff;
  margin: 5px -5px;;
  border-radius: 5px;
  transform: scale(0.85);
  &&& > h1 {
    font-size: 14px;
    font-weight: 400;
    margin-top: 30px;
    text-align: left;
  }
  img {
    width: 30px;
  }
  
  
`;
