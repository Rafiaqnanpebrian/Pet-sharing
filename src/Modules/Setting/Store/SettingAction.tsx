import { Action } from 'redux';

export interface IModalAction extends Action {
  typeAction: string;
}

export function changeModalAction(typeAction: string): IModalAction {
  return {
    type: 'CHANGE_MODAL_SETTING_ACTION',
    typeAction,
  };
}

export function updateProfileRequested() {
  return {
    type: 'UPDATE_PROFILE_REQUESTED',
  };
}
