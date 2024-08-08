import { OlympicIcon, OlympiQuizIcon } from "../Icons";
import * as S from "./styles";

const Header = () => {
  return (
    <>
      <S.Header>
        <OlympiQuizIcon />
        <OlympicIcon/>
        <S.Bottom>
          <S.Rect/>
          <S.Rect/>
          <S.Rect/>
          <S.Rect/>
          <S.Rect/>
        </S.Bottom>
      </S.Header>
    </>
  );
};

export default Header;
