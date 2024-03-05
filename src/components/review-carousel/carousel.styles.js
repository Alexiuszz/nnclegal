import { absCenter } from "@/styles/style_mixins";
import { mobile } from "@/styles/style_variables";
import { motion } from "framer-motion";
import styled from "styled-components";

export const GliderContainer = styled(motion.div)`
  opacity: 1;
  transform: translate(-50%, -40%);
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  .glider-wrapper {
    display: flex;
    height: 6rem;
    .review {
      margin-right: 30px;
      img {
        object-fit: cover;
      }
      img:last-of-type {
        padding-left: 0;
      }
    }
  }
  @media screen and (max-width: 300px) {
    .glider-wrapper {
    .review {
      margin-right: 50px;
    }
  }
  }
`;
