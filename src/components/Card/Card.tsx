import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { CardProps, Color, Font } from "@src/types/types";
import Text from "../Utils/Text";
import { TrophyIcon } from "../Icons";
import { useState } from "react";
import { Button } from "../Button";
import { useGameContext } from "@src/context/GameContext/GameContext";

const Card = ({
  action,
  help,
  color,
  icon,
  title,
  subtitle,
  record,
  ...props
}: CardProps) => {
  const navigate = useNavigate();

  const [showButtons, setShowButtons] = useState(false);
  const { resetGameData, recordScore } = useGameContext();

  const handleClick = () => {
    if (action) action();
    else setShowButtons(!showButtons);
  };

  const handleToast = (e) => {
    e.stopPropagation();
    help();
  };

  const handleNavigate = (e) => {
    e.stopPropagation();
    resetGameData();
    navigate("/game/diary");
  };

  return (
    <S.Card
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      color={color}
      {...props}
    >
      {icon && <S.Icon>{icon}</S.Icon>}

      {showButtons ? (
        <S.Buttons>
          <S.Help onClick={(e) => handleToast(e)}>
            <Text color={color}>?</Text>
          </S.Help>
          <Button.Root onClick={(e) => handleNavigate(e)}>
            <Button.Text>Jogar</Button.Text>
          </Button.Root>
        </S.Buttons>
      ) : (
        <>
          <S.Content>
            <Text isTitle fontSize={Font.MEDIUM}>
              {title}
            </Text>
            <Text fontSize={Font.EXTRA_SMALL}>{subtitle}</Text>
          </S.Content>

          {record && (
            <S.Record>
              <TrophyIcon color={Color.YELLOW} />
              <Text color={Color.YELLOW} fontSize={Font.MEDIUM}>
                {recordScore}
              </Text>
            </S.Record>
          )}
        </>
      )}
    </S.Card>
  );
};

export default Card;
