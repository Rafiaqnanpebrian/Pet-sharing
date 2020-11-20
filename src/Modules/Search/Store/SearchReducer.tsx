import { Action } from 'redux';
import { IFetchSearch } from './SearchAction';

export const initialState: any = {
  list: [],
};

export default function SearchReducer(state = initialState, action: Action) {
  if (!action) return state;
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'FETCH_SEARCH_LIST_FINISHED': {
      const fetchProfile = action as IFetchSearch;
      newState.list = fetchProfile.data;
      return { ...newState };
    }
  }
  return state;
}
