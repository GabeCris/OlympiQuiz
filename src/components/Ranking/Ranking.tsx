import { CountryDataProps, Font } from "@src/types/types";
import { Medal } from "../Medal";
import Text from "../Utils/Text";
import * as S from "./styles";
import Flag from "../Flag";

interface RankingProps {
  data: CountryDataProps[];
}
const Ranking = ({ data }: RankingProps) => {
  return (
    <S.Ranking>
      <S.Header>
        <Text isTitle fontSize={Font.SMALL}>
          Nação
        </Text>
        <Medal.Root type="gold" location="ranking">
          <Medal.Icon />
        </Medal.Root>

        <Medal.Root type="silver" location="ranking">
          <Medal.Icon />
        </Medal.Root>

        <Medal.Root type="brass" location="ranking">
          <Medal.Icon />
        </Medal.Root>

        <Text isTitle fontSize={Font.SMALL} align="right">
          Total
        </Text>
      </S.Header>
      <S.List>
        {data.map((country) => {
          const {
            name,
            flag_url,
            gold_medals,
            silver_medals,
            bronze_medals,
            total_medals,
            rank
          } = country;

          const rankFormatted = rank.toString().padStart(2, '0');

          return (
            <S.Card>
              <S.Country>
                <Text fontSize={Font.SMALL} fontWeight="bold">
                  {rankFormatted}
                </Text>
                <Flag src={flag_url} />
                <Text fontSize={Font.SMALL}>{name}</Text>
              </S.Country>
              <Text fontSize={Font.SMALL} align="center">{gold_medals}</Text>
              <Text fontSize={Font.SMALL} align="center">{silver_medals}</Text>
              <Text fontSize={Font.SMALL} align="center">{bronze_medals}</Text>
              <Text fontSize={Font.SMALL} align="right">
                {total_medals}
              </Text>
            </S.Card>
          );
        })}
      </S.List>
    </S.Ranking>
  );
};

export default Ranking;
