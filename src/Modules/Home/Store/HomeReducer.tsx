import { IFetchComment, IFetchHome, ISetId } from './HomeAction';

import { Action } from 'redux';

export const initialState: any = {
  selectedIdPostingan: '',
  list: [],
  listComment: [],
  selectedAddPostingan: {},
};

export default function HomeReducer(state = initialState, action: Action) {
  if (!action) return state;
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'FETCH_HOME_LIST_FINISHED': {
      const fetchHome = action as IFetchHome;
      newState.list = fetchHome.data;
      return { ...newState };
    }
    case 'FETCH_COMMENT_LIST_FINISHED': {
      const fetchComment = action as IFetchComment;
      newState.listComment = fetchComment.data;
      return { ...newState };
    }
    case 'SET_POSTINGAN_ID': {
      const setId = action as ISetId;
      newState.selectedIdPostingan = setId.id;
      return { ...newState };
    }
  }
  return state;
}
