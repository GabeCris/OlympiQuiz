import styled from "styled-components";
import { theme } from "@src/styles/theme";
import { radius } from "../Question/styles";

const { colors, spacing } = theme;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: ${spacing.large};
  background-color: ${colors.white};
  width: 100%;
  height: 60px;

  position: sticky;
  top: 0;
  z-index: 999;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: ${radius};
    overflow: hidden;
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  height: 4px;
`;

export const Rect = styled.div`
  height: 100%;

  &:nth-child(1) {
    background-color: ${colors.blue};
  }

  &:nth-child(2) {
    background-color: ${colors.yellow};
  }

  &:nth-child(3) {
    background-color: ${colors.graphite};
  }

  &:nth-child(4) {
    background-color: ${colors.green};
  }

  &:nth-child(5) {
    background-color: ${colors.red};
  }
`;
