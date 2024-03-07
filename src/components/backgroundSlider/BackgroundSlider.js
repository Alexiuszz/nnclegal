import React from "react";
import useImagePreloader from "../../hooks/usePreloadImage";

import { StyledSlide, StyledSlider } from "./BackgroundSlider.styles";
import { ImagePlaceHolder } from "../ImagePlaceHolder.styled";

function BackgroundSlider({
  children,
  currImg,
  imageUrls,
  height,
  width,
  bgMask,
  noCenter,
  multi = true,
  onClick = ()=>{}
}) {
  const [images, isImageLoaded] = useImagePreloader(imageUrls);
  
  return (
    <StyledSlider height={height} width={width} noCenter={noCenter} onClick={onClick}>
      {children}
      {imageUrls.map((url, i) =>
        isImageLoaded(url) && images.length > 0 && images[i] ? (
          <StyledSlide
            bgMask={bgMask}
            inView
            image={images[i].src ? images[i].src : ""}
            key={i}
            className={
              multi
                ? currImg === i
                  ? "currImg multi"
                  : "multi"
                : currImg === i
                ? "currImg"
                : ""
            }
          />
        ) : (
          <ImagePlaceHolder key={i} className={"multi"} />
        )
      )}
    </StyledSlider>
  );
}

export default BackgroundSlider;
