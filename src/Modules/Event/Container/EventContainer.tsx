import * as EventAction from '../Store/EventAction';
import * as SelectorEvent from '../Selector/SelectorEvent';
import * as SelectorTemplate from '../../Template/Selector/TemplateSelector';
import * as TemplateAction from '../../Template/Store/TemplateAction';

import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';

import EventComponent from '../Component/EventComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function EventContainer(props: any) {
  const { actionEvent, listData, actionTemplate } = props;
  console.log('ini list data event', listData);

  useEffect(() => {
    actionEvent.fetchEventListRequested();
  }, [actionEvent]);

  const handleAddEvent = () => {
    actionEvent.changeModalAction('addevent');
    actionTemplate.openModal('Event')
  }

  const handleCancelModal = () => {
    actionEvent.changeModalAction('addevent');
    actionTemplate.openModal('Event')
  }

  return <EventComponent
           handleCancelModal={handleCancelModal} 
           handleAddEvent={handleAddEvent} 
           data={listData} 
           {...props} 
         />;
}

const mapStateToProps = createStructuredSelector({
  listData: SelectorEvent.listSelector(),
  modalEventIsShow: SelectorTemplate.modalEventSelector(),
});
const mapDispatchToProps = (dispatch: any) => ({
  actionEvent: bindActionCreators(EventAction, dispatch),
  actionTemplate: bindActionCreators(TemplateAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(EventContainer);
