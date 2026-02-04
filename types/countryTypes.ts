export type Country = {
  cca2: string;
  name: {
    common: string;
    official: string;
  };
  capital?: string[]; // Capital can be optional because countries like Antarctica or Western Sahara may not have a defined capital
  region: string;
  subregion?: string;
  population: number;
  area: number;
  flags: {
    png: string;
    svg: string;
  };
  languages?: { [key: string]: string }; // Languages can be optional
  currencies?: { [key: string]: { name: string; symbol: string } }; // Currencies can be optional
};

export interface CartState {
  cart: Country[];
  lastAction?: 'added' | 'duplicated' | 'undefined';
}
