import * as HomeAction from '../../Home/Store/HomeAction';
import * as SearchAction from '../Store/SearchAction';
import * as SelectorSearch from '../Selector/SearchSelector';

import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';

import SearchComponent from '../Component/SearchComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function SearchContainer(props: any) {
  const { listData, actionSearch, actionHome } = props;
  console.log('data search', listData);

  useEffect(() => {
    actionSearch.fetchSearchListRequested();
  }, [actionSearch]);

  const handleCommentShow = (id: any) => {
    console.log('comment show', id);
    actionHome.setPostinganId(id);
  };

  return (
    <SearchComponent
      handleCommentShow={handleCommentShow}
      data={listData}
      {...props}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  listData: SelectorSearch.listSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionSearch: bindActionCreators(SearchAction, dispatch),
  actionHome: bindActionCreators(HomeAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(SearchContainer);
