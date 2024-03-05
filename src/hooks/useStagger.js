import { useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

export function useStagger(
  start = false,
  className,
  direction = "",
  diff = 0.2,
  delay = 0.2
) {
  const [scope, animate] = useAnimate();
  const staggerData = stagger(diff, { startDelay: delay });
  useEffect(() => {
      animate(
        className,
        start
          ? {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }
          : direction === "left"
          ? {
              x: "-50%",
              y: 0,
              opacity: 0,
              scale: 0.3,
              filter: "blur(20px)",
            }
          : direction === "center"
          ? { x: "50%", opacity: 0, scale: 0.3, filter: "blur(20px)" }
          : {
              y: "50%",
              opacity: 0,
              scale: 0.3,
              filter: "blur(20px)",
            },
        {
          duration: 0.2,
          delay: start ? staggerData : 0,
        }
      );
  }, [start]);

  return scope;
}

export function StaggerContainer({ diff, delay }) {
  const scope = useStagger(start, diff, delay);

  return (
    <nav className="menu" ref={scope}>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setStart(!start)}
      >
        Menu
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
      >
        <li>Item 1 </li>
        <li>Item 2 </li>
        <li>Item 3 </li>
        <li>Item 4 </li>
        <li>Item 5 </li>
      </ul>
    </nav>
  );
}
