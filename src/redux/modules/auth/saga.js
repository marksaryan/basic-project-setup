import { App_Service } from 'AppServices';
import { Auth } from 'aws-amplify';

import {
  take, put, call, fork, all
} from 'redux-saga/effects';

import { SIGN_IN_PENDING, fetchDataActionCreators } from './actions';

export function* asyncFetchData({ payload }) {

  const { params } = payload;
debugger
  try {
    const response = yield Auth.signIn(params.username, params.password);
debugger
    if (response.result === 'ok') {
      yield put(fetchDataActionCreators.fetchDataSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watchFetchData() {
  while (true) {
    const action = yield take(SIGN_IN_PENDING);
    yield* asyncFetchData(action);
  }
}

export default function* () {
  yield all([
    fork(watchFetchData)
  ]);
}
