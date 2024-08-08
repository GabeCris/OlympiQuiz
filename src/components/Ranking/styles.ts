import styled from "styled-components";
import { theme } from "@src/styles/theme";

const { colors, spacing, radius } = theme;

export const Ranking = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: ${spacing.extra_small};
  margin-block: ${spacing.large} ${spacing.small};
  padding-right: ${spacing.small};
  overflow-y: auto;
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: grid;
  gap: 12px;
  grid-template-columns: 5fr 18px 18px 18px 1fr;
  padding: ${spacing.small};
  background: ${colors.white};

  position: sticky;
  top: 0;
`;

export const Card = styled.div`
  width: 100%;
  height: 32px;
  display: grid;
  align-items: center;
  gap: 12px;
  border-radius: ${radius};
  grid-template-columns: minmax(0, 5fr) 18px 18px 18px 1fr;
  padding-inline: ${spacing.medium};
  justify-content: center;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.extra_small};

  ${Card} {
    background-color: ${colors.gray};

    &:nth-child(1) {
      background-color: ${colors.gold};
    }

    &:nth-child(2) {
      background-color: ${colors.silver};
    }

    &:nth-child(3) {
      background-color: ${colors.brass};
    }
  }
`;

export const Country = styled.div`
  display: flex;
  align-items: center;

  p{
    min-width: 18px;

    &:last-child{
      white-space: nowrap;
    }
  }

  img {
    width: 24px;
    min-width: 24px;
    height: 18px;
    object-fit: cover;
    margin-inline: ${spacing.small} ${spacing.extra_small};
  }
`;
