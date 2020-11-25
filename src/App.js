import React from 'react';
import 'sanitize.css';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

import { Container, StyledTabs } from './App.styles';
import { Characters } from './views';

const TABS_DATA = [
  {
    content: <Characters />,
    tabName: 'Characters',
  },
  {
    content: 'In process',
    tabName: 'Episodes',
  },
  {
    content: 'In process',
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
