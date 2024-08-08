import React, { useEffect, useState } from "react";
import * as S from "./styles";
import {
  BackIcon,
  MedalsIcon,
  OlympicIconWhite,
  RocketIcon,
  TrophyIcon,
} from "../Icons";
import Text from "../Utils/Text";
import { Color, Font } from "@src/types/types";
import Flag from "../Flag";
import { useGameContext } from "@src/context/GameContext/GameContext";
import Nationality from "./Nationality";
import Score from "./Score";
import { useNavigate } from "react-router-dom";
import Medal from "./Medal";
const Question = () => {
  const { question, questionIndex, startTimer, timerStatus, recordScore } =
    useGameContext();
  const navigate = useNavigate();

  const { sport, type, gender, pictogram } = question;

  const formatQuestion = () => {
    switch (type) {
      case "nationality":
        return <Nationality />;
      case "score":
        return <Score />;
      case "medal":
        return <Medal />;
      default:
        return "";
    }
  };

  return (
    <S.Container>
      <S.Header>
        <BackIcon
          style={{ cursor: "pointer" }}
          width={40}
          onClick={() => navigate("/")}
        />
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
        <S.Record>
          <TrophyIcon color={Color.YELLOW} />
          <Text color={Color.YELLOW} fontSize={Font.MEDIUM}>
            {recordScore}
          </Text>
        </S.Record>
        <S.Timer>
          <S.TimerIcon>
            {pictogram ? <img src={pictogram} alt="" /> : <MedalsIcon />}
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
          <Text isTitle color={Color.BLUE} fontSize={Font.MEDIUM}>
            {sport}
          </Text>
          <Text
            color={Color.BLUE}
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
