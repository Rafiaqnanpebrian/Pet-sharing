import { Avatar, Card, Col, Form, Input, Layout, Menu, Row } from 'antd';
import { Field, reduxForm } from 'redux-form';
import Icon, {
  HomeOutlined,
  NotificationOutlined,
  SettingOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import React from 'react';
import { SearchComp } from '../../../Assets/Component/CInputText';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
const { Meta } = Card;

function TemplateComponent(props: any) {
  const { handleOnSubmit } = props;
  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          background: '#00BCF1',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={require('../../../Assets/Images/petlogo.svg')}
          style={{
            width: 140,
            height: 50,
          }}
        />
        <Meta
          avatar={
            <Avatar src="https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
          }
          style={{ position: 'absolute', right: 20 }}
        />
      </Header>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          zIndex: 1,
          left: 25,
          marginTop: 80,
          marginLeft: 10,
        }}
        theme="light"
      >
        <Menu theme="light" mode="inline">
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
            style={{ marginBottom: 10 }}
          >
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<NotificationOutlined />}
            style={{ marginBottom: 10 }}
          >
            <Link to="/event">Event</Link>
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<UserOutlined />}
            style={{ marginBottom: 10 }}
          >
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<StarOutlined />}
            style={{ marginBottom: 10 }}
          >
            <Link to="/myevent">My Event</Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<SettingOutlined />}
            style={{ marginBottom: 10 }}
          >
            <Link to="/setting">Setting</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="content">
        <Row>
          <Col>{props.children}</Col>
          <Col>
            <Form>
              <Field
                name="search"
                placeholder="Search Something"
                onSearch={handleOnSubmit}
                component={SearchComp}
              />
            </Form>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
}

export default reduxForm({
  form: 'SearchForm',
  enableReinitialize: true,
})(TemplateComponent);
