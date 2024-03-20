import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Header, Text } from "@/components/typography";
import { centerContent } from "@/styles/style_mixins";
import LinkButton from "@/components/LinkButton";

export const JoinContainer = styled.div`
  background-color: #eee;
  color: ${({ theme }) => theme.primaryColor};
  .join-content {
    ${centerContent};
    flex-direction: column;
    width: 60%;
    max-width: 100%;
    margin: 10px auto;
    padding: 100px 0;
    h1 {
      font-size: 35px;
      margin-bottom: 30px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
    .apply-btn {
      height: 40px;
      width: 120px;
      color: ${({ theme }) => theme.primaryColor};
      cursor: pointer;
    }
    @media screen and (max-width: 780px) {
      width: 80%;
    }
  }
`;

function PractContact() {
  return (
    <JoinContainer>
      <div className="join-content">
        <Header size="40px" bottom="20px">
          Work with Us
        </Header>
        <Text size="16px" bottom="30px">
          We believe that as solution–providers, we are better
          positioned to serve you in the areas that we enjoy maximum
          competitive advantage.
        </Text>
        <div className="apply-btn">
          <LinkButton href="/contact">Contact Us</LinkButton>
        </div>
      </div>
    </JoinContainer>
  );
}

export default PractContact;
