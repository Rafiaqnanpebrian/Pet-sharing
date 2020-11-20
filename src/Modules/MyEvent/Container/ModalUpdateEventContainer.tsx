import * as MyEventAction from '../Store/MyEventAction';
import * as SelectorMyevent from '../Selector/SelectorMyevent';

import { bindActionCreators, compose } from 'redux';

import ModalUpdateEventComponent from '../Component/ModalUpdateEventComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function ModalUpdateEventContainer(props: any) {
  const { actionMyEvent, EventDetail } = props;

  const handleOnsubmit = () => {
    actionMyEvent.updateEventRequested();
  };
  const initialValues: any = {};
  if (Object.keys(EventDetail).length > 0) {
    const { nameEvent, location, date, descEvent } = EventDetail;
    initialValues.nameEvent = nameEvent;
    initialValues.location = location;
    initialValues.date = date;
    initialValues.descEvent = descEvent;
  }
  return (
    <ModalUpdateEventComponent
      initialValues={initialValues}
      handleOnSubmit={handleOnsubmit}
      {...props}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  EventDetail: SelectorMyevent.selectedEventSelector(),
  modalAction: SelectorMyevent.modalActionSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionMyEvent: bindActionCreators(MyEventAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ModalUpdateEventContainer);
