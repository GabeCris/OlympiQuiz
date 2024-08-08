import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "@src/styles/theme";
import { TimerProps } from "./Question";
import { motion } from "framer-motion";

export const { colors, spacing, radius } = theme;

export const Container = styled.div`
  background-color: ${colors.red};
  border-radius: ${radius};
  width: 100%;
  height: 165px;
  padding: ${spacing.large};
  position: relative;
  margin-bottom: calc(150px - 75px);
`;

export const Content = styled.div`
  background-color: ${colors.white};
  border-radius: ${radius};
  min-height: 160px;
  width: calc(100% - 48px);
  position: absolute;
  left: 50%;
  bottom: -75px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.small};
  padding: ${spacing.large};
  padding-top: 36px;
`;

export const Timer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background-color: ${colors.white};
  padding: 5px;
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ringPerimeter = 2 * Math.PI * (54 / 2); // Perímetro do círculo

// Definindo a animação
export const ringTimer = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: ${ringPerimeter};
  }
`;

// Estilizando o componente principal
export const RingTimer = styled.div`
  --ring-size: 54;
  --ring-stroke-width: 8;
  --ring-color: ${colors.blue};
  width: calc(1px * var(--ring-size));
  height: calc(1px * var(--ring-size));
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  transform: rotate(-90deg);
  position: absolute;
  top: 0;
  left: 0;
`;

export const Circle = styled.circle<{ timer: TimerProps }>`
  fill: none;
  stroke-width: var(--ring-stroke-width);
  stroke: var(--ring-color);
  stroke-dasharray: ${ringPerimeter}; // Ajustado para o comprimento total do perímetro
  stroke-dashoffset: ${ringPerimeter}; // Começa completamente preenchido
  animation: ${ringTimer} 10s linear;
  animation-play-state: ${(props) => props.timer.status};

  animation-name: ${(props) =>
    props.timer.status === "paused"
      ? "none"
      : ringTimer}; // Usa a chave da animação do props
`;

export const TimerIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 85%;
    height: 85%;
  }
`;

export const Sport = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Medals = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.medium};
`;

export const Country = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${spacing.extra_small};
  width: 60px;

  p {
    line-height: 12px;
  }
`;

export const Question = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.small};

  &:has(${Medals}) {
    ${Country} {
      width: auto;
    }
    gap: ${spacing.medium};
  }
`;

export const Duel = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: ${spacing.large};
`;

export const Record = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.extra_small};
  margin: 6px 6px 0 0;
  top: 10px;
  right: 10px;
  position: absolute;
`;

export const Animate = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
`
