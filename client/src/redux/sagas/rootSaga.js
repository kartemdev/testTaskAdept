import { all } from 'redux-saga/effects'
import findCompsSaga from './findCompsSaga';

export default function* rootSaga() {
  yield all([
    findCompsSaga(),
  ]);
}
