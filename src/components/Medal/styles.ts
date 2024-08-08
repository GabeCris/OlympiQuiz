import styled from "styled-components";
import { theme } from "@src/styles/theme";
import { MedalProps } from "./types";

const { colors, font, spacing } = theme;

export const Icon = styled.div<MedalProps>`
  border-radius: 100%;
  height: 16px;
  width: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div<MedalProps>`
  font-size: ${font.medium};
  line-height: ${font.medium};
  font-weight: bold;
  filter: brightness(0.8);
`;

export const Medal = styled.div<MedalProps>`
  display: flex;
  align-items: center;
  gap: ${spacing.small};

  ${Icon} {
    background-color: ${(props) => colors[props.type ?? "gold"]};
  }

  ${Text} {
    color: ${(props) => colors[props.type ?? "gold"]};
  }

  ${(props) =>
    props.location === "game" &&
    `
    ${Icon} {
      width: 36px;
      height: 36px;
    }
  `}

  ${(props) =>
    props.location === "ranking" &&
    `
    ${Icon} {
      width: 12px;
      height: 12px;
    }
  `}
`;
