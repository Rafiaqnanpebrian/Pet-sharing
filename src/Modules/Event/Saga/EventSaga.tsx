import * as ActionEvent from '../Store/EventAction';
import * as ActonTemplate from '../../Template/Store/TemplateAction';
import * as SelectorEvent from '../Selector/SelectorEvent';
import * as SelectorLogin from '../../Login/Selector/LoginSelector';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import { message } from 'antd';

function* fetchEventListProcess() {
  try {
    const { data } = yield call(
      axios.get,
      `${process.env.REACT_APP_USER_URL}/Event/inquiry/0/100`
    );
    yield put(ActionEvent.fetchEventListFinished(data.data));
    console.log('data saga event', data.data);
  } catch (error) {
    console.log(error);
  }
}

function* AddEventProcess() {
  try {
    const userId = yield select(SelectorLogin.userIdSelector());
    const nameEvent = yield select(SelectorEvent.formNameEventSelector());
    const location = yield select(SelectorEvent.formLocationSelector());
    const date = yield select(SelectorEvent.formDateSelector());
    const descEvent = yield select(SelectorEvent.formDescEvent());
    yield call(
      axios.post,
      `${process.env.REACT_APP_USER_URL}/Event/AddEvents`,
      {
        userId,
        nameEvent,
        location,
        date,
        descEvent,
      }
    );
    yield put(ActionEvent.fetchEventListRequested());
    yield put(ActonTemplate.openModal('Event'));
    message.success('Add event successed');
  } catch (error) {
    message.error('Add event failed');
    console.log(error);
  }
}

export function* fetchEventListAction() {
  yield takeLatest('FETCH_EVENT_LIST_REQUESTED', fetchEventListProcess);
}

export function* submitAddEventAction() {
  yield takeLatest('SUBMIT_EVENT_REQUESTED', AddEventProcess);
}
