import { call, put, take, fork, cancel, select, takeEvery, all, delay } from 'redux-saga/effects'
import { TYPES, addCurrency, updateCurrency } from './actions';
import getCurrency from '../service';

function* update({ id, name }) {
  const response = yield call(getCurrency, name);

  const currency = {
    id,
    percentage: (response.data.data.market_data.percent_change_usd_last_24_hours * 100).toFixed(2),
    value: (response.data.data.market_data.price_usd).toFixed(2)
  };

  yield put(updateCurrency(currency));
  console.log('TICK')
}

function* listener() {
  while(true) {
    
    yield delay(30000);
    const currencies = yield select(state => state.currencies);

    yield all(
      currencies.map(crr => fork(update, crr))
    );
    
  }
}

function* timer() {
  while(yield take(TYPES.START_LISTENER)) {
    // starts the task in the background
    const bgSyncTask = yield fork(listener);

    yield take(TYPES.DISMISS_LISTENER);

    yield cancel(bgSyncTask);
  }
}

function* fetchMetrics({ payload }) {

  const response = yield call(getCurrency, payload);

  const currency = {
    id: response.data.data.id,
    percentage: (response.data.data.market_data.percent_change_usd_last_24_hours * 100).toFixed(2),
    name: response.data.data.name,
    symbol: response.data.data.symbol,
    value: (response.data.data.market_data.price_usd).toFixed(2)
  }

  yield put(addCurrency(currency));
}

function* startTimer() {
  const currencies = yield select(state => state.currencies);

  if (currencies.length === 0) {
    yield put({ type: TYPES.START_LISTENER });
  }
}


function* watchAddAction() {
  yield takeEvery(TYPES.REQUEST_CURRENCY, startTimer);
}

function* watchCurrencyList() {
  yield takeEvery(TYPES.REQUEST_CURRENCY, fetchMetrics);
}

export default function* root() {
  yield all([
    watchCurrencyList(),
    watchAddAction(),
    timer()
  ])
};
