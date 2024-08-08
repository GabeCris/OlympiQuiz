import styled from "styled-components";
import { theme } from "@src/styles/theme";

const { colors, radius, spacing, font } = theme;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${spacing.medium};
    width: 100%;
`