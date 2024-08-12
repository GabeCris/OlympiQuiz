import {
  CompetitorDataProps,
  CountryDataProps,
  EventDataProps,
  TimerProps,
} from "@src/types/types";
import { ReactNode } from "react";

export interface GameContextType {
  children?: ReactNode;
  eventData: EventDataProps[];
  countriesData: CountryDataProps[];
  generateRandomQuestion: () => void;
  nextQuestion: () => void;
  question: Question;
  questionIndex: number;
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  timerStatus: TimerProps;
  startTimer: (miliseconds: number) => void;
  actions: {
    correctAnswer: boolean;
    removeTwo: boolean;
    skipQuestion: boolean;
  };
  setActions: React.Dispatch<
    React.SetStateAction<{
      correctAnswer: boolean;
      removeTwo: boolean;
      skipQuestion: boolean;
    }>
  >;
  incorrectOptions: string[];
  setIncorrectOptions: React.Dispatch<React.SetStateAction<string[]>>;
  removeTwoOptions: () => void;
  showCorrectAnswer: () => void;
  correctOption: string;
  pauseTimer: () => void;
  setGameStatus: React.Dispatch<React.SetStateAction<string>>;
  gameStatus: string;
  resetGameData: () => void;
  recordScore: string;
}
export interface NationalityQuestion {
  type: "nationality";
  options: string[];
  sport?: string;
  pictogram?: string;
  gender?: string;
  correctAnswer: string;
  competitor: CompetitorDataProps;
}

export interface ScoreQuestion {
  type: "score";
  options: string[];
  correctAnswer: string;
  sport?: string;
  pictogram?: string;
  gender?: string;
  competitors: CompetitorDataProps[];
}

export interface MedalQuestion {
  type: "medal";
  question: string;
  medalType?: string;
  flag_url?: string;
  options: number[];
  correctAnswer: number;
  country: string;
}

export type Question = NationalityQuestion | ScoreQuestion | MedalQuestion;