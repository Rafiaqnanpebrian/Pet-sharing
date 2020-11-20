import { ISetUser, ISetUserDetail, ISetUserNamePet } from './LoginAction';

import { Action } from 'redux';

export const initialState: any = {
  list: {},
  userid: '',
  userNamePet: '',
  selectedLogin: {},
};

export default function LoginReducer(state = initialState, action: Action) {
  if (!action) return state;
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'SET_USER': {
      const setUser = action as ISetUser;
      newState.userid = setUser.id;
      return { ...newState };
    }
    case 'SET_USER_NAMEPET': {
      const setDetail = action as ISetUserNamePet;
      newState.userNamePet = setDetail.namePet;
      return { ...newState };
    }
    case 'SET_USER_DETAIL': {
      const setDetail = action as ISetUserDetail;
      newState.list = setDetail.data;
      return { ...newState };
    }
  }
  return state;
}
