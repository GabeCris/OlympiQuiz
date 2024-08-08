import styled from "styled-components"
import { theme } from "@src/styles/theme"

const { spacing, colors } = theme

export const Container = styled.main`
    padding: ${spacing.large};
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacing.medium};
    overflow: hidden auto;
    position: relative;

    &::-webkit-scrollbar{
        width: 3px;
        height: 3px;
    }
    
    &::-webkit-scrollbar-track{
        background-color: ${colors.gray};
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${colors.gray};
        border-radius: 6px;
    }
`
