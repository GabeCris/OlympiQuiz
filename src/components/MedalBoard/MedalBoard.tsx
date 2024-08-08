import * as S from "./styles";
import Text from "../Utils/Text";
import Podium from "../Podium";
import { useState } from "react";
import { Button } from "../Button";
import Ranking from "../Ranking";
import { CountryDataProps } from "@src/types/types";
import { useGameContext } from "@src/context/GameContext/GameContext";
import { OlympiQuizIcon } from "../Icons";
import { motion } from "framer-motion";

const MedalBoard = () => {
  const [seeAll, setSeeAll] = useState(false);
  const { countriesData } = useGameContext();

  return (
    <S.Board>
      <Text isTitle>Quadro de Medalhas</Text>
      <Podium data={countriesData} />
      <Button.Root isLink action={() => setSeeAll(!seeAll)}>
        <Button.Text>{seeAll ? "Ver menos" : "Ver tudo"}</Button.Text>
      </Button.Root>
      <Ranking data={countriesData} show={seeAll}></Ranking>
    </S.Board>
  );
};

export default MedalBoard;
