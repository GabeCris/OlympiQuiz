import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  navigateTo?: string;
  extended?: boolean;
  isLink?: boolean;
  action?: () => void;
}

const ButtonRoot = ({
  children,
  navigateTo,
  isLink,
  action,
  extended,
  ...props
}: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigateTo ? navigate(navigateTo) : action?.();
  };

  return (
    <S.Button
      isLink={isLink}
      onClick={handleClick}
      extended={extended}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default ButtonRoot;
