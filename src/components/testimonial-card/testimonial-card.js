import React from "react";
import { TestimonialCardContainer } from "./testimonial-card.styles";
import { Text } from "../typography";
import Image from "next/image";
import StarsGen from "../stars-gen";

function TestimonialCard({ review }) {
  return (
    <TestimonialCardContainer>
      <div className="avatar">
        <Image
          height={100}
          width={100}
          src={review.reviewer_avatar}
          alt={"reviewer name"}
        />
      </div>
      <Text center="center">{review.reviewer}</Text>
      <div className="ratings">
        <StarsGen size={30} score={review.rating} />
      </div>
      <div className="small-rating">
        Rooms:{" "}
        <StarsGen
          size={14}
          score={review.rooms_rating || review.rating}
        />
      </div>
      <div className="small-rating">
        Services:{" "}
        <StarsGen
          size={14}
          score={review.services_rating || review.rating}
        />
      </div>
      <div className="small-rating">
        Location:{" "}
        <StarsGen
          size={14}
          score={review.location_rating || review.rating}
        />
      </div>
      <Text className="reviewText" size="10px">
        {review.text}
      </Text>
    </TestimonialCardContainer>
  );
}

export default TestimonialCard;
