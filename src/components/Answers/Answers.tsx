import { useMemo } from "react";
import Answer from "../Answer/Answer";
import { Button } from "../Button";
import { Font } from "@src/types/types";
import * as S from "./styles";
import Actions from "../Actions";
import { useGameContext } from "@src/context/GameContext/GameContext";

const Answers = () => {
  const optionsLetters = ["A", "B", "C", "D"];

  const {
    question,
    nextQuestion,
    timerStatus,
    gameStatus,
    resetGameData,
  } = useGameContext();
  const { options, correctAnswer } = question;

  const { status } = timerStatus;

  const handleButtonClick = () => {
    switch (gameStatus) {
      case "finished":
        resetGameData();
        break;
      case "active":
        nextQuestion();
        break;
    }
  };

  const changeActionButtons = useMemo(() => {
    return status === "running" ? (
      <Actions />
    ) : (
      <Button.Root extended onClick={handleButtonClick}>
        <Button.Text fontSize={Font.LARGE} fontWeight="bold">
          {gameStatus === "finished" ? "Jogar Novamente" : "Próximo"}
        </Button.Text>
      </Button.Root>
    );
  }, [status, nextQuestion]);

  return (
    <>
      <S.Container
        key={JSON.stringify(options)}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.1 }}
      >
        {options?.map((option, index) => (
          <Answer
            key={index}
            index={optionsLetters[index]}
            option={option}
            correctAnswer={correctAnswer}
          />
        ))}
      </S.Container>
      {changeActionButtons}
    </>
  );
};

export default Answers;
