import { IFetchEvent, IModalAction } from './EventAction';

import { Action } from 'redux';

export const initialState: any = {
  list: [],
  modalAction: 'addevent',
  selectedEvent: {},
};

export default function EventReducer(state = initialState, action: Action) {
  if (!action) return state;
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'FETCH_EVENT_LIST_FINISHED': {
      const fetchEvent = action as IFetchEvent;
      newState.list = fetchEvent.data;
      return { ...newState };
    }
    case 'CHANGE_MODAL_EVENT_ACTION': {
      const modalAction = action as IModalAction;
      newState.modalAction = modalAction.typeAction;
      return { ...newState };
    }
  }
  return state;
}
