import {
  AddCommentAction,
  AddPostinganAction,
  fetchCommentListAction,
  fetchHomeListAction,
} from '../Home/Saga/HomeSaga';
import { all, fork } from 'redux-saga/effects';
import {
  deleteEventAction,
  fetchMyEventListAction,
  updateEventAction,
} from '../MyEvent/Saga/MyEventSaga';
import {
  deletePostinganProfileAction,
  fetchProfileListAction,
  updatePostinganProfileAction,
} from '../Profile/Saga/ProfileSaga';
import {
  fetchEventListAction,
  submitAddEventAction,
} from '../Event/Saga/EventSaga';

import { fetchSearchListAction } from '../Search/Saga/SearchSaga';
import { submitLoginAction } from '../Login/Saga/LoginSaga';
import { submitRegisterAction } from '../Register/Saga/RegisterSaga';
import { updateProfileAction } from '../Setting/Saga/SettingSaga';

export default function* () {
  yield all([fork(submitLoginAction)]);
  yield all([fork(submitRegisterAction)]);
  yield all([
    fork(fetchHomeListAction),
    fork(AddPostinganAction),
    fork(fetchCommentListAction),
    fork(AddCommentAction),
  ]);
  yield all([
    fork(fetchProfileListAction),
    fork(deletePostinganProfileAction),
    fork(updatePostinganProfileAction),
  ]);
  yield all([fork(fetchEventListAction), fork(submitAddEventAction)]);
  yield all([
    fork(fetchMyEventListAction),
    fork(deleteEventAction),
    fork(updateEventAction),
  ]);
  yield all([fork(updateProfileAction)]);
  yield all([fork(fetchSearchListAction)]);
}
