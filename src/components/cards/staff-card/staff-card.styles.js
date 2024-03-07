import styled from "styled-components";

export const StaffCardContainer = styled.div`
  height: 350px;
  width: 240px;
  /* margin: 10px 0px; */
  user-select: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 3px 13px #a6a8b7;
  .staff-img {
    width: 100%;
    height: 80%;
  }
  .staff-info {
    margin-top: 10px;
    .staff-name {
      font-size: 14px;
      font-weight: 600;
    }
    p {
      text-align: center;
      margin-left: 5px;
      margin-top: 5px;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 780px) {
    transform: scale(0.8);
    margin: 0px -50px;
  }
`;
