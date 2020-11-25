import React, { useCallback } from 'react';
import { bool, node, string } from 'prop-types';
import { Drawer as AntdDrawer } from 'antd';
import { useReactiveVar } from '@apollo/client';

import { isDrawerOpenVar, selectedListItemVar } from '../../apollo/cache';

const DRAWER_PROPS = {
  PLACEMENT: 'right',
  CLOSABLE: true,
  WIDTH: '350px',
};

const { PLACEMENT, CLOSABLE, WIDTH } = DRAWER_PROPS;

function Drawer({ width, title, closable, placement, children }) {
  const isDrawerOpen = useReactiveVar(isDrawerOpenVar);

  const handleDrawerClose = useCallback(() => {
    isDrawerOpenVar(null);
    selectedListItemVar(0);
  }, []);

  return (
    <AntdDrawer
      closable={closable}
      onClose={handleDrawerClose}
      placement={placement}
      title={title}
      visible={isDrawerOpen}
      width={width}
    >
      {children}
    </AntdDrawer>
  );
}

Drawer.propTypes = {
  children: node.isRequired,
  closable: bool,
  placement: string,
  title: string.isRequired,
  width: string,
};

Drawer.defaultProps = {
  closable: CLOSABLE,
  placement: PLACEMENT,
  width: WIDTH,
};

export default Drawer;
