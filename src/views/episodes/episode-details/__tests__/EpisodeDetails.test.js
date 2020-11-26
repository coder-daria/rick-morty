import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import {
  EPISODE_DETAILS_MOCKED_DATA,
  EPISODE_NOT_FORMATED_MOCKED_DETAILS,
} from '../../__mocks__/episode-mock-data';

import EpisodeDetails from '../EpisodeDetails';

const setup = () =>
  shallow(
    <EpisodeDetails
      episode={{
        ...EPISODE_DETAILS_MOCKED_DATA,
        ...EPISODE_NOT_FORMATED_MOCKED_DETAILS,
      }}
    />,
  );

describe('<EpisodeDetails />', () => {
  it('should match the snapshot', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
