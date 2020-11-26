import React from 'react';
import { Empty } from 'antd';

import { ReactComponent as ErrorIcon } from '../../assets/error.svg';

import { Wrapper } from './Error.styles';

const ERROR_MESSAGE = 'Sorry, something went wrong';

function Error() {
  return (
    <Wrapper>
      <Empty description={ERROR_MESSAGE} image={<ErrorIcon />} />
    </Wrapper>
  );
}

export default Error;
