import * as HomeAction from '../Store/HomeAction';
import * as SelectorHome from '../Selector/HomeSelector';

import React, { useEffect, useState } from 'react';
import { bindActionCreators, compose } from 'redux';

import HomeComponent from '../Component/HomeComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function HomeContainer(props: any) {
  const { actionHome, listData } = props;
  console.log('ini list data home', listData);

  const handleOnSubmit = () => {
    setTimeout(() => {
      actionHome.addPostinganRequested();
    }, 1000);
  };

  const handleCommentShow = (id: any) => {
    console.log('comment show', id);
    actionHome.setPostinganId(id);
  };

  useEffect(() => {
    actionHome.fetchHomeListRequested();
  }, [actionHome]);

  const initialValues: any = {};

  return (
    <HomeComponent
      data={listData}
      initialValues={initialValues}
      handleOnSubmit={handleOnSubmit}
      handleCommentShow={handleCommentShow}
      {...props}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  listData: SelectorHome.listSelector(),
});
const mapDispatchToProps = (dispatch: any) => ({
  actionHome: bindActionCreators(HomeAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(HomeContainer);
