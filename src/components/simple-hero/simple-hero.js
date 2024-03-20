import React from "react";
import { HeroText } from "./simple-hero.styles";
import { useInView } from "react-intersection-observer";
import { StyledSubHero } from "../subHero/SubHero.styles";
import BackgroundSlider from "../backgroundSlider/BackgroundSlider";
import { Header, Text } from "../typography";
import { Button } from "../Button";
import Link from "../CustomLink";

function SimpleHero({
  imageUrl,
  textHeader,
  textBody,
  button,
  height,
  mask,
}) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <StyledSubHero>
      <BackgroundSlider
        imageUrls={[imageUrl]}
        currImg={0}
        width="100%"
        height={height || "400px"}
        bgMask={mask || false}
        noCenter={true}
      >
        <HeroText ref={ref} inView={inView}>
          <div>
            <Header bottom="20px" center={false}>
              {textHeader}
            </Header>
            <Text bottom="20px" center={false}>
              {textBody}
            </Text>
            {button && (
              <Button>
                <Link href={button.link}>{button.text}</Link>
              </Button>
            )}
          </div>
        </HeroText>
      </BackgroundSlider>
    </StyledSubHero>
  );
}

export default SimpleHero;
