import styled from "styled-components";
import { theme } from "@src/styles/theme";
import { mapFontWeight, TextProps } from "@src/types/types";

const { colors, font } = theme;

export const Title = styled.h2<TextProps>`
  color: ${(props) => props.color ?? colors.black};
  text-align: ${(props) => props.align ?? "left"};
  font-size: ${(props) => props.fontSize ?? font.large};
  font-weight: ${(props) => mapFontWeight(props.fontWeight ?? "bold")};
`;

export const Text = styled.p<TextProps>`
  color: ${(props) => props.color ?? colors.black};
  text-align: ${(props) => props.align ?? "left"};
  font-size: ${(props) => props.fontSize ?? font.large};
  font-weight: ${(props) => mapFontWeight(props.fontWeight ?? "medium")};
  text-overflow: ellipsis;
  overflow: hidden;
`;
