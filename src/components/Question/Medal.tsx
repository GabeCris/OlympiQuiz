import * as S from "./styles";
import Text from "../Utils/Text";
import { Color, Font } from "@src/types/types";
import { useGameContext } from "@src/context/GameContext/GameContext";
import Flag from "../Flag";
import { Medal as Medals } from "../Medal";

const medalTypeTranslations: Record<string, string> = {
  ouro: "gold",
  prata: "silver",
  bronze: "brass",
};
const Medal = () => {
  const { question } = useGameContext();

  const translateMedalType = (type: string) =>
    medalTypeTranslations[type] || type;

  const medalTypeInEnglish = translateMedalType(question.medalType);

  return (
    <S.Question>
      <S.Country>
        <Flag src={question.flag_url} />
        <Text fontSize={Font.EXTRA_SMALL} align="center">
          {question.country}
        </Text>
      </S.Country>
      <Text color={Color.BLACK} fontSize={Font.SMALL} align="center">
        Quantidade de medalhas
      </Text>
      <S.Medals>
        <Medals.Root type={medalTypeInEnglish}>
          <Medals.Icon />
          <Medals.Text>{question.medalType}</Medals.Text>
        </Medals.Root>
      </S.Medals>
    </S.Question>
  );
};

export default Medal;
