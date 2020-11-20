import { Avatar, Button, Comment, Form, Input, Layout } from 'antd';
import { Field, reduxForm } from 'redux-form';

import { InputTextArea } from '../../../Assets/Component/CInputText';
import React from 'react';

const { Content } = Layout;

function CommentComponent(props: any) {
  const { data, handleOnSubmit } = props;
  return (
    <Content>
      {data.map((val: any, index: any) => {
        return (
          <Comment
            key={index}
            author={<a>{val.userName}</a>}
            avatar={
              <Avatar
                src="https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Han Solo"
              />
            }
            content={<p>{val.descComment}</p>}
          />
        );
      })}
      <Field
        name="descComment"
        component={InputTextArea}
        placeholder="Input Your Comment"
      />
      <Form.Item>
        <Button
          onClick={handleOnSubmit}
          htmlType="submit"
          type="primary"
          className="btnShare"
        >
          Add Comment
        </Button>
      </Form.Item>
    </Content>
  );
}

export default reduxForm({
  form: 'CommentForm',
  enableReinitialize: true,
})(CommentComponent);
