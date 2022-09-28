export type Country = {
  name: Name;
  flags: Flags;
  capital: string;
  region: string;
  subregion: string;
  area: number;
  population: number;
  // Languages is an object
  languages: ILanguages;
  currencies: ICurrencies;
};

type Name = {
  common: string;
  official: string;
};

type Flags = {
  svg: string;
  png: string;
};

interface ILanguages {
  [key: string]: string;
}

interface ICurrencies {
  [key: string]: Currency;
}

type Currency = {
  [key: string]: string;
};
