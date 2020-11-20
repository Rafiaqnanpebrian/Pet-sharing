import { Button, Modal } from 'antd';
import {
  DatePickers,
  InputText,
  InputTextArea,
} from '../../../Assets/Component/CInputText';
import { Field, reduxForm } from 'redux-form';

import React from 'react';

function ModalEventComponent(props: any) {
  const { handleCancelModal, modalMyEventIsShow, handleOnSubmit } = props;

  return (
    <Modal
      visible={modalMyEventIsShow}
      title="Add Event"
      onOk={handleOnSubmit}
      onCancel={handleCancelModal}
      footer={[
        <Button key="back" onClick={handleCancelModal}>
          Back
        </Button>,
        <Button
          style={{ background: '#f35525' }}
          key="submit"
          type="primary"
          onClick={handleOnSubmit}
        >
          Update
        </Button>,
      ]}
    >
      <Field name="nameEvent" component={InputText} placeholder="Name Event" />
      <Field name="location" component={InputText} placeholder="Location" />
      <Field
        name="descEvent"
        placeholder="Description"
        component={InputTextArea}
      />
      <Field name="date" component={DatePickers} />
    </Modal>
  );
}

export default reduxForm({
  form: 'MyEventForm',
  enableReinitialize: true,
})(ModalEventComponent);
