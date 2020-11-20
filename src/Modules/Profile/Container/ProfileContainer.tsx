import * as HomeAction from '../../Home/Store/HomeAction';
import * as ProfileAction from '../Store/ProfileAction';
import * as SelectorLogin from '../../Login/Selector/LoginSelector';
import * as SelectorProfile from '../Selector/ProfileSelector';
import * as SelectorTemplate from '../../Template/Selector/TemplateSelector';
import * as TemplateAction from '../../Template/Store/TemplateAction';

import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';

import ProfileComponent from '../Component/ProfileComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function ProfileContainer(props: any) {
  const {
    actionProfile,
    listData,
    actionTemplate,
    listProfile,
    actionHome,
  } = props;
  console.log('ini list data profile', listData);
  console.log('ini data profile', listProfile);

  useEffect(() => {
    actionProfile.fetchProfileListRequested();
  }, [actionProfile]);

  const handleDelete = (id: any) => {
    actionProfile.setPostinganProfileId(id);
    actionProfile.deletePostinganProfileRequested();
  };

  const handleUpdate = (val: any) => {
    actionProfile.setPostinganProfileId(val.id);
    actionProfile.setPostinganProfileDetail(val);
    console.log('data detail', val.descPost);
    actionProfile.changeModalAction('updatepostingan');
    actionTemplate.openModal('Profile');
  };

  const handleCancelModal = () => {
    actionProfile.changeModalAction('updatepostingan');
    actionTemplate.openModal('Profile');
  };

  const handleCommentShow = (id: any) => {
    console.log('comment show', id);
    actionHome.setPostinganId(id);
  };

  return (
    <ProfileComponent
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      handleCancelModal={handleCancelModal}
      dataProfile={listProfile}
      descPost={listData}
      handleCommentShow={handleCommentShow}
      {...props}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  listProfile: SelectorLogin.listSelector(),
  listData: SelectorProfile.listSelector(),
  modalUpdateIsShow: SelectorTemplate.modalProfileSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionProfile: bindActionCreators(ProfileAction, dispatch),
  actionHome: bindActionCreators(HomeAction, dispatch),
  actionTemplate: bindActionCreators(TemplateAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ProfileContainer);
