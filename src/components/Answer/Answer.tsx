import { Font } from "@src/types/types";
import Text from "../Utils/Text";
import * as S from "./styles";
import { CheckIcon, UncheckIcon } from "../Icons";
import { useGameContext } from "@src/context/GameContext/GameContext";
const Answer = ({ index, option, correctAnswer }) => {

  const {
    incorrectOptions,
    timerStatus,
    pauseTimer,
    selectedOption,
    setSelectedOption,
  } = useGameContext();

  const isChecked = selectedOption === option;

  const isIncorrect = incorrectOptions.some((opt) => option === opt);
  const isCorrect = correctAnswer == option;
  const { status } = timerStatus;
  const isPaused = status === "paused";

  const handleClick = (e) => {
    setSelectedOption(e.target.value);
    pauseTimer();
  };

  return (
    <S.Label
      whileTap={{ scale: 0.95 }}
      key={index}
      disabled={isIncorrect || (isPaused && !isCorrect)}
      unclickable={isPaused}
    >
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
        {isChecked || (isPaused && isCorrect) ? (
          <CheckIcon></CheckIcon>
        ) : (
          <UncheckIcon></UncheckIcon>
        )}
      </S.Answer>
    </S.Label>
  );
};

export default Answer;
