import { createContext } from "react";

import { BasicCountryData, FullCountryData } from "../utils/api.interfaces";

export interface CountryContextInterface {
  country: BasicCountryData | null;
  setCountry: (country: BasicCountryData | null) => void;
}

const CountryContext = createContext<CountryContextInterface>({
  country: null,
  setCountry: () => {}
});

export default CountryContext;