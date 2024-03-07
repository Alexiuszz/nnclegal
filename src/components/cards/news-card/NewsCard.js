import React from "react";
import BackgroundSlider from "../../backgroundSlider/BackgroundSlider";
import { Text } from "../../typography.styles";
import { StyledNewsCard } from "./NewsCard.styles";

function NewsCard({ content, index }) {
  return (
    <StyledNewsCard i={index}>
      <BackgroundSlider
        imageUrls={[content.thumb]}
        currImg={0}
        width="50%"
        height="100%"
      />
      <div className="texts">
        <Text weight={600}>{content.title}</Text>
        <Text size={"12px"}>{content.date}</Text>
        <Text size={"14px"}>{content.text}</Text>
      </div>
    </StyledNewsCard>
  );
}

export default NewsCard;
