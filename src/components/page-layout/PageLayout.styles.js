import styled from 'styled-components';
import { Table } from 'antd';

export const Bold = styled.span`
  font-weight: 600;
  padding: 0 4px;
`;

export const PageInfo = styled.div`
  padding-left: 16px;
`;

export const StyledTable = styled(Table)`
  .ant-pagination-simple-pager {
    user-select: none;

    input {
      border: none;
      pointer-events: none;
    }
  }
`;
