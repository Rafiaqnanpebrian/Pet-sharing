import { createSelector } from 'reselect';

const SettingState = (state: any) => state.SettingState;
const ProfileFormState = (state: any) => state.form.profileForm.values;

export const modalActionSelector = () =>
  createSelector(SettingState, state => state.modalAction);

export const formNamePetSelector = () =>
  createSelector(ProfileFormState, state => state.namePet);
export const formNameOwnerSelector = () =>
  createSelector(ProfileFormState, state => state.nameOwner);
export const formGenderSelector = () =>
  createSelector(ProfileFormState, state => state.gender);
export const formAgeSelector = () =>
  createSelector(ProfileFormState, state => state.age);
export const formEmailSelector = () =>
  createSelector(ProfileFormState, state => state.email);
export const formPasswordSelector = () =>
  createSelector(ProfileFormState, state => state.password);
