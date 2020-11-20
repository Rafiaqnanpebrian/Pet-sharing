import * as ProfileAction from '../Store/ProfileAction';
import * as SelectorProfile from '../Selector/ProfileSelector';

import { bindActionCreators, compose } from 'redux';

import ModalUpdatePostinganComponent from '../Component/ModalUpdatePostinganComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function ModalUpdatePostinganContainer(props: any) {
  const { actionProfile, postinganProfileDetail } = props;

  const handleOnSubmit = () => {
    actionProfile.updatePostinganRequested();
  };

  const initialValues: any = {};
  if (Object.keys(postinganProfileDetail).length > 0) {
    const { descPost } = postinganProfileDetail;
    initialValues.descPost = descPost;
  }
  return (
    <ModalUpdatePostinganComponent
      initialValues={initialValues}
      handleOnSubmit={handleOnSubmit}
      {...props}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  postinganProfileDetail: SelectorProfile.selectedPostinganSelector(),
  modalAction: SelectorProfile.modalActionSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionProfile: bindActionCreators(ProfileAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ModalUpdatePostinganContainer);
