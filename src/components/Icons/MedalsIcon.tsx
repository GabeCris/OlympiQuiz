import React from "react";
import * as S from "./styles";

const MedalsIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <S.Icon
      width="32"
      height="28"
      viewBox="0 0 32 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="15.5676" cy="6.91892" r="6.91892" fill="#FFDA60" />
      <circle cx="6.91892" cy="20.7567" r="6.91892" fill="#E2DDDD" />
      <circle cx="25.081" cy="20.7567" r="6.91892" fill="#FFA667" />
    </S.Icon>
  );
};

export default MedalsIcon;
