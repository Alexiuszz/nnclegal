import React from "react";
import Slide from "../../../components/PA Slide/PA_Slide";
import { Header, Text } from "../../../components/typography.styles";

function Pract_Areas() {
  return (
    <div>
      <Slide
        texts={
          <div className="texts">
            <Header>Practice Areas</Header>
            <Text>
              We wish we could tell you that we do everything, but
              then we would not be able to offer you our traditional
              bespoke services.{" "}
            </Text>
          </div>
        }
      />
    </div>
  );
}

export default Pract_Areas;
