import * as S from "./styles";
import { MedalChildrenProps } from "./types";

const MedalText = ({ children}: MedalChildrenProps) => {
  return (
    <S.Text>
      {children}
    </S.Text>
  );
};

export default MedalText;
