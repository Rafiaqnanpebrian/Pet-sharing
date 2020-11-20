import { createSelector } from 'reselect';

const SearchState = (state: any) => state.SearchState;
const SearchFormState = (state: any) => state.form.SearchForm.values;

export const listSelector = () =>
  createSelector(SearchState, state => state.list);

export const formSearchSelector = () =>
  createSelector(SearchFormState, state => state.search);
