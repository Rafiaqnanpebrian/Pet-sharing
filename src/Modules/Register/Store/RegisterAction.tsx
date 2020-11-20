import { Action } from 'redux';

export function registerUserRequested() {
  return {
    type: 'REGISTER_USER_REQUESTED',
  };
}
