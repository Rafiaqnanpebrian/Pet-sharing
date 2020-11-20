import { Button, Card, Col, Form, Layout, Row } from 'antd';
import { Field, reduxForm } from 'redux-form';
import {
  IInputGender,
  InputText,
  InputTextPassword,
} from '../../../Assets/Component/CInputText';

import { Bounce } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import React from 'react';
import validate from '../Validation/RegisterValidation';

function RegisterComponent(props: any) {
  const { handleOnSubmit, invalid } = props;
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
    <Layout
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        background: '#00BCF1',
      }}
    >
      <Row
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Col>
          <Bounce>
            <img
              style={{ width: 792, height: 695 }}
              src={require('../../../Assets/Images/peoplewithpet.svg')}
            />
          </Bounce>
        </Col>
        <Col>
          <img
            src={require('../../../Assets/Images/petlogo.svg')}
            style={{
              width: 544,
              height: 104,
            }}
          />
          <div style={{ justifyContent: 'center', display: 'flex' }}>
            <Card
              style={{
                width: 300,
                borderRadius: 10,
                marginTop: 30,
              }}
            >
              <p style={{ fontSize: 20, fontWeight: 'bold' }}>Register</p>
              <p style={{ color: '#BFBFBF' }}>
                Login or Register Your Account{' '}
              </p>
              <Form onFinish={handleOnSubmit}>
                <Field
                  placeholder="Name Pet"
                  name="namePet"
                  component={InputText}
                />
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
                  placeholder="Password"
                  name="password"
                  component={InputTextPassword}
                />
                <div style={{ display: 'grid' }}>
                  <Button
                    htmlType="submit"
                    disabled={invalid}
                    style={{
                      background: '#ff5722',
                      color: 'white',
                      borderRadius: 7,
                      width: 250,
                      height: 35,
                      marginBottom: 10,
                    }}
                  >
                    Register
                  </Button>
                  <Button
                    style={{
                      background: 'white',
                      color: '#ff5722',
                      borderColor: '#ff5722',
                      borderRadius: 7,
                      height: 35,
                      width: 250,
                    }}
                  >
                    <Link to="/login">Back to Login</Link>
                  </Button>
                </div>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default reduxForm({
  form: 'RegisterForm',
  validate,
  enableReinitialize: true,
})(RegisterComponent);
