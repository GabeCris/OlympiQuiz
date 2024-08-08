import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { BackIcon, OlympicIconWhite, RocketIcon } from "../Icons";
import Text from "../Utils/Text";
import { Color, Font } from "@src/types/types";
import Flag from "../Flag";
import { useGameContext } from "@src/context/GameContext/GameContext";
import Nationality from "./Nationality";
import Score from "./Score";
const Question = () => {
  const { question, questionIndex, startTimer, timerStatus } = useGameContext();

  const { sport, type, gender } = question;

  useEffect(() => {
    console.log(timerStatus, "TIMER STATUS")
  }, [timerStatus]);

  const formatQuestion = () => {
    switch (type) {
      case "nationality":
        return <Nationality />;
      case "score":
        return <Score />;
      default:
        return "";
    }
  };

  return (
    <S.Container>
      <S.Header>
        <BackIcon />
        <Text
          isTitle
          color={Color.WHITE}
          fontWeight={"medium"}
          fontSize={Font.MEDIUM}
        >
          Questão {questionIndex}
        </Text>
        <OlympicIconWhite />
      </S.Header>

      <S.Content>
        <S.Timer>
          <S.TimerIcon>
            <RocketIcon color={Color.RED} />
          </S.TimerIcon>
          <S.RingTimer>
            <S.Svg>
              <S.Circle
                key={timerStatus}
                timer={timerStatus}
                cx={"50%"}
                cy={"50%"}
                r="27"
              />
            </S.Svg>
          </S.RingTimer>
        </S.Timer>

        <S.Sport>
          <Text isTitle color={Color.RED} fontSize={Font.MEDIUM}>
            {sport}
          </Text>
          <Text
            color={Color.RED}
            fontSize={Font.EXTRA_SMALL}
            fontWeight="regular"
          >
            {gender}
          </Text>
        </S.Sport>
        <S.Question>{formatQuestion()}</S.Question>
      </S.Content>
    </S.Container>
  );
};

export default Question;
