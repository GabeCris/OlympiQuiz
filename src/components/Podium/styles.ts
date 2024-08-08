import styled from "styled-components";
import { theme } from "@src/styles/theme";

const { colors, spacing, radius } = theme;

export const Podium = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: ${spacing.large};

  margin-top: ${spacing.large};
`;

export const Standard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: ${spacing.extra_small};

  background-color: ${colors.gray};
  border-radius: ${radius};
  width: 70px;
  height: 120px;
  padding: ${spacing.small};
`;

export const Position = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${spacing.small};

  &:nth-child(1) ${Standard} {
    height: 96px;
  }

  &:nth-child(2) ${Standard} {
    height: 120px;
  }

  &:nth-child(3) ${Standard} {
    height: 83px;
  }
`;

export const Country = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing.extra_small};
`

export const Flag = styled.img`
  width: 28px;
  height: 20px;
  border-radius: 2px;
  background-color: ${colors.gray};
`