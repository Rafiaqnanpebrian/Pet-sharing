import { Button, Card, Col, Form, Layout, Row } from 'antd';
import { Field, reduxForm } from 'redux-form';
import {
  InputText,
  InputTextPassword,
} from '../../../Assets/Component/CInputText';

import { Bounce } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import React from 'react';
import validate from '../Validation/LoginValidation';

function LoginComponent(props: any) {
  const { handleOnSubmit, invalid } = props;
  return (
    <Layout className="layoutLogin">
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
              className="peopleWithPet"
              src={require('../../../Assets/Images/peoplewithpet.svg')}
            />
          </Bounce>
        </Col>
        <Col>
          <img
            src={require('../../../Assets/Images/petlogo.svg')}
            className="petLogo"
          />
          <div className="cardLoginPosition">
            <Card className="cardLogin">
              <p className="textMasuk">Login</p>
              <p className="textUnderMasuk">Login or Register Your Account </p>
              <Form onFinish={handleOnSubmit}>
                <Field placeholder="Email" name="email" component={InputText} />
                <Field
                  type="password"
                  placeholder="Password"
                  name="password"
                  component={InputTextPassword}
                />
                <div className="btnCardLogin">
                  <Button
                    htmlType="submit"
                    disabled={invalid}
                    className="btnLogin"
                  >
                    Login
                  </Button>
                  <Button className="btnToRegister">
                    <Link to="/register">Register</Link>
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
  form: 'LoginForm',
  validate,
  enableReinitialize: true,
})(LoginComponent);
