import * as MyEventAction from '../Store/MyEventAction';
import * as SelectorMyEvent from '../Selector/SelectorMyevent';
import * as SelectorTemplate from '../../Template/Selector/TemplateSelector';
import * as TemplateAction from '../../Template/Store/TemplateAction';

import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';

import MyEventComponent from '../Component/MyEventComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function MyEventContainer(props: any) {
  const { actionMyEvent, listData, actionTemplate } = props;
  console.log('ini list data Myevent', listData);

  const handleDelete = (id: any) => {
    actionMyEvent.setEventId(id);
    console.log('id event', id);
    actionMyEvent.deleteEventRequested();
  };

  const handleUpdate = (val: any) => {
    actionMyEvent.setEventId(val.id);
    actionMyEvent.setEventDetail(val);
    actionMyEvent.changeModalAction('updateevent');
    actionTemplate.openModal('MyEvent');
  };

  useEffect(() => {
    actionMyEvent.fetchMyEventListRequested();
  }, [actionMyEvent]);

  const handleCancelModal = () => {
    actionMyEvent.changeModalAction('updateevent');
    actionTemplate.openModal('MyEvent');
  };

  return (
    <MyEventComponent
      data={listData}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
      handleCancelModal={handleCancelModal}
      {...props}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  listData: SelectorMyEvent.listSelector(),
  modalMyEventIsShow: SelectorTemplate.modalMyEventSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionMyEvent: bindActionCreators(MyEventAction, dispatch),
  actionTemplate: bindActionCreators(TemplateAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(MyEventContainer);
