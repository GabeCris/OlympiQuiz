import { Font } from "@src/types/types";
import Text from "../Utils/Text";
import * as S from "./styles";
import { CheckIcon, UncheckIcon } from "../Icons";
import { useGameContext } from "@src/context/GameContext/GameContext";
import { useEffect } from "react";
const Answer = ({ index, selected, action, option, correctAnswer }) => {
  const isChecked = selected === option;

  const { incorrectOptions, timerStatus, correctOption, pauseTimer } = useGameContext();

  const isIncorrect = incorrectOptions.some((opt) => option === opt);
  const isCorrect = correctAnswer === option;
  const showCorrectAnswer = correctOption === option;
  const { status } = timerStatus;
  const isPaused = status === "paused"
  console.log("CORRECT ANSW", correctAnswer)
  console.log(isCorrect, "CORRETO", option)

  useEffect(() => {
    console.log(selected, "RESPOSTA CERTA?", correctAnswer)
  }, [isPaused]);
  
  const handleClick = (e) => {
    action(e.target.value)
    pauseTimer()
  }
  
  return (
    <S.Label key={index} disabled={isIncorrect || (isPaused && !isCorrect)} unclickable={isPaused}>
      <S.Index>{index}</S.Index>
      <S.Answer>
        <Text fontSize={Font.MEDIUM}>{option}</Text>
        <input
          type="radio"
          name="answer"
          value={option}
          checked={isChecked}
          onChange={(e) => handleClick(e)}
        />
        {isChecked || showCorrectAnswer || (isPaused && isCorrect) ? (
          <CheckIcon></CheckIcon>
        ) : (
          <UncheckIcon></UncheckIcon>
        )}
        {/* <CurrentIcon /> */}
      </S.Answer>
    </S.Label>
  );
};

export default Answer;
