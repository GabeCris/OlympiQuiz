import React from "react";
import * as S from "./styles";

const UncheckIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <S.Icon
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.640278 9C0.640278 4.38184 4.38184 0.640278 9 0.640278C13.6182 0.640278 17.3597 4.38184 17.3597 9C17.3597 13.6182 13.6182 17.3597 9 17.3597C4.38184 17.3597 0.640278 13.6182 0.640278 9Z"
        stroke="#7A7878"
        stroke-width="1.28056"
      />
    </S.Icon>
  );
};

export default UncheckIcon;
