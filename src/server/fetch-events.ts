import { validCountries, validSports } from "@src/context/GameContext/GameDefaultData";
import { CompetitorDataProps, EventDataProps } from "@src/types/types";

export const fetchOlympicEvents = async (): Promise<EventDataProps[]> => {

    console.log("ENTROU NO FETCH")
    const sportSet = new Set(validSports);
    const countrySet = new Set(validCountries);

    let page = 1;
    const allData: EventDataProps[] = [];

    const fetchPage = async (page: number): Promise<EventDataProps[]> => {
      try {
        const response = await fetch(`https://apis.codante.io/olympic-games/events?page=${page}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok (status: ${response.status})`);
        }

        const { data, links } = await response.json();

        if (!links.next) {
          return []; // No more pages to fetch
        }

        if (!Array.isArray(data)) {
          throw new Error('Data is not an array');
        }

        return data.filter(event =>
          sportSet.has(event.discipline_name) &&
          event.competitors.some((competitor: CompetitorDataProps) => countrySet.has(competitor.country_id))
        );
      } catch (error) {
        console.error(`Error fetching data from page ${page}:`, error);
        throw error; // Re-throw to stop fetching
      }
    };

    const fetchDataSequentially = async (): Promise<void> => {
      try {
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const pageData = await fetchPage(page);

          if(pageData.length === 0){
            break;
          }
          
          allData.push(...pageData);
          page += 1;
          console.log(allData)
        }
      } catch (error) {
        // Handle errors here (e.g., display an error message to the user)
        console.error('Error fetching Olympic events:', error);
      }
    };

    fetchDataSequentially();
    return allData;
  };