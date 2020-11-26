import styled from 'styled-components';
import { Tabs } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  height: 100vh;
`;

export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav-list {
    :first-child {
      margin-left: 10px;
    }
  }

  .ant-tabs-tab-btn {
    font-size: 1.2rem;
    padding: 0 15px;
  }

  .ant-pagination {
    margin-left: 16px;
  }
`;
