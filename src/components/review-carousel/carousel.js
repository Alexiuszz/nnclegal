import React, { useRef, useState } from "react";
import { GliderContainer } from "./carousel.styles";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import TestimonialCard from "../testimonial-card/testimonial-card";

const animation = {
  opacity: [0, 0, 0, 1],
};
const transition = {
  duration: 2,
  times: [0, 0.4, 0.6, 1],
  delay: 1.8,
  ease: [0, 0.71, 0.2, 1.01],
};

const ReviewCarousel = ({ reviews, baseVelocity = -1 }) => {
  const [scrollSpeed, setScrollSpeed] = useState(baseVelocity);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    {
      clamp: false,
    }
  );
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy =
      directionFactor.current * scrollSpeed * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <GliderContainer
      animate={animation}
      transition={transition}
      onMouseOver={() => {
        setScrollSpeed(0);
      }}
      onMouseLeave={() => {
        setScrollSpeed(baseVelocity);
      }}
    >
      <motion.div className="glider-wrapper" style={{ x }}>
        {reviews.map((review, id) => (
          <motion.div
            className="review"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            key={id}
          >
            <TestimonialCard review={review} />
          </motion.div>
        ))}
        {reviews.map((review, id) => (
          <motion.div
            className="review"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            key={id}
          >
            <TestimonialCard review={review} />
          </motion.div>
        ))}
        {reviews.map((review, id) => (
          <motion.div
            className="review"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            key={id}
          >
            <TestimonialCard review={review} />
          </motion.div>
        ))}
        {/* {reviews.map((review, id) => (
          <motion.div
            className="review"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            key={id}
          >
            <Image width={100} height={100} src={image} alt={image} />
          </motion.div>
        ))} */}
      </motion.div>
    </GliderContainer>
  );
};
export default ReviewCarousel;
