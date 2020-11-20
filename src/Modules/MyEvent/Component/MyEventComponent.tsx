import { Button, Card, DatePicker, Dropdown, Input, Layout, Menu } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

import ModalUpdateEventContainer from '../Container/ModalUpdateEventContainer';
import React from 'react';
import moment from 'moment';

const { Meta } = Card;
const { Content } = Layout;

export default function MyEventComponent(props: any) {
  const { data, handleDelete, handleUpdate } = props;
  return (
    <Layout>
      <Layout>
        <Content>
          {data.map((val: any, index: any) => {
            return (
              <Card
                key={index}
                hoverable
                className="postcard"
                cover={
                  <img
                    alt="example"
                    src="https://images.dailyhive.com/20180808134301/shutterstock_1015812967.jpg"
                    style={{
                      height: 300,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                }
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 12,
                    alignItems: 'center',
                  }}
                >
                  <Meta title={val.nameEvent} />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <EnvironmentOutlined
                      style={{ fontSize: 11, marginRight: 5, color: '#8C8C8C' }}
                    />
                    <Meta
                      style={{ fontSize: 14, marginRight: 5 }}
                      description={val.location}
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
                            key="1"
                            onClick={() => handleDelete(val.id)}
                            icon={<DeleteOutlined />}
                            danger
                          >
                            Delete
                          </Menu.Item>
                        </Menu>
                      )}
                    >
                      <a style={{ fontSize: 24, marginLeft: 10 }}>
                        <EllipsisOutlined />
                      </a>
                    </Dropdown>
                    <ModalUpdateEventContainer {...props} />
                  </div>
                </div>
                <Meta
                  style={{ fontSize: 14, marginBottom: 10 }}
                  description={moment(val.date).format('d MMMM yy, hh.mm')}
                />
                <Meta description={val.descEvent} />
                <Button
                  style={{
                    width: 400,
                    height: 40,
                    background: '#ff5722',
                    color: 'white',
                    marginTop: 25,
                    borderRadius: 10,
                    marginLeft: 85,
                  }}
                >
                  Interested
                </Button>
              </Card>
            );
          })}
        </Content>
      </Layout>
    </Layout>
  );
}
