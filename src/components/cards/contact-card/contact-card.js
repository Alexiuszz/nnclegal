import React from "react";
import { Text } from "../../typography.styles";
import { ContactCardContainer } from "./contact-card.styles";

function ContactCard({
  location,
  addrLine1,
  addrLine2,
  addrLine3,
  phone,
  i
}) {
  return (
    <ContactCardContainer i={i}>
      <Text className="card-header">{location}</Text>
      <Text size="10px">Address</Text>
      <div className="full-address">
        <Text>{addrLine1}</Text>
        <Text>{addrLine2}</Text>
        <Text>{addrLine3}</Text>
        <Text>Nigeria</Text>
      </div>
      <Text size="10px">Phone</Text>
      <a href={`tel:${phone}`}>{phone}</a>
    </ContactCardContainer>
  );
}

export default ContactCard;
