export type TLang = 'RU' | 'ENG';
export type TRadix = 2 | 10 | 16;

export interface INumberSystem {
  name: {
    [lang in TLang]: string;
  };
  radix: TRadix;
  availableChars: string[];
}
