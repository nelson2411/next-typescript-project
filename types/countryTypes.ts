export type Country = {
  name: Name;
  flags: Flags;
  capital: string;
  region: string;
  subregion: string;
  area: number;
  population: number;
  currencies: Currencies[];
  // Languages is an object
  languages: ILanguages;
};

type Name = {
  common: string;
  official: string;
};

type Flags = {
  svg: string;
  png: string;
};

type Currencies = {
  name: string;
  symbol: string;
};

interface ILanguages {
  [key: string]: string;
}
