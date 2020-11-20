import { DatePicker, Form, Input, Select, Space } from 'antd';

import React from 'react';
import moment from 'moment';

const { TextArea, Search } = Input;

interface IInputGender {
  input: any;
  options: any;
  meta: any;
}

interface IINputText {
  input: any;
  meta: any;
  label?: any;
  placeholder?: any;
}

interface IDatePicker {
  meta: any;
  input: any;
}

interface ISearch {
  meta: any;
  input: any;
  placeholder: any;
  onSearch: any;
}

export const SearchComp = ({
  input,
  meta: { touched, error },
  placeholder,
  onSearch,
}: ISearch) => {
  return (
    <Form.Item
    // validateStatus={touched && error !== undefined ? 'error' : ''}
    // help={touched && error !== undefined ? error : ''}
    // style={{ marginBottom: 0 }}
    >
      <Search
        placeholder={placeholder}
        onSearch={onSearch}
        style={{
          width: 350,
          height: 40,
          right: 35,
          marginTop: -15,
          position: 'fixed',
          zIndex: 1,
          borderRadius: 10,
        }}
        {...input}
      />
    </Form.Item>
  );
};

export const DatePickers = ({
  meta: { touched, error },
  input,
}: IDatePicker) => {
  return (
    <Form.Item
      validateStatus={touched && error !== undefined ? 'error' : ''}
      help={touched && error !== undefined ? error : ''}
      style={{ marginBottom: 0 }}
    >
      <Space
        style={{ borderRadius: 5, marginBottom: 10 }}
        direction="vertical"
        size={12}
      >
        <DatePicker
          onChange={value => input.onChange(value)}
          format="YYYY-MM-DD HH:mm"
          showTime={{ defaultValue: moment('00:00:00', 'HH:mm') }}
        />
      </Space>
    </Form.Item>
  );
};

export const InputText = ({
  input,
  meta: { touched, error },
  placeholder,
}: IINputText) => {
  return (
    <Form.Item
      validateStatus={touched && error !== undefined ? 'error' : ''}
      help={touched && error !== undefined ? error : ''}
      style={{ marginBottom: 0 }}
    >
      <Input style={{ borderRadius: 5 }} placeholder={placeholder} {...input} />
    </Form.Item>
  );
};

export const InputTextArea = ({
  input,
  meta: { touched, error },
  placeholder,
}: IINputText) => {
  return (
    <Form.Item
      validateStatus={touched && error !== undefined ? 'error' : ''}
      help={touched && error !== undefined ? error : ''}
      style={{ marginBottom: 0 }}
    >
      <TextArea
        style={{ borderRadius: 5 }}
        placeholder={placeholder}
        rows={4}
        {...input}
      />
    </Form.Item>
  );
};

export const InputPostingan = ({
  input,
  meta: { touched, error },
  placeholder,
}: IINputText) => {
  return (
    <Form.Item
      validateStatus={touched && error !== undefined ? 'error' : ''}
      help={touched && error !== undefined ? error : ''}
      style={{ marginBottom: 0 }}
    >
      <Input
        bordered={false}
        style={{ borderRadius: 5, width: 500 }}
        placeholder={placeholder}
        {...input}
      />
    </Form.Item>
  );
};

export const InputTextPassword = ({
  input,
  meta: { touched, error },
  placeholder,
}: IINputText) => {
  return (
    <Form.Item
      validateStatus={touched && error !== undefined ? 'error' : ''}
      help={touched && error !== undefined ? error : ''}
      style={{ marginBottom: 0 }}
    >
      <Input.Password
        style={{ borderRadius: 5 }}
        placeholder={placeholder}
        {...input}
      />
    </Form.Item>
  );
};

export const IInputGender = ({
  input,
  options,
  meta: { touched, error },
}: IInputGender) => {
  const { onChange, onBlur, onFocus } = input;
  return (
    <Form.Item
      validateStatus={touched && error !== undefined ? 'error' : ''}
      help={touched && error !== undefined ? error : ''}
      style={{ marginBottom: 0 }}
    >
      <Select
        value={input.value.value}
        onChange={value => input.onChange(value)}
        onFocus={onFocus}
        options={options}
      ></Select>
    </Form.Item>
  );
};
