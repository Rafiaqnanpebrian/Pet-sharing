import {
  IFetchProfile,
  IModalAction,
  ISetDetail,
  ISetId,
} from './ProfileAction';

import { Action } from 'redux';

export const initialState: any = {
  list: [],
  selectedPostinganProfile: {},
  selectedIdPostinganProfile: '',
  modalAction: 'updatepostingan',
};

export default function ProfileReducer(state = initialState, action: Action) {
  if (!action) return state;
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'FETCH_PROFILE_LIST_FINISHED': {
      const fetchProfile = action as IFetchProfile;
      newState.list = fetchProfile.data;
      return { ...newState };
    }
    case 'SET_POSTINGAN_PROFILE_ID': {
      const setId = action as ISetId;
      newState.selectedIdPostinganProfile = setId.id;
      return { ...newState };
    }
    case 'SET_PROFILE_DETAIL': {
      const setDetail = action as ISetDetail;
      newState.selectedPostinganProfile = setDetail.data;
      return { ...newState };
    }
    case 'CHANGE_MODAL_PROFILE_ACTION': {
      const modalAction = action as IModalAction;
      newState.modalAction = modalAction.typeAction;
      return { ...newState };
    }
  }
  return state;
}
