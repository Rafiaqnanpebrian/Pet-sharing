import { Action } from 'redux';
import { IModalAction } from './SettingAction';

export const initialState: any = {
  modalAction: 'updateprofile',
};

export default function ProfileReducer(state = initialState, action: Action) {
  if (!action) return state;
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'CHANGE_MODAL_SETTING_ACTION': {
      const modalAction = action as IModalAction;
      newState.modalAction = modalAction.typeAction;
      return { ...newState };
    }
  }
  return state;
}
