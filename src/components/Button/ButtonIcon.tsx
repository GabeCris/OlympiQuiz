import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const ButtonIcon = ({ children }: ButtonProps) => {
  return <>{children}</>;
};

export default ButtonIcon;
