import styled from "styled-components";

export const TestimonialCardContainer = styled.div`
  height: 300px;
  width: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 3px 6px #a4a4a4;
  color: #000;
  padding: 20px;
  font-size: 12px;
  overflow: hidden;

  .small-rating {
    display: flex;
  }
  .ratings,
  .avatar {
    margin: 0 auto;
  }
  .ratings {
    width: max-content;
  }
  .avatar {
    height: 100px;
    width: 100px;
    overflow: hidden;
    border-radius: 50%;
  }
  .reviewText {
    height: 60px;
    overflow-y: auto;
    margin-top: 10px;
    &::-webkit-scrollbar {
      width: 8px;
    }
  }
  @media screen and (max-width: 300px) {
    width: calc(100% + 30px);
  }
`;
