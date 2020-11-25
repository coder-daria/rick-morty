import React, { useCallback, useState } from 'react';
import { instanceOf, func, number, shape, bool } from 'prop-types';
import { Button } from 'antd';

import { EMPTY_ARRAY, EMPTY_OBJECT } from '../../common/constants';
import { selectedListItemVar, isDrawerOpenVar } from '../../apollo/cache';

import { StyledTable, Bold, PageInfo } from './PageLayout.styles';

const getActionColumnData = () => ({
  title: 'Action',
  key: 'action',
  render: data => (
    <Button
      onClick={() => {
        selectedListItemVar(data.id);
        isDrawerOpenVar(true);
      }}
    >
      View
    </Button>
  ),
});

function PageLayout({ columns, loading, pageInfo, tableData, setCurrentPage }) {
  const [nextPage, setNextPage] = useState(2);

  const handleSetCurrentPage = useCallback(
    e => {
      if (nextPage === e.current) {
        setCurrentPage(e.current);
        setNextPage(e.current + 1);
      }
    },
    [nextPage, setCurrentPage],
  );

  return (
    <div>
      <PageInfo>
        <span>
          Showing<Bold>{tableData?.length}</Bold>
          of<Bold>{pageInfo?.count}</Bold> entries
        </span>
      </PageInfo>
      <StyledTable
        rowKey={record => record.id}
        tableLayout='fixed'
        loading={loading}
        onChange={handleSetCurrentPage}
        columns={[...columns, getActionColumnData()]}
        dataSource={tableData}
        pagination={{
          position: ['topLeft'],
          pageSize: 20,
          total: pageInfo.count,
          simple: true,
        }}
        scroll={{ y: 700 }}
      />
    </div>
  );
}

PageLayout.propTypes = {
  loading: bool.isRequired,
  columns: instanceOf(Array),
  tableData: instanceOf(Array),
  pageInfo: shape({
    pages: number,
    count: number,
    next: number,
    prev: number,
  }),
  setCurrentPage: func.isRequired,
};

PageLayout.defaultProps = {
  columns: EMPTY_ARRAY,
  tableData: EMPTY_ARRAY,
  pageInfo: EMPTY_OBJECT,
};

export default PageLayout;
