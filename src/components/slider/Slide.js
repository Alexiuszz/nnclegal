import React, { useRef } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { LeftArrow, RightArrow } from "../Arrows/Arrows";
import useDrag from "../../hooks/useDrag";
import { Slider } from "./Slide.styles";
import { useInView } from "framer-motion";
import CardCarousel from "../card-carousel/Card-Carousel";
import { useRouter } from "next/router";

const Arrows = () => (
  <div className="slide-container">
    <div className="arrowsContainer">
      <LeftArrow /> <RightArrow />
    </div>
  </div>
);
function Slide({ Component = CardCarousel, list }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const router = useRouter();

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
    router.push("rooms?room=" + roomID);
    if (dragging) {
      return false;
    }
  };

  return (
    <Slider ref={ref} inView={isInView} onMouseLeave={dragStop}>
      <ScrollMenu
        Header={Arrows()}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
      >
        {list.map((item, i) => (
          <Component
            key={i}
            itemId={i}
            item={item}
            onClick={handleItemClick(item.roomID)}
          />
        ))}
      </ScrollMenu>
    </Slider>
  );
}

export default Slide;
