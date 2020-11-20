import { Action } from 'redux';

export interface IFetchSearch extends Action {
  data: object;
}

export function fetchSearchListRequested() {
  return {
    type: 'FETCH_SEARCH_LIST_REQUESTED',
  };
}

export function fetchSearchListFinished(data: object): IFetchSearch {
  return {
    type: 'FETCH_SEARCH_LIST_FINISHED',
    data,
  };
}
