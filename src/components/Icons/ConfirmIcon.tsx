import React from "react";
import * as S from "./styles";

const ConfirmIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <S.Icon
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 7.84662L8 13.3684L20 2"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </S.Icon>
  );
};

export default ConfirmIcon;
