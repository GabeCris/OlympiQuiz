import { EventDataProps } from "@src/types/types";
import { ReactNode } from "react";

export interface GameContextType {
  teste?: () => void;
  children?: ReactNode;
  eventData: EventDataProps[]; 
}
