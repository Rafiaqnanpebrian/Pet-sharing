import { Action } from 'redux';

export interface ISetUser extends Action {
  id: string;
}

export interface ISetUserNamePet extends Action {
  namePet: string;
}

export interface ISetUserDetail extends Action {
  data: object;
}

export function loginUserRequested() {
  return {
    type: 'LOGIN_USER_REQUESTED',
  };
}

export function setUser(id: string): ISetUser {
  return {
    type: 'SET_USER',
    id,
  };
}

export function setUserNamePet(namePet: string): ISetUserNamePet {
  return {
    type: 'SET_USER_NAMEPET',
    namePet,
  };
}

export function setUserDetail(data: object): ISetUserDetail {
  return {
    type: 'SET_USER_DETAIL',
    data,
  };
}
