import React, { useRef } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { LeftArrow, RightArrow } from "../Arrows/Arrows";
import useDrag from "../../hooks/useDrag";
import { Slider2 } from "./Slide.styles";
import CardCarousel from "../card-carousel/Card-Carousel";
import { Text } from "../typography";

const Arrows = (roomName) => (
  <div className="slide-container">
    <Text size={"22px"} weight="600">
      {roomName?.split(" ").map((word, i) =>
        i > 0 ? (
          <span key={i} style={{ color: "#eaca12" }}>
            {word}{" "}
          </span>
        ) : (
          <span key={i}>{word} </span>
        )
      )}
    </Text>
    <div className="arrowsContainer">
      <LeftArrow /> <RightArrow />
    </div>
  </div>
);
function Slide2({ Component = CardCarousel, list, roomName }) {
  const ref = useRef(null);

  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });
  const handleItemClick = (roomID) => () => {
    if (dragging) {
      return false;
    }
  };

  return (
    <Slider2 onMouseLeave={dragStop}>
      <ScrollMenu
        Footer={Arrows(roomName)}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
      >
        {list?.map((item, i) => (
          <Component
            key={i}
            itemId={i}
            item={item}
            onClick={handleItemClick(item.roomID)}
          />
        ))}
      </ScrollMenu>
    </Slider2>
  );
}

export default Slide2;
