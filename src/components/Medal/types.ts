import { ReactNode } from "react";

export interface MedalChildrenProps {
  children?: ReactNode | string;
}

export type MedalTypeProps = "gold" | "silver" | "brass";

export interface MedalProps extends MedalChildrenProps {
  location?: "podium" | "game" | "ranking";
  type?: MedalTypeProps;
}
