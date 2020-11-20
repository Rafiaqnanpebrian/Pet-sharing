import { Action } from 'redux';
import { IOpenModal } from './TemplateAction';

export const initialState: any = {
  showModalEvent: false,
  showModalProfile: false,
  showModalMyEvent: false,
  showModalSetting: false,
};

export default function TemplateReducer(state = initialState, action: Action) {
  if (!action) return state;
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'OPEN_MODAL': {
      const openModal = action as IOpenModal;
      const component = openModal.component;
      newState[`showModal${component}`] = !state[`showModal${component}`];
      return { ...newState };
    }
  }
  return state;
}
