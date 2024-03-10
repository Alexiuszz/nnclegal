import { useRouter } from "next/router";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Slider } from "./PA_Slide.styles";
import { useInView } from "react-intersection-observer";
import { LeftArrow, RightArrow } from "../Arrows/Arrows";
import ServiceCard from "../cards/service-card/ServiceCard";
import useDrag from "@/hooks/useDrag";

const services = [
  {
    img: "./images/services/litigation.png",
    text: "Litigation",
    link: "/practice-areas/#Litigation",
  },
  {
    img: "./images/services/natural-resources.png",
    text: "Energy & Natural Resources Law",
    link: "/practice-areas/#Energy & Natural Resources Law",
  },
  {
    img: "./images/services/guarantee-certificate.png",
    text: "Corporate Services & Compliance",
    link: "/practice-areas/#Corporate Services & Compliance",
  },
  {
    img: "./images/services/intermediary.png",
    text: "Arbitration & ADR",
    link: "/practice-areas/#Arbitration & ADR",
  },
  {
    img: "./images/services/financial-advisor.png",
    text: "Banking and Finance",
    link: "/practice-areas/#Banking and Finance",
  },
  {
    img: "./images/services/legal-document.png",
    text: "Legal Documentation",
    link: "/practice-areas/#Legal Documentation",
  },
  {
    img: "./images/services/hammer.png",
    text: "Tax Law and Advisory",
    link: "/practice-areas/#Tax Law and Advisory",
  },
  {
    img: "./images/services/innovation.png",
    text: "Intellectual Property",
    link: "/practice-areas/#Intellectual Property",
  },
  {
    img: "./images/services/profits.png",
    text: "Foreign Investment Advisory Services",
    link: "/practice-areas/#Foreign Investment Advisory Services",
  },
];
// function onWheel(apiObj, ev) {
//   const isThouchpad =
//     Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

//   if (isThouchpad) {
//     ev.stopPropagation();
//     return;
//   }

//   // console.log(ev.deltaY);
//   // if (ev.deltaY < 0) {
//   //   apiObj.scrollNext();
//   // } else if (ev.deltaY > 0) {
//   //   apiObj.scrollPrev();
//   // }
// }
const Arrows = (texts) => (
  <div className="PA-container">
    {texts}
    <div className="arrowsContainer">
      <LeftArrow /> <RightArrow />
    </div>
  </div>
);
function Slide({ texts, samePage = false }) {
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
  const handleItemClick = () => () => {
    if (dragging) {
      return false;
    }
  };
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.8,
    triggerOnce: true,
  });
  return (
    <Slider ref={ref} inView={inView} onMouseLeave={dragStop}>
      <ScrollMenu
        Header={Arrows(texts)}
        // onWheel={onWheel}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
      >
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            img={service.img}
            text={service.text}
            onClick={handleItemClick()}
            link={samePage? service.link.slice(16): service.link}
          />
        ))}
      </ScrollMenu>
    </Slider>
  );
}

export default Slide;
