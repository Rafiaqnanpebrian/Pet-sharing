import * as LoginAction from '../../Login/Store/LoginAction';
import * as SearchAction from '../../Search/Store/SearchAction';

import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';

import TemplateComponent from '../Component/TemplateComponent';
import { connect } from 'react-redux';

function TemplateContainer(props: any) {
  const { actionSearch, actionLogin } = props;

  useEffect(() => {
    const dataDetail: any = localStorage.getItem('data_detail');
    actionLogin.setUserDetail(JSON.parse(dataDetail));
    const dataUserId: any = localStorage.getItem('data_id');
    actionLogin.setUser(dataUserId);
    const dataNamePet: any = localStorage.getItem('data_namePet');
    actionLogin.setUserNamePet(dataNamePet);
  }, [actionLogin]);

  const handleOnSubmit = () => {
    actionSearch.fetchSearchListRequested();
  };

  return <TemplateComponent handleOnSubmit={handleOnSubmit} {...props} />;
}

const mapDispatchToProps = (dispatch: any) => ({
  actionLogin: bindActionCreators(LoginAction, dispatch),
  actionSearch: bindActionCreators(SearchAction, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(TemplateContainer);
