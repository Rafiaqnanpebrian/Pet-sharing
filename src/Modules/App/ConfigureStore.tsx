import * as _ from 'lodash';

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import AllEventState from '../Event/Store/EventReducer';
import AllPostinganState from '../Home/Store/HomeReducer';
import LoginState from '../Login/Store/LoginReducer';
import MyEventState from '../MyEvent/Store/MyEventReducer';
import MyPostinganState from '../Profile/Store/ProfileReducer';
import Saga from './SagaMiddleware';
import SearchState from '../Search/Store/SearchReducer';
import SettingState from '../Setting/Store/SettingReducer';
import TemplateState from '../Template/Store/TemplateReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';
import history from './History';
import storage from 'redux-persist/lib/storage';

const combinedReducer = combineReducers({
  SearchState,
  SettingState,
  LoginState,
  TemplateState,
  AllPostinganState,
  MyPostinganState,
  AllEventState,
  MyEventState,
  router: connectRouter(history),
  form: formReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['TemplateState'],
};
const persistedReducer = persistReducer(persistConfig, combinedReducer);

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  _.has(window, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__')
    ? composeWithDevTools({ trace: true, traceLimit: 1000 })
    : compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
export const persistor = persistStore(store);
sagaMiddleware.run(Saga);
