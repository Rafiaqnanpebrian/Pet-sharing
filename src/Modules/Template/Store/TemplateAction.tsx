import { Action } from 'redux';

export interface IOpenModal extends Action {
    component: string;
  }

  export function openModal(component: string): IOpenModal {
    return {
      type: 'OPEN_MODAL',
      component,
    };
  }  