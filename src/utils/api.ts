import { FullCountryData, BasicCountryData, RawCountryData, RawGlobalData, Cases } from "./api.interfaces";

class Parser {
  public static parseBasicData(data: RawCountryData): BasicCountryData {
    return {
      name: data.country,
      totalCases: data.cases
    };
  }

  public static parseFullData(data: RawCountryData): FullCountryData {
    return {
      name: data.country,
      cases: {
        total: data.cases,
        active: data.active,
        recovered: data.recovered,
        deaths: data.deaths
      }
    };
  }

  public static parseGlobalData(data: RawGlobalData): Cases {
    return {
      total: data.cases,
      active: data.active,
      recovered: data.recovered,
      deaths: data.deaths
    };
  }
}

class Api {
  private static BASE_URL = 'https://disease.sh/v3/covid-19/';
  private static GLOBAL_URL = Api.BASE_URL + 'all';
  private static COUNTRIES_URL = Api.BASE_URL + 'countries';

  private static async fetchData(url: string): Promise<any> {
    const response = await fetch(url, {headers: {'Pragma': 'No-Cache', 'Cache-Control': 'No-Cache'}});
    return await response.json();
  }

  public static async getGlobalData(): Promise<Cases> {
    const globalData: RawGlobalData = await Api.fetchData(Api.GLOBAL_URL);
    return Parser.parseGlobalData(globalData);
  }

  public static async getCountriesData(): Promise<RawCountryData[]> {
    const countriesData: RawCountryData[] = await Api.fetchData(Api.COUNTRIES_URL);
    return countriesData;
  }

  public static async getCountryData(country: string): Promise<FullCountryData> {
    const url = Api.COUNTRIES_URL + `/${encodeURIComponent(country.toLowerCase())}`;
    const countryData: RawCountryData = await Api.fetchData(url);
    return Parser.parseFullData(countryData);
  }

  public static async getCountries(): Promise<BasicCountryData[]> {
    const countries = await Api.getCountriesData();
    return countries.map((data: RawCountryData)=> Parser.parseBasicData(data));
  }
}

export default Api;