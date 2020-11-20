import * as LoginAction from '../Store/LoginAction';

import { bindActionCreators, compose } from 'redux';

import LoginComponent from '../Component/LoginComponent';
import React from 'react';
import { connect } from 'react-redux';

function LoginContainer(props: any) {
  const { actionLogin } = props;
  const handleOnSubmit = () => {
    actionLogin.loginUserRequested();
  };
  const initialValues: any = {};
  return (
    <LoginComponent
      initialValues={initialValues}
      handleOnSubmit={handleOnSubmit}
      {...props}
    />
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  actionLogin: bindActionCreators(LoginAction, dispatch),
});
const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(LoginContainer);
