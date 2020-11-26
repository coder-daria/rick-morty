import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Error from '../Error';

const setup = () => shallow(<Error />);

describe('<Error />', () => {
  it('should match the snapshot', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
