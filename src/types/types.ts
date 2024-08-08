import { CheckIcon, UncheckIcon, WrongIcon } from "@src/components/Icons";
import React, { ReactNode } from "react";

export enum Font {
  EXTRA_SMALL = "12px",
  SMALL = "14px",
  MEDIUM = "16px",
  LARGE = "20px",
}

export enum Color {
  BLUE = "#5B93CE",
  YELLOW = "#F1AF69",
  GRAPHITE = "#7A7878",
  GREEN = "#4DB479",
  RED = "#E86265",
  BLACK = "#2B262D",
  WHITE = "#ffffff",
  GRAY = "#F1F1F1",
  LIGHT_GRAY = "#F4F5F7",
  GOLD = "#FFDA60",
  SILVER = "#E2DDDD",
  BRASS = "#FFA667",
}

export type FontWeight = "regular" | "medium" | "bold";

export interface TextProps {
  fontSize?: Font | string;
  align?: "left" | "right" | "center";
  fontWeight?: FontWeight;
  isTitle?: boolean;
  children?: ReactNode;
  color?: Color;
}

export interface CompetitorDataProps {
  country_id: string;
  country_flag_url?: string;
  competitor_name: string;
  position?: number;
  result_position?: string;
  result_winnerLoserTie?: "W" | "L" | "T";
  result_mark: string;
}

export interface EventDataProps {
  id?: number;
  day?: string; // Data no formato "YYYY-MM-DD"
  discipline_name?: string;
  discipline_pictogram?: string;
  name?: string | null;
  venue_name?: string;
  event_name?: string;
  detailed_event_name?: string;
  start_date?: string; // Data e hora no formato "YYYY-MM-DDTHH:MM:SS+00:00"
  end_date?: string; // Data e hora no formato "YYYY-MM-DDTHH:MM:SS+00:00"
  status?: string; // Exemplo de status, ajuste conforme necessário
  is_medal_event?: 0 | 1; // 0 ou 1, indicando se é um evento de medalha
  is_live?: 0 | 1; // 0 ou 1, indicando se o evento está ao vivo
  gender_code?: "M" | "W" | "X"; // M = Masculino, W = Feminino, X = Outros (ajuste conforme necessário)
  competitors: CompetitorDataProps[];
}
export interface CountryDataProps {
  id: string;
  name: string;
  continent: string;
  flag_url: string;
  gold_medals: number;
  silver_medals: number;
  bronze_medals: number;
  total_medals: number;
  rank: number;
  rank_total_medals: number;
}

export interface CardProps {
  children?: ReactNode;
  navigateTo?: string;
  color?: Color;
  action?: () => void;
  help?: () => void;
  icon?: ReactNode;
  title: string;
  subtitle: string;
  record?: boolean;
}

export enum IconAnswerType {
  Checked = "checked",
  Unchecked = "unchecked",
  Wrong = "wrong",
}

export interface TimerProps {
  status: "running" | "paused";
}

export const iconAnswerMap: Record<IconAnswerType, React.FC> = {
  [IconAnswerType.Checked]: CheckIcon,
  [IconAnswerType.Unchecked]: UncheckIcon,
  [IconAnswerType.Wrong]: WrongIcon,
};

export const mapFontWeight = (
  fontWeight: "regular" | "medium" | "bold"
): number => {
  switch (fontWeight) {
    case "regular":
      return 300;
    case "medium":
      return 500;
    case "bold":
      return 700;
    default:
      return 400;
  }
};
