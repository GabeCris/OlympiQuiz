import * as S from "./styles";
import { TextProps } from "@src/types/types";

const ButtonText = ({ fontSize, fontWeight, children }: TextProps) => {
  return (
    <S.Text fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </S.Text>
  );
};

export default ButtonText;
