import { useCallback, useEffect, useMemo, useState } from "react";
import Answer from "../Answer/Answer";
import { Button } from "../Button";
import { Font } from "@src/types/types";
import * as S from "./styles";
import Actions from "../Actions";
import { useGameContext } from "@src/context/GameContext/GameContext";
import { Navigate, useNavigate } from "react-router-dom";

const Answers = () => {
  const optionsLetters = ["A", "B", "C", "D"];
  const {
    generateRandomQuestion,
    question,
    selectedOption,
    nextQuestion,
    timerStatus,
    gameStatus,
    resetGameData,
  } = useGameContext();
  const { options, correctAnswer } = question;
  const navigate = useNavigate();

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
      <S.Container>
        {options?.map((option, index) => (
          <Answer
            index={optionsLetters[index]}
            option={option}
            selected={selectedOption}
            correctAnswer={correctAnswer}
          />
        ))}
      </S.Container>
      {changeActionButtons}
    </>
  );
};

export default Answers;
