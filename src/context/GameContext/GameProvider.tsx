import { useCallback, useEffect, useState } from "react";
import { GameContext } from "./GameContext";
import { GameContextType } from "./GameContext.types";
import { fetchOlympicEvents } from "@src/server/fetch-events";
import {
  CompetitorDataProps,
  CountryDataProps,
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
import { fetchCountries } from "@src/server/fetch-countries";
export const GameProvider = ({ children }: GameContextType) => {
  const [countriesData, setCountriesData] = useState<CountryDataProps[]>([]);
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
  const [recordScore, setRecordScore] = useState("");

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

  const getRandomCompetitor = (events: EventDataProps[]) => {
    const filteredEvents = filterEventsByKnownCountries(events);
    const validEvents = filteredEvents.filter((event) =>
      event.competitors.some(
        (c) => isValidCompetitor(c) && isSingleCompetitor(c)
      )
    );
    const randomEvent =
      validEvents[Math.floor(Math.random() * validEvents.length)];

    if (!randomEvent) return null;

    const validCompetitors = randomEvent.competitors.filter(
      (c) => isValidCompetitor(c) && isSingleCompetitor(c)
    );

    if (validCompetitors.length === 0) return null;

    const randomCompetitor =
      validCompetitors[Math.floor(Math.random() * validCompetitors.length)];
    return {
      ...randomEvent,
      competitors: [randomCompetitor],
    };
  };

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

  const generateNationalityQuestion = () => {
    const filteredEvents = filterEventsByKnownCountries(eventData);
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
          pictogram: result.discipline_pictogram,
          gender: getGenderText(result.gender_code),
          correctAnswer: competitor.country_id,
          competitor: competitor,
        });
      }
    }
  };

  const generateRandomScore = (baseScore: string) => {
    const base = parseInt(baseScore);
    return (base + Math.floor(Math.random() * 5)).toString();
  };

  const generateScoreQuestion = () => {
    const filteredEvents = filterEventsByKnownCountries(eventData);
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
      pictogram: randomEvent.discipline_pictogram,
      gender: getGenderText(randomEvent.gender_code),
      competitors: [competitor1, competitor2],
    });
  };

  const generateMedalQuestion = () => {
    if (countriesData.length === 0) return;

    const randomCountry =
      countriesData[Math.floor(Math.random() * countriesData.length)];

    const goldMedals = randomCountry.gold_medals ?? 0;
    const silverMedals = randomCountry.silver_medals ?? 0;
    const bronzeMedals = randomCountry.bronze_medals ?? 0;

    const medalType = ["ouro", "prata", "bronze"][
      Math.floor(Math.random() * 3)
    ];
    const correctAnswer = {
      ouro: goldMedals,
      prata: silverMedals,
      bronze: bronzeMedals,
    }[medalType];

    const question = `Quantas medalhas de ${medalType} ${randomCountry.name} tem?`;

    const options = new Set<number>();
    options.add(correctAnswer);

    while (options.size < 4) {
      const randomMedalCount = Math.floor(Math.random() * 20);
      if (randomMedalCount !== correctAnswer) {
        options.add(randomMedalCount);
      }
    }

    setQuestion({
      question,
      medalType: medalType,
      flag_url: randomCountry.flag_url,
      options: Array.from(options).sort(() => Math.random() - 0.5),
      correctAnswer: correctAnswer,
      type: "medal",
      country: randomCountry.name,
    });
  };

  const generateRandomQuestion = () => {
    const questionTypes = [
      generateNationalityQuestion,
      generateScoreQuestion,
      generateMedalQuestion,
    ];
    const randomQuestionType =
      questionTypes[Math.floor(Math.random() * questionTypes.length)];
    return randomQuestionType();
  };

  const fetchDataEvents = useCallback(async () => {
    const data = await fetchOlympicEvents();
    setEventData(data);
  }, []);

  const fetchDataCountries = useCallback(async () => {
    const data = await fetchCountries();
    setCountriesData(data);
  }, []);

  const startTimer = (miliseconds: number) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    const id = setTimeout(() => {
      pauseTimer();
    }, miliseconds);

    setTimerId(id);
    setTimerStatus({ status: "running" });
  };

  const nextQuestion = () => {
    setCorrectOption("");
    setQuestionIndex((prev) => prev + 1);
    setTimerStatus({ status: "paused" });
    setSelectedOption("");
    setIncorrectOptions([]);

    setTimeout(() => {
      startTimer(10000);
      generateRandomQuestion();
    }, 0);
  };

  const resetGameData = () => {
    setQuestionIndex(1);
    setSelectedOption("");
    setIncorrectOptions([]);
    setCorrectOption("");
    setActions({ skipQuestion: false, removeTwo: false, correctAnswer: false });
    setTimerStatus({ status: "paused" });
    generateRandomQuestion();
    setGameStatus("active");

    startTimer(10000);
  };

  const pauseTimer = () => {
    if (!selectedOption || selectedOption != question.correctAnswer)
      setGameStatus("finished");

    if (timerId) {
      clearTimeout(timerId);
    }

    setTimerStatus({ status: "paused" });
  };

  const removeTwoOptions = () => {
    if (question.options) {
      const optionsToRemove = question.options
        .filter((option) => option !== question.correctAnswer)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

      setIncorrectOptions(optionsToRemove);
    }
  };

  const showCorrectAnswer = () => {
    setSelectedOption(question.correctAnswer);
    pauseTimer();
  };

  const getRecordScore = () => {
    return localStorage.getItem("recordScore") ?? "0";
  };

  const registerRecordScore = (score: number) => {
    const recordScore = getRecordScore();
    const isNewRecord = score > Number(recordScore);

    if (!recordScore || isNewRecord) {
      const formatedScore = score.toString();

      setRecordScore(formatedScore);
      localStorage.setItem("recordScore", formatedScore);
    }
  };

  useEffect(() => {
    fetchDataEvents();
    fetchDataCountries();
    setRecordScore(getRecordScore());
  }, []);

  useEffect(() => {
    if (selectedOption && question.correctAnswer) {
      if (selectedOption == question.correctAnswer) {
        setGameStatus("active");
        registerRecordScore(questionIndex);
      } else {
        setGameStatus("finished");
        registerRecordScore(questionIndex);
      }
    }
  }, [selectedOption, question.correctAnswer]);

  const contextValue: GameContextType = {
    eventData,
    countriesData,
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
    resetGameData,
    recordScore,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
