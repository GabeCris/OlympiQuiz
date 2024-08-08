import styled from "styled-components";
import { theme } from "@src/styles/theme";

const { colors, radius, spacing, font } = theme;

export const Answer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Label = styled.label`
  width: 100%;
  border-radius: ${radius};
  background-color: ${colors.white};
  padding: ${spacing.small};
  padding-right: ${spacing.medium};
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: ${spacing.medium};

  ${(props) =>
    props.unclickable &&
    `
    pointer-events: none;
  `}

  ${(props) =>
    props.disabled &&
    `
    opacity: 0.4;
  `}

  input {
    display: none;
  }
`;

export const Index = styled.div`
  border-radius: ${radius};
  background-color: ${colors.gray};
  min-width: 36px;
  height: 36px;
  font-size: ${font.large};
  font-weight: bold;
  color: ${colors.graphite};

  display: flex;
  justify-content: center;
  align-items: center;
`;
