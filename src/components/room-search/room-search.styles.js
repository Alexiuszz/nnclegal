import { atTop, centerContent } from "@/styles/style_mixins";
import styled from "styled-components";

export const RoomSearchContainer = styled.div`
  position: fixed;
  width: ${({ $isTop }) => ($isTop ? "80%" : "100%")};
  height: 100px;
  background-color: ${({ theme, $isTop }) =>
    $isTop ? theme.primaryFontColor : theme.primaryColor};
  box-shadow: 0 5px 9px 0px #434343;
  border-radius: ${({ $isTop }) => ($isTop ? "12px" : "0")};
  color: ${({ theme, $isTop }) =>
    $isTop ? theme.primaryColor : theme.primaryFontColor};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  bottom: ${({ $isTop }) => ($isTop ? "5%" : "0")};
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  padding: 0 20px;
  transition: all 0.5s;
  h2 {
    color: ${({ theme }) => theme.accents};
  }
  .date-range {
    padding: 0 20px;
    height: 80%;
    position: relative;
    border-right: 1px solid ${({ theme }) => theme.accents};
    display: flex;
    .right-pointer {
      height: 80%;
      width: 30px;
      ${centerContent};
      svg {
        height: 14px;
        color: ${({ theme }) => theme.accents};
      }
    }
    .dates-picked {
      display: flex;
      cursor: pointer;
      user-select: none;
      p {
        display: flex;
        flex-direction: column;
      }
    }
    .calender {
      opacity: ${({ $openCalender }) => ($openCalender ? "1" : "0")};
      ${atTop};
      display: ${({ $openCalender }) =>
        $openCalender ? "block" : "none"};
      top: -380px;
      transition: opacity 0.3s 0.3s;
      .rdrCalendarWrapper {
        border-radius: 12px;
        overflow: hidden;
      }
    }
    /* .rdrMonthAndYearWrapper, .rdrMonths {
         } */
  }
  .guests {
    display: flex;
    padding: 0 20px;
    border-right: 1px solid ${({ theme }) => theme.accents};
    position: relative;
    height: 80%;
    .guest-number {
      display: flex;
      width: 90px;
    }
    .calender {
      transition: opacity 0.3s 0.3s;
      opacity: ${({ $openGuestsNumber }) =>
        $openGuestsNumber ? "1" : "0"};
      ${atTop};
      display: ${({ $openGuestsNumber }) =>
        $openGuestsNumber ? "flex" : "none"};
      top: -220px;
    }
    .menu-icon {
      height: 80%;
      ${centerContent};
      cursor: pointer;
      svg {
        height: 25px;
        color: ${({ theme }) => theme.accents};
      }
    }
  }

  a {
    font-size: 25px;
    margin-left: 15px;
    color: ${({ theme }) => theme.primaryColor};
    background-color: ${({ theme }) => theme.accents};
    &:hover {
      background-color: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.accents};
    }
  }

  @media screen and (max-width: 880px) {
    bottom: 0px;
    padding: 0 10px;
    width: 100%;
    border-radius: 0;
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryFontColor};
    flex-wrap: wrap;
    .guests,
    .date-range {
      ${centerContent}
      height: 70%;
      padding: 0 10px;
      .guest-number {
        width: 50px;
      }
    }
    .guests {
      .calender {
        left: -150px;
      }
      .menu-icon {
        svg {
          height: 15px;
        }
      }
    }
    .date-range {
      .calender {
        left: -20px;
      }
    }
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 10px;
    }
    a {
      font-size: 18px;
      margin-left: 10px;
    }
  }
  @media screen and (max-width: 400px) {
    height: 120px;
    flex-wrap: wrap;
    .guests {
      position: static;
      .calender {
        left: 10px;
      }
    }
    a {
      font-size: 16px;
      margin-top: -15px;
      box-shadow: 0px 0px 14px 0px #073018;
      padding: 0 25px;
      color: #fff;
      --_i: 100%;
    }
  }
  @media screen and (max-width: 300px) {
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 8px;
    }
    .guests {
      position: static;
      .guest-number {
        width: 30px;
      }
    }
  }
`;

export const GuestsNumberContainer = styled.div`
  padding: 30px;
  background-color: #fff;
  color: ${({ theme }) => theme.primaryColor};
  border-radius: 12px;
  display: flex;
  width: 400px;
  flex-direction: column;
  position: absolute;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 45px;
    border-bottom: 1px solid ${({ theme }) => theme.accents};
    div {
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        height: 25px;
      }
    }
  }

  @media screen and (max-width: 880px) {
    width: 300px;
  }
  @media screen and (max-width: 300px) {
    width: 250px;
    & > div {
      div {
        width: 80px;
      }
    }
  }
`;
