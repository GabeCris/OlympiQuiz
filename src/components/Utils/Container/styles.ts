import styled from "styled-components"
import { theme } from "@src/styles/theme"
import { ContainerProps } from "./Container"

const { spacing, colors } = theme

export const Container = styled.main<ContainerProps>`
    padding: ${spacing.large};
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacing.medium};
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

    ${props => props.isGame && `
        min-height: 100vh;
        justify-content: space-between;
    `}
`
