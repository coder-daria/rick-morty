import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { TABLE_DATA } from '../__mocks__/table-data';

import PageLayout from '../PageLayout';

const setup = () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<PageLayout {...TABLE_DATA} />);
};

describe('<PageLayout />', () => {
  it('should match the snapshot', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
