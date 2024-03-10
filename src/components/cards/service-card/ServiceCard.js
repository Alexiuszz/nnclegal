import React from "react";
import { StyledServiceCard } from "./ServiceCard.styles";
import { Header } from "@/components/typography";

function ServiceCard({ img, text, onClick, link}) {
  return (
    <StyledServiceCard
      onClick={() => onClick()}
      role="button"
      tabIndex={0}
      className="card"
    >
      <img src={img} alt={text} />
      <Header>{text}</Header>
    </StyledServiceCard>
  );
}

export default ServiceCard;
