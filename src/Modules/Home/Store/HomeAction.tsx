import { Action } from 'redux';

export interface IFetchHome extends Action {
  data: object;
}

export interface IFetchComment extends Action {
  data: object;
}

export interface ISetId extends Action {
  id: string;
}

export function fetchHomeListRequested() {
  return {
    type: 'FETCH_HOME_LIST_REQUESTED',
  };
}

export function fetchCommentListRequested() {
  return {
    type: 'FETCH_COMMENT_LIST_REQUESTED',
  };
}

export function fetchHomeListFinished(data: object): IFetchHome {
  return {
    type: 'FETCH_HOME_LIST_FINISHED',
    data,
  };
}

export function fetchCommentListFinished(data: object): IFetchComment {
  return {
    type: 'FETCH_COMMENT_LIST_FINISHED',
    data,
  };
}

export function addPostinganRequested() {
  return {
    type: 'ADD_POSTINGAN_REQUESTED',
  };
}

export function addCommentRequested() {
  return {
    type: 'ADD_COMMENT_REQUESTED',
  };
}

export function setFormDescPost() {
  return {
    type: 'SET_FORM_DESCPOST_REQUESTED',
  };
}

export function setPostinganId(id: string): ISetId {
  return {
    type: 'SET_POSTINGAN_ID',
    id,
  };
}
