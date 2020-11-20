import { createSelector } from 'reselect';

const MyEventState = (state: any) => state.MyEventState;
const MyEventFormState = (state: any) => state.form.MyEventForm.values;

export const listSelector = () =>
  createSelector(MyEventState, state => state.list);
export const idSelector = () =>
  createSelector(MyEventState, state => state.selectedIdEvent);
export const modalActionSelector = () =>
  createSelector(MyEventState, state => state.modalAction);
export const selectedEventSelector = () =>
  createSelector(MyEventState, state => state.selectedEvent);

export const formNameEventSelector = () =>
  createSelector(MyEventFormState, state => state.nameEvent);
export const formLocationSelector = () =>
  createSelector(MyEventFormState, state => state.location);
export const formDateSelector = () =>
  createSelector(MyEventFormState, state => state.date);
export const formDescEvent = () =>
  createSelector(MyEventFormState, state => state.descEvent);
