import { ImgTextContainer } from "./img-text.styles";
import React, { useRef } from "react";
import Image from "next/image";
import { SectionHeader, Text } from "@/components/typography";
import { useInView } from "framer-motion";
import LinkButton from "@/components/LinkButton";
import { useStagger } from "@/hooks/useStagger";


export const ImgText = (staggerName, textHeader, text, btns) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const scope = useStagger(isInView, staggerName);
  return (
    <ImgTextContainer>
      <div className="events-section" ref={scope}>
        <div className="events-section-info">
          <SectionHeader
            size="25px"
            bottom="30px"
            className={staggerName}
          >
            {textHeader}
          </SectionHeader>
          <Text size="14px" className={staggerName}>
            {text}
          </Text>
          {btns && (
            <div className="events-section-links">
              {btns.map((btn, i) => (
                <LinkButton
                  key={i}
                  className={staggerName}
                  href={btn.link}
                >
                  {btn.text}
                </LinkButton>
              ))}
            </div>
          )}
        </div>
        <div className="events-section-media">
          <div className="events-section-media-bg events-stagger">
            <Image
              height={450}
              width={500}
              loading="lazy"
              src={
                "https://the-pearl.s3.amazonaws.com/imgs/sroom/sroom-1.jpg"
              }
              alt="room-image"
            />
          </div>
        </div>
      </div>
    </ImgTextContainer>
  );
};

export default ImgText;
