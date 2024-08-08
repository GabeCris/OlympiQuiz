// context/GameContext/GameContext.ts
import { useCallback, useEffect, useState } from "react";
import { GameContext } from "./GameContext";
import { GameContextType } from "./GameContext.types";
import { fetchOlympicEvents } from "@src/server/fetch-events";
import {
  CompetitorDataProps,
  EventDataProps,
  TimerProps,
} from "@src/types/types";
import {
  countriesInEnglish,
  data,
  sportsInPortuguese,
  validCountries,
  validSports,
} from "./GameDefaultData";
export const GameProvider = ({ children }: GameContextType) => {
  const [eventData, setEventData] = useState<EventDataProps[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timerStatus, setTimerStatus] = useState<TimerProps>({
    status: "paused",
  });

  const [actions, setActions] = useState({
    correctAnswer: false,
    removeTwo: false,
    skipQuestion: false,
  });

  const [gameStatus, setGameStatus] = useState("active");

  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(1);
  const [incorrectOptions, setIncorrectOptions] = useState<string[]>([]);
  const [correctOption, setCorrectOption] = useState("");
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  // const [answer, setAnswer] = useState("");

  const isValidCompetitor = (competitor: CompetitorDataProps) => {
    return (
      competitor.competitor_name &&
      competitor.country_id &&
      competitor.result_mark
    );
  };

  const isSingleCompetitor = (competitor: CompetitorDataProps) => {
    return !countriesInEnglish.includes(competitor.competitor_name);
  };

  const filterEventsByKnownCountries = (events: EventDataProps[]) => {
    console.log(events.map((c) => c.competitors.map((c) => c.country_id)));
    return events.filter((event) =>
      event.competitors.every((competitor) =>
        validCountries.includes(competitor.country_id)
      )
    );
  };

  const getGenderText = (gender?: string) => {
    return gender && gender === "W" ? "Feminino" : "Masculino";
  };

  const getTranslatedSport = (sport?: string) => {
    return sport && sportsInPortuguese[validSports.indexOf(sport)];
  };

  // Função para gerar um competidor aleatório de um evento aleatório
  const getRandomCompetitor = (events: EventDataProps[]) => {
    console.log("getRandomCompotitor");
    const filteredEvents = filterEventsByKnownCountries(events);
    console.log(filteredEvents, "FILTERED EVENTS");
    const validEvents = filteredEvents.filter((event) =>
      event.competitors.some(
        (c) => isValidCompetitor(c) && isSingleCompetitor(c)
      )
    );
    console.log(validEvents, "VALID EVENTS");
    const randomEvent =
      validEvents[Math.floor(Math.random() * validEvents.length)];
    console.log(randomEvent, "RANDOM ELEMENTS");

    if (!randomEvent) return null;

    const validCompetitors = randomEvent.competitors.filter(
      (c) => isValidCompetitor(c) && isSingleCompetitor(c)
    );

    if (validCompetitors.length === 0) return null; // Adicionado para tratar caso sem competidores válidos

    const randomCompetitor =
      validCompetitors[Math.floor(Math.random() * validCompetitors.length)];
    return {
      ...randomEvent,
      competitors: [randomCompetitor],
    };
  };

  // Função para gerar opções incorretas de nacionalidade
  const generateIncorrectNationalityOptions = (correctCountryId: string) => {
    const options = new Set<string>();

    while (options.size < 3) {
      const randomCountry =
        validCountries[Math.floor(Math.random() * validCountries.length)];
      if (randomCountry !== correctCountryId) {
        options.add(randomCountry);
      }
    }

    return Array.from(options);
  };

  // Função para gerar uma pergunta de nacionalidade
  const generateNationalityQuestion = (events: EventDataProps[]) => {
    const filteredEvents = filterEventsByKnownCountries(events);
    const result = getRandomCompetitor(filteredEvents);

    if (result) {
      const { competitors } = result;

      if (competitors.length > 0) {
        const competitor = competitors[0];

        const incorrectOptions = generateIncorrectNationalityOptions(
          competitor?.country_id
        );
        setQuestion({
          options: [competitor.country_id, ...incorrectOptions].sort(
            () => Math.random() - 0.5
          ),
          type: "nationality",
          sport: getTranslatedSport(result.discipline_name),
          gender: getGenderText(result.gender_code),
          correctAnswer: competitor.country_id,
          competitor: competitor,
        });
      }
    }
  };

  // Função para gerar um placar aleatório próximo ao correto
  const generateRandomScore = (baseScore: string) => {
    const base = parseInt(baseScore);
    return (base + Math.floor(Math.random() * 5)).toString();
  };

  // Função para gerar uma pergunta de placar
  const generateScoreQuestion = (events: EventDataProps[]) => {
    const filteredEvents = filterEventsByKnownCountries(events);
    const validEvents = filteredEvents.filter(
      (event) => event.competitors.filter(isValidCompetitor).length >= 2
    );
    const randomEvent =
      validEvents[Math.floor(Math.random() * validEvents.length)];
    const [competitor1, competitor2] =
      randomEvent.competitors.filter(isValidCompetitor);

    const correctScore = `${competitor1.result_mark} x ${competitor2.result_mark}`;

    const options = new Set();
    options.add(correctScore);

    while (options.size < 4) {
      // Inclui a resposta correta + 3 incorretas
      const option = `${generateRandomScore(
        competitor1.result_mark
      )} x ${generateRandomScore(competitor2.result_mark)}`;
      options.add(option);
    }

    setQuestion({
      options: Array.from(options).sort(() => Math.random() - 0.5),
      correctAnswer: correctScore,
      type: "score",
      sport: getTranslatedSport(randomEvent.discipline_name),
      gender: getGenderText(randomEvent.gender_code),
      competitors: [competitor1, competitor2],
    });
  };

  // Função para gerar uma pergunta aleatória (nacionalidade ou placar)
  const generateRandomQuestion = () => {
    const filteredEvents = filterEventsByKnownCountries(eventData);
    const questionTypes = [generateNationalityQuestion, generateScoreQuestion];
    // const questionTypes = [generateNationalityQuestion];
    const randomQuestionType =
      questionTypes[Math.floor(Math.random() * questionTypes.length)];
    return randomQuestionType(filteredEvents);
  };

  const fetchDataEvents = useCallback(async () => {
    const data = await fetchOlympicEvents();
    setEventData(data);
  }, []);

  const startTimer = (miliseconds: number) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    const id = setTimeout(() => {
      console.log("ACABOU O TEMPO");
      pauseTimer();
    }, miliseconds);

    setTimerId(id);
    setTimerStatus({ status: "running" });
  };

  const nextQuestion = () => {
    setQuestionIndex((prev) => prev + 1);
    setTimerStatus({ status: "paused" });

    resetGameData();
  };

  const resetGameData = () => {
    generateRandomQuestion();
    setSelectedOption("");
    setIncorrectOptions([]);
    showCorrectAnswer();
    setGameStatus("active");

    setTimeout(() => {
      startTimer(5000);
    }, 0);
  };

  const pauseTimer = () => {
    if (timerId) {
      clearTimeout(timerId);
    }

    if (!selectedOption) setGameStatus("finished");

    setTimerStatus({ status: "paused" });
  };

  const removeTwoOptions = () => {
    if (question.options) {
      // Filtra opções incorretas
      const optionsToRemove = question.options
        .filter((option) => option !== question.correctAnswer)
        .sort(() => Math.random() - 0.5) // Embaralha as opções
        .slice(0, 2); // Pega as duas primeiras opções após o embaralhamento

      setIncorrectOptions(optionsToRemove);
    }
  };

  const showCorrectAnswer = () => {
    setCorrectOption(question.correctAnswer);
  };

  useEffect(() => {
    // fetchDataEvents();
    // console.log(data.map((c) => c.competitors.map((c) => c.country_id)));
    setEventData(data);
  }, []);

  useEffect(() => {
    console.log(question, "QUESTÃO");
  }, [question]);

  const contextValue: GameContextType = {
    eventData,
    generateRandomQuestion,
    nextQuestion,
    question,
    questionIndex,
    selectedOption,
    setSelectedOption,
    timerStatus,
    startTimer,
    actions,
    setActions,
    incorrectOptions,
    setIncorrectOptions,
    removeTwoOptions,
    showCorrectAnswer,
    correctOption,
    pauseTimer,
    setGameStatus,
    gameStatus,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
