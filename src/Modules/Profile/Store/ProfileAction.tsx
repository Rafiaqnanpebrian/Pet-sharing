import { Action } from 'redux';

export interface IFetchProfile extends Action {
  data: object;
}

export interface ISetId extends Action {
  id: string;
}

export interface ISetDetail extends Action {
  data: object;
}

export interface IModalAction extends Action {
  typeAction: string;
}

export function fetchProfileListRequested() {
  return {
    type: 'FETCH_PROFILE_LIST_REQUESTED',
  };
}

export function fetchProfileListFinished(data: object): IFetchProfile {
  return {
    type: 'FETCH_PROFILE_LIST_FINISHED',
    data,
  };
}

export function setPostinganProfileId(id: string): ISetId {
  return {
    type: 'SET_POSTINGAN_PROFILE_ID',
    id,
  };
}

export function updatePostinganRequested() {
  return {
    type: 'UPDATE_POSTINGAN_PROFILE_REQUESTED',
  };
}

export function setPostinganProfileDetail(data: object): ISetDetail {
  return {
    type: 'SET_PROFILE_DETAIL',
    data,
  };
}

export function deletePostinganProfileRequested() {
  return {
    type: 'DELETE_POSTINGAN_PROFILE_REQUESTED',
  };
}

export function changeModalAction(typeAction: string): IModalAction {
  return {
    type: 'CHANGE_MODAL_PROFILE_ACTION',
    typeAction,
  };
}
