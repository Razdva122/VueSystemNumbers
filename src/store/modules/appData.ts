import { INumberSystem, TLang } from '../../typings';

interface IState {
  number: string;
  appLang: TLang;
}

export default {
  mutations: {
    updateNumber(
      state: IState,
      payload: { newNumber: string; numberSystem: INumberSystem },
    ) {
      const { numberSystem, newNumber } = payload;
      const correctNumber = newNumber
        .split('')
        .filter((i: string) => numberSystem.availableChars.includes(i))
        .join('');
      state.number = String(parseInt(correctNumber, numberSystem.radix) || '0');
    },
    updateLang(state: IState, newLang: TLang) {
      state.appLang = newLang;
    },
  },
  state: {
    number: '10',
    appLang: 'ENG',
  },
  getters: {
    getNumber(state: IState) {
      return state.number;
    },
    getLang(state: IState) {
      return state.appLang;
    },
  },
};
