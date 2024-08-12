import { CountryDataProps } from "@src/types/types";

export const fetchCountries = async (): Promise<CountryDataProps[]> => {
  console.log("Fetching countries data...");

  try {
    const response = await fetch(
      "https://apis.codante.io/olympic-games/countries"
    );
    if (!response.ok) {
      throw new Error(
        `Network response was not ok (status: ${response.status})`
      );
    }

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching countries data:", error);
    return [];
  }
};
