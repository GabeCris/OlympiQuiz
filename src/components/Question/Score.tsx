import * as S from "./styles";
import Text from "../Utils/Text";
import { Color, Font } from "@src/types/types";
import { useGameContext } from "@src/context/GameContext/GameContext";
import Flag from "../Flag";
import {
  MedalQuestion,
  NationalityQuestion,
  ScoreQuestion,
} from "@src/context/GameContext/GameContext.types";
const Score = () => {
  const { question } = useGameContext();

  const { competitors } = question as
    | NationalityQuestion
    | ScoreQuestion
    | MedalQuestion;
  const [competidor1, competidor2] = competitors;

  return (
    <S.Question>
      <Text color={Color.BLACK} fontSize={Font.SMALL} align="center">
        Qual foi o placar entre
      </Text>
      <S.Duel>
        <S.Country>
          <Flag src={competidor1.country_flag_url} />
          <Text fontSize={Font.EXTRA_SMALL} align="center">
            {competidor1.country_id}
          </Text>
        </S.Country>
        <Text fontSize={Font.MEDIUM} fontWeight="bold">
          X
        </Text>
        <S.Country>
          <Flag src={competidor2.country_flag_url} />
          <Text fontSize={Font.EXTRA_SMALL} align="center">
            {competidor2.country_id}
          </Text>
        </S.Country>
      </S.Duel>
    </S.Question>
  );
};

export default Score;
