import { Avatar, Button, Card, Col, Drawer, Form, Layout, Row } from 'antd';
import { Field, reduxForm } from 'redux-form';
import React, { useState } from 'react';

import CommentContainer from '../Container/CommentContainer';
import { InputPostingan } from '../../../Assets/Component/CInputText';
import history from '../../App/History';
import validate from '../Validation/HomeValidation';

const { Meta } = Card;
const { Content } = Layout;

function HomeComponent(props: any) {
  const { handleOnSubmit, data, invalid, handleCommentShow } = props;
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    history.push('/home');
    setVisible(false);
  };

  return (
    <div>
      <Card className="add-post-card">
        <Row>
          <Form
            initialValues={{ remember: false }}
            onFinish={handleOnSubmit}
            className="formAddShare"
          >
            <Col>
              <Field
                name="descPost"
                placeholder="Share Your Experience to the Community"
                component={InputPostingan}
              />
            </Col>
            <Col>
              <Form.Item>
                <Button
                  disabled={invalid}
                  className="btnShare"
                  type="primary"
                  htmlType="submit"
                >
                  Share
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Row>
      </Card>
      <Layout>
        <Content>
          {data.map((val: any, index: any) => {
            return (
              <Card className="postcard" key={index}>
                <Meta
                  avatar={
                    <Avatar src="https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                  }
                  title={val.namePet}
                />
                <p className="textPost">{val.descPost}</p>
                <Button
                  type="primary"
                  onClick={() => {
                    showDrawer();
                    handleCommentShow(val.id);
                  }}
                  className="btnShare"
                >
                  Comment
                </Button>
                <Drawer
                  title="Comment"
                  placement="bottom"
                  closable={false}
                  onClose={onClose}
                  visible={visible}
                  height={'70%'}
                >
                  <CommentContainer />
                </Drawer>
              </Card>
            );
          })}
        </Content>
      </Layout>
    </div>
  );
}

export default reduxForm({
  form: 'HomeForm',
  validate,
  enableReinitialize: true,
})(HomeComponent);
