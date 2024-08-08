import styled from "styled-components";
import { theme } from "@src/styles/theme";
import { CardProps } from "@src/types/types";

const { colors, spacing, radius } = theme;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 50px;
  border-radius: ${radius};
`;

export const Card = styled.div<CardProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${spacing.small};
  width: 100%;
  height: auto;
  background-color: ${colors.white};
  border-radius: ${radius};
  gap: ${spacing.small};

  pointer-events: none;

  button,
  ${Icon} {
    background-color: ${(props) => props.color ?? colors.red};
  }

  button {
    width: fit-content;
    height: 32px;
    padding-inline: 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-block: auto;
`;

export const Record = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.extra_small};
  margin: 6px 6px 0 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing.small};
  width: 100%;
  margin-block: auto;
`;

export const Help = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 32px;
  height: 32px;
  border-radius: ${radius};
  background-color: ${colors.gray};
`;
