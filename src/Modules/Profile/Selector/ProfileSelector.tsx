import { createSelector } from 'reselect';

const MyPostinganState = (state: any) => state.MyPostinganState;
const MyPostinganFormState = (state: any) => state.form.myPostinganForm.values;

export const listSelector = () =>
  createSelector(MyPostinganState, state => state.list);
export const idSelector = () =>
  createSelector(MyPostinganState, state => state.selectedIdPostinganProfile);
export const selectedPostinganSelector = () =>
  createSelector(MyPostinganState, state => state.selectedPostinganProfile);
export const modalActionSelector = () =>
  createSelector(MyPostinganState, state => state.modalAction);
export const formDescPostState = () =>
  createSelector(MyPostinganFormState, state => state.descPost);
