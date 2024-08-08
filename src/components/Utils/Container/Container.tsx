import { ReactNode } from 'react'
import * as S from "./styles.ts"

export interface ContainerProps {
    children: ReactNode
    isGame?: boolean
}

const Container = ({ children, isGame}: ContainerProps) => {
    return (
        <S.Container isGame={isGame}>
            {children}
        </S.Container>
    )
}

export default Container
