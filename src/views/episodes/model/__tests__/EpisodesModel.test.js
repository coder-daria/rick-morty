import { EPISODES_MOCKED_DATA } from '../../__mocks__/episodes-mock-data';
import getEpisodesData from '../EpisodesModel';

const {
  episodes: { results, info },
} = EPISODES_MOCKED_DATA;

const [FIRST_CHARACTER] = results;

describe('CharactersModel', () => {
  it('should return episodes data', () => {
    const result = getEpisodesData(EPISODES_MOCKED_DATA, jest.fn());

    expect(result).toMatchSnapshot({
      episodes: [
        {
          ...FIRST_CHARACTER,
          characters: FIRST_CHARACTER.characters.length,
        },
      ],
      pageInfo: info,
    });
  });
});
