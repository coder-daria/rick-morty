import React from 'react';
import { instanceOf } from 'prop-types';

import { Table, Button } from 'antd';
import { Container } from './PageLayout.styles';

function PageLayout({ columns, data }) {
  return (
    <Container>
      <div>
        Showing <span>5</span> of <span>25</span> entries
      </div>
      <div>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Container>
  );
}

PageLayout.propTypes = {
  columns: instanceOf(Array).isRequired,
  data: instanceOf(Array).isRequired,
};

export default PageLayout;
