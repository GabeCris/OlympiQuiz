import { useMemo } from "react";
import * as S from "./styles";
import { BackIcon, MedalsIcon, OlympicIconWhite, TrophyIcon } from "../Icons";
import Text from "../Utils/Text";
import { Color, Font } from "@src/types/types";
import { useGameContext } from "@src/context/GameContext/GameContext";
import Nationality from "./Nationality";
import Score from "./Score";
import { useNavigate } from "react-router-dom";
import Medal from "./Medal";
import {
  MedalQuestion,
  NationalityQuestion,
  ScoreQuestion,
} from "@src/context/GameContext/GameContext.types";
const Question = () => {
  const { question, questionIndex, timerStatus, recordScore } =
    useGameContext();
  const navigate = useNavigate();

  const generateUniqueId = useMemo(
    (prefix: string = "questio") => {
      return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
    },
    [question]
  );

  const { sport, type, gender, pictogram } = question as
    | NationalityQuestion
    | ScoreQuestion
    | MedalQuestion;

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

  const questionTransition = {
    type: "spring",
    stiffness: 1000,
    damping: 50,
    duration: 0.1,
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
              <S.Circle timer={timerStatus} cx={"50%"} cy={"50%"} r="27" />
            </S.Svg>
          </S.RingTimer>
        </S.Timer>

        <S.Animate
          key={generateUniqueId}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={questionTransition}
        >
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
        </S.Animate>
      </S.Content>
    </S.Container>
  );
};

export default Question;
