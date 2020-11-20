import { Button, Card, DatePicker, Input, Layout, Modal, Space } from 'antd';
import { EnvironmentOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import ModalEventContainer from '../Container/ModalEventContainer';
import moment from 'moment';

const { Meta } = Card;
const { Content } = Layout;

export default function EventComponent(props: any) {
  const { data, handleAddEvent } = props;
  return (
    <Layout>
      <Card className="add-event-card">
        <p
          style={{
            color: 'white',
            position: 'absolute',
            top: 15,
            marginLeft: 40,
            fontSize: 16,
          }}
        >
          Invite to meet your community friends by holding an event
        </p>
        <Button
          style={{
            position: 'absolute',
            right: 20,
            top: 15,
            background: 'white',
            color: '#f35525',
            borderRadius: 5,
          }}
          onClick={handleAddEvent}
        >
          <PlusOutlined />
          Add event
        </Button>
        <ModalEventContainer {...props} />
      </Card>
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
                  }}
                >
                  <Meta title={val.nameEvent} />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <EnvironmentOutlined
                      style={{ fontSize: 11, marginRight: 5, color: '#8C8C8C' }}
                    />
                    <Meta style={{ fontSize: 14 }} description={val.location} />
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
