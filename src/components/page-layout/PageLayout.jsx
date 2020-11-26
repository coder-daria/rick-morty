import React, { useCallback, useState, useMemo } from 'react';
import { instanceOf, func, number, shape, bool } from 'prop-types';
import { Button } from 'antd';

import { EMPTY_ARRAY, EMPTY_OBJECT } from '../../common/constants';
import { selectedListItemVar } from '../../apollo/cache';

import { StyledTable, Bold, PageInfo } from './PageLayout.styles';

function PageLayout({
  columns,
  loading,
  pageInfo,
  setCurrentPage,
  tableData,
  toggleDrawer,
}) {
  const [nextPage, setNextPage] = useState(2);

  const renderActionButton = useCallback(
    data => (
      <Button
        onClick={() => {
          selectedListItemVar(data.id);
          toggleDrawer(true);
        }}
      >
        View
      </Button>
    ),
    [toggleDrawer],
  );

  const actionColumn = useMemo(
    () => ({
      title: '',
      key: '',
      render: data => renderActionButton(data),
    }),
    [renderActionButton],
  );

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
          of<Bold>{pageInfo?.count}</Bold>entries
        </span>
      </PageInfo>
      <StyledTable
        rowKey={record => record.id}
        tableLayout='fixed'
        loading={loading}
        onChange={handleSetCurrentPage}
        columns={[...columns, actionColumn]}
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
  columns: instanceOf(Array),
  loading: bool.isRequired,
  pageInfo: shape({
    count: number,
    next: number,
    pages: number,
    prev: number,
  }),
  setCurrentPage: func.isRequired,
  tableData: instanceOf(Array),
  toggleDrawer: func.isRequired,
};

PageLayout.defaultProps = {
  columns: EMPTY_ARRAY,
  pageInfo: EMPTY_OBJECT,
  tableData: EMPTY_ARRAY,
};

export default PageLayout;
