import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import EventContainer from '../Event/Container/EventContainer';
import HomeContainer from '../Home/Container/HomeContainer';
import LoginContainer from '../Login/Container/LoginContainer';
import MyEventContainer from '../MyEvent/Container/MyEventContainer';
import ProfileContainer from '../Profile/Container/ProfileContainer';
import RegisterContainer from '../Register/Container/RegisterContainer';
import SearchContainer from '../Search/Container/SearchContainer';
import SettingContainer from '../Setting/Container/SettingContainer';
import WithTemplate from './WithTemplate';

export default class Navigation extends Component {
  render() {
    const home = WithTemplate(HomeContainer);
    const event = WithTemplate(EventContainer);
    const profile = WithTemplate(ProfileContainer);
    const setting = WithTemplate(SettingContainer);
    const MyEvent = WithTemplate(MyEventContainer);
    const search = WithTemplate(SearchContainer);
    const login = LoginContainer;
    const register = RegisterContainer;

    return localStorage.getItem('data_id') ? (
      <>
        <Route path="/home" exact={true} component={home} />
        <Route path="/event" exact={true} component={event} />
        <Route path="/profile" exact={true} component={profile} />
        <Route path="/setting" exact={true} component={setting} />
        <Route path="/Myevent" exact={true} component={MyEvent} />
        <Route path="/Search" exact={true} component={search} />
        <Route path="/login" component={login}>
          <Redirect to="/home" />
        </Route>
        <Route path="/register" component={register}>
          <Redirect to="/home" />
        </Route>
      </>
    ) : (
      <>
        <Route path="/register" exact={true} component={register} />
        <Route path="/login" exact={true} component={login} />
        <Route path="/" exact={true} component={login}>
          <Redirect to="/register" />
        </Route>
        <Route path="*" component={login}>
          <Redirect to="/login" />
        </Route>
      </>
    );
  }
}
