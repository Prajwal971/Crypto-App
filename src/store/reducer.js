import { TYPES } from './actions';

const INITIAL_STATE = {
  currencies: [],
  removeMode: false,
  loading: false,
  currenciesToRemove: []
};

const removeCurrenciesFromState = (state) => {
  return state.currenciesToRemove.reduce((accumulator, id) => {
    return accumulator.filter(activeCrr => activeCrr.id !== id)
  }, state.currencies);
};

const updateCurrencyInState = (state, payload) => {
  const currencyIndex = state.currencies.findIndex(crr => crr.id === payload.id);
  const newList = [...state.currencies];
  newList[currencyIndex] = { ...newList[currencyIndex], ...payload };

  return newList;
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case TYPES.ADD_CURRENCY:
      return { ...state, currencies: [...state.currencies, payload], loading: false };
    case TYPES.REMOVE_CURRENCIES:
      return {
        ...state,
        currencies: removeCurrenciesFromState(state),
        currenciesToRemove: []
      };
    case TYPES.TOGGLE_REMOVE_MODE:
      return { ...state, removeMode: !state.removeMode };
    case TYPES.REQUEST_CURRENCY:
      return { ...state, loading: true };
    case TYPES.SELECT_CURRENCY_TO_REMOVE:
      return { ...state, currenciesToRemove: [...state.currenciesToRemove, payload] };
    case TYPES.UNSELECT_CURRENCY_TO_REMOVE:
      return {
        ...state,
        currenciesToRemove: state.currenciesToRemove.filter(id => id !== payload)
      };
    case TYPES.UPDATE_CURRENCY:
      return {
        ...state,
        currencies: updateCurrencyInState(state, payload)
      };
    default:
      return state;
  }
};
