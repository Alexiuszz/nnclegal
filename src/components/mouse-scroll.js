import { wheel } from "@/styles/keyframes";
import styled from 'styled-components'

export const MouseScroll = styled.div`
  width: 30px;
  height: 55px;
  border: 3px solid ${({theme})=> theme.accents};
  border-radius: 60px;
  position: relative;
  &::before {
    content: "";
    width: 8px;
    height: 12px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffffff;
    border-radius: 50%;
    opacity: 1;
    animation: ${wheel} 2s infinite;
  }
`;


