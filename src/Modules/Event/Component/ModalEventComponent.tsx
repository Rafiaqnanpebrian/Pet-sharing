import { Button, Modal } from 'antd';
import {
  DatePickers,
  InputText,
  InputTextArea,
} from '../../../Assets/Component/CInputText';
import { Field, reduxForm } from 'redux-form';

import React from 'react';
import validate from '../Validation/EventValidation';

function ModalEventComponent(props: any) {
  const {
    handleCancelModal,
    modalEventIsShow,
    handleOnSubmit,
    invalid,
  } = props;

  return (
    <Modal
      visible={modalEventIsShow}
      title="Add Event"
      onOk={handleOnSubmit}
      onCancel={handleCancelModal}
      footer={[
        <Button key="back" onClick={handleCancelModal}>
          Back
        </Button>,
        <Button
          style={{ background: '#f35525', color: 'white' }}
          key="submit"
          type="primary"
          onClick={handleOnSubmit}
          disabled={invalid}
        >
          Add
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
  form: 'EventForm',
  validate,
  enableReinitialize: true,
})(ModalEventComponent);
