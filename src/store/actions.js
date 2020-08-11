import store from './index';
const NAME_SPACE = 'currencyTracker';

export const TYPES = {
  ADD_CURRENCY: `${NAME_SPACE}/ADD_CURRENCY`,
  REQUEST_CURRENCY: `${NAME_SPACE}/REQUEST_CURRENCY`,
  REMOVE_CURRENCIES: `${NAME_SPACE}/REMOVE_CURRENCIES`,
  START_LISTENER: `${NAME_SPACE}/START_LISTENER`,
  DISMISS_LISTENER: `${NAME_SPACE}/DISMISS_LISTENER`,
  TOGGLE_REMOVE_MODE: `${NAME_SPACE}/TOGGLE_REMOVE_MODE`,
  SELECT_CURRENCY_TO_REMOVE: `${NAME_SPACE}/SELECT_CURRENCY_TO_REMOVE`,
  UNSELECT_CURRENCY_TO_REMOVE: `${NAME_SPACE}/UNSELECT_CURRENCY_TO_REMOVE`,
  UPDATE_CURRENCY: `${NAME_SPACE}/UPDATE_CURRENCY`
};

export const addCurrency = (currency) => (
  {
    type: TYPES.ADD_CURRENCY,
    payload: currency
  }
);

export const updateCurrency = (payload) => (
  {
    type: TYPES.UPDATE_CURRENCY,
    payload
  }
);

export const selectCurrencyToRemove = (id) => (
  {
    type: TYPES.SELECT_CURRENCY_TO_REMOVE,
    payload: id
  }
);

export const unselectCurrencyToRemove = (id) => (
  {
    type: TYPES.UNSELECT_CURRENCY_TO_REMOVE,
    payload: id
  }
);

export const toggleRemoveMode = () => (
  {
    type: TYPES.TOGGLE_REMOVE_MODE
  }
);

export const requestCurrency = (currency) => (
  {
    type: TYPES.REQUEST_CURRENCY,
    payload: currency
  }
);

export const removeCurrencies = () => (
  {
    type: TYPES.REMOVE_CURRENCIES
  }
)
