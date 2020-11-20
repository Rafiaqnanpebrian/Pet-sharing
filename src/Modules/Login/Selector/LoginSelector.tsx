import { createSelector } from 'reselect';

const loginState = (state: any) => state.LoginState;
const loginFormState = (state: any) => state.form.LoginForm.values;

export const selectedLoginSelector = () =>
  createSelector(loginState, state => state.selectedLogin);

export const formNamePetSelector = () =>
  createSelector(loginState, state => state.userNamePet);
export const userIdSelector = () =>
  createSelector(loginState, state => state.userid);
export const listSelector = () =>
  createSelector(loginState, state => state.list);

export const formEmailSelector = () =>
  createSelector(loginFormState, state => state.email);
export const formPasswordSelector = () =>
  createSelector(loginFormState, state => state.password);
