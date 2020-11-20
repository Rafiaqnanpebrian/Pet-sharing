import * as ActionTemplate from '../../Template/Store/TemplateAction';
import * as SelectorLogin from '../../Login/Selector/LoginSelector';
import * as SelectorSetting from '../Selector/SettingSelector';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import { message } from 'antd';

function* updateProfileProcess() {
  try {
    const id = yield select(SelectorLogin.userIdSelector());
    const namePet = yield select(SelectorSetting.formNamePetSelector());
    const nameOwner = yield select(SelectorSetting.formNameOwnerSelector());
    const gender = yield select(SelectorSetting.formGenderSelector());
    const age = yield select(SelectorSetting.formAgeSelector());
    const email = yield select(SelectorSetting.formEmailSelector());
    const password = yield select(SelectorSetting.formPasswordSelector());
    const { data } = yield call(
      axios.put,
      `${process.env.REACT_APP_USER_URL}/User/UpdateUser`,
      {
        id,
        namePet,
        nameOwner,
        gender,
        age,
        email,
        password,
      }
    );
    message.success('Update Successed, Please Re-Login');
    yield put(ActionTemplate.openModal('Setting'));
  } catch (error) {
    console.log(error);
  }
}

export function* updateProfileAction() {
  yield takeLatest('UPDATE_PROFILE_REQUESTED', updateProfileProcess);
}
