import * as EventAction from '../Store/EventAction';
import * as SelectorEvent from '../Selector/SelectorEvent';

import { bindActionCreators, compose } from 'redux';

import ModalEventComponent from '../Component/ModalEventComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function ModalEventContainer(props: any) {
  const { actionEvent, actionTemplate, eventDetail } = props;
  const handleOnSubmit = () => {
    actionEvent.submitAddEventRequested();
  };
  const initialValues: any = {};

  return (
    <ModalEventComponent
      initialValues={initialValues}
      handleOnSubmit={handleOnSubmit}
      {...props}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  //inventoryDetail: SelectorInventory.selectedInventorySelector(),
  //modalAction: SelectorInventory.modalActionSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionEvent: bindActionCreators(EventAction, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ModalEventContainer);
