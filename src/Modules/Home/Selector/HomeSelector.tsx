import { createSelector } from 'reselect';

const AllPostinganState = (state: any) => state.AllPostinganState;
const AddPostinganFormState = (state: any) => state.form.HomeForm.values;
const AddCommentFormState = (state: any) => state.form.CommentForm.values;

export const listSelector = () =>
  createSelector(AllPostinganState, state => state.list);
export const idSelector = () =>
  createSelector(AllPostinganState, state => state.selectedIdPostingan);

export const listCommentSelector = () =>
  createSelector(AllPostinganState, state => state.listComment);

export const formDescPostSelector = () =>
  createSelector(AddPostinganFormState, state => state.descPost);

export const formDescCommentSelector = () =>
  createSelector(AddCommentFormState, state => state.descComment);
