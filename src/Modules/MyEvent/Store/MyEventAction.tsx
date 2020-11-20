import { Action } from 'redux';

export interface IFetchMyEvent extends Action {
  data: object;
}

export interface ISetId extends Action {
  id: string;
}

export interface IModalAction extends Action {
  typeAction: string;
}

export interface ISetDetail extends Action {
  data: object;
}

export function fetchMyEventListRequested() {
  return {
    type: 'FETCH_MYEVENT_LIST_REQUESTED',
  };
}

export function fetchMyEventListFinished(data: object): IFetchMyEvent {
  return {
    type: 'FETCH_MYEVENT_LIST_FINISHED',
    data,
  };
}

export function setEventId(id: string): ISetId {
  return {
    type: 'SET_EVENT_ID',
    id,
  };
}

export function setEventDetail(data: object): ISetDetail {
  return {
    type: 'SET_EVENT_DETAIL',
    data,
  };
}

export function deleteEventRequested() {
  return {
    type: 'DELETE_EVENT_REQUESTED',
  };
}

export function changeModalAction(typeAction: string): IModalAction {
  return {
    type: 'CHANGE_MODAL_MYEVENT_ACTION',
    typeAction,
  };
}

export function updateEventRequested() {
  return {
    type: 'UPDATE_MYEVENT_REQUESTED',
  };
}
