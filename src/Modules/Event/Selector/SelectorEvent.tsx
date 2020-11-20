import { createSelector } from 'reselect';

const AllEventState = (state: any) => state.AllEventState;
const AddEventFormState = (state: any) => state.form.EventForm.values;

export const listSelector = () =>
  createSelector(AllEventState, state => state.list);
export const modalActionSelector = () =>
  createSelector(AllEventState, state => state.modalAction);
export const SelectedEventSelector = () =>
  createSelector(AllEventState, state => state.selectedEvent);

export const formNameEventSelector = () =>
  createSelector(AddEventFormState, state => state.nameEvent);
export const formLocationSelector = () =>
  createSelector(AddEventFormState, state => state.location);
export const formDateSelector = () =>
  createSelector(AddEventFormState, state => state.date);
export const formDescEvent = () =>
  createSelector(AddEventFormState, state => state.descEvent);
