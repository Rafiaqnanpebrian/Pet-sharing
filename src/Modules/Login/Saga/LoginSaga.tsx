import * as ActionLogin from '../Store/LoginAction';
import * as SelectorLogin from '../Selector/LoginSelector';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import history from '../../App/History';
import { message } from 'antd';

function* submitLoginProcess() {
  try {
    const email = yield select(SelectorLogin.formEmailSelector());
    const password = yield select(SelectorLogin.formPasswordSelector());
    const { data } = yield call(
      axios.post,
      `${process.env.REACT_APP_USER_URL}/User/Login`,
      {
        email,
        password,
      }
    );
    localStorage.setItem('data_id', data.id);
    localStorage.setItem('data_namePet', data.namePet);
    localStorage.setItem('data_detail', JSON.stringify(data));
    console.log('data saga login', data);
    history.push('/home');
    message.success('Login Success');
  } catch (error) {
    console.log(error);
    message.error('Email or Password is Incorect');
  }
}

export function* submitLoginAction() {
  yield takeLatest('LOGIN_USER_REQUESTED', submitLoginProcess);
}
