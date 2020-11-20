import { Button, Card, Layout } from 'antd';

import ModalUpdateProfileContainer from '../Container/ModalUpdateProfileContainer';
import React from 'react';

export default function SettingComponent(props: any) {
  const { handleUpdate, handleLogout } = props;
  return (
    <Layout>
      <Card className="settingcard">
        <Button type="text" onClick={handleUpdate}>
          Edit Profile
        </Button>
        <br />
        <Button type="text" onClick={handleLogout}>
          Logout
        </Button>
        <ModalUpdateProfileContainer {...props} />
      </Card>
    </Layout>
  );
}
