import React from "react";
import { StaffCardContainer } from "./staff-card.styles";
import { Text } from "../../typography.styles";
import BackgroundSlider from "../../backgroundSlider/BackgroundSlider";

function StaffCard({ staff, onClick }) {
  return (
    <StaffCardContainer
      onClick={() => onClick()}
      role="button"
      tabIndex={0}
      className="card"
    >
      <div className="staff-img">
        <BackgroundSlider
          imageUrls={[staff.img]}
          currImg={0}
          width="100%"
          height="100%"
          bgMask={false}
          noCenter={true}
        ></BackgroundSlider>
      </div>
      <div className="staff-info">
        <Text className="staff-name">{staff.name}</Text>
        <Text>{staff.position}</Text>
      </div>
    </StaffCardContainer>
  );
}

export default StaffCard;
