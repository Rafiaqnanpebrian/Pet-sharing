import { Button, Form, Modal } from 'antd';
import { Field, reduxForm } from 'redux-form';

import { InputTextArea } from '../../../Assets/Component/CInputText';
import React from 'react';

function ModalUpdatePostinganComponent(props: any) {
  const {
    handleCancelModal,
    modalUpdateIsShow,
    handleOnSubmit,
    invalid,
  } = props;
  return (
    <Modal
      title="Edit Your Post"
      visible={modalUpdateIsShow}
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
          Submit
        </Button>,
      ]}
    >
      <Form onFinish={handleOnSubmit} layout="vertical">
        <Field
          name="descPost"
          placeholder="Description"
          component={InputTextArea}
        />
      </Form>
    </Modal>
  );
}

export default reduxForm({
  form: 'myPostinganForm',
  enableReinitialize: true,
})(ModalUpdatePostinganComponent);
