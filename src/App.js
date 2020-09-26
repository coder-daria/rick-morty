import React, { useState } from 'react';
import 'sanitize.css';
import 'antd/dist/antd.css';

import { Button, Tabs } from 'antd';
import { Container } from './App.styles';

import { PageLayout } from './components';

const data = [
  {
    key: '1',
    name: 'John Brown',
    species: 'Human',
    origin: 'Earth',
    location: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Roberto',
    species: 'Human',
    origin: 'Earth',
    location: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Tom',
    species: 'Alien',
    origin: 'Mars',
    location: 'Sidney No. 1 Lake Park',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Species',
    dataIndex: 'species',
    key: 'species',
  },
  {
    title: 'Origin',
    dataIndex: 'origin',
    key: 'origin',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => <Button>View</Button>,
  },
];

const TABS_DATA = [
  {
    tabName: 'Characters',
    key: 1,
    content: <PageLayout columns={columns} data={data} />,
  },
  {
    tabName: 'Episodes',
    key: 2,
    content: <PageLayout columns={columns} data={data} />,
  },
  {
    tabName: 'Locations',
    key: 3,
    content: <PageLayout columns={columns} data={data} />,
  },
];

const { TabPane } = Tabs;

function App() {
  const [currentView, setView] = useState('Characters');

  return (
    <Container>
      <Tabs onEdit={(e) => console.log(e)}>
        {TABS_DATA.map(tab => (
          <TabPane
            tab={<span>{tab.tabName}</span>}
            key={tab.key}
            active={tab.tabName === currentView}
          >
            <PageLayout columns={columns} data={data} />
          </TabPane>
        ))}
      </Tabs>
    </Container>
  );
}

export default App;
