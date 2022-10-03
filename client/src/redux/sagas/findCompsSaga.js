import { call, debounce, put } from "redux-saga/effects";

async function getFindComps(obj) {
  const response = await fetch(`/companies/${obj}`, { method: 'GET' });

  // Раскомментировать для запуска локально, а выше запрос закомменнтировать

  // const response = await fetch(`http://localhost:3001/companies/${obj}`, { method: 'GET' });

  const result = await response.json();
  return result;
}

function* fetchComps(action) {
  const comps = yield call(getFindComps, action.payload);
  yield put({ type: 'GET_COMP', payload: comps });
}

function* findCompsSaga() {
  yield debounce(470, 'FIND_COMP', fetchComps)
}

export default findCompsSaga;
