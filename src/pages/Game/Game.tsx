import Answers from "@src/components/Answers";
import Question from "@src/components/Question";
import Container from "@src/components/Utils/Container";
import { useGameContext } from "@src/context/GameContext/GameContext";

const Game = () => {
  const { question } = useGameContext();
  const { text, options } = question;

  return (
    <Container isGame>
      <Question />
      <Answers options={options} />
    </Container>
  );
};

export default Game;
