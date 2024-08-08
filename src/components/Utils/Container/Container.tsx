import { ReactNode } from 'react'
import * as S from "./styles.ts"

interface ContainerProps {
    children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}

export default Container
