import * as S from "./styles";
import Text from "../Utils/Text";
import { Color, Font } from "@src/types/types";
import { useGameContext } from "@src/context/GameContext/GameContext";
const Nationality = () => {
  const { question } = useGameContext();

  const { competitor } = question;

  return (
    <S.Question>
      <Text color={Color.BLACK} fontSize={Font.SMALL} align="center">
        Qual a nacionalidade de
      </Text>
      <Text color={Color.BLACK} fontSize={Font.MEDIUM} align="center">
        {competitor.competitor_name}
      </Text>
    </S.Question>
  );
};

export default Nationality;
