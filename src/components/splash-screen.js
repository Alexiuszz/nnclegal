import styled from "styled-components";
import { motion, animate } from "framer-motion";
import Loader from "./loader";
import { centerContent } from "@/styles/style_mixins";
import { useEffect, useState } from "react";

export const SplashScreenContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  position: fixed;
  ${centerContent}
  .logoSplash {
    height: 80px;
    width: 70px;
    .container {
      background: #0b3320;
      transform: rotate(-24.53deg);
      height: 80px;
      width: 70px;
      border-radius: 10px;
      ${centerContent};
      img {
        transform: rotate(24.53deg);
        height: 60px;
      }
      .svg-border {
        position: absolute;
      }
      .neon {
        filter: url(#neon);
      }
    }
  }
`;

const SplashScreen = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    let splashTimeout = setTimeout(() => {
      setSplash(false);
    }, 2000);

    animate(
      ".mainSplash",
      {
        background: `radial-gradient(circle at 50%, transparent,transparent 100%, #06121e 105%, #06121e 105%)`,
      },
      {
        delay: 1.7,
        duration: 0.8,
      }
    );
    animate(
      ".logoSplash",
      {
        opacity: [1, 0],
        scale: [1, 0],
      },
      { delay: 1.5, duration: 0.5 }
    );
    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);
  return (
    <SplashScreenContainer
      className="mainSplash"
      initial={{
        background: `radial-gradient(circle at 50%, transparent, transparent 0%, #06121e 0%, #06121e 80%)`,
      }}
      style={{ display: splash ? "absolute" : "none" }}
    >
      <motion.div
        animate={{
          opacity: [1, 0],
        }}
        transition={{ delay: 3.8, duration: 0.5 }}
        className="logoSplash"
      >
        <Loader />
      </motion.div>
    </SplashScreenContainer>
  );
};

export default SplashScreen;
