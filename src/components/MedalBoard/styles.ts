import styled from "styled-components";
import { theme } from "@src/styles/theme";

const { colors, spacing, radius } = theme;

export const Board = styled.div`
  background-color: ${colors.white};
  border-radius: ${radius};
  width: 100%;
  height: auto;
  max-height: calc(100vh - 60px - (16px * 2));
  padding: ${spacing.large};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-block: ${spacing.medium};
  }
`;
