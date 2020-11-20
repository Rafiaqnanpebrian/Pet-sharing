import * as ActionSearch from '../Store/SearchAction';
import * as SelectorSearch from '../Selector/SearchSelector';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import history from '../../App/History';

function* fetchSearchListProcess() {
  try {
    const descPost = yield select(SelectorSearch.formSearchSelector());
    const { data } = yield call(
      axios.get,
      `${process.env.REACT_APP_USER_URL}/Postingan/SearchPostingan?descPost=${descPost}`
    );
    yield put(ActionSearch.fetchSearchListFinished(data));
    history.push('/search');
    console.log('data saga search', data);
  } catch (error) {
    console.log(error);
  }
}

export function* fetchSearchListAction() {
  yield takeLatest('FETCH_SEARCH_LIST_REQUESTED', fetchSearchListProcess);
}
