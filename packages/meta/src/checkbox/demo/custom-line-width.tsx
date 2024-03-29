import React from 'react';
import { Checkbox, ConfigProvider } from '@nicecode/meta';

const App: React.FC = () => (
  <>
    <ConfigProvider
      theme={{
        cssVar: false,
        components: {
          Checkbox: {
            lineWidth: 6,
          },
        },
      }}
    >
      <Checkbox checked />
      <Checkbox />
    </ConfigProvider>
    <Checkbox checked />
    <Checkbox />
  </>
);

export default App;
