import React, { useCallback } from 'react';
import { bool, func, node, string } from 'prop-types';
import { Drawer as AntdDrawer } from 'antd';

import { selectedListItemVar } from '../../apollo/cache';

const DRAWER_PROPS = {
  CLOSABLE: true,
  PLACEMENT: 'right',
  WIDTH: '350px',
};

const { PLACEMENT, CLOSABLE, WIDTH } = DRAWER_PROPS;

function Drawer({
  children,
  closable,
  isDrawerOpen,
  onClose,
  placement,
  title,
  width,
}) {
  const handleDrawerClose = useCallback(() => {
    onClose();
    selectedListItemVar(0);
  }, [onClose]);

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
  isDrawerOpen: bool.isRequired,
  onClose: func.isRequired,
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
