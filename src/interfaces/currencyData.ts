export interface CurrencyResponse {
  date: string;
  [key: string]: CurrencyData | string;
}

export interface CurrencyData {
  [key: string]: number;
}

