import * as SelectorTemplate from '../../Template/Selector/TemplateSelector';
import * as SettingAction from '../Store/SettingAction';
import * as TemplateAction from '../../Template/Store/TemplateAction';

import { bindActionCreators, compose } from 'redux';

import React from 'react';
import SettingComponent from '../Component/SettingComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import history from '../../App/History';

function SettingContainer(props: any) {
  const { actionSetting, actionTemplate } = props;
  const handleUpdate = () => {
    actionSetting.changeModalAction('updateprofile');
    actionTemplate.openModal('Setting');
  };

  const handleCancelModal = () => {
    actionSetting.changeModalAction('updateprofile');
    actionTemplate.openModal('Setting');
  };

  const handleLogout = () => {
    localStorage.removeItem('data_id');
    history.push('/login');
  };

  return (
    <SettingComponent
      handleCancelModal={handleCancelModal}
      handleUpdate={handleUpdate}
      handleLogout={handleLogout}
      {...props}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  modalUpdateProfileIsShow: SelectorTemplate.modalSettingSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionSetting: bindActionCreators(SettingAction, dispatch),
  actionTemplate: bindActionCreators(TemplateAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(SettingContainer);
