import styled from "styled-components";
import { theme } from "@src/styles/theme";

const { spacing } = theme;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.medium};

  button{
    min-width: 64px;
  }
`;
