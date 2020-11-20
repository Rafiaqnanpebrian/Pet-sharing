import { Avatar, Button, Card, Drawer, Dropdown, Layout, Menu } from 'antd';
import {
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';

import CommentContainer from '../Container/CommentContainer';
import ModalUpdatePostinganContainer from '../Container/ModalUpdatePostinganContainer';
import history from '../../App/History';

const { Meta } = Card;
const { Content } = Layout;

export default function ProfileComponent(props: any) {
  const {
    descPost,
    handleDelete,
    handleUpdate,
    dataProfile,
    handleCommentShow,
  } = props;

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    history.push('/profile');
    setVisible(false);
  };

  return (
    <Layout>
      <Layout>
        <Content>
          <Card
            className="profilecard"
            cover={
              <img
                alt="example"
                src="https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                style={{
                  height: 300,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
            }
            actions={[
              <>
                <p>My Post</p>
              </>,
            ]}
          >
            <div>
              <p style={{ fontSize: 24 }}>{dataProfile.namePet}</p>
              <p style={{ fontSize: 12 }}>Owner : {dataProfile.nameOwner}</p>
              <p style={{ fontSize: 12 }}>Age : {dataProfile.age} month</p>
              <p style={{ fontSize: 12 }}>
                Gender : {dataProfile.gender == 1 ? 'Male' : 'Female'}
              </p>
            </div>
          </Card>
          {descPost.map((val: any, index: any) => {
            return (
              <Card className="postcard" key={index}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Meta
                    avatar={
                      <Avatar src="https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    }
                    title={dataProfile.namePet}
                  />
                  <Dropdown
                    overlay={() => (
                      <Menu>
                        <Menu.Item
                          onClick={() => handleUpdate(val)}
                          key="2"
                          icon={<EditOutlined />}
                        >
                          Edit
                        </Menu.Item>
                        <Menu.Item
                          onClick={() => handleDelete(val.id)}
                          key="1"
                          icon={<DeleteOutlined />}
                          danger
                        >
                          Delete
                        </Menu.Item>
                      </Menu>
                    )}
                  >
                    <a style={{ fontSize: 24 }}>
                      <EllipsisOutlined />
                    </a>
                  </Dropdown>
                  <ModalUpdatePostinganContainer {...props} />
                </div>
                <p style={{ marginTop: 20 }}>{val.descPost}</p>
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
    </Layout>
  );
}
