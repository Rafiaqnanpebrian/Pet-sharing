import * as ActionMyEvent from '../Store/MyEventAction';
import * as ActionTemplate from '../../Template/Store/TemplateAction';
import * as SelectorLogin from '../../Login/Selector/LoginSelector';
import * as SelectorMyEvent from '../Selector/SelectorMyevent';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import { message } from 'antd';

function* fetchMyEventListProcess() {
  try {
    const userId = localStorage.getItem('data_id');
    const { data } = yield call(
      axios.get,
      `${process.env.REACT_APP_USER_URL}/Event/GetEventByid?userId=${userId}`
    );
    yield put(ActionMyEvent.fetchMyEventListFinished(data));
    console.log('data saga Myevent', data);
  } catch (error) {
    console.log(error);
  }
}

function* deleteEventListProcess() {
  try {
    const id = yield select(SelectorMyEvent.idSelector());
    yield call(
      axios.delete,
      `${process.env.REACT_APP_USER_URL}/Event/DeleteEvent/${id}`
    );
    message.success('delete successed');
    yield put(ActionMyEvent.fetchMyEventListRequested());
  } catch (error) {
    console.log(error);
  }
}

function* updateEventProcess() {
  try {
    const id = yield select(SelectorMyEvent.idSelector());
    const nameEvent = yield select(SelectorMyEvent.formNameEventSelector());
    const location = yield select(SelectorMyEvent.formLocationSelector());
    const date = yield select(SelectorMyEvent.formDateSelector());
    const descEvent = yield select(SelectorMyEvent.formDescEvent());
    yield call(
      axios.put,
      `${process.env.REACT_APP_USER_URL}/Event/UpdateEvent`,
      {
        id,
        nameEvent,
        location,
        date,
        descEvent,
      }
    );
    yield put(ActionMyEvent.fetchMyEventListRequested());
    yield put(ActionTemplate.openModal('MyEvent'));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchMyEventListAction() {
  yield takeLatest('FETCH_MYEVENT_LIST_REQUESTED', fetchMyEventListProcess);
}

export function* deleteEventAction() {
  yield takeLatest('DELETE_EVENT_REQUESTED', deleteEventListProcess);
}

export function* updateEventAction() {
  yield takeLatest('UPDATE_MYEVENT_REQUESTED', updateEventProcess);
}
