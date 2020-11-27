import React, { useCallback, useMemo } from 'react';
import { instanceOf, func, number, shape, bool } from 'prop-types';

import {
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
} from '../../common/constants/index';

import { selectedListItemVar } from '../../apollo/cache';

import { StyledTable, StyledButton, Bold, PageInfo } from './PageLayout.styles';

const NO_ENTRIES_PLACEHOLDER = 0;
const TABLE_HEIGHT = 700;

function PageLayout({
  columns,
  loading,
  pageInfo,
  setCurrentPage,
  tableData,
  toggleDrawer,
}) {
  const renderActionButton = useCallback(
    data => (
      <StyledButton
        onClick={() => {
          selectedListItemVar(data.id);
          toggleDrawer(true);
        }}
      >
        View
      </StyledButton>
    ),
    [toggleDrawer],
  );

  const actionColumn = useMemo(
    () => ({
      title: EMPTY_STRING,
      key: EMPTY_STRING,
      align: 'right',
      render: data => renderActionButton(data),
    }),
    [renderActionButton],
  );

  const handleSetCurrentPage = useCallback(
    page => setCurrentPage(page.current),
    [setCurrentPage],
  );

  const pageSize =
    pageInfo?.next === null
      ? (pageInfo?.count - tableData.length) / pageInfo.prev
      : tableData.length;

  const totalReachedItems = pageSize * (pageInfo.prev || 0) + tableData.length;

  return (
    <div>
      <PageInfo>
        <span>
          Showing<Bold>{totalReachedItems}</Bold>
          of<Bold>{pageInfo?.count || NO_ENTRIES_PLACEHOLDER}</Bold>entries
        </span>
      </PageInfo>
      <StyledTable
        rowKey={record => record.id}
        loading={loading}
        onChange={handleSetCurrentPage}
        columns={[...columns, actionColumn]}
        dataSource={tableData}
        pagination={{
          position: ['topLeft'],
          pageSize,
          total: pageInfo.count,
          simple: true,
        }}
        scroll={{ y: TABLE_HEIGHT }}
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
