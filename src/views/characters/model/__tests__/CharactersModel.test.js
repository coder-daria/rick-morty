import getCharactersData from '../CharactersModel';

import { CHARACTERS_MOCKED_DATA } from '../../__mocks__/characters-mock-data';
import { CHARACTER_FORMATED_MOCKED_DETAILS } from '../../__mocks__/character-mock-data';

const {
  characters: { results, info },
} = CHARACTERS_MOCKED_DATA;

const [FIRST_CHARACTER] = results;

describe('CharactersModel', () => {
  it('should return characters data', () => {
    const result = getCharactersData(CHARACTERS_MOCKED_DATA, jest.fn());

    expect(result).toMatchSnapshot({
      characters: [
        {
          ...FIRST_CHARACTER,
          ...CHARACTER_FORMATED_MOCKED_DETAILS,
        },
      ],
      pageInfo: info,
    });
  });
});
