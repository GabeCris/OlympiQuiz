import { createContext, useContext } from "react";
import { GameContextType } from "./GameContext.types";

export const GameContext = createContext({} as GameContextType);
export const useGameContext = () => useContext(GameContext);
