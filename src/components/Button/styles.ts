import styled from "styled-components";
import { theme } from "@src/styles/theme";
import { mapFontWeight, TextProps } from "@src/types/types";

const { colors, spacing, radius, font } = theme;

interface ButtonProps {
  isLink?: boolean;
  extended?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  margin: 0;
  transition: all 0.4s;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.extra_small};
  border-radius: ${radius};
  padding: ${spacing.extra_small} ${spacing.medium};
  color: ${colors.white};
  background-color: ${colors.graphite};
  min-width: 132px;
  cursor: pointer;
  height: 48px;
  font-size: ${font.large};

  &:active:not(:disabled) {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.4;
  }

  ${(props: ButtonProps) =>
    props.isLink &&
    `
        background: none;
        text-decoration: underline;
        color: ${colors.black};
        width: fit-content;
        height: auto;
        font-size: ${font.medium};
    `}

  ${(props: ButtonProps) =>
    props.extended &&
    `
        width: 100%;
    `}
`;

export const Text = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize ?? font.medium};
  font-weight: ${(props) => mapFontWeight(props.fontWeight ?? "bold")};
`;
