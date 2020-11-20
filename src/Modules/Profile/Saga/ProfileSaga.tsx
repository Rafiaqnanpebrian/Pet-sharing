import * as ActionProfile from '../Store/ProfileAction';
import * as ActionTemplate from '../../Template/Store/TemplateAction';
import * as SelectorLogin from '../../Login/Selector/LoginSelector';
import * as SelectorProfile from '../Selector/ProfileSelector';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import { message } from 'antd';

function* fetchProfileListProcess() {
  try {
    // const userId = yield select(SelectorLogin.userIdSelector());
    const userId = localStorage.getItem('data_id')
    const { data } = yield call(
      axios.get,
      `${process.env.REACT_APP_USER_URL}/Postingan/GetPostinganByid?userId=${userId}`
    );
    yield put(ActionProfile.fetchProfileListFinished(data));
    console.log('data saga home', data);
  } catch (error) {
    console.log(error);
  }
}

function* deletePostinganProfileListProcess() {
  try {
    const id = yield select(SelectorProfile.idSelector());
    yield call(
      axios.delete,
      `${process.env.REACT_APP_USER_URL}/Postingan/DeletePostingan/${id}`
    );
    message.success('Delete Successed');
    yield put(ActionProfile.fetchProfileListRequested());
  } catch (error) {
    message.error('Delete Failed');
    console.log(error);
  }
}

function* updatePostinganProfileProcess() {
  try {
    const id = yield select(SelectorProfile.idSelector());
    const descPost = yield select(SelectorProfile.formDescPostState());
    yield call(
      axios.put,
      `${process.env.REACT_APP_USER_URL}/Postingan/UpdatePostingan`,
      {
        id,
        descPost,
      }
    );
    message.success('Update Successed');
    yield put(ActionProfile.fetchProfileListRequested());
    yield put(ActionTemplate.openModal('Profile'));
  } catch (error) {
    message.error('Update Failed');
    console.log(error);
  }
}

export function* fetchProfileListAction() {
  yield takeLatest('FETCH_PROFILE_LIST_REQUESTED', fetchProfileListProcess);
}

export function* deletePostinganProfileAction() {
  yield takeLatest(
    'DELETE_POSTINGAN_PROFILE_REQUESTED',
    deletePostinganProfileListProcess
  );
}

export function* updatePostinganProfileAction() {
  yield takeLatest(
    'UPDATE_POSTINGAN_PROFILE_REQUESTED',
    updatePostinganProfileProcess
  );
}
