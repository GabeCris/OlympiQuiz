import * as S from "./styles";
import { ConfirmIcon } from "../Icons";
import { Button } from "../Button";
import NextIcon from "../Icons/NextIcon";
import { Font } from "@src/types/types";
import { useGameContext } from "@src/context/GameContext/GameContext";

const Actions = () => {
  const {
    nextQuestion,
    removeTwoOptions,
    actions,
    setActions,
    showCorrectAnswer,
  } = useGameContext();

  const handleHelpAction = (
    action: "correctAnswer" | "removeTwo" | "skipQuestion"
  ) => {
    switch (action) {
      case "correctAnswer":
        setActions((prev) => ({ ...prev, correctAnswer: true }));
        showCorrectAnswer();
        break;
      case "removeTwo":
        setActions((prev) => ({ ...prev, removeTwo: true }));
        removeTwoOptions();
        break;
      case "skipQuestion":
        setActions((prev) => ({ ...prev, skipQuestion: true }));
        nextQuestion();
        break;
    }
  };

  return (
    <S.Actions
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.1 }}
    >
      <Button.Root
        disabled={actions.correctAnswer}
        onClick={() => handleHelpAction("correctAnswer")}
      >
        <Button.Icon>
          <ConfirmIcon />
        </Button.Icon>
      </Button.Root>

      <Button.Root
        disabled={actions.removeTwo}
        onClick={() => handleHelpAction("removeTwo")}
      >
        <Button.Text fontSize={Font.LARGE} fontWeight="bold">
          -2
        </Button.Text>
      </Button.Root>

      <Button.Root
        disabled={actions.skipQuestion}
        onClick={() => handleHelpAction("skipQuestion")}
      >
        <Button.Icon>
          <NextIcon />
        </Button.Icon>
      </Button.Root>
    </S.Actions>
  );
};

export default Actions;
