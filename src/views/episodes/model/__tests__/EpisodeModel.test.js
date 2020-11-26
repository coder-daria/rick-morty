import {
  EPISODE_DETAILS_MOCKED_DATA,
  EPISODE_FORMATED_MOCKED_DETAILS,
  EPISODE_NOT_FORMATED_MOCKED_DETAILS,
} from '../../__mocks__/episode-mock-data';

import getEpisodeData from '../EpisodeModel';

describe('EpisodeModel', () => {
  it('should return episode data', () => {
    const result = getEpisodeData({
      ...EPISODE_DETAILS_MOCKED_DATA,
      ...EPISODE_NOT_FORMATED_MOCKED_DETAILS,
    });

    expect(result).toMatchSnapshot({
      ...EPISODE_DETAILS_MOCKED_DATA,
      ...EPISODE_FORMATED_MOCKED_DETAILS,
    });
  });
});
