import React from 'react';
import { Select, Space } from '@nicecode/meta';

const App: React.FC = () => (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      bordered={false}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
      bordered={false}
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
  </Space>
);

export default App;
