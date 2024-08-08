import styled from "styled-components"

export const Icon = styled.svg`
    &, path{
        fill: ${props => props.color};
    }
`
