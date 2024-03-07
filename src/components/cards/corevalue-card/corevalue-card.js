import React from "react";
import { CoreValueCardContainer } from "./corevalue-card.styles";
import { Header } from "../../typography.styles";

function CoreValueCard({ img, text }) {
  return (
    <CoreValueCardContainer>
      <img src={img} alt={text} />
      <Header>{text}</Header>
    </CoreValueCardContainer>
  );
}

export default CoreValueCard;
