import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Drawer from '../Drawer';

const setup = () => {
  const props = {
    title: 'Drawer title',
    children: <div>Drawer content</div>,
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<Drawer {...props} />);
};

describe('<Drawer />', () => {
  it('should match the snapshot', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
