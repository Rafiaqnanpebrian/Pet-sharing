import * as HomeAction from '../Store/HomeAction';
import * as SelectorHome from '../Selector/HomeSelector';

import React, { useEffect, useState } from 'react';
import { bindActionCreators, compose } from 'redux';

import CommentComponent from '../Component/CommentComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function CommentContainer(props: any) {
  const { data, actionComment } = props;
  console.log('data comment', data);

  useEffect(() => {
    actionComment.fetchCommentListRequested();
  }, [actionComment]);

  const handleOnSubmit = () => {
    setTimeout(() => {
      actionComment.addCommentRequested();
    }, 1000);
  };

  return (
    <CommentComponent handleOnSubmit={handleOnSubmit} data={data} {...props} />
  );
}

const mapStateToProps = createStructuredSelector({
  data: SelectorHome.listCommentSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionComment: bindActionCreators(HomeAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(CommentContainer);
