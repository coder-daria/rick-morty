import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { LOCATION_DETAILS_MOCKED_DATA } from '../../__mocks__/location-mock-data';

import LocationDetails from '../LocationDetails';

const setup = () =>
  shallow(<LocationDetails location={LOCATION_DETAILS_MOCKED_DATA} />);

describe('<LocationDetails />', () => {
  it('should match the snapshot', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
