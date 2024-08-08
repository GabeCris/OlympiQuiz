import { TextProps } from "@src/types/types.ts";
import * as S from "./styles.ts";

const Text = ({ children, fontSize, fontWeight, align, isTitle = false, color }: TextProps) => {
  
  return isTitle ? (
    <S.Title fontSize={fontSize} fontWeight={fontWeight} align={align} color={color}>
      {children}
    </S.Title>
  ) : (
    <S.Text fontSize={fontSize} fontWeight={fontWeight} align={align} color={color}>
      {children}
    </S.Text>
  );
};

export default Text;
