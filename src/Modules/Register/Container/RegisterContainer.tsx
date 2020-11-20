import * as RegisterAction from '../Store/RegisterAction';
import * as SelectorRegister from '../Selector/RegisterSelector';

import { bindActionCreators, compose } from 'redux';

import React from 'react';
import RegisterComponent from '../Component/RegisterComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function RegisterContainer(props: any) {
  const { actionRegister } = props;
  const handleOnSubmit = () => {
    actionRegister.registerUserRequested();
  };
  const initialValues: any = {};
  return (
    <RegisterComponent
      initialValues={initialValues}
      handleOnSubmit={handleOnSubmit}
      {...props}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  // registerDetail: SelectorRegister.selectedRegisterSelector(),//data from reducer
});

const mapDispatchToProps = (dispatch: any) => ({
  actionRegister: bindActionCreators(RegisterAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(RegisterContainer);
