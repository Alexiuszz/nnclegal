import { centerContent } from "@/styles/style_mixins";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  & > div {
    padding: 50px;
  }
  @media screen and (max-width: 880px) {
    & > div {
      padding: 50px 10px;
    }
  }
`;

export const CopyrightsSectionContainer = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
`;

export const IconSectionContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryFontColor};
  display: flex;
  height: 300px;
  justify-content: space-between;
  .logo {
    height: 100%;
    width: 200px;
    ${centerContent};
    flex-direction: column;
  }
  .links {
    display: flex;
    justify-content: space-between;
    width: 70%;
    height: 100%;
    @media screen and (max-width: 580px) {
      .links {
        column-gap: 40px;
        justify-content: center;
      }
    }
    .columns {
      display: flex;
      flex-direction: column;
      height: 100%;
      a {
        margin-bottom: 20px;
        width: max-content;
        &::before {
          width: 100%;
        }
      }
      .socials {
        width: 100px;
        a {
          margin-right: 10px;
          svg {
            height: 16px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 880px) {
    flex-direction: column;
    height: fit-content;
    align-items: center;
    row-gap: 20px;
    .links {
      flex-wrap: wrap;
      row-gap: 20px;
    }
    .socials {
      margin: 0 auto;
    }
  }
`;

export const NewsletterContainer = styled.div`
  color: ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: space-around;
  .input {
    display: flex;
    width: 50%;
    input {
      width: 70%;
    }
    button {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.accents},
        ${({ theme }) => theme.accents} 50%,
        #11173f 50%
      );
      background-color: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.primaryFontColor};
      background-clip: inherit;
      -webkit-text-fill-color: inherit;
      box-shadow: 0px 3px 6px #787878;
    }
  }
  @media screen and (max-width: 880px) {
    ${centerContent};
    flex-direction: column;
    h2 {
      margin-bottom: 20px;
    }
    .input {
      display: flex;
      width: 90%;
      justify-content: center;
    }
  }
`;
