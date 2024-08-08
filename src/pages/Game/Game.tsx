import Answers from "@src/components/Answers";
import Question from "@src/components/Question";
import Container from "@src/components/Utils/Container";
import { useGameContext } from "@src/context/GameContext/GameContext";
import React from "react";

const Game = () => {
  const { generateRandomQuestion, question } = useGameContext();
  const { text, options } = question;

  return (
    <Container isGame>
      <Question />
      <Answers options={options} />
    </Container>
  );
};

export default Game;
