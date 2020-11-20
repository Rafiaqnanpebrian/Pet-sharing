import * as SelectorLogin from '../../Login/Selector/LoginSelector';
import * as SelectorSetting from '../Selector/SettingSelector';
import * as SettingAction from '../Store/SettingAction';

import { bindActionCreators, compose } from 'redux';

import ModalUpdateProfileComponent from '../Component/ModalUpdateProfileComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function ModalUpdateProfileContainer(props: any) {
  const { profileDetail, actionSetting } = props;

  const handleOnSubmit = () => {
    actionSetting.updateProfileRequested();
  };

  const initialValues: any = {};
  if (Object.keys(profileDetail).length > 0) {
    const { namePet, nameOwner, gender, age, email } = profileDetail;
    initialValues.namePet = namePet;
    initialValues.nameOwner = nameOwner;
    initialValues.gender = gender == 1 ? 'Male' : 'Female';
    initialValues.age = age;
    initialValues.email = email;
  }
  return (
    <ModalUpdateProfileComponent
      handleOnSubmit={handleOnSubmit}
      initialValues={initialValues}
      {...props}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  profileDetail: SelectorLogin.listSelector(),
  modalAction: SelectorSetting.modalActionSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionSetting: bindActionCreators(SettingAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ModalUpdateProfileContainer);
