import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardCarouselContainer } from "./Card-Carousel.styles";
import { Button } from "../Button";
import { Text } from "../typography";
import LinkButton from "../LinkButton";

function CardCarousel({
  item,
  height = 400,
  width = 500,
  full = false,
  onClick = () => {},
  flip = true,
}) {
  const [currImg, setCurrImg] = useState(0);
  useEffect(() => {
    var interval, timeout;
    if (flip) {
      timeout = setTimeout(() => {
        interval = setInterval(() => {
          setCurrImg((prevState) =>
            prevState === item.images.length - 1 ? 0 : prevState + 1
          );
        }, 6000);
      }, 4000);
    }
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <CardCarouselContainer
      onDoubleClick={() => onClick()}
      $height={height}
      $width={width}
      $full={full}
    >
      <div
        className="carousel-imgs"
        onClick={() =>
          setCurrImg((prevState) =>
            prevState < item.images.length - 1 ? prevState + 1 : 0
          )
        }
      >
        {item.images.map((img, i) => (
          <Image
            key={i}
            className={currImg === i ? "currImg" : ""}
            height={full ? height : height * 0.8}
            width={width}
            src={img}
            alt="intro-image"
            priority
          />
        ))}
        {flip && (
          <div className="slideButton">
            {item.images.map((item, i) => (
              <Button
                key={i}
                className={i === currImg && "fill"}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrImg(i);
                }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="room-details">
        <Text size="20px" weight="700">
          {item.roomName?.split(" ").map((word, i) =>
            i > 0 ? (
              <span key={i} style={{ color: "#eaca12" }}>
                {word}{" "}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </Text>
        <div className="card-links">
          <LinkButton href={"#"} onClick={onClick}>
            Learn more
          </LinkButton>
          <LinkButton href="/reservations">Book now</LinkButton>
        </div>
      </div>
    </CardCarouselContainer>
  );
}

export default CardCarousel;
