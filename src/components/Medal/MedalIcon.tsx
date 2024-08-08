import * as S from "./styles";
import { MedalChildrenProps } from "./types";

const MedalIcon = ({ children}: MedalChildrenProps) => {
  return (
    <S.Icon>
      {children}
    </S.Icon>
  );
};

export default MedalIcon;
