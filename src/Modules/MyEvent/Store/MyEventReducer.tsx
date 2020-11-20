import {
  IFetchMyEvent,
  IModalAction,
  ISetDetail,
  ISetId,
} from './MyEventAction';

import { Action } from 'redux';

export const initialState: any = {
  list: [],
  selectedIdEvent: '',
  selectedEvent: {},
  modalAction: 'updateevent',
};

export default function MyEventReducer(state = initialState, action: Action) {
  if (!action) return state;
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'FETCH_MYEVENT_LIST_FINISHED': {
      const fetchMyEvent = action as IFetchMyEvent;
      newState.list = fetchMyEvent.data;
      return { ...newState };
    }
    case 'SET_EVENT_ID': {
      const setId = action as ISetId;
      newState.selectedIdEvent = setId.id;
      return { ...newState };
    }
    case 'CHANGE_MODAL_MYEVENT_ACTION': {
      const modalAction = action as IModalAction;
      newState.modalAction = modalAction.typeAction;
      return { ...newState };
    }
    case 'SET_EVENT_DETAIL': {
      const setDetail = action as ISetDetail;
      newState.selectedEvent = setDetail.data;
      return { ...newState };
    }
  }
  return state;
}
