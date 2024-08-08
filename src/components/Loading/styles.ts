import styled, { keyframes } from "styled-components";
import { theme } from "@src/styles/theme";
import { colors } from "../Question/styles";
import { darken } from "polished";
import { motion } from "framer-motion";

const { spacing } = theme;


const darkBlue = darken(0.2, colors.blue);
const darkYellow = darken(0.2, colors.yellow);
const darkGraphite = darken(0.2, colors.graphite);
const darkGreen = darken(0.2, colors.green);
const darkRed = darken(0.2, colors.red);

export const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-inline: -22px;
  border-width: 8px;
  border-style: solid;
  animation: ${loadingAnimation} 1.5s infinite linear;
`;

export const LoadingRings = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${Loading} {
    &:nth-child(1) {
      border-color: ${colors.blue};
      border-top-color: ${darkBlue};
      position: relative;
      top: -32px;
    }
    &:nth-child(2) {
      border-color: ${colors.yellow};
      border-top-color: ${darkYellow};
      animation-direction: reverse;
      animation-direction: reverse;
    }
    &:nth-child(3) {
      border-color: ${colors.graphite};
      border-top-color: ${darkGraphite};
      position: relative;
      top: -32px;
    }
    &:nth-child(4) {
      border-color: ${colors.green};
      border-top-color: ${darkGreen};
      animation-direction: reverse;
    }
    &:nth-child(5) {
      border-color: ${colors.red};
      border-top-color: ${darkRed};
      position: relative;
      top: -32px;
    }
  }
`;

export const LoadingPopup = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${spacing.large};

  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: white;
`;
