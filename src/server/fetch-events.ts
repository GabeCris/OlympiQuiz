import {
  validCountries,
  validSports,
} from "@src/context/GameContext/GameDefaultData";
import { CompetitorDataProps, EventDataProps } from "@src/types/types";

const TOTAL_PAGES = 70;

export const fetchOlympicEvents = async (): Promise<EventDataProps[]> => {
  const sportSet = new Set(validSports);
  const countrySet = new Set(validCountries);

  const generateRandomPages = (
    totalPages: number,
    pageCount: number
  ): number[] => {
    const pages = new Set<number>();
    while (pages.size < pageCount) {
      pages.add(Math.floor(Math.random() * totalPages) + 1);
    }
    return Array.from(pages);
  };

  const fetchPage = async (page: number): Promise<EventDataProps[]> => {
    try {
      const response = await fetch(
        `https://apis.codante.io/olympic-games/events?page=${page}`
      );
      if (!response.ok) {
        throw new Error(
          `Network response was not ok (status: ${response.status})`
        );
      }

      const { data, links } = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Data is not an array");
      }

      return data.filter(
        (event) =>
          sportSet.has(event.discipline_name) &&
          event.competitors.some((competitor: CompetitorDataProps) =>
            countrySet.has(competitor.country_id)
          )
      );
    } catch (error) {
      console.error(`Error fetching data from page ${page}:`, error);
      return []; 
    }
  };

  const fetchDataRandomly = async (): Promise<void> => {
    const randomPages = generateRandomPages(100, TOTAL_PAGES); 

    try {
      const results = await Promise.all(
        randomPages.map((page) => fetchPage(page))
      );
      
      const allData = results.flat();
      return allData;
    } catch (error) {
      console.error("Error fetching Olympic events:", error);
      return [];
    }
  };

  return fetchDataRandomly();
};
