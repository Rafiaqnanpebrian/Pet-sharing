import './App.css';
import {} from 'module';

import { BrowserRouter, Router, Switch } from 'react-router-dom';

import LoginContainer from './Modules/Login/Container/LoginContainer';
import Navigation from './Modules/App/Navigation';
import { Provider } from 'react-redux';
import React from 'react';
import history from './Modules/App/History';
import { store } from './Modules/App/ConfigureStore';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Navigation />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
