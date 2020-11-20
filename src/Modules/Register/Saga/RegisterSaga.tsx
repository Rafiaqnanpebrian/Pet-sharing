import * as ActionRegister from '../Store/RegisterAction';
import * as SelectorRegister from '../Selector/RegisterSelector';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import history from '../../App/History';
import { message } from 'antd';

function* submitRegisterProcess() {
  try {
    const nameOwner = yield select(SelectorRegister.formNameOwnerSelector());
    const namePet = yield select(SelectorRegister.formNamePetSelector());
    const age = yield select(SelectorRegister.formAgeSelector());
    const gender = yield select(SelectorRegister.formGenderSelector());
    const email = yield select(SelectorRegister.formEmailSelector());
    const password = yield select(SelectorRegister.formPasswordSelector());
    yield call(axios.post, `${process.env.REACT_APP_USER_URL}/User/AddUser`, {
      nameOwner,
      namePet,
      age,
      gender,
      email,
      password,
    });
    history.push('/login');
    message.success('Register Success');
  } catch (error) {
    console.log(error);
    message.error('Register Failed');
  }
}

export function* submitRegisterAction() {
  yield takeLatest('REGISTER_USER_REQUESTED', submitRegisterProcess);
}
