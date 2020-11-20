import { createSelector } from 'reselect';

const registerState = (state: any) => state.RegisterState;
const registerFormState = (state: any) => state.form.RegisterForm.values;

export const selectedRegisterSelector = () =>
  createSelector(registerState, state => state.selectedRegister);

export const formNamePetSelector = () =>
  createSelector(registerFormState, state => state.namePet);
export const formNameOwnerSelector = () =>
  createSelector(registerFormState, state => state.nameOwner);
export const formGenderSelector = () =>
  createSelector(registerFormState, state => state.gender);
export const formAgeSelector = () =>
  createSelector(registerFormState, state => state.age);
export const formEmailSelector = () =>
  createSelector(registerFormState, state => state.email);
export const formPasswordSelector = () =>
  createSelector(registerFormState, state => state.password);
