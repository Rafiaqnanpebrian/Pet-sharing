import { createSelector } from 'reselect';

const templateState = (state: any) => state.TemplateState;

export const modalEventSelector = () =>
  createSelector(templateState, state => state.showModalEvent);
export const modalMyEventSelector = () =>
  createSelector(templateState, state => state.showModalMyEvent);
export const modalProfileSelector = () =>
  createSelector(templateState, state => state.showModalProfile);
export const modalSettingSelector = () =>
  createSelector(templateState, state => state.showModalSetting);
