import { Action } from 'redux';

export interface IFetchEvent extends Action {
  data: object;
}

export interface IModalAction extends Action {
  typeAction: string;
}

export function fetchEventListRequested() {
  return {
    type: 'FETCH_EVENT_LIST_REQUESTED',
  };
}

export function fetchEventListFinished(data: object): IFetchEvent {
  return {
    type: 'FETCH_EVENT_LIST_FINISHED',
    data,
  };
}

export function changeModalAction(typeAction: string): IModalAction {
  return {
    type: 'CHANGE_MODAL_EVENT_ACTION',
    typeAction,
  };
}

export function submitAddEventRequested() {
  return {
    type: 'SUBMIT_EVENT_REQUESTED',
  };
}
