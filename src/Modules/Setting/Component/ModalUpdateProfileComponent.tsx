import { Button, Form, Modal } from 'antd';
import { Field, reduxForm } from 'redux-form';
import {
  IInputGender,
  InputText,
  InputTextPassword,
} from '../../../Assets/Component/CInputText';

import React from 'react';
import validate from '../Validation/SettingValidation';

function ModalUpdateProfileComponent(props: any) {
  const {
    handleCancelModal,
    modalUpdateProfileIsShow,
    handleOnSubmit,
    invalid,
  } = props;
  const genderOptions = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
  ];
  return (
    <Modal
      title="Edit Profile"
      visible={modalUpdateProfileIsShow}
      onCancel={handleCancelModal}
      footer={[
        <Button key="back" onClick={handleCancelModal}>
          Back
        </Button>,
        <Button
          disabled={invalid}
          style={{ background: '#f35525' }}
          key="submit"
          type="primary"
          onClick={handleOnSubmit}
        >
          Edit
        </Button>,
      ]}
    >
      <Form onFinish={handleOnSubmit} layout="vertical">
        <Field placeholder="Name Pet" name="namePet" component={InputText} />
        <Field
          placeholder="Name Owner"
          name="nameOwner"
          component={InputText}
        />
        <Field
          placeholder="Gender"
          name="gender"
          component={IInputGender}
          options={genderOptions}
        />
        <Field placeholder="Age" name="age" component={InputText} />
        <Field placeholder="Email" name="email" component={InputText} />
        <Field
          type="password"
          placeholder="New Password"
          name="password"
          component={InputTextPassword}
        />
      </Form>
    </Modal>
  );
}

export default reduxForm({
  form: 'profileForm',
  validate,
  enableReinitialize: true,
})(ModalUpdateProfileComponent);
