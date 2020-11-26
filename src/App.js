import React from 'react';
import 'sanitize.css';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

import { Characters, Episodes, Locations } from './views';
import { Container, StyledTabs } from './App.styles';

const TABS_DATA = [
  {
    content: <Characters />,
    tabName: 'Characters',
  },
  {
    content: <Episodes />,
    tabName: 'Episodes',
  },
  {
    content: <Locations />,
    tabName: 'Locations',
  },
];

const { TabPane } = Tabs;

function App() {
  return (
    <Container>
      <StyledTabs>
        {TABS_DATA.map(({ tabName, content }) => (
          <TabPane key={tabName} tab={<span>{tabName}</span>}>
            {content}
          </TabPane>
        ))}
      </StyledTabs>
    </Container>
  );
}

export default App;
