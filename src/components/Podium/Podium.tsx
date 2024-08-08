import { CountryDataProps, Font } from "@src/types/types";
import { Medal } from "../Medal";
import Text from "../Utils/Text";
import * as S from "./styles";
import Flag from "../Flag";

interface PodiumProps {
  data: CountryDataProps[];
}
const Podium = ({ data }: PodiumProps) => {
  const topThree = data.slice(0, 3);

  const podiumCountries = [
    topThree[1], // Segundo lugar
    topThree[0], // Primeiro lugar
    topThree[2], // Terceiro lugar
  ];

  return (
    <S.Podium>
      {podiumCountries.map((country) => (
        <S.Position>
          <S.Country>
            <Flag src={country.flag_url}/>
            <Text fontSize={Font.EXTRA_SMALL}>{country.name}</Text>
          </S.Country>
          <S.Standard>
            <Medal.Root type="gold" location="podium">
              <Medal.Icon />
              <Medal.Text>{country.gold_medals}</Medal.Text>
            </Medal.Root>

            <Medal.Root type="silver" location="podium">
              <Medal.Icon />
              <Medal.Text>{country.silver_medals}</Medal.Text>
            </Medal.Root>

            <Medal.Root type="brass" location="podium">
              <Medal.Icon />
              <Medal.Text>{country.bronze_medals}</Medal.Text>
            </Medal.Root>
          </S.Standard>
        </S.Position>
      ))}
    </S.Podium>
  );
};

export default Podium;
