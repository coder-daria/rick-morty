import { PAGE_INFO } from '../../../components/page-layout/__mocks__/table-data';

const EPISODE_TABLE_MOCKED_DATA = {
  characters: [{ name: 'Tom' }],
  episode: '0E12',
  id: 1,
  name: 'Sunny day',
};

export const EPISODES_MOCKED_DATA = {
  episodes: {
    results: [EPISODE_TABLE_MOCKED_DATA],
    info: PAGE_INFO,
  },
};
