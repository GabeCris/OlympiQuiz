import * as S from "./styles";
import { MedalProps } from "./types";

const MedalRoot = ({ children, location, type = "gold" }: MedalProps) => {
  return (
    <S.Medal type={type} location={location}>
      {children}
    </S.Medal>
  );
};

export default MedalRoot;
