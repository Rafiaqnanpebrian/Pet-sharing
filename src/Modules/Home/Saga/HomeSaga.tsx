import * as ActionHome from '../Store/HomeAction';
import * as SelectorHome from '../Selector/HomeSelector';
import * as SelectorLogin from '../../Login/Selector/LoginSelector';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import { message } from 'antd';

function* fetchHomeListProcess() {
  try {
    const { data } = yield call(
      axios.get,
      `${process.env.REACT_APP_USER_URL}/Postingan/inquiry/0/100`
    );
    yield put(ActionHome.fetchHomeListFinished(data.data));
    console.log('data saga home', data.data);
  } catch (error) {
    console.log(error);
  }
}

function* fetchCommentListProcess() {
  const id = yield select(SelectorHome.idSelector());
  console.log('post id', id);
  try {
    const { data } = yield call(
      axios.get,
      `${process.env.REACT_APP_USER_URL}/Comment/inquiry/0/100/${id}`
    );
    yield put(ActionHome.fetchCommentListFinished(data.data));
    console.log('data saga comment', data.data);
  } catch (error) {
    console.log(error);
  }
}

function* AddPostinganProcess() {
  try {
    const userId = yield select(SelectorLogin.userIdSelector());
    console.log('userId', userId);
    const namePet = yield select(SelectorLogin.formNamePetSelector());
    const descPost = yield select(SelectorHome.formDescPostSelector());
    yield call(
      axios.post,
      `${process.env.REACT_APP_USER_URL}/Postingan/AddPostingan`,
      {
        userId,
        namePet,
        descPost,
      }
    );
    message.success('Share Successed');
    yield put(ActionHome.fetchHomeListRequested());
  } catch (error) {
    console.log(error);
    message.error('Share Failed');
  }
}

function* AddCommentProcess() {
  try {
    const postId = yield select(SelectorHome.idSelector());
    const userName = yield select(SelectorLogin.formNamePetSelector());
    const descComment = yield select(SelectorHome.formDescCommentSelector());
    yield call(
      axios.post,
      `${process.env.REACT_APP_USER_URL}/Comment/AddComment`,
      {
        userName,
        descComment,
        postId,
      }
    );
    message.success('Comment Successed');
    yield put(ActionHome.fetchCommentListRequested());
  } catch (error) {
    console.log(error);
    message.error('Comment Failed');
  }
}

export function* AddPostinganAction() {
  yield takeLatest('ADD_POSTINGAN_REQUESTED', AddPostinganProcess);
}
export function* AddCommentAction() {
  yield takeLatest('ADD_COMMENT_REQUESTED', AddCommentProcess);
}
export function* fetchHomeListAction() {
  yield takeLatest('FETCH_HOME_LIST_REQUESTED', fetchHomeListProcess);
}
export function* fetchCommentListAction() {
  yield takeLatest('FETCH_COMMENT_LIST_REQUESTED', fetchCommentListProcess);
}
